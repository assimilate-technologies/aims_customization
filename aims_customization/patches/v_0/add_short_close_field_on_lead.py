import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_field

def execute():
    field = {
        "fieldname": "short_close_reason",
        "label": "Short Close Reason",
        "fieldtype": "Small Text",
        "insert_after": "status",  # You can change position as needed
    }

    create_custom_field("Lead", field)
