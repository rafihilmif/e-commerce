<?php

namespace App\Http\Middleware;

use App\Models\Log as ModelsLog;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class Logging
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $keterangan)
    {
        $response = $next($request);
        if(Auth::check()){
            $messageketerangan = Auth::customer()->id . ' melakukan ' . $keterangan . '!';
            Log::create([
                'id_customer' => Auth::customer()->id,
                'keterangan' =>  $messageketerangan
            ]);
        }

        if($keterangan == 'logout') {

        }
        return $response;
    }
}
