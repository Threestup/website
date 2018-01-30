<?php

use Leafo\ScssPhp\Compiler;

$dist_path = __DIR__.'/../css';
$sass_path = __DIR__.'/../sass';

$in = $sass_path.'/app.scss';
$out = $dist_path.'/app.css';

$scss = new Compiler();
$scss->setImportPaths($sass_path);

$contents = $scss->compile(file_get_contents($in), $in);

file_put_contents($out, $contents);
