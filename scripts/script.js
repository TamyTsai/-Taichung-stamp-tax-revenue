$(document).ready (()=>{
    getData();
})
//等DOM元素都載入完後 就執行ready中的函數（document也可省略不打）
// 一打開頁面就要執行，但需要等DOM元素準備好才能執行的函數，就寫在這

function getData() {
    fetch('https://datacenter.taichung.gov.tw/swagger/OpenData/858839fb-a478-4b10-bcdc-f655f30b0144') //從政府資料開放平台抓取「2015臺中市印花稅徵收」json資料 //fetch會回傳一個promise物件回來（所以後面可以直接接.then .catch）
    //成功fetch到資料的話 會做的事（內容 會被傳入 then中 函數的參數response 中）
        .then(
            response => {
            return response.json() //把抓回來的資料 解析為 json物件，讓你更方便用js存取 //.json也會回傳一個promise物件回來，所以後面還可再接 .then .catch
        })
            // 對json回傳的promise物件 接 .then ，成功的話 內容 會被傳入 then中 函數的參數jsonData 中
            .then(jsonData=> {
                console.log(jsonData);
                renderChart(jsonData) //把傳過來的json內容 用 Chart.js渲染成 視覺化資料
            })
}

// 用Chart.js渲染資料 的 函數
function renderChart(data) {
    let taxSource = data.map(par => par.欄位名稱)
    // taxSource為裝有稅收來源（銀行、農漁會...）的陣列
    // map為ES6方法，會去一一拜訪陣列中的元素，並對這些元素做某些操作，再把操作後的結果蒐集成新陣列
    // par => par.欄位名稱 為 function (par) {return par.market} 之ES6箭頭函數簡寫（par為隨便取的參數名稱，目的只是為了在程式碼區塊中 有一個 可以拿來 進行 存取屬性值方法（.屬性） 的 標的 而已）
    // .欄位名稱 或['欄位名稱']可以取出 陣列中 物件 屬性「欄位名稱」 的 值
    let taxRevenue = data.map(par => par.數值)
    // taxRevenue為裝有 來自各來源 的 稅收金額 的陣列

    console.log(taxSource)
    console.log(taxRevenue)

    //
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: taxSource, 
            datasets: [{
                // label: '沒有', 
                data: taxRevenue, //變數datas 裝有 由 prices物件陣列中 物件 屬性price的值 組成的 陣列
                borderWidth: 1 //柱狀圖的邊框寬度
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true //縱軸從0開始
                    }
                }]
            }
        }
    });

}