<?php 


	// ini_set("mbstring.internal_encoding","UTF-8");
	// ini_set("mbstring.func_overload",7);

	// require_once ("swiftmailer/vendor/autoload.php");

	// require_once 'swiftmailer/vendor/swiftmailer/swiftmailer/lib/swift_required.php';

	ini_set('max_execution_time', 300);


	// echo ("dfgdfgdfgdfg");
	// exit;
	// $decoded = base64_decode($pdfFile);
	// file_put_contents('file.pdf',$decoded);
	

	if (isset($_SERVER['HTTP_ORIGIN'])) {
		header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
		header('Access-Control-Allow-Credentials: true');
		header('Access-Control-Max-Age: 86400');    // cache for 1 day
	}

	// Access-Control headers are received during OPTIONS requests
	if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

		if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
			header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

		if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
			header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

		exit(0);
	}
	$postdata = file_get_contents("php://input");

	print_r("Here");
	print_r($postdata);












?>