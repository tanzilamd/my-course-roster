# React Course Registration

I have made a React SPA application. It's a practice project. I used state for data storing here.

## Features

-   You can add courses to cart by clicking `select` button
-   Course names will be added automatically
-   Total credit hour is 20, you cannot buy a single course if it will be over, a sweet toast will be showed
-   Total price calculation

## State Management

I used total 4states in this project. Those are `cartItems`, `remainingHours`, `totalCredits`, `totalPrice`. I kept all of them in `Body.jsx` file. I sent them as a props in another components to get their values. I also changed their values by using state's `set` function. States types were `array` & `number`.
