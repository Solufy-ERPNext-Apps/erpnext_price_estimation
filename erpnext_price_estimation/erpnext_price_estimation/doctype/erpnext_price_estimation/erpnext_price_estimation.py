# Copyright (c) 2024, frappe solutions and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ERPNextPriceEstimation(Document):
    pass

@frappe.whitelist()
def get_process_documents(process=None, module=None):
    filters = {}
    if process:
        filters['process'] = process
    if module:
        filters['module'] = module

    process_details = frappe.get_all(
        'Estimation Document', 
        fields=['document_name', 'process_name', 'configuration_effort', 'other_effort'], 
        filters=filters
    )

    return process_details




@frappe.whitelist()
def get_master_documents(process=None, module=None):
    filters = {}
    if process:
        filters['process'] = process
    if module:
        filters['module'] = module

    
    estimation_docs = frappe.get_all('Estimation Document', filters=filters, fields=['name'])

    master_documents = []
    for doc in estimation_docs:
        child_docs = frappe.get_all('Master Document',  
                                    filters={'parent': doc.name}, 
                                    fields=['*'])
        master_documents.extend(child_docs)

    return master_documents


@frappe.whitelist()
def get_report_documents(process=None, module=None):
    filters = {}
    if process:
        filters['process'] = process
    if module:
        filters['module'] = module


    estimation_docs = frappe.get_all('Estimation Document', filters=filters, fields=['name'])

    report_documents = []
    for doc in estimation_docs:
        child_docs = frappe.get_all('Report Document',  
                                    filters={'parent': doc.name}, 
                                    fields=['*'])  
        report_documents.extend(child_docs)

    return report_documents
