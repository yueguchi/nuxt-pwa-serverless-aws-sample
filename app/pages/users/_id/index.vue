<template>
  <section class="container">
    <div>
      <h1 class="title">
        username: {{ $route.params.id }}
      </h1>
    </div>
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
  validate({ params }) {
    return /^\S+$/.test(params.id)
  },
  async asyncData(context) {
    const profile = await getGithubUserInfo(context.params.id)
    const followers = await getGithubUserFollowers(context.params.id)
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
  created() {
    if (!process.server) console.log('created')
  },
  methods: {
    username(username) {
      return `/users/${username}`
    }
  }
}
</script>

<style>
</style>
