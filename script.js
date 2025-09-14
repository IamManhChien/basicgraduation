function showMessage(type) {
  if (type === 'Lời chúc') {
    showWishesDialog();
  } else if (type === 'Kỷ niệm') {
    alert('Bản project phụ đơn giản hơn nên không tích hợp phần viết thêm được. Thôi thì chúc bạn tốt nghiệp vui vẻ kekeke');
  }
}

function showWishesDialog() {
  document.getElementById('wishesDialog').style.display = 'flex';
}

function closeWishesDialog() {
  document.getElementById('wishesDialog').style.display = 'none';
}

