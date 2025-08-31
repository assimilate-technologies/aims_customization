import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_field

def execute():
    field = {
        "fieldname": "rejection_details",
        "label": "Rejection Details",
        "fieldtype": "Small Text",
        "insert_after": "customer_approval_email",  # You can change position as needed
    }

    create_custom_field("Quotation", field)
