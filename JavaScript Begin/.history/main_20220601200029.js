var x = 10;
    console.log(typeof (x));
    x = "Hello";

    const a = 10;

    var tong = a + 5;

    var y; // y khong gan du lieu la underfined
    console.log(y);

    var z = "1000";
    tong = parseInt(z) + tong;
    console.log(tong);

    let c = 10;

    function tong2So(a, b) {
        return a + b;
    }

    var hieu2So = function (a, b) {
        return a - b;
    }

    console.log(tong2So(2, 5));

    var thuong2So = (a, b) => {
        if (b != undefined) {
            return a / b;
        } else {
            return a;
        }


    }

    console.log(typeof (thuong2So));

    console.log(thuong2So(10, 5));

    console.log(thuong2So(10)); // neu khong truyen tham so b thi no nhay vao truong hop else

    var numbers = [3,5,1,4];
    for(var i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }

    var min = numbers[0];
    for(var i = 0; i < numbers.length; i++) {
        
        if(min > numbers[i]) {
            min = numbers[i];
        }
    }
    console.log("so nho nhat la " + min);
