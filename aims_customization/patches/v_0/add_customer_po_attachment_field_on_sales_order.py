import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_field

def execute():
    fieldname = "customer_po_attachment"
    doctype = "Sales Order"

    # check if field already exists
    if not frappe.db.exists("Custom Field", {"dt": doctype, "fieldname": fieldname}):
        create_custom_field(doctype, {
            "fieldname": fieldname,
            "label": "Customer PO Attachment",
            "fieldtype": "Attach",
            "reqd": 1,  # make it mandatory
            "insert_after": "delivery_date"  # you can change this to place after any field
        })
        frappe.msgprint("Customer PO Attachment field added in Sales Order")
