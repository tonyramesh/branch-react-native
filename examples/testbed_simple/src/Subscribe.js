import branch from 'react-native-branch'

console.info("Subscribing to Branch links")

// {
//   "debugMode": true,
//   "liveKey": "key_live_xxxx",
//   "testKey": "key_test_yyyy",
//   "useTestInstance": true,
//   "delayInitToCheckForSearchAds": true,
//   "appleSearchAdsDebugMode": true
// }

let key = {
  "liveKey": "key_live_jnFOgSy0CLIEbPhiS980ccdoxznE8aou",
  "testKey": "key_test_epyPpLw3zPQqdHklHXY5jfmkAyat5cbm"
};
branch.subscribe(key, ({ error, params }) => {
  if (error) {
    console.error("Error from Branch: " + error)
    return
  }
  console.info("Received link response from Branch")

  console.log("params: " + JSON.stringify(params))
})
