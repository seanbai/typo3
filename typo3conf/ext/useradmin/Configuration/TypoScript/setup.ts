
plugin.tx_useradmin_useradmin {
  view {
    templateRootPaths.0 = EXT:useradmin/Resources/Private/Templates/
    templateRootPaths.1 = {$plugin.tx_useradmin_useradmin.view.templateRootPath}
    partialRootPaths.0 = EXT:useradmin/Resources/Private/Partials/
    partialRootPaths.1 = {$plugin.tx_useradmin_useradmin.view.partialRootPath}
    layoutRootPaths.0 = EXT:useradmin/Resources/Private/Layouts/
    layoutRootPaths.1 = {$plugin.tx_useradmin_useradmin.view.layoutRootPath}
  }
  persistence {
    storagePid = {$plugin.tx_useradmin_useradmin.persistence.storagePid}
    #recursive = 1
  }
  features {
    #skipDefaultArguments = 1
  }
  mvc {
    #callDefaultActionIfActionCantBeResolved = 1
  }
}

plugin.tx_useradmin._CSS_DEFAULT_STYLE (
    textarea.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    input.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    .tx-useradmin table {
        border-collapse:separate;
        border-spacing:10px;
    }

    .tx-useradmin table th {
        font-weight:bold;
    }

    .tx-useradmin table td {
        vertical-align:top;
    }

    .typo3-messages .message-error {
        color:red;
    }

    .typo3-messages .message-ok {
        color:green;
    }
)
