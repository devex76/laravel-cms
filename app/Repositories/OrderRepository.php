<?php

namespace App\Repositories;

use Carbon\Carbon;

class OrderRepository extends Repository
{
    /**
     * Ecommerce-CMS
     *
     * Copyright (C) 2014 - 2015  Tihomir Blazhev.
     *
     * Repository Class for model Order, extends base Repository Class.
     * Simple implementation without scopes and Criteria
     * specific queries is placed here.
     *
     * @package ecommerce-cms
     * @category Repository Class
     * @author Tihomir Blazhev <raylight75@gmail.com>
     * @link https://raylight75@bitbucket.org/raylight75/ecommerce-cms.git
     */

    /**
     * Specify Model class name
     *
     * @return mixed
     */
    public function model()
    {
        return 'App\Models\Order';
    }

    /**
     * @param $cart
     * @return mixed
     */
    public function makeOrder($cart)
    {
        foreach ($cart as $item) {
            $this->create([
                'user_id' => auth()->user()->id,
                'order_date' => Carbon::now(),
                'product_id' => $item->id,
                'quantity' => $item->qty,
                'amount' => $item->subtotal,
                'size' => $item->options->size,
                'img' => $item->options->img,
                'color' => $item->options->color,
            ]);
        }
    }

    /**
     * Get user order parameters.
     * @return mixed
     */
    public function getUserOrder()
    {
        if (request()->has('update')) {
            $order = $this->findBy('id', request()->input('update'));
        } else {
            $order = $this->findOrFail(request()->all());
        }
        return $order;
    }
}