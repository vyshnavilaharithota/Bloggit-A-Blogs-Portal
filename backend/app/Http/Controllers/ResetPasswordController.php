<?php

namespace App\Http\Controllers;

use App\Mail\ResetPasswordMail;
use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


class ResetPasswordController extends Controller
{

    public function sendEmail(Request $request)
    {
        if(!$this->validateEmail($request->email))
        {
            return $this->failedResponse();
        }

        $this->send($request->email);
        return $this->successResponse();
    }
    public function createToken($email)
    {
        $oldToken=DB::table('password_resets')->where('email',$email)->first();
        if($oldToken)
        {
            return $oldToken;
        }
        $token= Str::random(60);
        $this->saveToken($token,$email);
        return $token;
    }

    public function saveToken($token,$email)
    {

        DB::table('password_resets')->insert([
            'token'=>$token,
            'email'=>$email,
            'created_at'=> Carbon::now()

            ]);
    }

    public function validateEmail($email)
    {
        return !!User::where('email',$email)->first();

    }
    public function send($email)
    {
        $token=$this->createToken($email);
        Mail::to($email)->send(new ResetPasswordMail($token));
    }
    public function failedResponse()
    {
        return response()->json(["error"=>"email not found"] );
    }
    public function successResponse()
    {
        return response()->json(["data"=>"Reset email sent"]);
    }
    //
}
