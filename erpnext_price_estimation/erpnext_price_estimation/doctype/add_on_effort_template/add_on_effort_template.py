# Copyright (c) 2025, frappe solutions and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class AddOnEffortTemplate(Document):
	def autoname(self):
		if self.additional_script_reports == True:
			self.name = "Additional Script Reports"
		
		if self.additional_custom_print_formats == True:
			self.name = "additional_custom_print_formats"
		
		if self.additional_custom_workflows == True:
			self.name = "additional_custom_workflows"

		if self.additional_integrations == True:
			self.name = "additional_integrations"

		if self.additional_custom_notifications == True:
			self.name = "additional_custom_notifications"

