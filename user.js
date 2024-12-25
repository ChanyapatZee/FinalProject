// script.js

// ข้อมูลการสั่งซื้อที่จำลองขึ้น
let orders = [
    { orderNumber: 'ORD001', orderDate: '2024-12-01', total: 1000, status: 'จัดส่งแล้ว' },
    { orderNumber: 'ORD002', orderDate: '2024-12-10', total: 500, status: 'รอดำเนินการ' },
    { orderNumber: 'ORD003', orderDate: '2024-12-15', total: 1200, status: 'จัดส่งแล้ว' }
];

// แสดงรายการสั่งซื้อ
function renderOrderHistory() {
    const orderHistoryTable = document.getElementById('order-history').getElementsByTagName('tbody')[0];
    orderHistoryTable.innerHTML = ''; // เคลียร์ข้อมูลเดิม

    orders.forEach(order => {
        const row = orderHistoryTable.insertRow();
        row.innerHTML = `
            <td>${order.orderNumber}</td>
            <td>${order.orderDate}</td>
            <td>฿${order.total}</td>
            <td>${order.status}</td>
        `;
    });
}

// ฟังก์ชันเพื่อเปิดฟอร์มแก้ไขข้อมูลส่วนตัว
function editProfile() {
    document.getElementById('edit-profile-form').style.display = 'flex';
}

// ฟังก์ชันเพื่อบันทึกข้อมูลที่แก้ไข
function saveProfile() {
    const name = document.getElementById('edit-name').value;
    const email = document.getElementById('edit-email').value;

    document.getElementById('user-name').textContent = name;
    document.getElementById('user-email').textContent = email;

    closeEditProfile(); // ปิดฟอร์มแก้ไข
}

// ฟังก์ชันเพื่อปิดฟอร์มแก้ไขข้อมูล
function closeEditProfile() {
    document.getElementById('edit-profile-form').style.display = 'none';
}

// เรียกใช้ฟังก์ชัน renderOrderHistory เมื่อโหลดหน้า
renderOrderHistory();