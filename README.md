# todo-sequelize

### 介紹

- 可以填寫資料或使用 facebook 做註冊用來登入。
- 填寫註冊或登入資料錯誤時會告知相應錯誤訊息。
- 沒有登入無法使用內部功能
- 建立完種子資料可以使用 root@example.com 及 12345678 做帳號密碼登入。
- 可以新增、修改、刪除新的一筆 todo 項目。
- 使用完可以點擊登出按鈕。
- 此專案與 todo 專案差異在練習連線關聯式資料庫 MySQL

## 使用本專案

1. 先確認有安裝 Node.js 與 npm
2. 使用 clone 將資料載入本地
3. 安裝 npm 套件
4. 新增.env 檔案並設置資料庫連線字串，
5. 啟用前先使用 npm run seed 指令建立種子資料。
6. 啟用專案指令: npm run dev，若成功運行會出現以下文字，右邊網址可以前往

```
App is listening on https://localhost:3000
```

## 開發工具

- Node.js 4.16.0
- Express 4.16.4
- Express-Handlebars 3.0.0
- Bootstrap 5.2.2
- Font-awesome 6.2.0
- MySQL
- sequelize 5.21.13
- sequelize-cli 5.5.1
- 其他詳見 package.json
