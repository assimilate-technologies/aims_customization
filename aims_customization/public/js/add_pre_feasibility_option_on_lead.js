frappe.ui.form.on('Lead', {
    refresh: function(frm) {
        if (!frm.is_new()) {
            frm.add_custom_button(__('Pre Feasibility'), function() {
                frappe.new_doc('Pre Feasibility', {
                    lead: frm.doc.name   // link to lead
                });
            });
        }
    }
});
