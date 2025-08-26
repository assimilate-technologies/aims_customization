import frappe

def execute():
    # Make Lead doctype submittable
    frappe.db.set_value("DocType", "Lead", "is_submittable", 1)
    frappe.clear_cache(doctype="Lead")
