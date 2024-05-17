$(document).ready (()=>{
    getData();
})
// jQuery寫法：等DOM元素都載入完後 就執行ready中的函數（document也可省略不打）
// 一打開頁面就要執行，但需要等DOM元素準備好才能執行的函數，就寫在這
// ES6箭頭函數寫法

function getData() {
    fetch('https://datacenter.taichung.gov.tw/swagger/OpenData/858839fb-a478-4b10-bcdc-f655f30b0144') //從 政府資料開放平台 抓取「2015年11月臺中市印花稅徵收」json資料 
    //fetch會回傳一個promise物件回來（所以後面可以直接接.then .catch）
    //.then為 成功fetch到資料的話 會做的事（內容 會被傳入 then中 函數的參數response 中）
        .then(
            response => {
            return response.json() //把抓回來的資料 解析為 json物件，讓你更方便用js存取 //.json()也會回傳一個promise物件回來，所以後面還可再接 .then .catch
        })
            // 對json回傳的promise物件 接 .then ，成功的話 內容 會被傳入 then中 函數的參數jsonData 中
            .then(jsonData=> {
                console.log(jsonData);
                getSourceAndRevenue(jsonData);
            })
}

// 將 物件陣列中 各物件 的「欄位名稱」屬性 及 「數值」屬性 所對應的 值 蒐集起來，各自形成新陣列，並consloe.log
// 將HTML表格中的資料內容替換掉
function getSourceAndRevenue(data) {
    let taxSource = data.map(par => par.欄位名稱)
    // taxSource為裝有稅收來源（銀行、農漁會...）的陣列
    // map為ES6方法，會去一一拜訪陣列中的元素，並對這些元素做某些操作，再把操作後的結果蒐集成新陣列
    // par => par.欄位名稱 為 function (par) {return par.market} 之ES6箭頭函數簡寫（par為隨便取的參數名稱，目的只是為了在程式碼區塊中 有一個 可以拿來 進行 存取屬性值方法（.屬性） 的 標的 而已）
    // .欄位名稱 或['欄位名稱']可以取出 陣列中 物件「欄位名稱」屬性 對應的值
    let taxRevenue = data.map(par => par.數值)
    // taxRevenue為裝有 來自各來源 的 稅收金額 的陣列

    console.log(taxSource);
    console.log(taxRevenue);

    for (var i = 0; i < 33; i++) {
        $(`#taxSource${i}`).html(taxSource[i]);
        $(`#taxRevenue${i}`).html(taxRevenue[i]);
    }
    // 以jQuery寫法抓取HTML元素，並更改其內容
    // 以ES6寫法串接變數與字串
}





