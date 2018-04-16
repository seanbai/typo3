.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../Includes.txt


.. _configuration:

Configuration Reference
=======================

=======================
Extension Configuration
=======================

Use the Constants Editor to adjust the tp3_jobs to your needs.
You can set you own template be changeing the partials folder to your own. The main output comes from the partial.
   /Resources/Private/Partials/JobOffer/Properties.html

standard CSS are not available.

if plugin.tx_tp3jobs_offers.persistence.storagePid
is set the system will look in the pid for fe output else it will look in the pid where the feoutput is lokated.

Tha tt_address entries and the joboffer Models haven't to bee in the same tree root as the output. Best is to choos a folder type to collect the entries in the backend.

.. _configuration-faq:

FAQ
---

Possible subsection: FAQ

next steps are
- connection to tt_address to have valid rich cards
- import feature for xml structures
