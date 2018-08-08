<?php 


	// ini_set("mbstring.internal_encoding","UTF-8");
	// ini_set("mbstring.func_overload",7);

	require_once ("swiftmailer/vendor/autoload.php");
  	ini_set('max_execution_time', 300);



	// $con=mysqli_connect('localhost','traxprintasia_digital','5QtpxC#mvhVL','traxprintasia_dmc_au');


	$con=mysqli_connect("localhost","root","",'digital-mining-corp-au');
		
		
	if ($con->connect_error) {
		die("Connection failed: " . $con->connect_error);
	}
	

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

	// print_r("Here");
	// print_r($postdata);exit;

	if(isset($postdata)){
		// print_r($postdata);exit;
		$request = json_decode($postdata);

		$apistate = $request->apiState;
		if($apistate == "signup"){
			$firstName = $request->firstName;
			$lastName = $request->lastName;
			$email = $request->email;
			$DOB = $request->DOB;
			$address = $request->address;
			$city = $request->city;
			$state = $request->state;
			$country = $request->country;
			$postalCode = $request->postalCode;
			$uniqueField = $request->uniqueField;
			$password = $request->password;
			$pincode = $request->pincode;

			$changedPassword = md5($password);

			$sel = "SELECT * FROM userinfo";
			$query = mysqli_query($con, $sel);

			$existUser = 2;

			if(!$query){
				echo json_encode(['status'=>'fail', 'detail'=>'empty database']);
				exit;
			} else {
				while($row=mysqli_fetch_array($query)){
					if($row['user_email'] == $email){
						$existUser = 1;
					}
				}

				if($existUser == 2){
					$insertUser = "INSERT INTO `userinfo` (`user_fname`, `user_lname`, `user_email`, `user_dob`, `user_address`, `user_city`, `user_state`, `user_country`, `user_postcode`, `user_unique`, `user_password`, `user_pincode`) VALUES ('$firstName', '$lastName', '$email', '$DOB', '$address', '$city', '$state', '$country', '$postalCode', '$uniqueField', '$changedPassword', '$pincode')";

					if(mysqli_query($con, $insertUser)){
						echo json_encode(['status'=>'success', 'email'=>$email]);
						exit;
					}
					else{
						echo json_encode(['status'=>'fail', 'detail'=>'Can not insert data to database']);
						exit;
					}
				} else {
					echo json_encode(['status'=>'fail', 'detail'=>'Already exist user']);
					exit;
				}
			}	
		} 
		else if($apistate == "initialLogin"){
			$email = $request->email;
			$password = $request->password;

			$sel = "SELECT * FROM userinfo";
			$query = mysqli_query($con, $sel);
			if(!$query){
				echo json_encode(['status'=>'fail', 'detail'=>'Database is not exist']);
				exit;
			} else {
				while($row = mysqli_fetch_array($query)){
					if($row['user_email'] == $email && $row['user_password'] == md5($password)){
						echo json_encode(['status'=>'success', 'email'=>$email]);
						exit;
					}
				}
				echo json_encode(['status'=>'fail', 'detail'=>'Invalid email or password']);
				exit;
			}
		}
		else if($apistate == "pinlogin"){
			$email = $request->email;
			$pincode = $request->pinCode;
			$sel = "SELECT * FROM userinfo";
			$query = mysqli_query($con, $sel);
			if(!$query){
				echo json_encode(['status'=>'fail', 'detail'=>'Database is not exist']);
				exit;
			} else {
				while($row = mysqli_fetch_array($query)){
					if($row['user_pincode'] == $pincode && $row['user_email'] == $email){
						echo json_encode(['status'=>'success', 'email'=>$email]);
						exit;
					}
				}
				echo json_encode(['status'=>'fail', 'detail'=>'Invalide PIN code']);
			}
		}
		else if($apistate == "fingerlogin"){
			$email = $request->email;
			$sel = "SELECT * FROM userinfo";
			$query = mysqli_query($con, $sel);
			if(!$query){
				echo json_encode(['status'=>'fail', 'detail'=>'Database is not exist']);
				exit;
			} else {
				while($row = mysqli_fetch_array($query)){
					if($row['user_email'] == $email){
						echo json_encode(['status'=>'success', 'email'=>$email]);
						exit;
					}
				}
				echo json_encode(['status'=>'fail', 'detail'=>'Invalide information']);
				exit;
			}
		}
		else if($apistate == "forgotPass"){
			$email = $request->email;
			$sel = "SELECT * FROM userinfo";
			$query = mysqli_query($con, $sel);

            $confirm_code = rand(100000,999999);

			$existUser = 2;

			echo json_encode($query);
			exit;
			if(!$query){
				echo json_encode(['status'=>'fail', 'detail'=>'Database is not exist']);
				exit;
			} else {
				while($row = mysqli_fetch_array($query)){
					if($row['user_email'] == $email){
						$existUser = 1;
					}
				}
				if($existUser == 1)
				{
					$update="UPDATE userinfo SET `user_forget` = '$confirm_code' WHERE user_email = '$email'";
					if(mysqli_query($con,$update)){
	
						$transport = (new Swift_SmtpTransport('mail.traxprint.asia', 465))
						->setUsername('dmcaserver@traxprint.asia')
						->setPassword('Cn+tQKG&4M1-')
						->setEncryption('ssl')
						;
	
						$mailer = new Swift_Mailer($transport);
	
						$message = (new Swift_Message('Digital Mining Corp Australia'))
						->setFrom(['dmcaserver@traxprint.asia' => 'Digital Mining Corp Australia'])
						->setTo([$email, 'other@domain.org' => 'Confirm Code for forgor password'])
						->setBody('The Message detail is :  <br /><br />'.$confirm_code, 'text/html');
	
	
						$result = $mailer->send($message);
	
						echo json_encode(['status'=>'success']);
						exit;
					} else{
						echo json_encode(['status'=>'fail', 'detail'=>'Can not update database.']);
						exit;
					}
				}
				else{
					echo json_encode(['status'=>'fail', 'detail'=>'You are not registered yet']);
					exit;
				}
			}
		}
		else if($apistate == "sendConfirm"){
			$email = $request->email;
			$confirmCode = $request->confirm;
			$sel = "SELECT * FROM userinfo";
			$query = mysqli_query($con, $sel);
			if(!$query){
				echo json_encode(['status'=>'fail', 'detail'=>'Database is not exist']);
				exit;
			} else {
				while($row = mysqli_fetch_array($query)){
					if($row['user_email'] == $email && $row['user_forget'] == $confirmCode){
					    
    					$update="UPDATE userinfo SET `user_password` = '$password' WHERE user_email = '$email'";
    					if(mysqli_query($con,$update)){
    						echo json_encode(['status'=>'success', 'email'=>$email]);
    						exit;
    					}
					}
				}
				echo json_encode(['status'=>'fail', 'detail'=>'Invalide PIN code']);
				exit;
			}
		}
	}












?>
