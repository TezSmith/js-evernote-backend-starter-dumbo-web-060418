document.addEventListener('DOMContentLoaded', e => {
  let notes = document.querySelector('#notes')
  let details = document.querySelector('#details')
  let createButton = document.querySelector('#createButton')

  notes.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
    let id = e.target.parentElement.dataset.id
    fetch(`http://localhost:3000/api/v1/notes/${id}`)
    .then(res => res.json())
    .then(data => {
      let title = data["title"]
      let body = data["body"]
      let author = data["user"]["name"]
      details.innerHTML = ` <strong>${title}</strong>` + `<br>` + `${body} + <br>
      <strong>Written By:</strong> ${author}`
    })
  }
  })


  fetch('http://localhost:3000/api/v1/notes')
  .then(res => res.json())
  .then(json => {
    let list = json.map(note => {
      return `<li data-id=${note.id}><a href="#">${note.title}</a></li>`
    })
    notes.innerHTML = list.join("")
  })

  // function showForm() {
  //   let show = function (elem) {elem.classList.add('is-visible');}
  // }
  //
  //  createButton.addEventListener('click' e => {
  //    if (e.target.tagName === 'A') {
  //    let id = e.target.parentElement.dataset.id
  //   fetch('http://localhost:3000/api/v1/notes', {method: "POST",
  //       {body: JSON.stringify("title": ${}, "description": ${})}
  //     }).then(res => res.json())
  //   }}

})
