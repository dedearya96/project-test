<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateEmailRequest;
use App\Http\Requests\UpdatePasswordRequest;
use App\Http\Requests\UpdateUsersRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class UsersController extends Controller
{
    protected $user;
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->user = JWTAuth::parseToken()->authenticate();
            return $next($request);
        });
    }

    public function getAllUser()
    {
        try {
            $user = User::get(['id', 'name', 'email', 'created_at']);
            return response()->json($user);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'messages' => 'Internal Server Error',
                // 'error' => '' . $e . ''
            ], 500);
        }
    }

    public function changeEmail(UpdateEmailRequest $request)
    {
        try {
            $this->user->update([
                'email' => $request->email
            ]);
            return response()->json([
                'status' => true,
                'message' => 'Email successfully updated'
            ], 201);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'messages' => 'Server Error',
                // 'error' => '' . $e . ''
            ], 500);
        }
    }

    public function updateUsers(UpdateUsersRequest $request)
    {
        try {
            $this->user->update([
                'name' => $request->name
            ]);
            return response()->json([
                'status' => true,
                'message' => 'User successfully updated'
            ], 201);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'messages' => 'Server Error',
                // 'error' => '' . $e . ''
            ], 500);
        }
    }

    public function changePassword(UpdatePasswordRequest $request)
    {
        try {
            if (!Hash::check($request->old_password, auth()->user()->password)) {
                return response()->json([
                    'status' => false,
                    'message' => 'Old Password Doesnt match!'
                ]);
            }
            $this->user->update([
                'password' => Hash::make($request->new_password)
            ]);
            return response()->json([
                'status' => true,
                'message' => 'Password successfully updated'
            ], 201);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'messages' => 'Server Error',
                // 'error' => '' . $e . ''
            ], 500);
        }
    }

    public function deleteAccount()
    {
        try {
            $this->user->delete();
            return response()->json([
                'status' => true,
                'message' => 'Account successfully deleted'
            ], 201);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'messages' => 'Server Error',
                // 'error' => '' . $e . ''
            ], 500);
        }
    }

    public function logOut(Request $request)
    {
        try {
            JWTAuth::invalidate($request->token);
            return response()->json([
                'success' => true,
                'message' => 'User logout successfully'
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'messages' => 'Server Error',
                // 'error' => '' . $e . ''
            ], 500);
        }
    }
}
