<?php

use Illuminate\Support\Facades\Route;

// Register Route
Route::post('/register', 'App\Http\Controllers\AuthController@register');

// Login Route
Route::post('/login', 'App\Http\Controllers\AuthController@login');

// Checkout Route
Route::post('/checkout', 'App\Http\Controllers\OrderController@store');