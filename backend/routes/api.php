<?php

use App\Http\Controllers\BoxController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::post('/boxes/sendmail',[BoxController::class,'SendMail']);
Route::resource('boxes',BoxController::class);