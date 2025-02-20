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


# import frappe

# def before_save(doc, method):
#     quote_template = frappe.get_doc("Quote Template","executive_summary")
    
#     if quote_template.terms:
#         # Context can include necessary values (e.g., from doc or related documents)
#         context = {"doc": doc}
        
#         try:
#             rendered_text = frappe.render_template(quote_template.terms)
#             doc.executive_summary = rendered_text
#         except Exception as e:
#             frappe.msgprint(f"Error rendering Jinja template: {str(e)}", alert=True)

# import frappe

# def before_save(doc, method):
#     if not doc.executive_summary_template:  # Ensure a Quote Template is linked
#         return

#     try:
#         # Fetch the linked Quote Template
#         quote_template = frappe.get_doc("Quote Template", doc.executive_summary_template)
        
#         if quote_template.terms:
#             # Pass all fields of ERPNext Price Estimation as context
#             context = doc.as_dict()

#             # Render the Jinja template with the context
#             rendered_text = frappe.render_template(quote_template.terms, context)

#             # Store rendered output in executive_summary
#             doc.executive_summary = rendered_text
#     except Exception as e:
#         frappe.msgprint(f"Error rendering Jinja template: {str(e)}", alert=True)


# import frappe

# @frappe.whitelist()
# def render_executive_summary(doc):
#     doc = frappe.parse_json(doc)  # Convert JSON to Python dict
    
#     if not doc.get("executive_summary_template"):
#         return ""

#     try:
#         # Fetch the Quote Template
#         quote_template = frappe.get_doc("Quote Template", doc["executive_summary_template"])

#         if quote_template.terms:
#             # Render Jinja template with the document fields
#             context = doc
#             rendered_text = frappe.render_template(quote_template.terms, context)
#             return rendered_text
#     except Exception as e:
#         frappe.log_error(f"Error rendering Jinja template: {str(e)}", "Jinja Rendering Error")
#         return f"Error rendering Jinja template: {str(e)}"




import frappe

@frappe.whitelist()
def render_template(template_name, doc):
    """
    Fetches the Quote Template and renders it using Jinja
    """
    if isinstance(doc, str):  # Ensure doc is a dictionary
        import json
        doc = json.loads(doc)
    
    # Fetch template from Quote Template doctype
    template_doc = frappe.get_doc("Quote Template", template_name)
    
    if not template_doc.terms:
        return ""

    # Render Jinja template with provided document context
    rendered_text = frappe.render_template(template_doc.terms, doc)
    
    return rendered_text
