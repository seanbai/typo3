#
# Table structure for table 'tx_tp3jobs_domain_model_joboffer'
#
CREATE TABLE tx_tp3jobs_domain_model_joboffer (

	uid int(11) NOT NULL auto_increment,
	pid int(11) DEFAULT '0' NOT NULL,

    	title varchar(255) DEFAULT '' NOT NULL,
        username  varchar(255) DEFAULT '' NOT NULL,
        useremail  varchar(255) DEFAULT '' NOT NULL,

	descr text NOT NULL,
	tasks text NOT NULL,
	qualification text NOT NULL,
	refid varchar(255) DEFAULT '' NOT NULL,
	contactname varchar(255) DEFAULT '' NOT NULL,
	contactaddress varchar(255) DEFAULT '' NOT NULL,
	contacttel varchar(255) DEFAULT '' NOT NULL,
	contactmail varchar(255) DEFAULT '' NOT NULL,

        station  int(11) DEFAULT '0' NOT NULL,
        hours  int(11) DEFAULT '0' NOT NULL,
        
        category  int(11) DEFAULT '0' NOT NULL,
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

	sys_language_uid int(11) DEFAULT '0' NOT NULL,
	l10n_parent int(11) DEFAULT '0' NOT NULL,
	l10n_diffsource mediumblob,

	PRIMARY KEY (uid),
	KEY parent (pid),
	KEY t3ver_oid (t3ver_oid,t3ver_wsid),
	KEY language (l10n_parent,sys_language_uid)

);

