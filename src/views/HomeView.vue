<template>
  <div>
    <div>
      <button @click="handleLogout">
        <router-link to="/login">
          <span class="text-sm/6 font-semibold text-gray-900">sair</span>
        </router-link>
      </button>
    </div>
    <div>
      <h1 class="text-3xl font-bold">Home</h1>
      <p class="mt-2 text-sm/6 text-gray-500">Esta é a página inicial do seu aplicativo Vue.js.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = getAuth()

const handleLogout = async () => {
  try {
    await signOut(auth)
    router.replace({ name: 'Login' })
  } catch (error) {
    console.error('Erro ao fazer logout:', error)
  }
}
</script>
