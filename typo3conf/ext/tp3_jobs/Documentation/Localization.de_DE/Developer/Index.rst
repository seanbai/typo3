.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../Includes.txt


.. _developer:

Developer Corner
================

Target group: **Developers**

this extension is started with the extention builder.
Simply now to find in the controller. It will be moved in to seperate classes
as the other features are implemented


.. _developer-hooks:

Hooks
-----

Possible hook would be for the import mapping. Input parameters are:

+----------------+---------------+---------------------------------+
| Parameter      | Data type     | Description                     |
+================+===============+=================================+
| $table         | string        | Name of the table               |
+----------------+---------------+---------------------------------+
| $field         | string        | Name of the field               |
+----------------+---------------+---------------------------------+

Use parameter :code:`$table` to retrieve the table name...

.. _developer-api:

Usage
---

   you can set you own template be changeing the partials folder to your own. The main output comes from the template
   /Resources/Private/Partials/JobOffer/Properties.html:

   DebugMode can be anabled in the extension manager.

   part of the model

.. code-block:: php

   class JobOffer extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity
   {
    /**
     * title
     *
     * @var string
     */
    protected $title = '';

    /**
     * descr
     *
     * @var string
     */
    protected $descr = '';

    /**
     * tasks
     *
     * @var string
     */
    protected $tasks = '';

    /**
     * qualification
     *
     * @var string
     */
    protected $qualification = '';

    /**
     * refid
     *
     * @var string
     */
    protected $refid = '';

    /**
     * contactname
     *
     * @var string
     */
    protected $contactname = '';

    /**
     * contactaddress
     *
     * @var string
     */
    protected $contactaddress = '';

    /**
     * contacttel
     *
     * @var string
     */
    protected $contacttel = '';

    /**
     * contactmail
     *
     * @var string
     */
    protected $contactmail = '';
    /**
     * date
     *
     * @var string
     */
    protected $date = '';

    /**
     * Returns the date
     *
     * @return string $date
     */
    public function getDate()
    {
        return $this->tstamp;
    }

	$stuff = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
		'\Tp3\Tp3Jobs\Domain\Model\JobOffer::class'
	);
	$stuff->do();


   A Hook will be provided for import xml mapping

.. code-block:: javascript
   :linenos:
   :emphasize-lines: 2-4

	$(document).ready(
		function () {
			doStuff();
		}
	);
