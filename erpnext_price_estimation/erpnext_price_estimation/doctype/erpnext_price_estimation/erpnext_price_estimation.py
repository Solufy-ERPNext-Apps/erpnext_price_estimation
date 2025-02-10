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


# def copy_child_table_data(source_doctype, source_docname, target_doctype, target_docname):
#     source_doc = frappe.db.get_values("Estimation Detail", self.name)

#     target_doc = frappe.get_doc("ERPNext Price Estimation",self.name)

#     # Ensure that both have child tables
#     if not source_doc.get("master_document") or not target_doc.get("master_document"):
#         frappe.throw("Missing child table in one of the documents")

#     # Append each child row from the source to the target
#     for row in source_doc.master_document:
#         target_doc.append("master_document", {
#             "document": row.document,
#         })

#     target_doc.save()
#     frappe.db.commit()
#     frappe.msgprint("Child table data copied successfully!")


