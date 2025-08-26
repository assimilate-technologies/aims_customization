import frappe

def execute():
    # Check if Pre Feasibility already linked with Lead
    exists = frappe.db.exists(
        "DocType Link",
        {"parent": "Lead", "link_doctype": "Pre Feasibility"}
    )
    if not exists:
        # Insert new linked document
        frappe.get_doc({
            "doctype": "DocType Link",
            "parent": "Lead",
            "parentfield": "links",
            "parenttype": "DocType",
            "link_doctype": "Pre Feasibility",
            "link_fieldname": "lead"   # assuming Pre Feasibility has a field 'lead'
        }).insert(ignore_permissions=True)
        frappe.db.commit()
        frappe.log("✅ Linked Pre Feasibility with Lead successfully")
    else:
        frappe.log("ℹ️ Pre Feasibility already linked with Lead")
