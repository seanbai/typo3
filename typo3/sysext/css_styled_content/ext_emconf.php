<?php
$EM_CONF[$_EXTKEY] = [
    'title' => 'CSS styled content',
    'description' => 'Contains configuration for CSS content-rendering of the table "tt_content". This is meant as a modern substitute for the classic "content (default)" template which was based more on <font>-tags, while this is pure CSS.',
    'category' => 'fe',
    'state' => 'deprecated',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Kasper Skaarhoj',
    'author_email' => 'kasperYYYY@typo3.com',
    'author_company' => 'Curby Soft Multimedia',
    'version' => '8.7.4',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-8.7.4',
            'frontend' => '8.7.0-8.7.4',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];
