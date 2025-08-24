<?php

namespace App\Http\Controllers;

use App\Models\Box;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Http;

class BoxController extends Controller
{
    
    public function SendMail(Request $request)
    {
        $response = Http::withHeaders([
            'accept' => 'application/json',
            'api-key' => env('BREVO_API_KEY'),
            'content-type' => 'application/json',
        ])->post('https://api.brevo.com/v3/smtp/email', [
            "sender" => [
                "name" => "Assessment Work",
                "email" => "haseebahmed.masdt@gmail.com"
            ],
            "to" => [
                ["email" => "Dawood.ahmed@collaborak.com)", "name" => "Dawood Ahmed"]
            ],
            "subject" => "1st Task Done - Haseeb Ahmed",
            "htmlContent" => "<p>Task completed successfully. Generated boxes reached 16.</p>"
        ]);

        return response()->json($response->json(), $response->status());
    }
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
       Box::create([
        'width'=>$request->width,
        'height'=>$request->height,
        'color'=>$request->color,
       ]);
       return response()->json(['success'=>true]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
