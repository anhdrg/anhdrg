function insertTextOnImage() {
    let outputURL = null;

    // Lắng nghe sự kiện khi người dùng nhấn nút 'Tạo Ảnh'
    document.getElementById('create-image').addEventListener('click', function() {
        const text = document.getElementById('text-input').value;
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const image = document.getElementById('output-image');
        
        // Kiểm tra xem đã chọn hình ảnh chưa
        if (image.src && image.src.length > 0) {
            // Đảm bảo hình ảnh đã được tải
            image.onload = function() {
                canvas.width = image.width;
                canvas.height = image.height;

                context.drawImage(image, 0, 0);
                context.font = '300 24px "Times New Roman", Times, serif'; // Đặt font weight là 300
                context.fillStyle = 'white';
                context.textAlign = 'right';
                context.textBaseline = 'top';

                // Vẽ chữ ở góc phải phía trên của ảnh
                const x = canvas.width;
                const y = 0;
                context.fillText(text, x, y);

                // Chuyển canvas thành hình ảnh và hiển thị
                outputURL = canvas.toDataURL('image/jpeg');
                document.getElementById('output-image').src = outputURL;
            };
        }
    });
    
    // Lắng nghe sự kiện khi người dùng nhấn nút 'Tải Xuống'
    document.getElementById('download-image').addEventListener('click', function() {
        if (outputURL) {
            const downloadLink = document.createElement('a');
            downloadLink.href = outputURL;
            downloadLink.download = 'image_with_text.jpg';
            downloadLink.click();
        }
    });
}

insertTextOnImage();
