// Copyright (c) 2025, frappe solutions and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Service Coverage Template", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Service Coverage Template', {
    validate: function (frm) {
        handle_checkbox_toggle(frm);
    },
    refresh: function (frm) {
        handle_checkbox_toggle(frm);
    },
    defination: function (frm) {
        handle_checkbox_toggle(frm);
    },
    response_and_resolution: function (frm) {
        handle_checkbox_toggle(frm);
    },
});

function handle_checkbox_toggle(frm) {
    const checkboxes = [
        'defination',
        'response_and_resolution'
    ];

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
