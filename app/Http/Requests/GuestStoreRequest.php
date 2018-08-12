<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GuestStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'bail|required|alpha',
            'last_name' => 'bail|required|alpha',
            'email' => 'bail|required|email',
            'ticket_id' => 'bail|required|exists:tickets,id',
            'event_id' => 'bail|required|exists:events,id'
        ];
    }

    public function messages() {
        return [
            'first_name.required' => 'Please provide a first name.'
        ];
    }

}
