import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_field

def execute():
    # Define the custom field properties
    field = {
        "fieldname": "signature",
        "label": "Signature",
        "fieldtype": "Image",
        "insert_after": "approved_by",  # adjust this to your preferred position
    }

    # Create field on Pre Feasibility if it doesn't exist
    create_custom_field("Pre Feasibility", field, ignore_validate=True)
