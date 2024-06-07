//Override console.log
// دیگه به تعداد تمام هر کنسول این پیام رو نمایش میده
const oldLogger = console.log;
console.log = function() {
    oldLogger("###### OOps! we are in production mode! ######");
};

console.log("My %s has %d years", "cat" , 2.65);
console.log("My %s has %i years", "cat" , 2.65);
console.log("My %o has %i years", "cat" , 2.65); // کت به آبجکت تبدیل شد

// console.log(console.log); // => [function: log]

// console.clear() // بعد از هر اجرا کنسول رو پاک میکنه