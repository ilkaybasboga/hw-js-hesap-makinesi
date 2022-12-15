const sayi1=Number(prompt("Sayi giriniz"));
const islem=prompt("Yapmak istediğiniz işlemi giriniz")
const sayi2=Number(prompt("Sayi giriniz"));
let sonuc;
if (islem == "+"){
   sonuc=sayi1+sayi2
    alert(`Sonuc = ${sonuc}`)
}
else if (islem == "-"){
   sonuc=sayi1-sayi2
    alert(`Sonuc = ${sonuc}`)
}
else if (islem == "*"){
   sonuc=sayi1*sayi2
    alert(`Sonuc = ${sonuc}`)
}
else if (islem == "/"){
   sonuc=sayi1/sayi2
    alert(`Sonuc = ${sonuc}`)
}
else {
    alert("geçerli bir değer giriniz")
}