const HTTP      = require('./HTTP')

class Client {

  /**
  * @param {string} opts Tatsu API API token
  */

  constructor(opts) {
    if (typeof(opts) === 'string') opts = { token: opts }
    if (!opts) throw new Error('No token found for Tatsu\'s API.')

    this.token = opts.token
    this.http  = new HTTP(this)
  }

  async getProfile(user_id) {
    return await this.http.getPlayer(user_id)
  }


  async getGuildRanking(guild_id) {
    return await this.http.getClub(guild_id)
  }

}

module.exports = Client