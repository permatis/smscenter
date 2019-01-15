<?php

Route::get('/', function () {
    return view('welcome');
});
Route::get('messages', 'MessageController@index');
Route::get('send', 'MessageController@send');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::middleware('cors')->get('/skin', function () {
    return view('skin');
});
