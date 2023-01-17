export const loginFormHTML = `
<div class="modal_bg" style="display:none;"></div>
<section id='login'>

  <div class="sign_up_modal all_modal" style="display:none;">
    <div class="modal_error"></div>
    <div id='sign_up_form'>
      <div>
      <center>
        <input autocomplete="password" id="email_signup" placeholder='Email' type='email'>
        <input autocomplete="password" id="password_signup" placeholder='Password' type='password'>
        <button id="make_user_submitted">Create my Arcane account!</button> 
        </center>
      </div>
    </div>
  </div>

  <div class="login_wrapper">
    <div class="logo_wrapper">
      <img
        src="https://trinket-user-assets.trinket.io/886a5d19e138e48ed263c3018d59f9f1b7ac2ab2-63921d9730e8f93c50693a2b.png"
        id="logoImage" />
    </div>
    <div class="login_form_wrapper">
      <form id='login_form' action="">
        <input autocomplete="password" id='email_input' type="email" placeholder="Email">
        <input autocomplete="email" id='password_input' type=" password" placeholder="Password">
        <button class='submit_btn'>Enter the Arcane</button>
        <small class='sign_up_text'><span>New to Arcane? Sign up!</span></small>
      </form>
    </div>
  </div>
</section>

<section id='chat' style="display: none">
  <div class='chat_selector'></div>
  <div class='messaging_screen'></div>
</section>
`;
