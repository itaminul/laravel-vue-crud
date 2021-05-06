<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();


});

//Category 
Route::get('/category', 'App\Http\Controllers\CategoryController@index');
Route::post('/formSubmit', 'App\Http\Controllers\CategoryController@store');
Route::get('/post/edit/{id}', 'App\Http\Controllers\CategoryController@edit');
Route::post('/post/update/{id}', 'App\Http\Controllers\CategoryController@update');
Route::delete('/post/delete/{id}', 'App\Http\Controllers\CategoryController@destroy');

