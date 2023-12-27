let insert = document.getElementById('insert')
console.log(insert);
window.addEventListener('keydown', (obj) => {
    insert.innerHTML = `<div>
    <table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${obj.key}</td>
      <td>${obj.keyCode}</td>
      <td>${obj.code}</td>
    </tr>
  </table>
  </div>`
})

