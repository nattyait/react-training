export default function fetchShots(){
  return fetch('https://api.dribbble.com/v1/shots?access_token=890076c326208858658efe077035f56ea2a2b478a438a621f639d6cdd660ea20')
  .then((response) => {
    return response.json()
  })
}
