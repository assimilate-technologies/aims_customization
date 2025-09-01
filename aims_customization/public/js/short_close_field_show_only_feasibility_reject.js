frappe.ui.form.on("Lead", {
    refresh: function(frm) {
        // Hide field initially
        frm.set_df_property("short_close_reason", "hidden", 1);
 
        // Check linked Pre Feasibility
        if (frm.doc.name) {
            frappe.call({
                method: "frappe.client.get_list",
                args: {
                    doctype: "Pre Feasibility",
                    filters: { lead: frm.doc.name },
                    fields: ["workflow_state"]
                },
                callback: function(r) {
                    if (r.message && r.message.some(pf => pf.workflow_state === "Rejected")) {
                        frm.set_df_property("short_close_reason", "hidden", 0);
                    }
                }
            });
        }
    }
});