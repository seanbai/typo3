
function validateCha() {
    var success = true;
    var maxLength = 3000;
    $('form').find("textarea[id='Overige opmerkingen']").each(function () {
        var $veld = $(this);
        var value = $veld.val();
        if (!!value) {
            if (document.getElementById("Overige opmerkingen").value.length > maxLength) {
                success = false;
                showErrorMessage2($veld, "其他评论字段包含太多字符。");
            }
        }
    });
    return success;
}


function validateFileInputs() {
    var success = true;
    $('form').find("input[type='file']").each(function () {

        var $file = $(this);
        var value = $file.val();

        if (!!value) {
            if (!validExtension(value)) {
                success = false;
                showErrorMessage($file, "以格式.doc，.docx，.txt，.rtf或.pdf添加文档！");
            }
        }
    });
    return success;
}

function validatePostcode() {
    var success = true;
    $('form').find("input[id='KAN_POSTCODE']").each(function () {

        var $code = $(this);
        var value = $code.val();

        if (!!value) {
            if (!value.match(/^([1-9]\d{3}\s*[A-z]{2})$/)) {
                success = false;
                showErrorMessage($code, "Ongeldige postcode!");
            }
        }
    });
    return success;
}

function validatePostPhone() {
    var success = true;
    $('form').find("input[id='Telefoonnummer']").each(function () {

        var $code = $(this);
        var value = $code.val();

        if (!!value) {
            if (!value.match(/^([1-9]\d{3}\s*[A-z]{2})$/)) {
                success = false;
                showErrorMessage($code, "Ongeldige Phone");
            }
        }
    });
    return success;
}



function validExtension(value) {
    var exts = ['doc', 'docx', 'txt', 'rtf', 'pdf'];

    // split file name at dot
    var extension = value.split('.').pop();

    // check file type is valid as given in 'exts' array
    if ($.inArray(extension.toLowerCase(), exts) == -1) {
        return false;
    } else {
        return true;
    }
}

function showErrorMessage($element, message) {
    var $tr = $element.closest("div");

    if (!$tr.prev().hasClass("errorMessage")) {
        var $trErrorMessage = $("<div class='errorMessage'><div class='message' /></div>").insertBefore($tr);
    } else {
        var $trErrorMessage = $tr.prev();
    }
    $trErrorMessage.find("div.message").html(message).end().show();
}


function showErrorMessage2($element, message) {
    var $tr = $element.closest("div");

    var $aantal = document.getElementById("Overige opmerkingen").value.length;

    if (!$tr.prev().hasClass("errorMessage")) {
        var $trErrorMessage = $("<div class='errorMessage'><div class='message'/>Het veld Overige opmerkingen bevat teveel karakters. (max. 3000)</div>").insertBefore($tr);
    } else {
        var $trErrorMessage = $tr.prev();
    }
    $trErrorMessage.find("td.message").html(message).end().show();
}

$(function () {

    jQuery.validator.addMethod("dateNL", function (value, element) {
        // parseDate throws exception if the value is invalid
        try {
            jQuery.datepicker.parseDate('dd-mm-yy', value);
            return true;
        } catch (e) {
            return false;
        }
    }
    );

    $("form").find("input[type='file']").change(function () {
        $(this).valid();
    });

    var submitted = false;
    $('form').validate({

        showErrors: function (errorMap, errorList) {

            if (submitted) {
                $("div.errorMessage").hide();
            } else {
                var $tr = $(this.lastActive).closest("div").prev();
                if ($tr.hasClass("errorMessage")) {
                    $tr.hide();
                }
            }

            $.each(errorMap, function (key, value) {
                var $element = $(":input[name='" + key + "']");
                showErrorMessage($element, value);
            });

            validateFileInputs();
            validatePostcode();
            validateCha();
            this.defaultShowErrors();
            submitted = false;

        },
        invalidHandler: function (form, validator) {
            submitted = true;
        },
        errorPlacement: function (error, element) {
        },
        submitHandler: function (form) {
            if (validateFileInputs()) {
                if (validateCha()) {
                    form.submit();
                }
            }
        }
    });
    $('#submitprofielform').click(function (e) {
        submitted = true;
        e.preventDefault();

        $('form').submit();
    });
});
