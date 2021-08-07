var options = {
    "key": "rzp_test_Ljlzw4zlDiqhVL",
    "amount": "10",
    "currency": "INR",
    "name": "vishal kumar",
    "handler": function (response) { 
        console.log(response);
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
});
document.getElementById('d-button').onclick = function (e) {
    rzp1.open();
    e.preventDefault();
}