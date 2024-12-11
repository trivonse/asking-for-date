<template>
  <div>
    <NuxtPwaManifest />
    <NuxtPage />
  </div>
</template>

<script>
useHead({
  title: 'Ask you out?',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/icon512_rounded.png'
    }
  ]
})
</script>
