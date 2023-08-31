<template>
  <h2>Contactez-moi</h2>

  <p>
    Do you want to get in touch with me using this form, or prefer to schedule an online appointment
    directly through Calendly? Click here for the link.
  </p>
  <form>
    <p>What are you looking for?</p>
    <input type="radio" id="freelance" name="contact_option" value="freelance" />
    <label for="freelance">Freelance mission</label>
    <input type="radio" id="devis" name="contact_option" value="devis" />
    <label for="devis">Get a quote</label>

    <br />
    <label for="last-name">Last name : </label>
    <input required type="text" id="last-name" name="last-name" />
    <br />
    <label for="first-name">First name : </label>
    <input required type="text" id="first-name" name="first-name" />
    <br />
    <label for="email">Email address : </label>
    <input type="email" placeholder="email@domain.com" required pattern="[a-z0-9._%+-]+@[a-z0]" />
    <br />
    <label for="company">Your componay</label>
    <input type="text" id="company" />
    <br />
    <input type="submit" />
  </form>
</template>

<script></script>
