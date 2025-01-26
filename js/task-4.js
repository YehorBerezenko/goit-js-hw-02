// const hours = 14;
// const minuts = 26;

// let timestring;

// if (minuts > 0) {
//     timestring = `${hours}h. ${minuts} min.`;
//     } else {
//     timestring = `${hours}h.`;
// }

// console.log(timestring);


// const daysUntilDeadLine = 2;
// if (daysUntilDeadLine === 0) {
//     console.log('Today')
// } else if (daysUntilDeadLine === 1) {
//     console.log('Tomorrow')
// } else if (daysUntilDeadLine === 2) {
//     console.log('Overmorrow')
// } else {
//     console.log('Date in the future')
// }

// switch (daysUntilDeadLine) {
//     case 0:
//         console.log('Today') 
//         break;
    
//     case 1:
//         console.log('Tomorrow')
//         break;
    
//     case 2:
//         console.log('Overmorrow')
//         break;

//     default:
//         console.log('Date in the future')
// }

// const option = 3;
// let message;

// switch (option) {
//     case 1:
//         message='Забрать в офисе'
//         break;
//     case 2:
//         message='Доставит курьер'
//         break;
//     case 3:
//         message='Почта'
//         break;

//     default:
//         message='Менеджер свяжиться'
// }

// console.log(message);


// const sub = 'free';

// const hasAccess = sub === 'pro' || sub === 'vip';
// console.log('hasAccess:', hasAccess);


// const isOnLine = true;
// const isFriend = true;
// const isDnd = true;

// const canOpenChat = isOnLine && isFriend && !isDnd;
// console.log('Can we open the chat?', canOpenChat);

// isOnLine
// console.log("isOnLine:", isOnLine)


// let link = 'https://my-site.com/about';
// if (link.endsWith('/')) { 
//     console.log("🚀 ~ link:", link);
// } else {
//     console.log("🚀 ~ link:", link + '/'); 
// }
    


// let url = 'https://somesite.com/about';

// if (url.includes('my-site') && url.endsWith('/')) {
    
//     console.log("🚀 ~ url:", url + '/')
    
// } else {
//     console.log("🚀 ~ url:", url)
// }


// const blackListedWord1 = 'spam';
// const blackListedWord2 = 'sale';

// const string1 = 'Hello, I am prince Abdul, this is not a spam. I am offering you a million';
// const string2 = 'Biggest SALE this week, do not miss out';
// const string3 = '£fatlivesmatter advertising campaign';

// function checkSpamWord(text, spamWord1, spamWord2) {
//     if (text.toLowerCase().includes(spamWord1.toLowerCase()) ||
//         text.toLowerCase().includes(spamWord2.toLowerCase())) {
//         console.log('в тексте есть запрещенные слова');
//     } else { 
//         console.log('в тексте нет запрещенных слов');
//     }
// }

// checkSpamWord(string2, blackListedWord1, blackListedWord2);




// let c = 10;
// function calculateTotal(number) { 
//     // debugger;
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
//         sum += i;
//     }
//     return sum;
// }

// const res = calculateTotal(c);
// console.log("🚀 ~ res:", res);


// function calculateEvenTotal(number) { 
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
//         if (i % 2 === 0) { 
//             sum += i;
//         }
    
//     }
//     return sum;
// }
// const res1 = calculateEvenTotal(20);
// console.log("🚀 ~ res1:", res1);



// let counter = 0;
// while (counter > 10) {
//     console.log("🚀 ~ counter:", counter)
//     counter++;
// }

// do {
//     ++counter;
//     console.log("🚀 ~ counter:", counter)
// } while (counter > 10);




// const a = 100;
// const b = 20;

// function showASCnumbers(a, b) { 
//     console.log(a, b);
//     let temp = a;
//     if (a > b) {
//         a = b;
//         b = temp;
//      }
//      console.log(a, b);

//     for (let i = a; i < b; i++) {
//         if (i % 5 !== 0) continue 
//         console.log(i);    
    
//     }
// }

// showASCnumbers(a, b);


function getShippingCost(country) {
    
   
    let price;
switch (country) {
    case 'China':
        
        price = 100;
        console.log(`Shipping to ${country} will cost ${price} credits`);
        // return `Shipping to ${country} will cost ${price} credits`;
        break;
    case 'Chile':
        price = 250;
        console.log(`Shipping to ${country} will cost ${price} credits`);
        break;
    case 'Australia':
        price = 170;
        console.log(`Shipping to ${country} will cost ${price} credits`);
        break;
    case 'Jamaica':
        price = 120;
        console.log(`Shipping to ${country} will cost ${price} credits`);
        break;

    default:
        console.log('Sorry, there is no delivery to your country');
}
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"