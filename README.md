# Tatsu's API

**Tatsu-API is an API wrapper for Tatsu in Javascript**

## Starting

`npm install tatsu-api`

```javascript
const Tatsu = require("tatsu-api")
const token      = "Your Token" // Do t!apikey on Tatsu Lounde to get a token
const tatsu     = new Tatsu.Client(token)

;(async() => {
  await tatsu.getProfile("user_id")
  await tatsu.getGuildRanking("guild_id")
})()
```

## Documentation

SOON