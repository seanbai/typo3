
plugin.tx_loginkey_login {
  view {
    # cat=plugin.tx_loginkey_login/file; type=string; label=Path to template root (FE)
    templateRootPath = EXT:login_key/Resources/Private/Templates/
    # cat=plugin.tx_loginkey_login/file; type=string; label=Path to template partials (FE)
    partialRootPath = EXT:login_key/Resources/Private/Partials/
    # cat=plugin.tx_loginkey_login/file; type=string; label=Path to template layouts (FE)
    layoutRootPath = EXT:login_key/Resources/Private/Layouts/
  }
  persistence {
    # cat=plugin.tx_loginkey_login//a; type=string; label=Default storage PID
    storagePid =
  }
}
