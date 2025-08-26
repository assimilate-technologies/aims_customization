frappe.ui.form.on("Pre Feasibility", {
    onload: function(frm) {
        if (!frm.doc.prepared_by) {
            frappe.call({
                method: "frappe.client.get",
                args: {
                    doctype: "User",
                    name: frappe.session.user
                },
                callback: function(r) {
                    if (r.message) {
                        frm.set_value("prepared_by", r.message.full_name);
                    }
                }
            });
        }
    }
});
