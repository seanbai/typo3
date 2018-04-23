#
# Table structure for table 'tx_uploadexample_domain_model_example'
#
CREATE TABLE tx_uploadexample_domain_model_example (

	uid int(11) NOT NULL auto_increment,
	pid int(11) DEFAULT '0' NOT NULL,

	title varchar(255) DEFAULT '' NOT NULL,
        
        username  varchar(255) DEFAULT '' NOT NULL,
        user  varchar(255) DEFAULT '' NOT NULL,
        sex  varchar(100) DEFAULT '' NOT NULL,
        profession  varchar(255) DEFAULT '' NOT NULL,
        citizenship  varchar(255) DEFAULT '' NOT NULL,
        phone  varchar(255) DEFAULT '' NOT NULL,
        age  varchar(100) DEFAULT '' NOT NULL,
        education  varchar(255) DEFAULT '' NOT NULL,
        address  varchar(255) DEFAULT '' NOT NULL,
        email varchar(255) DEFAULT '' NOT NULL,
        language varchar(100) DEFAULT '' NOT NULL,
        languagelevel varchar(100) DEFAULT '' NOT NULL,
        school varchar(255) DEFAULT '' NOT NULL,
        privacy varchar(20) DEFAULT '' NOT NULL,
        content text,

	image int(11) unsigned DEFAULT '0',
	image_collection int(11) unsigned DEFAULT '0',

	tstamp int(11) unsigned DEFAULT '0' NOT NULL,
	crdate int(11) unsigned DEFAULT '0' NOT NULL,
	cruser_id int(11) unsigned DEFAULT '0' NOT NULL,
	deleted tinyint(4) unsigned DEFAULT '0' NOT NULL,
	hidden tinyint(4) unsigned DEFAULT '0' NOT NULL,
	starttime int(11) unsigned DEFAULT '0' NOT NULL,
	endtime int(11) unsigned DEFAULT '0' NOT NULL,

	t3ver_oid int(11) DEFAULT '0' NOT NULL,
	t3ver_id int(11) DEFAULT '0' NOT NULL,
	t3ver_wsid int(11) DEFAULT '0' NOT NULL,
	t3ver_label varchar(255) DEFAULT '' NOT NULL,
	t3ver_state tinyint(4) DEFAULT '0' NOT NULL,
	t3ver_stage int(11) DEFAULT '0' NOT NULL,
	t3ver_count int(11) DEFAULT '0' NOT NULL,
	t3ver_tstamp int(11) DEFAULT '0' NOT NULL,
	t3ver_move_id int(11) DEFAULT '0' NOT NULL,

	t3_origuid int(11) DEFAULT '0' NOT NULL,
	sys_language_uid int(11) DEFAULT '0' NOT NULL,
	l10n_parent int(11) DEFAULT '0' NOT NULL,
	l10n_diffsource mediumblob,

	PRIMARY KEY (uid),
	KEY parent (pid),
	KEY t3ver_oid (t3ver_oid,t3ver_wsid),
        KEY language (l10n_parent,sys_language_uid)

);

