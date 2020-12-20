@component('mail::message')


Bloggit

Click on the link given below to reset your password

@component('mail::button', ['url' => 'http://localhost:4200/forgotPassword?token='.$token->token])
Reset Password
@endcomponent

Thanks,<br>
Bloggit
@endcomponent
