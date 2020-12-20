<?php

Route::group([

    'middleware' => 'api',
    // 'namespace' => 'App\Http\Controllers'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::get('allblogs', 'BlogController@index');
    Route::get('blogs/{user_id}', 'BlogController@getBlogs');
    Route::get('tag/{name}', 'BlogController@getBlogsByTag');
    Route::get('name/{id}', 'BlogController@getName');
    Route::post('blogs', 'BlogController@store');
     Route::put('blogs/{id}', 'BlogController@update');
     Route::delete('blogs/{id}', 'BlogController@delete');
    Route::delete('user/{id}', 'BlogController@deleteUser');
    Route::put('tag/{id}', 'BlogController@updateTag');
    Route::put('updateprofile/{id}', 'BlogController@updateProfile');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');
    Route::get('tags/{id}', 'BlogController@getTags');
    Route::get('allusers', 'BlogController@getUsers');
    Route::get('articles', 'TagsController@index');
    Route::get('tags/{tags}', 'TagsController@show');
    Route::post('tags', 'TagsController@store');
    Route::put('tags/{tags}', 'TagsController@update');
    Route::delete('tags/{tags}', 'TagsController@delete');
    Route::get('alltags', 'TagsController@getAllTags');
});

