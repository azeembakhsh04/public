let text = 'New Version available please download it'
let link = 'https://google.com/'
let update = true;

let updateArray = [];

function appUpdate() {
  updateArray.push(update)
  updateArray.push(text)
  updateArray.push(link);
  console.log(updateArray)
  
  return updateArray;
}