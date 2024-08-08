<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div data-aos="fade-in" data-aos-duration="1000">
    <div class="contact-container">
      <h1>Contact Us</h1>
      <p>
        We at SJS Homes are here to help you with any questions or inquiries you may have. Whether
        you're interested in our current projects, need more information about our services, or just
        want to say hello, feel free to reach out to us through any of the methods below.
      </p>
    </div>
    <div class="contact-information-container">
      <div class="phone-container">
        <img class="phone-icon" :src="phoneIcon" />
        <h1>Phone</h1>
        <div class="phone-numbers">
          <p>(587)-590-5343</p>
          <p>(780) 966-0162</p>
        </div>
      </div>
      <div class="divider"></div>
      <div class="email-container">
        <img class="email-icon" :src="emailIcon" />
        <h1>Email</h1>
        <a class="email" href="mailto:sjshomes2014@gmail.com">sjshomes2014@gmail.com</a>
      </div>
    </div>
    <div class="contact-form-container">
      <form class="contact-form" @submit.prevent>
        <input type="text" id="name" name="name" required placeholder="Name" v-model="name" />

        <input type="email" id="email" name="email" required placeholder="Email" v-model="email" />

        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Phone Number"
          v-model="phone"
        />

        <textarea id="message" name="message" rows="5" required v-model="message"></textarea>

        <button class="button" type="submit" @click="submitForm()">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import emailIcon from '/images/email-icon-gold.svg'
import phoneIcon from '/images/support-icon-gold.svg'
import { ref } from 'vue'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const email = ref('')
const name = ref('')
const phone = ref('')
const message = ref('')
const toast = useToast()

const submitForm = async () => {
  try {
    if (email.value && name.value && phone.value && message.value) {
      await emailjs.send(
        'contact_service',
        'contact_form',
        {
          name: name.value,
          email: email.value,
          phone: phone.value,
          message: message.value
        },
        {
          publicKey: '2L5W87unwiN_fuPpO'
        }
      )
      toast.open({
        message: 'Email succesfully sent!',
        type: 'success',
        dismissible: true,
        position: 'top-right'
      })
    }
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      toast.open({
        message: 'Something went wrong. Please try again.',
        type: 'error',
        dismissible: true,
        position: 'top-right'
      })
      return
    }
  }
}
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;

  p {
    font-size: 1.2rem;
    padding: 0 8px;
    text-align: center;
    color: #2e2e2e;
  }
}
.contact-information-container {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 16px;
  margin-bottom: 32px;
  h1 {
    display: none;
  }

  .phone-container {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 1.2rem;
    color: #2e2e2e;

    img {
      height: 80px;
    }
  }

  .email-container {
    display: flex;
    gap: 16px;
    align-items: center;
    font-size: 1.2rem;

    img {
      height: 80px;
    }

    .email {
      text-decoration: none;
      color: #2e2e2e;
    }
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  input,
  textarea {
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #2e2e2e;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 4px;
    margin-bottom: 8px;
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;

    &:focus {
      color: #212529;
      background-color: #fff;
      border-color: #eccb91;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgb(194, 164, 96);
    }
  }
}

@media (min-width: 40rem) {
  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 128px;
    margin-bottom: 48px;

    p {
      font-size: 1.2rem;
      color: #2e2e2e;
    }

    h1 {
      font-size: 3rem;
      color: #1a1a1a;
    }
  }

  .contact-information-container {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    justify-items: center;
    background-color: white;
    padding: 16px;
    margin-bottom: 48px;

    .phone-container {
      display: grid;
      align-items: center;
      column-gap: 16px;
      grid-template-areas:
        'image header'
        'phone phone';

      h1 {
        display: flex;
        font-size: 2.5rem;
        color: #1a1a1a;
      }

      img {
        height: 80px;
      }

      .phone-numbers {
        grid-area: phone;
        align-self: center;
        justify-self: center;
        font-size: 1.2rem;

        p {
          margin: 6px 0;
          color: #2e2e2e;
        }
      }
    }

    .email-container {
      display: grid;
      align-items: center;
      column-gap: 16px;
      grid-template-areas:
        'image header'
        'email email';

      h1 {
        display: flex;
        font-size: 2.5rem;
        color: #1a1a1a;
      }

      img {
        height: 80px;
      }

      .email {
        grid-area: email;
        align-self: flex-start;
        text-decoration: none;
        color: #2e2e2e;
        font-size: 1.2rem;

        &:hover {
          color: #c2a460;
        }
      }
    }

    .divider {
      display: flex;
      height: 100%;
      width: 6px;
      background-color: #c2a460;
      border-radius: 3px;
      margin: 0 8px;
    }
  }

  .contact-form-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 48px;
    .contact-form {
      display: flex;
      flex-direction: column;
      width: 50%;

      input,
      textarea {
        padding: 6px 12px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        appearance: none;
        border-radius: 4px;
        margin-bottom: 8px;
        transition:
          border-color 0.15s ease-in-out,
          box-shadow 0.15s ease-in-out;

        .button {
          width: 100px;
        }

        &:focus {
          color: #212529;
          background-color: #fff;
          border-color: #eccb91;
          outline: 0;

          box-shadow: 0 0 0 0.25rem rgb(194, 164, 96);
        }
      }
    }
  }
}
</style>
