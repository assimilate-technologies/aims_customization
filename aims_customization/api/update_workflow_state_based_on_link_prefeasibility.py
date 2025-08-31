import frappe

def before_save(doc, method):
    pre_feasibilities = frappe.get_all(
        "Pre Feasibility",
        filters={"lead": doc.name},
        fields=["workflow_state"]
    )

    if any(pf.workflow_state == "Rejected" for pf in pre_feasibilities):
        if not doc.short_close_reason:
            frappe.throw("Short Close Reason is mandatory when Pre Feasibility is Rejected.")

        if doc.workflow_state != "Closed":
            # Force update workflow_state in DB
            frappe.db.set_value("Lead", doc.name, "workflow_state", "Closed")
            doc.workflow_state = "Closed"