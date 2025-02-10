// Copyright (c) 2025, frappe solutions and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Add On Effort Template", {
// 	refresh(frm) {

// 	},
// });


frappe.ui.form.on('Add On Effort Template', {
    validate: function (frm) {
        handle_checkbox_toggle(frm);
    },
    refresh: function (frm) {
        handle_checkbox_toggle(frm);
    },
    additional_script_reports: function (frm) {
        handle_checkbox_toggle(frm);
    },
    additional_custom_print_formats: function (frm) {
        handle_checkbox_toggle(frm);
    },
    additional_integrations: function (frm) {
        handle_checkbox_toggle(frm);
    },
    additional_custom_workflows: function (frm) {
        handle_checkbox_toggle(frm);
    },
    additional_custom_notifications: function (frm) {
        handle_checkbox_toggle(frm);
    }
});


function handle_checkbox_toggle(frm) {
    const checkboxes = ['additional_script_reports', 'additional_custom_print_formats', 'additional_integrations','additional_custom_workflows','additional_custom_notifications'];

    const selectedCheckbox = checkboxes.find(fieldname => frm.doc[fieldname]);

    checkboxes.forEach(fieldname => {
        const isSelected = frm.doc[fieldname];
        const df = frm.fields_dict[fieldname].df;

        if (selectedCheckbox) {
            df.read_only = (selectedCheckbox !== fieldname); 
        } else {
            df.read_only = false;
        }
        frm.refresh_field(fieldname);
    });
}
