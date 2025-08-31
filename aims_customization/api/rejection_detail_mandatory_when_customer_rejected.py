import frappe

def validate_rejection_details(doc, method):
    if doc.workflow_state == "Quotation Rejected" and not doc.rejection_details:
        frappe.throw("Rejection Details is mandatory before customer rejection")
