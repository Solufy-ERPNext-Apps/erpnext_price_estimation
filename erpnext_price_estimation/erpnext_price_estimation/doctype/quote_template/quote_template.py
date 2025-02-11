# Copyright (c) 2025, frappe solutions and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class QuoteTemplate(Document):
	def autoname(self):
		if self.introduction == True:
			self.name = "introduction"

		if self.executive_summary == True:
			self.name = "executive_summary"

		if self.erp_support_service_benifits== True:
			self.name = "erp_support_service_benifits"	

		if self.cloud_server_benifits == True:
			self.name = "cloud_server_benifits"	

		if self.module_implement == True:
			self.name = "module_implement"
		
		if self.client_needs == True:
			self.name = "client_needs"

		if self.customer_prerequisites == True:
			self.name = "customer_prerequisites"	

		if self.delevery_terms == True:
			self.name = "delevery_terms"	

		if self.general_terms == True:
			self.name = "general_terms"

		if self.agreement == True:
			self.name = "agreement"

		if self.core_values == True:
			self.name = "core_values"	
