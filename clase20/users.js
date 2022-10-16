function Users(userData) {
    const html = `
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
            ${userData.map(user=> UserDataRow(user)).join('')}
        </tbody>
    </table>
    `;
    return (
        html
    );
}

function UserDataRow(user) {
    const html = `
    <tr>
        <th scope="row">${user.id}</th>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td>${user.email}</td>
        <td><img src="${user.avatar}"></td>
    </tr>
    `;
    return (
        html
    );
}