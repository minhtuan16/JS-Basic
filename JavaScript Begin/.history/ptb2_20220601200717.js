var pt = function(a, b, c) {
    if (a != undefined && b != undefined && c != undefined) {
        if (a != null) {
            var delta = b*b - 4*a*c;
            if (delta < 0) {
                console.log("PT vo nghiem"); 
            } else if (delta === 0) {
                var x = -b/(2*a);
            } else {
                var x1 = (-b + Math.sqrt(delta)) / 2*a;
                var x2 = (-b + Math.sqrt(delta)) / 2*a;
            }
               
        }           
        
    }
    
}