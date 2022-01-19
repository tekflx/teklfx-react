@extends('layouts.app', ['title' => 'Company'])

@section('content')
    <div id="company" data-apikey="{{  env('GCP_API_KEY') }}"></div>
@endsection