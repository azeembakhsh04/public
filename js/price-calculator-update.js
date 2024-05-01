let text = 'New Version available please download it'
let link = 'https://google.com/'
let newVersion = 0.2;

let updateArray = [];

function appUpdate() {
  updateArray.push(newVersion)
  updateArray.push(text)
  updateArray.push(link);
  console.log(updateArray)
  
  return updateArray;
}