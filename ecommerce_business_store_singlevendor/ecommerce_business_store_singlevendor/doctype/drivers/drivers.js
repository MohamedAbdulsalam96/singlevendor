// Copyright (c) 2018, info@valiantsystems.com and contributors
// For license information, please see license.txt

frappe.require("assets/ecommerce_business_store_singlevendor/css/toggle-slider.css");

frappe.ui.form.on('Drivers', {
    refresh: function(frm) {
        frm.events.update_shipping_provider(frm)
	},
    update_shipping_provider(frm){
        if(frm.doc.__islocal){
            if(has_common(frappe.user_roles, ['Shipping Manager'])){
                frappe.call({
                    method: 'ecommerce_business_store_singlevendor.ecommerce_business_store_singlevendor.doctype.drivers.drivers.get_shipping_manager',
                    args: {},
                    async:false,
                    callback: function(d) {
                       if(d.message){
                               frm.set_value('shipping_provider', d.message);
                       }
                    }
                })
            }
        }
    }
});