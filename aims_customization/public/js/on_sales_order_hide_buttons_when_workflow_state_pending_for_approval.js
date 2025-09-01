frappe.ui.form.on('Sales Order', {
    refresh: function(frm) {
        // First show all buttons
        //frm.page.clear_actions_menu();

        // Rebuild default buttons
       // frm.page.set_primary_action(__('Save'), () => frm.save());

        // Hide buttons only if workflow_state = "Pending for approval"
        if (frm.doc.workflow_state === "Pending for approval") {
            // Hide "Create"
            frm.page.hide_menu_item('Create');
            // Hide "Status"
            frm.page.hide_menu_item('Status');
            // Hide "Update Items"
            frm.page.hide_menu_item('Update Items');
        }
    }
});
