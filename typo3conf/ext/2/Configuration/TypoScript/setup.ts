
plugin.tx_contact_contact {
  view {
    templateRootPaths.0 = EXT:contact/Resources/Private/Templates/
    templateRootPaths.1 = {$plugin.tx_contact_contact.view.templateRootPath}
    partialRootPaths.0 = EXT:contact/Resources/Private/Partials/
    partialRootPaths.1 = {$plugin.tx_contact_contact.view.partialRootPath}
    layoutRootPaths.0 = EXT:contact/Resources/Private/Layouts/
    layoutRootPaths.1 = {$plugin.tx_contact_contact.view.layoutRootPath}
  }
  persistence {
    storagePid = {$plugin.tx_contact_contact.persistence.storagePid}
    #recursive = 1
  }
  features {
    #skipDefaultArguments = 1
  }
  mvc {
    #callDefaultActionIfActionCantBeResolved = 1
  }
}

plugin.tx_contact._CSS_DEFAULT_STYLE (
    textarea.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    input.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    .tx-contact table {
        border-collapse:separate;
        border-spacing:10px;
    }

    .tx-contact table th {
        font-weight:bold;
    }

    .tx-contact table td {
        vertical-align:top;
    }

    .typo3-messages .message-error {
        color:red;
    }

    .typo3-messages .message-ok {
        color:green;
    }
)
