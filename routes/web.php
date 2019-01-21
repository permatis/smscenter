<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:  GET, POST, OPTIONS, PUT, DELETE');

Route::get('/', function () {
    return view('welcome');
});
Route::get('messages', 'MessageController@index');
Route::get('send', 'MessageController@send');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/dashboard', function () {
    return view('skin');
})->middleware('cors');
