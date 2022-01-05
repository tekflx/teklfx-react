<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body class="bg-gray-100 h-screen antialiased leading-none font-sans">
<div class="flex flex-col">
    <div className='bg-white'>
        <div className='relative overflow-hidden'>
          <div class="nav"></div>
          <main>
                <div class="p-20 flex text-center justify-center">
                    <h1 class="text-4xl">Coming Soon</h1>
                </div>
          </main>
          <div class="footer"></div>
</div>
<script src="{{ asset('/js/app.js') }}"></script>                                                          
</body>
</html>
