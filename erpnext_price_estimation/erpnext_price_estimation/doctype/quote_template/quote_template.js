// Copyright (c) 2025, frappe solutions and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Quote Template", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Quote Template', {
    validate: function (frm) {
        handle_checkbox_toggle(frm);
    },
    refresh: function (frm) {
        handle_checkbox_toggle(frm);
    },
    introduction: function (frm) {
        handle_checkbox_toggle(frm);
    },
    executive_summary: function (frm) {
        handle_checkbox_toggle(frm);
    },
    erp_support_service_benifits: function (frm) {
        handle_checkbox_toggle(frm);
    },
    cloud_server_benifits: function (frm) {
        handle_checkbox_toggle(frm);
    },
    module_implement: function (frm) {
        handle_checkbox_toggle(frm);
    },
    client_needs: function (frm) {
        handle_checkbox_toggle(frm);
    },
    customer_prerequisites: function (frm) {
        handle_checkbox_toggle(frm);
    },
    delevery_terms: function (frm) {
        handle_checkbox_toggle(frm);
    },
    general_terms: function (frm) {
        handle_checkbox_toggle(frm);
    },
    agreement: function (frm) {
        handle_checkbox_toggle(frm);
    },
    core_values: function (frm) {
        handle_checkbox_toggle(frm);
    },

});


function handle_checkbox_toggle(frm) {
    const checkboxes = [
        'introduction',
        'executive_summary',
        'erp_support_service_benifits',
        'cloud_server_benifits',
        'module_implement',
        'client_needs',
        'customer_prerequisites',
        'delevery_terms',
        'general_terms',
        'agreement',
        'core_values'
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
