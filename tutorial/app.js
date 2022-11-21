var formFeild = document.getElementById('formField');

function add() {

  const newField = document.createElement('input');

  newField.setAttribute('type', 'text');
  newField.setAttribute('name', 'text')
  newField.setAttribute('class', 'text')
  newField.setAttribute('size', 50);
  newField.setAttribute('placeholder', 'optional Field');
  formFeild.appendChild(newField);
}


function remove() {
  var input_tags = document.getElementsByTagName('input')
  if (input_tags.length > 2) {

    formFeild.removeChild(input_tags[(input_tags.length) - 1]);
  }

}
