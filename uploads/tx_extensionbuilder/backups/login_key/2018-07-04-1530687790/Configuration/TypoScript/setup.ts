
plugin.tx_loginkey_login {
  view {
    templateRootPaths.0 = EXT:login_key/Resources/Private/Templates/
    templateRootPaths.1 = plugin.tx_loginkey_login.view.templateRootPath
    partialRootPaths.0 = EXT:login_key/Resources/Private/Partials/
    partialRootPaths.1 = plugin.tx_loginkey_login.view.partialRootPath
    layoutRootPaths.0 = EXT:login_key/Resources/Private/Layouts/
    layoutRootPaths.1 = plugin.tx_loginkey_login.view.layoutRootPath
  }
  persistence {
    storagePid = plugin.tx_loginkey_login.persistence.storagePid
    #recursive = 1
  }
  features {
    #skipDefaultArguments = 1
  }
  mvc {
    #callDefaultActionIfActionCantBeResolved = 1
  }
}

plugin.tx_loginkey._CSS_DEFAULT_STYLE (
    textarea.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    input.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    .tx-login-key table {
        border-collapse:separate;
        border-spacing:10px;
    }

    .tx-login-key table th {
        font-weight:bold;
    }

    .tx-login-key table td {
        vertical-align:top;
    }

    .typo3-messages .message-error {
        color:red;
    }

    .typo3-messages .message-ok {
        color:green;
    }
)
