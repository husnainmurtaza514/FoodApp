<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    // Yahan hum allow kar rahe hain ke hamara React (Vite) port 5173 se request bhej sake
   'allowed_origins' => [
    'http://localhost:5173', 
    'http://localhost:5174', // Ye line add karein
    'http://127.0.0.1:5173', 
    'http://127.0.0.1:5174'  // Ye bhi add kar dein safe side ke liye
],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,
];