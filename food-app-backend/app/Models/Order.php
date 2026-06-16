<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    // Ye line add karein taake hum data save kar saken
    protected $fillable = ['customer_name', 'total_amount', 'items'];
}