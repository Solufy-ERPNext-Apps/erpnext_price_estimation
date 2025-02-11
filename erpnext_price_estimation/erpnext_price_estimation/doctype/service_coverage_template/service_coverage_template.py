# Copyright (c) 2025, frappe solutions and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class ServiceCoverageTemplate(Document):
	def autoname(self):
		if self.defination == True:
			self.name = "defination"

		if self.response_and_resolution == True:
			self.name = "response_and_resolution"

