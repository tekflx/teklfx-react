<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});







Route::get('/portfolio', function () {
    return view('portfolio');
});
Auth::routes();

Route::get('/home', function () {
    return view('welcome');
})->name('home');

Route::group(['prefix' => 'services'], function () {
    Route::get('/', function () {
        return view('services.index');
    });
    Route::get('/development', function () {
        return view('services');
    });
    Route::get('/devops', function () {
        return view('services');
    });
    Route::get('/digital-transformation', function () {
        return view('services');
    });
    Route::get('/recruit', function () {
        return view('services');
    });
    Route::get('/security', function () {
        return view('services');
    });
    Route::get('/due-diligence', function () {
        return view('services');
    });
    Route::get('/sred', function () {
        return view('services');
    });
});

Route::group(['prefix' => 'tech'], function () {
    Route::get('/', function () {
        return view('tech.tech');
    });
    Route::get('/languages', function () {
        return view('tech');
    });
    Route::get('/data', function () {
        return view('tech');
    });
    Route::get('/infrastructure', function () {
        return view('tech');
    });
    Route::get('/media', function () {
        return view('tech');
    });
    Route::get('/web3', function () {
        return view('tech.web3');
    });
});
Route::group(['prefix' => 'company'], function () {
    Route::get('/', function () {
        return view('company.index');
    });
    Route::get('/blog', function () {
        return view('company');
    });
    Route::get('/jobs', function () {
        return view('company');
    });
    Route::get('/press-releases', function () {
        return view('company');
    });
    Route::get('/partners', function () {
        return view('company');
    });
});

Route::group(['prefix' => 'support'], function () {
    Route::get('/', function () {
        return view('company');
    });
});
