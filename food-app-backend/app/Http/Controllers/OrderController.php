<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $order = new Order();
        $order->total_amount = $request->total;
        $order->items = json_encode($request->cart);
        
        // Yeh line check karein: Request se jo name aaye wahi save ho
        // Agar request mein name na ho, toh "Guest" save kare
        $order->customer_name = $request->customer_name ?? 'Guest'; 
        
        $order->save();

        return response()->json([
            'message' => 'Order Placed Successfully!',
            'user' => $order->customer_name
        ], 201);
    }
}