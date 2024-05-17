## 簡介
- [Demo Link](https://tamytsai.github.io/Taichung-stamp-tax-revenue/)
- 本專案為展示2015年11月臺中市印花稅徵收資料的頁面
- 以HTML、CSS及JavaScript撰寫，為一頁式靜態網頁
- 使用Bootstrap表格（Table）樣式美化表格
- 運用Flexbox操縱部分元素排版
- 使用ES6、jQuery使JavaScript語法變得簡潔（箭頭函式、簡化DOM控制等）
- 採用UJS寫法，維持HTML簡潔
- 運用AJAX fetch外部（政府資料開放平臺）API，再使用ES6方法擷取其中重要資料，展示於本專案頁面

## 畫面
![截圖 2024-05-17 專案畫面](https://github.com/TamyTsai/Taichung-stamp-tax-revenue/assets/97825677/28ca2fab-2ea4-4cc1-9dd7-852b3849c61d)

## 安裝
### 取得專案
```bash
git clone https://github.com/TamyTsai/Taichung-stamp-tax-revenue.git
```
### 移動到專案內
```bash
cd Taichung-stamp-tax-revenue
```

## 資料夾及檔案說明
- scripts - JS檔案放置處
  - jquery-3.3.1.min.js - jQuery檔案
  - script.js - 頁面JS檔案，串接外部API
- styles - 樣式放置處
  - style.css - 頁面樣式檔案
- index.html - 頁面HTML檔

## 專案技術
- HTML
- CSS
  - Bootsrap v5.3.2
  - Flexbox
- JavaScript
  - jQuery v3.3.1
  - ES6
  - AJAX
- API串接
