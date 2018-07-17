
plugin.tx_login_login {
  view {
    # cat=plugin.tx_login_login/file; type=string; label=Path to template root (FE)
    templateRootPath = EXT:login/Resources/Private/Templates/
    # cat=plugin.tx_login_login/file; type=string; label=Path to template partials (FE)
    partialRootPath = EXT:login/Resources/Private/Partials/
    # cat=plugin.tx_login_login/file; type=string; label=Path to template layouts (FE)
    layoutRootPath = EXT:login/Resources/Private/Layouts/
  }
  persistence {
    # cat=plugin.tx_login_login//a; type=string; label=Default storage PID
    storagePid =
  }
}
