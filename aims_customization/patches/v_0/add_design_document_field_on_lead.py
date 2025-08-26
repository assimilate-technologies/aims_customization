# file path: your_app/patches/add_design_document_field_on_lead.py

import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_field

def execute():
    """Add 'Design Document Attachment' field in Lead doctype"""
    field_name = "design_document_attachment"

    if not frappe.db.exists("Custom Field", f"Lead-{field_name}"):
        create_custom_field(
            "Lead",
            {
                "fieldname": field_name,
                "label": "Design Document Attachment",
                "fieldtype": "Attach",
                "insert_after": "source",  # adjust placement if needed
            }
        )
        frappe.db.commit()
