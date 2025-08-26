frappe.ui.form.on("Lead", {
    refresh: function(frm) {
        // Hide "Pre Feasibility" button if workflow_state is "Submit" or "Closed"
        if (["Submit", "Closed"].includes(frm.doc.workflow_state)) {
            frm.remove_custom_button("Pre Feasibility");
        }
    }
});
