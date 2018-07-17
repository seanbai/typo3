
plugin.tx_useradmin_useradmin {
  view {
    # cat=plugin.tx_useradmin_useradmin/file; type=string; label=Path to template root (FE)
    templateRootPath = EXT:useradmin/Resources/Private/Templates/
    # cat=plugin.tx_useradmin_useradmin/file; type=string; label=Path to template partials (FE)
    partialRootPath = EXT:useradmin/Resources/Private/Partials/
    # cat=plugin.tx_useradmin_useradmin/file; type=string; label=Path to template layouts (FE)
    layoutRootPath = EXT:useradmin/Resources/Private/Layouts/
  }
  persistence {
    # cat=plugin.tx_useradmin_useradmin//a; type=string; label=Default storage PID
    storagePid =
  }
}
