<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [AuthController::class, 'register']); //OK
Route::post('/login', [AuthController::class, 'login']); //OK

Route::middleware(['jwt.auth'])->group(function () {
    Route::get('/all-users', [UsersController::class, 'getAllUser']); //OK
    Route::post('/logout', [UsersController::class, 'logOut']); //OK
    Route::get('/current-user', [AuthController::class, 'currentUser']); //OK
    Route::post('/change-email', [UsersController::class, 'changeEmail']); //OK
    Route::post('/change-password', [UsersController::class, 'changePassword']); //OK
    Route::post('/user-update', [UsersController::class, 'updateUsers']); //OK
    Route::get('/delete-account', [UsersController::class, 'deleteAccount']); //OK
});
