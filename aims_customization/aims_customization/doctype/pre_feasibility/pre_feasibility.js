// Copyright (c) 2025, Assimilate Technologies and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Pre Feasibility", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Pre Feasibility', {
    after_save: function(frm) {
        if (frm.doc.name && frm.doc.entry_no !== frm.doc.name) {
            frm.set_value('doc_no', frm.doc.name);
            frm.save(); // save again to update entry_no
        }
    }
});


frappe.ui.form.on("Pre Feasibility", {
    feasibility_template: function (frm) {
        if (frm.doc.feasibility_template) {
            frappe.call({
                method: "frappe.client.get",
                args: {
                    doctype: "Checklist Template",
                    name: frm.doc.feasibility_template
                },
                callback: function (r) {
                    if (r.message) {
                        // Clear existing rows
                        frm.clear_table("table_zdyu");

                        // Fetch child table "checklist" from Checklist Template
                        (r.message.checklist || []).forEach(row => {
                            let child = frm.add_child("table_zdyu");
                            child.checklist = row.checklist;   // field name in child
                            child.feasibility = row.feasibility; // if present
                            child.comment = row.comment;         // if present
                        });

                        frm.refresh_field("table_zdyu");
                    }
                }
            });
        } else {
            frm.clear_table("table_zdyu");
            frm.refresh_field("table_zdyu");
        }
    }
});
