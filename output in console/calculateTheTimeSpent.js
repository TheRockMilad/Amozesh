const doSomething = function () {
  console.log("Hello");
};

const measureDoingSomething = function () {    // این تابع زمان اجرای تابع مورد نظر رو بررسی میکنه
  console.time("doSomething()");

  doSomething();

  console.timeEnd("doSomething()");  // اینجا بهش میگیم تموم شده 
};
measureDoingSomething();
