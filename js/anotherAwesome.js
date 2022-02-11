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

            const totalCompletedTaskField = document.getElementById('totalCompletedTask');
            const totalCompletedTask = parseInt(totalCompletedTaskField.innerText);
            const newTotalTask = totalCompletedTask + 1;
            totalCompletedTaskField.innerText = newTotalTask;

            const findAllParentChild =e.target.parentNode.parentNode.childNodes;
            const statusField = findAllParentChild[4];
            statusField.innerText = 'Complete';
            statusField.style.color = 'green';

        });
    }


    const allDeleteBtn = document.getElementsByClassName('deleteBtn');
    for (const deleteBtn of allDeleteBtn) {
        deleteBtn.addEventListener('click', function (e) {
            const totalDeletedTaskField = document.getElementById('totalDeletedTask');
            const itemsContainer = document.getElementById('items-container');
            const totalDeletedTask = parseInt(totalDeletedTaskField.innerText);
            const newTotalTask = totalDeletedTask + 1;
            totalDeletedTaskField.innerText = newTotalTask;

            itemsContainer.removeChild(e.target.parentNode.parentNode);

        });
    }
});
