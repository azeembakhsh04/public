let text = 'New Version $url'
let link = 'https://google.com/'
let update = true;
let txt;


function appUpdate() {
  if (update) {
      let url = `<a href="${link}" target="_blank" style="text-decoration: none;"> Download apk </a>`
      let displayText = text.replace('$url', url)
      txt = ` <h4> ${displayText} </h4>`;
  } else {
       txt = '<h4> You have latest Update </h4>'
  }
  return txt;
}