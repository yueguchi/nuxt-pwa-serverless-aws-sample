import axios from 'axios'
import { GIT_API_BASE_URL } from '~/libs/const'

export function getGithubUserInfo(name) {
  return axios.get(`${GIT_API_BASE_URL}/users/${name}`)
}

export function getGithubUserFollowers(name) {
  return axios.get(`${GIT_API_BASE_URL}/users/${name}/followers`)
}
