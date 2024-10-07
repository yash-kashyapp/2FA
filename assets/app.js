//   $(document).ready(function() {
//     var CLOSE_TIMEOUT = 2000;

//     // Handle the registration form submission
//     $('#signup-form').on('submit', function(event) {
//       event.preventDefault(); // Prevent the default form submission

//       var errorMessage = '';

//       var name = $('#name');
//       var username = $('#username');
//       var email = $('#email');
//       var password = $('#password');
//       var passwordConfirmation = $('#password_confirmation');

//       if (password.val() !== passwordConfirmation.val()) {
//         errorMessage = 'Passwords must match';
//       }

//       if (password.val().length < 6) {
//         errorMessage = 'Password must be at least 8 characters';
//       }

//       if (password.val().length > 12) {
//         errorMessage = 'Password must not be greater than 12 characters';
//       }

//       if (errorMessage !== '') {
//         $('#validation-alert')
//           .removeClass('hide')
//           .addClass('show')
//           .addClass('alert-danger')
//           .show();
//         $('#validation-message').text(errorMessage);
//         return;
//       }

//       $('.submit-button')
//         .text('Please Wait...')
//         .attr('disabled', true);

//       // Make the AJAX request to submit the form data
//       var promise = $.ajax({
//         type: 'POST',
//         url: '/api/signup',
//         data: JSON.stringify({
//           name: name.val(),
//           username: username.val(),
//           email: email.val(),
//           password: password.val(),
//           password_confirmation: passwordConfirmation.val()
//         }),
//         contentType: 'application/json'
//       });

//       // Handle the response
//       promise.always(function() {
//         var type;
//         $('.submit-button')
//           .text('Register')
//           .attr('disabled', false);

//         if (promise.status === 200) {
//           type = 'alert-success';
//           $('#validation-alert')
//             .removeClass('alert-danger')
//             .addClass('alert-success')
//             .show();
//           $('#validation-message').text('Registration successful. A verification email has been sent.');
//           setTimeout(function() {
//             window.close();
//           }, CLOSE_TIMEOUT);
//         } else {
//           type = 'alert-danger';
//           var message = 'Unknown error';
//           if (promise.status === 422 && promise.responseJSON && Array.isArray(promise.responseJSON.errors)) {
//             message = promise.responseJSON.errors[0];
//           } else if (promise.status === 400) {
//             message = promise.responseJSON.message;
//           }
//           $('#validation-alert')
//             .removeClass('alert-success')
//             .addClass('alert-danger')
//             .show();
//           $('#validation-message').text(message);
//         }
//       });
//     });
//   });
