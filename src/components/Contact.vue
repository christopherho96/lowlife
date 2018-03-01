<template>
<!--Section : Signip -->
  <section class="section section-signup">
      <div class ="container" style= "padding-top:25px; padding-bottom: 25px;">
          <div class="row">
              <div class="col s12 m6">
                  <h5 style= "margin-bottom: 20px;">Showcase your passion</h5>
                  <p>Lowlife is proud to represent upcoming underground artists from the Toronto region. We provide branding and video advertisement documenting your steps to success.</p>
                  <h5 style= "margin-bottom: 20px;">Book events</h5>
                  <p>Plan your next big event with Lowlife. We cater to all spaces and provide top quality services including live music, performences from reputable artists and showcases for local artists and fashion brands.</p>
                  <h5 style= "margin-bottom: 20px;">We're here to push boundaries</h5>
                  <p>If you have an idea that you believe we can help you make succesful, plesae do not hesitate to contact us. Lowlife is continously finding new ways to branch out.</p>
              </div>
              <div class ="col s12 m6">
                <div class="card-panel grey lighten-3">
                <h5 style="margin-bottom: 40px;">Leave us a message</h5>
                <div class = "input-field">
                    <input type ="text" placeholder = "Name" id ="name">
                    <label for="name">Name</label>
                </div>
                <div class = "input-field">
                    <input type ="text" placeholder = "Email" id ="email">
                    <label for="email">Email</label>
                    </div>
                <div class = "input-field">
                    <input type ="text" placeholder = "Phone" id ="phone">
                    <label for="phone">Phone</label>
                </div>
                <div class = "input-field">
                    <textarea class = "materialize-textarea" placeholder="Enter Message" id ="message"></textarea>
                    <label for="message">Message</label>
                </div>
                <input type ="submit" value="Submit" class = "btn blue-grey darken-4">
                </div>    
              </div>
          </div>
      </div>
  </section>
</template>

<style scoped>
h5{
    font-family: 'Roboto Mono', sans-serif;
}
  /* label color */
   .input-field label {
     color: #000;
   }
   /* label focus color */
   .input-field input[type=text]:focus + label {
     color: #000;
   }
   /* label underline focus color */
   .input-field input[type=text]:focus {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
   /* valid color */
   .input-field input[type=text].valid {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
   /* invalid color */
   .input-field input[type=text].invalid {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
   /* icon prefix focus color */
   .input-field .prefix.active {
     color: #000;
   }
   .input-field .materialize-textarea:focus{
       border-bottom: 1px solid #000;
   }
    .input-field .materialize-textarea:focus + label{
       color: #000;
   }
</style>