const inputBtn = document.getElementById('inputBtn');

inputBtn.addEventListener('click', function () {
    const inputTextField = document.getElementById('inputText');
    const totalTaskField = document.getElementById('totalTask');
    const itemsContainer = document.getElementById('items-container');
    const totalTask = parseInt(totalTaskField.innerText);
    const inputText = inputTextField.value;
    const newTotalTask = totalTask + 1;
    totalTaskField.innerText = newTotalTask;
    
    const tr = document.createElement('tr');
    tr.innerHTML = `<th scope="row">${newTotalTask}</th>
    <td>${inputText}</td>
    <td>Pending</td>
    <td>
        <button class="btn btn-success btn-sm">Complete</button>
        <button class="btn btn-danger btn-sm" id="deleteBtn">Delete</button>
    </td>`;
    itemsContainer.appendChild(tr);

    inputTextField.value = '';

});
const deleteBtn = document.getElementById('deleteBtn');
console.log(deleteBtn);
deleteBtn.addEventListener('click', function () {
    const totalDeletedTaskField = document.getElementById('totalDeletedTask');
    const totalDeletedTask = parseInt(totalDeletedTaskField.innerText);
    const newTotalTask = totalDeletedTask + 1;
    totalDeletedTaskField.innerText = newTotalTask;
    console.log('done');
});