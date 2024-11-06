// script.js

// 定義帽子資料，每項目包含圖片路徑、連結和描述
const hats = [
    { src: 'image/hat2.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v21/', alt: '遮陽帽' },
    { src: 'image/hat3.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v2/', alt: '質感蝴蝶帽' },
    { src: 'image/hat1.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v21/', alt: '生日帽' },
    { src: 'image/hat4.jpg', link: 'https://k6drk.zappar.io/3666870984989673197/v3/', alt: '大理石漁夫帽' },
    { src: 'image/hat5.jpg', link: 'https://k6drk.zappar.io/3666870984989673197/v5/', alt: '棕色漁夫帽' },
    { src: 'image/hat6.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v4/', alt: '楓葉棒球帽' },
    { src: 'image/hat7.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v16/', alt: '藍大理石棒球帽' },
    { src: 'image/hat8.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v17/', alt: '石頭棒球帽' },
    { src: 'image/hat9.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v11/', alt: '深綠彼得潘帽' },
    { src: 'image/hat10.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v9/', alt: '淺綠彼得潘帽' },
    { src: 'image/hat11.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v8/', alt: '白彼得潘帽' },
    { src: 'image/hat12.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v18/', alt: '黑小圓帽' },
    { src: 'image/hat13.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v6/', alt: '粉小圓帽' },
    { src: 'image/hat14.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v20/', alt: '安全帽' },
    { src: 'image/hat15.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v22/', alt: '啤酒帽' },
    { src: 'image/hat16.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v13/', alt: '棕高圓帽' },
    { src: 'image/hat17.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v14/', alt: '紅高圓帽' },
    { src: 'image/hat18.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v15/', alt: '白高圓帽' },
    { src: 'image/hat19.jpg', link: 'https://webxr.run/R97GargNvwR2a', alt: '麻質魔術帽' },
    { src: 'image/hat20.jpg', link: 'https://webxr.run/eol26ap3rJeGX', alt: '布質魔術帽' },
    { src: 'image/hat21.jpg', link: 'https://webxr.run/baPN0MMMAx7JG', alt: '木質魔術帽' },
    { src: 'image/hat22.jpg', link: 'https://webxr.run/vGXYYyyo6zZ2', alt: '麻質嬰兒帽' },
    { src: 'image/hat23.jpg', link: 'https://webxr.run/Gbxo9DEJm48My', alt: '布質質嬰兒帽' },
    { src: 'image/hat24.jpg', link: 'https://webxr.run/Y9d15L9pdWz36', alt: '木質嬰兒帽' },
    { src: 'image/hat34.jpg', link: 'https://webxr.run/2ADn0J2G9AkRd', alt: '棉質遮陽帽' },
    { src: 'image/hat35.jpg', link: 'https://webxr.run/NOWGl0ZkNR1LW', alt: '布質遮陽帽' },
    { src: 'image/hat36.jpg', link: 'https://webxr.run/MM55pbXeeeow0', alt: '藍織質狗耳帽' },
    { src: 'image/hat37.jpg', link: 'https://webxr.run/77kZlygzgEAMJ', alt: '塑膠質狗耳帽' },
    { src: 'image/hat38.jpg', link: 'https://webxr.run/dxmg77N673yJ', alt: '白毛質狗耳帽' },
    { src: 'image/hat39.jpg', link: 'https://webxr.run/r8J5Wakb0mVR', alt: '棉質斗笠' },
    { src: 'image/hat40.jpg', link: 'https://webxr.run/A4WVbDJy8OZ9R', alt: '木質斗笠' },
    { src: 'image/hat41.jpg', link: 'https://webxr.run/09Y4oO6xeRE7N', alt: '布質斗笠' },
    { src: 'image/hat42.jpg', link: 'https://webxr.run/8VGDX9Jx1MOW', alt: '木質牛仔帽' },
    { src: 'image/hat43.jpg', link: 'https://webxr.run/ZENXrM1pOvGxl', alt: '布質牛仔帽' },
    { src: 'image/hat44.jpg', link: 'https://webxr.run/ENw9D81kOXpQ', alt: '麻質牛仔帽' },
    { src: 'image/hat45.jpg', link: 'https://webxr.run/ROG6M0LEM2A0', alt: '木質遮陽帽' },

    // 按需添加更多帽子資料
];


// 找到 .hat-gallery 容器
const hatGallery = document.querySelector('.hat-gallery');

// 動態生成帽子圖片的 HTML，並插入到 .hat-gallery 中
hats.forEach(hat => {
    const hatLink = document.createElement('a');
    hatLink.href = hat.link;
    hatLink.classList.add('hat-item');

    const hatImage = document.createElement('img');
    hatImage.src = hat.src;
    hatImage.alt = hat.alt;

    const hatLabel = document.createElement('span');
    hatLabel.classList.add('hat-label');
    hatLabel.textContent = hat.alt;  // 使用 alt 文字作為標籤

    hatLink.appendChild(hatImage);
    hatLink.appendChild(hatLabel);
    hatGallery.appendChild(hatLink);
});

// 點擊圖片時添加動畫效果
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.hat-gallery img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            img.classList.add('clicked');
            // 一段時間後移除動畫，以便下次點擊可以重複觸發
            setTimeout(() => {
                img.classList.remove('clicked');
            }, 300);
        });
    });
});

// 預載所有帽子圖片以提升用戶體驗
hats.forEach(hat => {
    const img = new Image();
    img.src = hat.src;
});
