// Copyright (c) 2016, Tridots Tech and contributors
// For license information, please see license.txt
	frappe.query_reports["Yearly Sales Report"] = {
	"filters": [
		{
			"fieldname":"year",
			"fieldtype":"Select",
			"label":__("Year"),
			"reqd": 1
		},
		
	],
	"onload": function() {
		var business_filter = frappe.query_report.get_filter('business');
		if(frappe.session.user != 'Administrator' && has_common(['Vendor'], frappe.user_roles)){
			business_filter.df.hidden = 1;
			business_filter.refresh();
		}
		return frappe.call({
			method: "ecommerce_business_store_singlevendor.ecommerce_business_store_singlevendor.report.total_orders.total_orders.get_years",
			callback: function(r) {
				var year_filter = frappe.query_report.get_filter('year');
				year_filter.df.options = r.message;
				year_filter.df.default = r.message.split("\n")[0];
				year_filter.refresh();
				year_filter.set_input(year_filter.df.default);
			}
		});		
	}
};
