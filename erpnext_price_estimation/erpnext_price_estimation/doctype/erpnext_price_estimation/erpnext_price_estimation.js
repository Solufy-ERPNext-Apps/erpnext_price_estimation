function add_efforts(frm, table, module) {
    frappe.call({
        method: 'erpnext_price_estimation.erpnext_price_estimation.doctype.erpnext_price_estimation.erpnext_price_estimation.get_process_documents',
        args: {
            module: module
        },
        callback: function(r) {
            let current_list = [];
            $.each(frm.doc[table] || [], function(i, row) {
                current_list.push(row.estimation_document);
            });
            $.each(r.message || [], function(i, row) {
                if (!current_list.includes(row.document_name)) {
                    let item = frappe.model.add_child(frm.doc, 'Estimation Detail', table);
                    frappe.model.set_value(item.doctype, item.name, 'estimation_document', row.document_name);
                    frappe.model.set_value(item.doctype, item.name, 'estimation_process', row.process_name);
                    frappe.model.set_value(item.doctype, item.name, 'configuration_efforts', row.configuration_effort);
                    frappe.model.set_value(item.doctype, item.name, 'other_efforts', row.other_effort);
                }
            });
            frm.refresh_field(table);
        }
    });
}


function add_master_documents(frm, table, module) {
    frappe.call({
        method: 'erpnext_price_estimation.erpnext_price_estimation.doctype.erpnext_price_estimation.erpnext_price_estimation.get_master_documents',
        args: {
            module: module
        },
        callback: function(r) {
            let current_list = [];
            $.each(frm.doc[table] || [], function(i, row) {
                current_list.push(row.document);  
            });
            $.each(r.message || [], function(i, row) {
                if (!current_list.includes(row.document)) { 
                    let item = frappe.model.add_child(frm.doc, 'Master Document', table);
                    frappe.model.set_value(item.doctype, item.name, 'document', row.document);
                }
            });
            frm.refresh_field(table);
        }
    });
}



function add_report_documents(frm, table, module) {
    frappe.call({
        method: 'erpnext_price_estimation.erpnext_price_estimation.doctype.erpnext_price_estimation.erpnext_price_estimation.get_report_documents',
        args: {
            module: module
        },
        callback: function(r) {
            let current_list = [];
            $.each(frm.doc[table] || [], function(i, row) {
                current_list.push(row.document);  
            });
            $.each(r.message || [], function(i, row) {
                if (!current_list.includes(row.document)) { 
                    let item = frappe.model.add_child(frm.doc, 'Report Document', table);
                    frappe.model.set_value(item.doctype, item.name, 'document', row.document);
                }
            });
            frm.refresh_field(table);
        }
    });
}


frappe.ui.form.on('ERPNext Price Estimation', {
    accounts: function(frm) {
        if (frm.doc.accounts) {
            add_efforts(frm, 'accounts_details', 'Accounts');
            add_master_documents(frm, 'accounts_master_document', 'Accounts');
            add_report_documents(frm, 'accounts_report_document', 'Accounts');
        } else {
            frm.clear_table("accounts_details");
            frm.refresh_field("accounts_details");
            frm.events.calculate_totals(frm);
        }
    },
    buying: function(frm) {
        if (frm.doc.buying) {
            add_efforts(frm, 'buying_details', 'Buying');
            add_master_documents(frm, 'buying_master_document', 'buying');
            add_report_documents(frm, 'buying_report_document', 'buying');
        } else {
            frm.clear_table("buying_details");
            frm.refresh_field("buying_details");
            frm.events.calculate_totals(frm);
        }
    },
    stock: function(frm) {
        if (frm.doc.stock) {
            add_efforts(frm, 'stock_details', 'Stock');
            add_master_documents(frm, 'stock_master_document', 'Stock');
            add_report_documents(frm, 'stock_report_document', 'Stock');
        } else {
            frm.clear_table("stock_details");
            frm.refresh_field("stock_details");
            frm.events.calculate_totals(frm);
        }
    },
    crm: function(frm) {
        if (frm.doc.crm) {
            add_efforts(frm, 'crm_details', 'CRM');
            add_master_documents(frm, 'crm_master_document', 'CRM');
            add_report_documents(frm, 'crm_report_document', 'CRM');
        } else {
            frm.clear_table("crm_details");
            frm.refresh_field("crm_details");
            frm.events.calculate_totals(frm);
        }
    },
    payroll: function(frm) {
        if (frm.doc.payroll) {
            add_efforts(frm, 'payroll_details', 'Payroll');
            add_master_documents(frm, 'payroll_master_document', 'Payroll');
            add_report_documents(frm, 'payroll_report_document', 'Payroll');
        } else {
            frm.clear_table("payroll_details");
            frm.refresh_field("payroll_details");
            frm.events.calculate_totals(frm);
        }
    },
    selling: function(frm) {
        if (frm.doc.selling) {
            add_efforts(frm, 'selling_details', 'Selling');
            add_master_documents(frm, 'selling_master_document', 'Selling');
            add_report_documents(frm, 'selling_report_document', 'Selling');
        } else {
            frm.clear_table("selling_details");
            frm.refresh_field("selling_details");
            frm.events.calculate_totals(frm);
        }
    },
    hrms: function(frm) {
        if (frm.doc.hrms) {
            add_efforts(frm, 'hrms_details', 'HR');
            add_master_documents(frm, 'hr_master_document', 'HR');
            add_report_documents(frm, 'hr_report_document', 'HR');
        } else {
            frm.clear_table("hrms_details");
            frm.refresh_field("hrms_details");
            frm.events.calculate_totals(frm);
        }
    },
    projects: function(frm) {
        if (frm.doc.projects) {
            add_efforts(frm, 'projects_details', 'Projects');
            add_master_documents(frm, 'projects_master_document', 'Projects');
            add_report_documents(frm, 'projects_report_document', 'Projects');
        } else {
            frm.clear_table("projects_details");
            frm.refresh_field("projects_details");
            frm.events.calculate_totals(frm);
        }
    },
    manufacturing: function(frm) {
        if (frm.doc.manufacturing) {
            add_efforts(frm, 'manufacturing_details', 'Manufacturing');
            add_master_documents(frm, 'manufacturing_master_document', 'Manufacturing');
            add_report_documents(frm, 'manufacturing_report_document', 'Manufacturing');
        } else {
            frm.clear_table("manufacturing_details");
            frm.refresh_field("manufacturing_details");
            frm.events.calculate_totals(frm);
        }
    },
    setup: function(frm) {
        if (frm.doc.setup) {
            add_efforts(frm, 'setup_details', 'Setup');
            add_master_documents(frm, 'setup_master_document', 'Setup');
            add_report_documents(frm, 'setup_report_document', 'Setup');
        } else {
            frm.clear_table("setup_details");
            frm.refresh_field("setup_details");
            frm.events.calculate_totals(frm);
        }
    },
    healthcare: function(frm) {
        if (frm.doc.healthcare) {
            add_efforts(frm, 'healthcare_details', 'Healthcare');
            add_master_documents(frm, 'healthcare_master_document', 'Healthcare');
            add_report_documents(frm, 'healthcare_report_document', 'Healthcare');
        } else {
            frm.clear_table("healthcare_details");
            frm.refresh_field("healthcare_details");
            frm.events.calculate_totals(frm);
        }
    },
    education: function(frm) {
        if (frm.doc.education) {
            add_efforts(frm, 'education_details', 'Education');
            add_master_documents(frm, 'education_master_document', 'Education');
            add_report_documents(frm, 'education_report_document', 'Education');
        } else {
            frm.clear_table("education_details");
            frm.refresh_field("education_details");
            frm.events.calculate_totals(frm);
        }
    },
    customization: function(frm) {
        if (frm.doc.customization) {
            add_efforts(frm, 'customizations_details', 'Customization');
            add_master_documents(frm, 'customization_master_document', 'Customization');
            add_report_documents(frm, 'customization_report_document', 'Customization');
        } else {
            frm.clear_table("customizations_details");
            frm.refresh_field("customizations_details");
            frm.events.calculate_totals(frm);
        }
    },
    validate: function(frm) {
        frm.events.calculate_totals(frm);
    },
    calculate_totals: function(frm) {
        frm.doc.total_config_effort = 0;
        frm.doc.total_other_effort = 0;
        frm.doc.total_efforts = 0;
        frm.doc.total_customization_effort = 0;

        let module_tables = [
            "accounts_details", "buying_details", "stock_details", "crm_details", "payroll_details", "selling_details", "hrms_details", "projects_details", "manufacturing_details", "setup_details", "customization_details", "healthcare_details", "education_details",
        ];

        $.each(frm.doc.customization_estimations || [], function(i, d) {
            frm.doc.total_customization_effort += flt(d.estimated_time);
        });

        $.each(module_tables || [], function(i, module) {
            $.each(frm.doc[module] || [], function(i, row) {
                frm.doc.total_config_effort += flt(row.configuration_efforts);
                frm.doc.total_other_effort += flt(row.other_efforts);
            });
        });

        frm.set_query("opportunity_from", function () {
			return {
				filters: {
					name: ["in", ["Customer", "Lead", "Prospect"]],
				},
			};
		});

        frm.doc.total_efforts = frm.doc.total_config_effort + frm.doc.total_other_effort + frm.doc.total_customization_effort;
        frm.refresh_field('total_config_effort');
        frm.refresh_field('total_other_effort');
        frm.refresh_field('total_efforts');
        frm.refresh_field('total_customization_effort');
    }
});

estimation_details_object = {
    configuration_efforts: function(frm) {
        frm.events.calculate_totals(frm);
    },
    other_efforts: function(frm) {
        frm.events.calculate_totals(frm);
    }
}

const modules = ["accounts_details", "buying_details", "stock_details", "crm_details", "payroll_details", "selling_details", "hrms_details", "projects_details", "manufacturing_details", "setup_details", "healthcare_details", "education_details"];

modules.forEach((module) => {
    estimation_details_object[module + "_remove"] = function(frm, cdt, cdn) {
        frm.events.calculate_totals(frm);
    }
});

frappe.ui.form.on('Estimation Detail', estimation_details_object);

frappe.ui.form.on('ERPNext Price Estimation', {
    total_hourly_rate: function(frm) {
        update_total_amount(frm);
    },
    total_efforts: function(frm) {
        update_total_amount(frm);
    }
});

function update_total_amount(frm) {
    let total = frm.doc.total_hourly_rate * frm.doc.total_efforts;
    frm.set_value('total_amount', total);
    frm.refresh_field('total_amount');
}

frappe.ui.form.on('ERPNext Price Estimation', {
    validity: function(frm) {
        update_amount(frm);
    },
    rate: function(frm) {
        update_amount(frm);
    }
});

function update_amount(frm) {
    let total = frm.doc.validity * frm.doc.rate;
    frm.set_value('amount', total);
    frm.refresh_field('amount');
}

frappe.ui.form.on('ERPNext Price Estimation', {
    amc_validity: function(frm) {
        update_amc_amount(frm);
    },
    amc_rate: function(frm) {
        update_amc_amount(frm);
    }
});

function update_amc_amount(frm) {
    let total = frm.doc.amc_validity * frm.doc.amc_rate;
    frm.set_value('amc_amount', total);
    frm.refresh_field('amc_amount');
}


frappe.ui.form.on('ERPNext Price Estimation', {
    onload: function (frm) {
        setTemplateQuery(frm, 'introduction_template', { 'introduction': 1 });
        setTemplateQuery(frm, 'executive_summary_template', { 'executive_summary': 1 });
        setTemplateQuery(frm, 'module_implementation_template', { 'module_implement': 1 });
        setTemplateQuery(frm, 'client_need_template', { 'client_needs': 1 });
        setTemplateQuery(frm, 'customer_prerequisites_template', { 'customer_prerequisites': 1 })
        setTemplateQuery(frm, 'delivery_terms_template', { 'delevery_terms': 1 })
        setTemplateQuery(frm, 'general_terms_template', { 'general_terms': 1 });
        setTemplateQuery(frm, 'agreement_template', { 'agreement': 1 });
        setTemplateQuery(frm, 'core_values_template', { 'core_values': 1 })
        setTemplateQuery(frm, 'cloud_server_benifits_template', { 'cloud_server_benifits': 1 })
        
    },

    introduction_template: function (frm) {
        setTemplateValue(frm, 'introduction_template', 'introduction');
    },

    executive_summary_template: function (frm) {
        setTemplateValue(frm, 'executive_summary_template', 'executive_summary');
    },

    module_implementation_template: function (frm) {
        setTemplateValue(frm, 'module_implementation_template', 'module_implementation_and_objectives');
    },

    client_need_template: function (frm) {
        setTemplateValue(frm, 'client_need_template', 'client_need');
    },

    general_terms_template: function (frm) {
        setTemplateValue(frm, 'general_terms_template', 'general_terms');
    },

    agreement_template: function (frm) {
        setTemplateValue(frm, 'agreement_template', 'agreement');
    },

    core_values_template: function (frm) {
        setTemplateValue(frm, 'core_values_template', 'core_values');
    },

    cloud_server_benifits_template: function (frm) {
        setTemplateValue(frm, 'cloud_server_benifits_template', 'cloud_server_benifits');
    }

});

function setTemplateQuery(frm, fieldname, filters) {
    frm.set_query(fieldname, function () {
        return { filters: filters };
    });
}

function setTemplateValue(frm, linkField, targetField) {
    if (frm.doc[linkField]) {
        frappe.call({
            method: 'frappe.client.get',
            args: {
                doctype: 'Quote Template',
                name: frm.doc[linkField]
            },
            callback: function (response) {
                if (response.message) {
                    frm.set_value(targetField, response.message.terms);
                }
            }
        });
    }
}

frappe.ui.form.on('ERPNext Price Estimation', {
    validate: function (frm) {
        calculate_total_implementation_charges(frm);
    },

    'implementation_charges_add': function (frm) {
        calculate_total_implementation_charges(frm);
    },
    'implementation_charges_remove': function (frm) {
        calculate_total_implementation_charges(frm);
    }
});

function calculate_total_implementation_charges(frm) {
    let total = 0;

    frm.doc.implementation_charges.forEach(row => {
        total += flt(row.amount);
    });

    frm.set_value('total_implementation_charges', total);
};