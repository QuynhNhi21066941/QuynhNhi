document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    // Ngăn chặn hành vi mặc định của biểu mẫu
    event.preventDefault();
    
    // Hiển thị thông tin nhập từ người dùng
    var name = document.getElementById('input-name').value;
    var card = document.getElementById('input-card').value;
    var phone = document.getElementById('input-phone').value;
    var email = document.getElementById('input-emai').value;
    var customerType = document.getElementById('input-customer-type').value;
    var invoice = document.getElementById('input-invoice').value;
    var description = document.getElementById('input-description').value;

    var feedbackInfo = `
        Họ và tên: ${name}<br>
        Mã thẻ: ${card}<br>
        Số điện thoại: ${phone}<br>
        Email: ${email}<br>
        Loại KH: ${customerType}<br>
        Mã HĐ: ${invoice}<br>
        Nội dung góp ý: ${description}
    `;

    alert(feedbackInfo);
});