const fetch = require('node-fetch')
const baseURL = 'https://api.tatsu.gg/v1/'

const APIError = require('./APIError')

class HTTP {
  constructor(client) {
    this.client = client
  }

  getHeaders() {
    return {
      Authorization: `${this.client.token}`,
      Accept: 'application/json'
    }
  }

  async requestAsync(endpoint) {
    const res = await fetch(baseURL + endpoint, {
      headers: this.getHeaders()
    })
    if (!res.ok) throw new APIError(res, await res.text())
    return await res.json()
  }

  async getProfile(user_id) {
    return await this.requestAsync(`users/${user_id}/profile`)
  }

  async getGuildRanking(guild_id) {
    return await this.requestAsync(`guilds/${guild_id}/rankings/all`)
  }

}

module.exports = HTTP