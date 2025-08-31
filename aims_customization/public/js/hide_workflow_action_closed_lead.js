frappe.ui.form.on('Lead', {
    refresh: function(frm) {
        setTimeout(() => {
            // Loop through actions and remove "Closed Lead"
            frm.page.actions.find('a').each(function() {
                if ($(this).text().trim() === "Closed Lead") {
                    $(this).parent().remove();
                }
            });
        }, 500);
    }
});
 