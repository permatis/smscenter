<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\NewMessageNotification;
use App\Message;
Use Auth;

class MessageController extends Controller
{
    public function __construct()
    {
      // $this->middleware('auth');
    }

    public function index()
    {
      return view('messages.index', [
        'user_id' => Auth::user()->id
      ]);
    }

    public function send()
    {
      // $message = Message::create([
      //   'from'  => 2,
      //   'to'  => 1,
      //   'message' => 'Test demmo'
      // ]);
      $message = new Message;
      $message->setAttribute('from', 1);
      $message->setAttribute('to', 2);
      $message->setAttribute('message', 'Demo message from user 1 to user 2');
      $message->save();

      // want to broadcast NewMessageNotification event
      event(new NewMessageNotification($message));

    }
}
