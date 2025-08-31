import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_field

def execute():
    """Add 'Customer Approval Email' field in Quotation doctype"""
    field_name = "customer_approval_email"

    if not frappe.db.exists("Custom Field", f"Quotation-{field_name}"):
        create_custom_field(
            "Quotation",
            {
                "fieldname": field_name,
                "label": "Customer Approval Email",
                "fieldtype": "Attach",
                "insert_after": "valid_till",  # adjust placement if needed
            }
        )
        frappe.db.commit()
