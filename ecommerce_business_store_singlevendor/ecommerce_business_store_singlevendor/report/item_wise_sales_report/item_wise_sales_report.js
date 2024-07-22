// Copyright (c) 2016, Tridots Tech and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Item Wise Sales Report"] = {
	"filters": [
		
		{
			"fieldname": "from_date",
			"fieldtype": "Date",
			"label": __("From Date"),
			"default": frappe.datetime.get_today()
		},
		{
			"fieldname":"to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today()
		},
		
	],
	
};
