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

// frappe.ui.form.on('Lead', {
//     onload: function(frm) {
//         if (!frm.doc.__islocal) {
//             frappe.call({
//                 method: "frappe.client.get_list",
//                 args: {
//                     doctype: "Pre Feasibility",
//                     filters: { lead: frm.doc.name },
//                     limit: 1
//                 },
//                 callback: function(r) {
//                     if (r.message.length === 0) {
//                         frm.set_df_property("pre_feasibility_message", "options",
//                             `<div style="color:red; font-weight:bold; padding:8px;">
//                                 Please create Pre Feasibility for this Lead.
//                             </div>`);
//                     } else {
//                         frm.set_df_property("pre_feasibility_message", "options", "");
//                     }
//                 }
//             });
//         }
//     }
// });
