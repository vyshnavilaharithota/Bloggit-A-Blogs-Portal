<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangePasswordRequest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ChangePasswordController extends Controller
{
    //
    public function process(ChangePasswordRequest $request){
        return $this->getPasswordResetTableRow($request)->count()>0? $this->changePassword($request) :$this->tokenNotFoundResponse();
    }

    public function changePassword($request)
    {
        $user= User::where('email', $request->email)->first();
        $user->update(['password'=> $request->password]);

        return response()->json(["data" => "Password Changed Succesfully "]);
    }

    private function getPasswordResetTableRow($request)
    {
        return DB::table('password_resets')->where(['email'=> $request->email, 'token'=> $request->resetToken ]);
    }
    private function tokenNotFoundResponse()
    {
        return response()->json(['error'=>'Invalid Token']);
    }

}
