
$(function() {

    var selectDes,
        selectType,
        selectFill,
        selectSize,
        sum = 0,
        selectDes2,
        selectType2,
        selectFill2,
        selectSize2,
       


        oport= {
            "pos1": {"Донат": 31,
                     "Донат1": 312,
                     "Донат2": 313,
                    },
            "pos2": {"Трайфлы": 21,
                     "Трайфлы1": 221,
                     "Трайфлы2": 2221,
                    },
            "laptop": {"Капкейк": 51,
                       "Капкейк1": 52,
                       "Капкейк2": 51,
                    },
        },
        biz={
            "rest": {"forChef": ["pos1","pos2"],
                    "forChef1": ["laptop","pos2"],
                    "forChef2": ["laptop","pos1"],
                },
            "bar": {"Трайфлы": 1,
                "Трайфлы1": 1,
                "Трайфлы2": 1,
            },
            "shop": {"Капкейк": 5,
                "Капкейк1": 5,
                "Капкейк2": 5,
            },
        };



    function insertDes() {
        var html = '',
            d,i=1,
            title;

        type="rest";
        for (d in biz) {
            console.log(d);
            if(d=="rest"){

                for (title in biz[d]) {

                    for (title2 in biz[d][title]){


                       // console.log(title);
                        // console.log(biz[d][title]);
                       //  console.log(biz[d][title][title2]);
                        for (op in oport) {
                            if(op == biz[d][title][title2] ){
                                for (opp in oport[op]){

                                    html += '<div class="swiper-slide">' + oport[op][opp] +" " +oport[op] + '</div>';
                                }
                            }
                        }


                    }

                    $('.rest'+i).append(html);
                    i++;
                    html=" ";
                }

            }

        }

    }

    function changeDes() {
        sum = 0;

        selectDes = $('.cont1').filter('.active').data('p');


        recalc();
    }

    //функция проверки данных на числовой тип
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    //функция пересчёта суммы
    function recalc() {
        selectDes = isNumeric(selectDes) ? selectDes : 0;

//                 console.log('selectDes'+ selectDes);
//                 console.log('selectSize'+selectSize);
//                 console.log('selectFill'+selectFill);
        sum =selectDes;
        changeTable();
    }

    //изменение значения в поле суммы
    function changeTable() {
        $('.sum').text(sum + ' руб.');
    }


    //вызов функции формирования списка десертов
    insertDes();

    // отлавливание измениения вида десерта
    $('.cont1').change(function () {
        changeDes();
    });


});
