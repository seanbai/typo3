/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: NL
 */
jQuery.extend(jQuery.validator.messages, {
        required: "这是一个必填字段。",
        remote: "检查这个字段。",
        email: "在此输入一个有效的电子邮件地址。",
        url: "在此输入一个有效的网址! （http：// ...）",
        date: "在此输入有效日期。",
        dateNL: "在此输入有效日期。",
        zipcodeNL: "邮政编码无效。",
        dateISO: "在此处输入有效日期（ISO格式）.",
        number: "在此输入一个有效的号码。",
        digits: "在此输入数字。",
        creditcard: "在此输入有效的信用卡号码。",
        equalTo: "在这里输入相同的值。",
        accept: "输入具有有效扩展名的值。",
        maxlength: jQuery.validator.format("Vul hier maximaal {0} tekens in."),
        minlength: jQuery.validator.format("Vul hier minimaal {0} tekens in."),
        rangelength: jQuery.validator.format("Vul hier een waarde in van minimaal {0} en maximaal {1} tekens."),
        range: jQuery.validator.format("Vul hier een waarde in van minimaal {0} en maximaal {1}."),
        max: jQuery.validator.format("Vul hier een waarde in kleiner dan of gelijk aan {0}."),
        min: jQuery.validator.format("Vul hier een waarde in groter dan of gelijk aan {0}.")
});

$.validator.addMethod("zipcodeNL", function(value, element, params) {
	return this.optional(element) || /^\d{4} ?[a-z]{2}$/i(value);
}, "Ongeldige postcode.");
