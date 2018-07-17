
plugin.tx_login_login {
  view {
    templateRootPaths.0 = EXT:login/Resources/Private/Templates/
    templateRootPaths.1 = plugin.tx_login_login.view.templateRootPath
    partialRootPaths.0 = EXT:login/Resources/Private/Partials/
    partialRootPaths.1 = plugin.tx_login_login.view.partialRootPath
    layoutRootPaths.0 = EXT:login/Resources/Private/Layouts/
    layoutRootPaths.1 = plugin.tx_login_login.view.layoutRootPath
  }
  persistence {
    storagePid = plugin.tx_login_login.persistence.storagePid
    #recursive = 1
  }
  features {
    #skipDefaultArguments = 1
  }
  mvc {
    #callDefaultActionIfActionCantBeResolved = 1
  }
}

plugin.tx_login._CSS_DEFAULT_STYLE (
    textarea.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    input.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    .tx-login table {
        border-collapse:separate;
        border-spacing:10px;
    }

    .tx-login table th {
        font-weight:bold;
    }

    .tx-login table td {
        vertical-align:top;
    }

    .typo3-messages .message-error {
        color:red;
    }

    .typo3-messages .message-ok {
        color:green;
    }
)
