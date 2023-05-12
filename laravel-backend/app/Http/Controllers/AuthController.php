<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);
            if ($user) {
                return response()->json([
                    'status' => true,
                    'message' => 'Register successfully',
                    'data' => $user
                ], 201);
            }
            return response()->json([
                'status' => false,
                'message' => 'Register failed'
            ], 400);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'messages' => 'Internal Server Error',
                // 'error' => '' . $e . ''
            ], 500);
        }
    }

    public function login(LoginRequest $request)
    {
        try {
            if (!$jwt_token = JWTAuth::attempt([
                'email' => $request->email,
                'password' => $request->password,
            ])) {
                return response()->json([
                    'success' => false,
                    'message' => 'Invalid Email or Password'
                ], JsonResponse::HTTP_UNAUTHORIZED);
            };
        } catch (JWTException $e) {
            return response()->json([
                'error' => 'Could Not Create Token'
            ]);
        }
        return response()->json([
            'success' => true,
            'accessToken' => $jwt_token,
            'users' => auth()->user(),
        ]);
    }

    public function currentUser()
    {
        try {
            if (!$user = JwtAuth::parseToken()->authenticate()) {
                return response()->json([
                    'User Not Found'
                ], 404);
            }
        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json([
                'Token Expired'
            ], 401);
        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json([
                'Token Invalid'
            ], 401);
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json([
                'Token Absent'
            ], 401);
        }
        return response()->json($user);
    }
}
