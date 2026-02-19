let purchase_amt=3450;
let discount=0;
if(purchase_amt>=5000){
    discount = (purchase_amt/100)*20;
    purchase_amt=purchase_amt-discount;
        console.log(`Discount amount is ${discount} `);
        console.log(`Payable amount is ${purchase_amt} `);

    }
    else if(purchase_amt>=3000 && purchase_amt<5000){
         discount = (purchase_amt/100)*10;
    purchase_amt=purchase_amt-discount;
        console.log(`Discount amount is ${discount} `);
        console.log(`Payable amount is ${purchase_amt} `);
    }
    else if(purchase_amt<3000){
        console.log(`No Discount Payable amount is ${purchase_amt} `);
    }