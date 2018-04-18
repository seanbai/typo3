
plugin.tx_contact_contact {
  view {
    # cat=plugin.tx_contact_contact/file; type=string; label=Path to template root (FE)
    templateRootPath = EXT:contact/Resources/Private/Templates/
    # cat=plugin.tx_contact_contact/file; type=string; label=Path to template partials (FE)
    partialRootPath = EXT:contact/Resources/Private/Partials/
    # cat=plugin.tx_contact_contact/file; type=string; label=Path to template layouts (FE)
    layoutRootPath = EXT:contact/Resources/Private/Layouts/
  }
  persistence {
    # cat=plugin.tx_contact_contact//a; type=string; label=Default storage PID
    storagePid =
  }
}
