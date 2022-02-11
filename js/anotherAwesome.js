const inputBtn = document.getElementById('inputBtn');
let count = 0;
inputBtn.addEventListener('click', function () {
    count++;
    const inputTextField = document.getElementById('inputText');
    const itemsContainer = document.getElementById('items-container');
    const inputText = inputTextField.value;
    const d = new Date();
    const day = d.getDate();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const seconds = d.getSeconds();
    
    const tr = document.createElement('tr');
    tr.innerHTML = `<th scope="row">${count}</th>
    <td>${inputText}</td>
    <td class="status">Date: ${day}, Time: ${hour}:${minute}:${seconds}</td>
    <td class="status">Pending</td>
    <td>
        <button class="btn btn-success btn-sm completeBtn">Complete</button>
        <button class="btn btn-danger btn-sm deleteBtn">Delete</button>
    </td>`;
    itemsContainer.appendChild(tr);

    inputTextField.value = '';

    const allCompleteBtn = document.getElementsByClassName('completeBtn');
    for (const completeBtn of allCompleteBtn) {
        completeBtn.addEventListener('click', function (e) {
            const btn = e.target;
            btn.setAttribute('disabled', true);
            const findAllParentChild =e.target.parentNode.parentNode.childNodes;
            const statusField = findAllParentChild[6];
            statusField.innerText = 'Complete';
            statusField.style.color = 'green';

        });
    }

    const allDeleteBtn = document.getElementsByClassName('deleteBtn');
    for (const deleteBtn of allDeleteBtn) {
        deleteBtn.addEventListener('click', function (e) {
            const itemsContainer = document.getElementById('items-container');
            itemsContainer.removeChild(e.target.parentNode.parentNode);
        });
    }
});
