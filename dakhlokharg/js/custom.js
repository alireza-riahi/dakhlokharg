var body = document.body;

var show = document.querySelector(".show");
var del = document.querySelector(".del");
var expoet_btn = document.querySelector("#expoet_btn");
var import_btn = document.querySelector("#import_btn");
var blur = document.querySelector(".blur");

var back_btn = document.querySelector(".back_btn")


var close = document.querySelector("#close_captions")
var close_del = document.querySelector("#close_del")



var captions = document.querySelector(".alert_captions");
var a_del = document.querySelector(".alert_del");
var a_import = document.querySelector(".alert_import");
var a_export = document.querySelector(".alert_export");


var amount = document.querySelector("#amount")
var day = document.querySelector("#day")
var month = document.querySelector("#month")
var year = document.querySelector("#year")
var tozihat = document.querySelector("#tozihat")
var submit = document.querySelector("submit")


var tbody = document.querySelector("#tbody")
var alert_del = document.querySelector("#alert_del_close")



var deat = day.value + "/" + month.value + "/" + year.value;

var list = {
    amount: amount.value,
    tozihat: tozihat.value,
    deat: day.value + "/" + month.value + "/" + year.value,
};

var IncomeAndCastList = new Object();
var IncomeAndCastArray = new Array()


function getinfo() {
    
    var deat = day.value + "/" + month.value + "/" + year.value;
    IncomeAndCastList.amount = amount.value.trim();
    IncomeAndCastList.deat = day.value.trim() + "/" + month.value.trim() + "/" + year.value.trim();
    IncomeAndCastList.tozihat = tozihat.value.trim();
    return IncomeAndCastList

    
}

function local() {
    IncomeAndCastArray.push(getinfo())
    localStorage.setItem( "list" , JSON.stringify(IncomeAndCastArray))
    localStorage.setItem("list", IncomeAndCastArray);
    console.log(IncomeAndCastArray)

   localStorage.setItem("list", IncomeAndCastArray);


}


function local() {
    if (amount.value == "" || tozihat.value == "" || day.value == "" || month.value == "" || year.value == "") {

        iziToast.error({
            title: 'فیلد ها',
            message: '   را پرکنید',
            rtl: "true",
            pauseOnHover: "true"
        });


    } else {
        IncomeAndCastArray.push(getinfo())
        localStorage.setItem( "list" , JSON.stringify(IncomeAndCastArray))
        localStorage.setItem("list", IncomeAndCastArray);
        console.log(IncomeAndCastArray)
    
       localStorage.setItem("list", IncomeAndCastArray);
    
    }

}



del.addEventListener("click", function del_() {

    a_del.style.display = 'inline-block'
    document.body.classList.add("blur")

});

show.addEventListener("click", function del_() {

    captions.style.display = 'inline-block'
    document.body.classList.add("blur")

});



import_btn.addEventListener("click", function im_p() {

    a_import.style.display = 'inline-block'
    document.body.classList.add("blur")

});

expoet_btn.addEventListener("click", function ex_p() {

    a_export.style.display = 'inline-block'
    document.body.classList.add("blur")


});


body.addEventListener("click", function removemp(e) {
    if (e.target = !a_del || e.target == body || e.target == close_del || e.target == alert_del_close) {
        a_del.style.display = 'none';
        document.body.classList.remove("blur");
    }

})

body.addEventListener("click", function removemp(e) {
    if (e.target = !captions || e.target == body || e.target == close_captions || e.target == back_btn) {
        captions.style.display = 'none';
        document.body.classList.remove("blur");
    }

})
body.addEventListener("click", function removemp(e) {
    if (e.target = !a_import || e.target == body || e.target == close_import || e.target == back_btn) {
        a_import.style.display = 'none';
        document.body.classList.remove("blur");
    }

})
body.addEventListener("click", function removemp(e) {
    if (e.target = !a_export || e.target == body || e.target == close_export || e.target == back_btn) {
        a_export.style.display = 'none';
        document.body.classList.remove("blur");
    }

})



onload = function () {
    var e = document.getElementById('amount');
    e.oninput = myHandler;
    e.onpropertychange = e.oninput; // for IE8



    function myHandler() {
        document.getElementById('num-amount').innerHTML = e.value.toPersianLetter() + ' ' + 'هزار تومان';
    }
};


// apex



var options = {
    series: [{
            name: "مخارح",
            data: [400, 800, 100]
        },
        {
            name: "درامد",
            data: [700, 200, 300],
            color: "red",

        }
    ],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['فروردین', 'اردیبهشت', 'خرداد', ],
    },
    yaxis: {
        title: {
            text: 'تومان'
        }

    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


function izitosy_del() {
    iziToast.success({
        title: 'حذف',
        message: 'با موفقیت انجام شد',
        rtl: "true",
        pauseOnHover: "true"
    });

}