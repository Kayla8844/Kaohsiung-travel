//高雄景點 API網址  https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97


// 和遠端連線
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97', true);
xhr.setRequestHeader('Content-type', 'application/json');

// 偵測連線的狀態，執行載入資料方法
xhr.onload = function () {

    // 01. 取得後端總資料
    var callbackData = JSON.parse(xhr.responseText);
    console.log(callbackData)

    // 擷取紀錄裡的資料
    var records = callbackData.result.records;
    console.log(records);

    // **---------------------------------------------------------**
    // 02. 把取得的資料印在頁面上

    var len = records.length;
    var listTitle = document.querySelector('.list_title')
    var listAll = document.querySelector('.list_all');
    var select = document.getElementById('selectId');
    var hotPlace = document.querySelectorAll('.hot_place');


    // 更新資料
    function updateList(e) {
        // 當下點的值如果等於records的Zone值，就刷新資料
        var value = e.target.value;
        var str = '';

        for (var i = 0; i < len; i++) {
            // 如果沒有查到資料的時候
            if (records[i].Zone == value) {
                if (records[i].Website == "") {
                    var content =
                        `<div class="list_data">
                            <div class="image" style="background-image: url(${records[i].Picture1});">
                                <div class="img_shadow">
                                    <p class="title"> 
                                        ${records[i].Name}&nbsp;
                                        <span class="title_zone">[${value}]</span>
                                    </p>
                                </div>
                            </div>
                            
                            <table class="inform_table">
                                <tr class="inform">
                                    <td class="inform_img">
                                        <img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_clock.png">
                                    </td>
                                    <td>
                                        <span class="inform_txt">${records[i].Opentime}</span>
                                    </td>
                                </tr>
                                <tr class="inform">
                                    <td class="inform_img">
                                        <img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_pin.png">
                                    </td>
                                    <td class="inform_content">
                                        <span class="inform_txt">${records[i].Add}</span>
                                    </td>
                                </tr>
                                <tr class="inform phone_list">
                                    <td class="inform_img">
                                        <img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_phone.png">
                                    </td>
                                    <td class="inform_content">
                                        <span class="inform_txt">${records[i].Tel}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td class="inform_content inform_web">
                                        <span class="inform_txt">目前無網站連結</span>
                                    </td>
                                </tr>
                            </table>
                        </div>`;
                    str += content;

                } else {
                    var content =
                        `<li class="list_data">
                            <a href="${records[i].Website}" target="_blank">
                                <div class="image" style="background-image: url(${records[i].Picture1});">
                                    <div class="img_shadow">
                                        <p class="title"> 
                                            ${records[i].Name}&nbsp;
                                            <span class="title_zone">[${value}]</span>
                                        </p>
                                    </div>
                                </div>

                                <table class="inform_table">
                                    <tr class="inform">
                                        <td class="inform_img">
                                            <img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_clock.png">
                                        </td>
                                        <td>
                                            <span class="inform_txt">${records[i].Opentime}</span>
                                        </td>
                                    </tr>
                                    <tr class="inform">
                                        <td class="inform_img">
                                            <img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_pin.png">
                                        </td>
                                        <td>
                                            <span class="inform_txt">${records[i].Add}</span>
                                        </td>
                                    </tr>
                                    <tr class="inform phone_list">
                                        <td class="inform_img">
                                            <img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_phone.png">
                                        </td>
                                        <td>
                                            <span class="inform_txt">${records[i].Tel}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td class="inform_web">
                                            <span class="inform_txt">前往網站 ></span>
                                        </td>
                                    </tr>
                                </table>
                            </a>
                        </li>`;
                    str += content;
                }
            }
        }

        if (str == '') {
            str += `
                <h3></h3>
                <h3 class="none">查無資料!</h3>`
        }


        listAll.innerHTML = str;
    }

    select.addEventListener('change', updateList, false);

    for (var i = 0; i < hotPlace.length; i++) {
        hotPlace[i].addEventListener('click', updateList, false)
    }


    // 一進去頁面(三民區)
    function origin() {
        var value = '三民區';
        var str = '';
        for (var i = 0; i < len; i++) {
            if (records[i].Zone == value) {
                if (records[i].Website == "") {
                    var content =
                        `<li class="list_data">
                            <div class="image" style="background-image: url(${records[i].Picture1});">
                                <div class="img_shadow">
                                    <p class="title"> 
                                        ${records[i].Name}&nbsp;
                                        <span class="title_zone">[${value}]</span>
                                    </p>
                                </div>
                            </div>
                            
                            <table class="inform_table">
                                <tr class="inform">
                                    <td></td>
                                </tr>
                                <tr class="inform">
                                    <td class="inform_img">
                                        <img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_clock.png">
                                    </td>
                                    <td>
                                        <span class="inform_txt">${records[i].Opentime}</span>
                                    </td>
                                </tr>
                                <tr class="inform">
                                    <td class="inform_img">
                                        <img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_pin.png">
                                    </td>
                                    <td class="inform_content">
                                        <span class="inform_txt">${records[i].Add}</span>
                                    </td>
                                </tr>
                                <tr class="inform phone_list">
                                    <td class="inform_img">
                                        <img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_phone.png">
                                    </td>
                                    <td class="inform_content">
                                        <span class="inform_txt">${records[i].Tel}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td class="inform_content inform_web">
                                        <span class="inform_txt">目前無網站連結</span>
                                    </td>
                                </tr>
                            </table>
                        </li>`;
                    str += content;
                } else {
                    var content =
                        `<li class="list_data">
                            <a href="${records[i].Website}" target="_blank">
                                <div class="image" style="background-image: url(${records[i].Picture1});">
                                    <div class="img_shadow">
                                        <p class="title"> 
                                            ${records[i].Name}&nbsp;
                                            <span class="title_zone">[${value}]</span>
                                        </p>
                                    </div>
                                </div>
                                <table class="inform_table">
                                    <tr class="inform">
                                        <td class="inform_img">
                                            <img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_clock.png">
                                        </td>
                                        <td>
                                            <span class="inform_txt">${records[i].Opentime}</span>
                                        </td>
                                    </tr>
                                    <tr class="inform">
                                        <td class="inform_img">
                                            <img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_pin.png">
                                        </td>
                                        <td>
                                            <span class="inform_txt">${records[i].Add}</span>
                                        </td>
                                    </tr>
                                    <tr class="inform phone_list">
                                        <td class="inform_img">
                                            <img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_phone.png">
                                        </td>
                                        <td>
                                            <span class="inform_txt">${records[i].Tel}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td class="inform_web">
                                            <span class="inform_txt">前往網站 ></span>
                                        </td>
                                    </tr>
                                </table>
                            </a>
                        </li>`;

                    str += content;
                }
            }

        }

        listAll.innerHTML = str;
    }

    origin();
};



// 連線完成
xhr.send(null);