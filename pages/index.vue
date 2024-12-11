<template>
  <main>
    <section>
      <transition name="fade" mode="out-in">
        <!-- DEFAULT MESSAGE -->
        <div
          v-if="!sheSaidYes && !sheSaidNo && !sheSaidMaybe && !sheSaidContinue"
          class="container"
        >
          <img
            class="rounded-2xl w-full"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODl4dnltaDFsZG9rMmxrNXlzeXZiYm5hN2ZhMnFydTViMmk4OTc3diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AEWVSewz8sSm3HFoib/giphy.webp"
            alt="ask out"
          />
          <div class="flex mt-12 gap-x-3">
            <button
              @click="ifSheSaysYes"
              class="flex-1 rounded-full px-4 py-2 bg-pink-600 text-white"
            >
              YES
            </button>
            <button
              @click="ifSheSaysNo"
              class="flex-1 rounded-full px-4 py-2 bg-pink-600 text-white"
            >
              NO
            </button>
          </div>
          <div class="mt-3 flex">
            <button
              @click="ifSheSaysMaybe"
              class="flex-1 rounded-full px-4 py-2 bg-pink-600 text-white"
            >
              MAYBE
            </button>
          </div>
        </div>

        <!-- IF SHE SAYS YES -->
        <div
          v-else-if="
            sheSaidYes && !sheSaidNo && !sheSaidMaybe && !sheSaidContinue
          "
          class="container"
        >
          <img
            class="rounded-2xl w-full"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGF0cjB1b243dDI3enc5d2F2NmtjanRmNXB3b2Z3djRudHgxejV6dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3NtY188QaxDdC/giphy.webp"
            alt="yesss"
          />
          <div class="mt-12 flex">
            <button
              @click="sheSaidContinue = true"
              class="flex-1 rounded-full px-4 py-2 bg-pink-600 text-white"
            >
              CONTINUE
            </button>
          </div>
        </div>

        <!-- IF SHE SAYS NO -->
        <div
          v-else-if="
            !sheSaidYes && sheSaidNo && !sheSaidMaybe && !sheSaidContinue
          "
          class="container"
        >
          <img
            class="rounded-2xl w-full"
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNkNTgxeHkxZXB5c2pjajhiMWhoam0wdzN2czhtOTA3bGZ2NTlzcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L6NRufnOeut21YgEmc/giphy.webp"
            alt="what???"
          />
          <div class="flex mt-12 gap-x-3">
            <button
              @click="sheSaidNo = false"
              class="flex-1 rounded-full px-4 py-2 bg-pink-600 text-white"
            >
              TRY AGAIN !!!
            </button>
          </div>
        </div>

        <!-- IF SHE SAYS MAYBE -->
        <div
          v-else-if="
            !sheSaidYes && !sheSaidNo && sheSaidMaybe && !sheSaidContinue
          "
          class="container"
        >
          <img
            class="rounded-2xl w-full"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzhrdXAwYnhucHJreHdoOGZqNjdidnNvMTJnazB6dHVqMmxrd2Z0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/n1vR3RRX5eS64WtvZX/giphy.webp"
            alt="i would die???"
          />
          <div class="flex mt-12 gap-x-3">
            <button
              @click="sheSaidMaybe = false"
              class="flex-1 rounded-full px-4 py-2 bg-pink-600 text-white"
            >
              I don't want you to die
            </button>
          </div>
        </div>

        <!-- SHE SAID YES AND CONTINUE -->
        <div v-else-if="sheSaidContinue && !date && !time && !placeSubmitted" class="container">
          <img
            class="rounded-2xl w-full"
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHRsYnU4NmU3MWdpZnJ3aHQ2bDYxNW9uZXk4bXR6ZGU5bGdzbXpmOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2YWxPbinlJYX5zMc/giphy.webp"
            alt="date"
          />
          <div class="mt-12 flex">
            <VueDatePicker
              v-model="date"
              :enable-time-picker="false"
              placeholder="Select Date"
            />
          </div>
        </div>

        <!-- IF SHE PICKED DATE, TIME SHOULD BE SELECTED -->
        <div v-else-if="sheSaidContinue && date && !time && !placeSubmitted" class="container">
          <img
            class="rounded-2xl w-full"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNobGt5NnRmbW1lamtvaWZkanUxandtZTBjNGk4NG56NGwzM3Y1YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QBd2kLB5qDmysEXre9/giphy.webp"
            alt="time"
          />
          <div class="mt-12 flex">
            <VueDatePicker
              v-model="time"
              time-picker
              :range="{ disableTimeRangeValidation: true }"
              placeholder="Select Time"
            />
          </div>
        </div>

        <!-- IF SHE PICKED DATE, TIME SHOULD BE SELECTED -->
        <div v-else-if="sheSaidContinue && date && time && !placeSubmitted" class="container">
          <img
            class="rounded-2xl w-full"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3Y0aHF5emZicmpldGpsZnBtZ25pazdhc2d5YTF4d2dtOGJnYmtpZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5eFue3AX8rkYTCMj9Q/giphy.webp"
            alt="place"
          />
          <div class="mt-12">
            <input
              class="w-full rounded-full px-4 py-2 outline-none"
              placeholder="Where we go?"
              v-model="place"
            />
            <button
              @click="submitAll"
              class="w-full mt-3 rounded-full px-4 py-2 bg-pink-600 text-white"
            >There we go</button>
          </div>
        </div>

        <!-- IF SHE PICKED DATE, TIME SHOULD BE SELECTED -->
        <div v-else-if="sheSaidContinue && date && time && placeSubmitted" class="container">
          <img
            class="rounded-2xl w-full"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTExbnk2NGR6bnAxcXFhNzk4bW1xODVyODg5YzBvcThndjZ0OTZsbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VIKa3CjZDCoymNcBY5/giphy.webp"
            alt="love you"
          />
          <div class="mt-12">
            <h1 class="text-2xl text-center text-pink-600">I'm blushing right now, Thank you {{ nuxtApp.$config.public.NAME }})))</h1>
          </div>
        </div>
      </transition>
    </section>
  </main>
</template>

<script setup>
// ENV VARIABLES
const nuxtApp = useNuxtApp();

// what she said
const sheSaidYes = ref(false);
const sheSaidNo = ref(false);
const sheSaidMaybe = ref(false);

// she said yes & continue
const sheSaidContinue = ref(false);
const date = ref();
const time = ref();
const place = ref();
const placeSubmitted = ref(false);

const ifSheSaysYes = async () => {
  const telegramMessage = `*Name:* ${nuxtApp.$config.public.NAME}\n*Message:* She said *yes*!!!`;
  const telegramResult = await $fetch(
    `https://api.telegram.org/bot${nuxtApp.$config.public.BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      body: JSON.stringify({
        chat_id: +nuxtApp.$config.public.USER_ID, // Replace with the specific user's ID
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (telegramResult.ok) {
    sheSaidYes.value = true;
  }
};

const ifSheSaysNo = async () => {
  const telegramMessage = `*Name:* ${nuxtApp.$config.public.NAME}\n*Message:* She said *no*!!!`;
  const telegramResult = await $fetch(
    `https://api.telegram.org/bot${nuxtApp.$config.public.BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      body: JSON.stringify({
        chat_id: +nuxtApp.$config.public.USER_ID, // Replace with the specific user's ID
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (telegramResult.ok) {
    sheSaidNo.value = true;
  }
};

const ifSheSaysMaybe = async () => {
  const telegramMessage = `*Name:* ${nuxtApp.$config.public.NAME}\n*Message:* She said *maybe*!!!`;
  const telegramResult = await $fetch(
    `https://api.telegram.org/bot${nuxtApp.$config.public.BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      body: JSON.stringify({
        chat_id: +nuxtApp.$config.public.USER_ID, // Replace with the specific user's ID
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (telegramResult.ok) {
    sheSaidMaybe.value = true;
  }
};

const submitAll = async () => {
  const telegramMessage = `*Name:* ${nuxtApp.$config.public.NAME}\n*Date:* ${date.value.getDate()}-${date.value.getMonth() + 1}-${date.value.getFullYear()}\n*Time from:* ${time.value[0].hours}:${time.value[0].minutes}\n*Time to:* ${time.value[1].hours}:${time.value[1].minutes}\n*Place:* ${place.value}`;
  const telegramResult = await $fetch(
    `https://api.telegram.org/bot${nuxtApp.$config.public.BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      body: JSON.stringify({
        chat_id: +nuxtApp.$config.public.USER_ID, // Replace with the specific user's ID
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (telegramResult.ok) {
    placeSubmitted.value = true;
  }
}
</script>

<style>
.dp__pointer.dp__input_readonly.dp__input.dp__input_icon_pad.dp__input_reg {
  border-radius: 10px;
}
</style>
