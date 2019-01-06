<template>
  <section class="container">
    <div v-if="profile === undefined">GitHubプロフィール情報が見付かりませんでした。</div>
    <div v-else>
      <img :src="profile.avatar_url">
      <h1 class="title">{{ profile.username }}</h1>
    </div>
    <div class="followers">
      <ul>
        <li
          v-for="(folloer, index) in profile.followers"
          :key="index">
          <a :href="username(folloer.login)">{{ folloer.login }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { getGithubUserInfo, getGithubUserFollowers } from '~/libs/api'
export default {
  layout: 'github',
  async asyncData() {
    const profile = await getGithubUserInfo('yueguchi')
    const followers = await getGithubUserFollowers('yueguchi')
    return {
      profile: {
        username: profile.data.login,
        avatar_url: profile.data.avatar_url,
        followers: followers.data
      }
    }
  },
  data() {
    return {
      profile: undefined
    }
  },
  methods: {
    username(username) {
      const baseUrl = process.env.BASE_URL || ''
      return `${baseUrl}/users/${username}`
    }
  }
}
</script>

<style>
</style>
