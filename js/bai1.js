var slx = sessionStorage.getItem('view');
if (slx == null) slx = 0;
slx++;
sessionStorage.setItem('view', slx);
t = slx;
document.getElementById("t").innerHTML = t;
function deleteitem() {
                        sessionStorage.removeItem('view');
                        alert("Xóa thành công!");
                        location.reload(true);
                    }
function choso(){
   var a = Math.round(Math.random()*10);
   var b = Math.round(Math.random()*10);
   var c = Math.round(Math.random()*10);
   document.getElementById("a").value=a;
   document.getElementById("b").value=b;
   document.getElementById("c").value=c;
   var btn = document.getElementById("btngiai");
   btn.disabled = false;
   btn.className = 'nut';
}
var t = 0;
function dem(){
    t++;
    document.getElementById("t").innerHTML=t;
}
function error() {
    var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;
        var c = document.getElementById("c").value;

if (isNaN(a)){
document.getElementById("kq1").innerHTML = "<p>Không thể tính dược kết quả do giá trị điền vào không phải là số!</p>";
alert("Chỉ được nhập số! Hãy kiểm tra lại và nhập đúng định dạng");
return false;
}else if(isNaN(b)){
document.getElementById("kq1").innerHTML = "<p>Không thể tính dược kết quả do giá trị điền vào không phải là số!</p>";
alert("Chỉ được nhập số! Hãy kiểm tra lại và nhập đúng định dạng");
return false; 
}else if(isNaN(c)){
document.getElementById("kq1").innerHTML = "<p>Không thể tính dược kết quả do giá trị điền vào không phải là số!</p>";
alert("Chỉ được nhập số! Hãy kiểm tra lại và nhập đúng định dạng");
return false;
}
else {
return true;
}
}
btn=document.getElementById("btngiai");
btn.className="nutkhoa";
btn.disabled=true;
var ptb2 = {
   giai: function () {


       var a = document.getElementById("a").value;
       var b = document.getElementById("b").value;
       var c = document.getElementById("c").value;
       if (a == 0) {
           if (b == 0) {
               if (c == 0) {
                   document.getElementById("kq1").innerHTML = "<p>Vô số Nghiệm</p>";
}
               else {
                   document.getElementById("kq1").innerHTML = "<p>Vô Nghiệm</p>";

               }

           }
           else {
               var x = -c / b;

               str = `<p>Phương Trình có nghiệm: ${x.toFixed(2)}</p>`;
               document.getElementById("kq1").innerHTML = str;

           }
       }
       else {
           var delta = b * b - 4 * a * c;
           if (delta < 0) {
               document.getElementById("kq1").innerHTML = "<p>Vô Nghiệm</p>";
           }
           else if (delta == 0) {
               var x = -b(2 * a);
               str = `<p>Phương Trình có nghiệm kép: ${x.toFixed(2)}</p>`;
               document.getElementById("kq1").innerHTML = str;
           }
           else {
               //2 nghiệm
               var x1 = (-b + Math.sqrt(delta)) / (2 * a);
               var x2 = (-b - Math.sqrt(delta)) / (2 * a);
               var str = `<p>Phương Trình có 2 nghiệm phân biệt</p>
                            <p>X<sub>1</sub> = ${x1} </p>
                       <p>X<sub>2</sub> = ${x2} </p>
               `;
              
               document.getElementById("kq1").innerHTML = str;
            

           }
       }
      
        
   }
}