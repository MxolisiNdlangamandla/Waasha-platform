// Get the booking form , this connects this js file to the form in the HTML with id 'booking-form'
const bookingForm = document.getElementById('booking-form');

// Add event listener for form submission. 
// This ensures that when a user clicks Book Now, the page doesn’t reload.
bookingForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page refresh
  
  // Get form data
  const name = bookingForm.querySelector('input[placeholder="Name"]').value;
  const service = bookingForm.querySelector('input[placeholder="Service"]').value;
  const date = bookingForm.querySelector('input[type="date"]').value;
  // Show confirmation to user
  alert(`Thank you ${name}! Your ${service} booking for ${date} is received.`);

  // Clear the form
  bookingForm.reset();
  //Users get immediate feedback and the form resets for another booking.

  // Process the booking (e.g., send to server)
  console.log('Booking submitted:', { name, service, date });

  //Validate input : This prevents empty submissions.
  if (!name || !service || !date) {
  alert("Please fill in all fields before booking!");
  return;
}
});