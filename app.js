document.addEventListener('DOMContentLoaded', function () {
    const colorBox = document.getElementById('color-box');
    const colorPicker = document.getElementById('color-picker');
    const applyColorBtn = document.getElementById('apply-color-btn');
  
    applyColorBtn.addEventListener('click', function () {
      const selectedColor = colorPicker.value;
      colorBox.style.backgroundColor = selectedColor;
    });
  });
  