const initialize = () => {

    const typeSelect = document.getElementById("type");
    const sugarSelect = document.getElementById("sugar");
    const milkSelect = document.getElementById("milk");
    const totalPriceBtn = document.querySelector("button:first-of-type");
    const brewCoffeeBtn = document.querySelector("button:last-of-type");
    const ordersList = document.getElementById("orders");
    let orders = localStorage.getItem("orders");

    if (orders) {
        orders = JSON.parse(orders);
        const ordersSelect = document.getElementById("orders");
        orders.forEach(order => {
            const option = document.createElement("option");
            option.textContent = `${order.type}, suiker: ${order.sugar}, melk: ${order.milk}`;
            ordersSelect.appendChild(option);
        });
    } else {
        orders = [];
    }

    const addOrder =(type, sugar, milk) => {
        const order = { type, sugar, milk };
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
        const option = document.createElement("option");
        option.textContent = `${order.type}, suiker: ${order.sugar}, melk: ${order.milk}`;
        const ordersSelect = document.getElementById("orders");
        ordersSelect.appendChild(option);
    }

    totalPriceBtn.addEventListener("click", () => {
        const typePriceValue = typePrice(typeSelect.value);
        const sugarPrice = sugarSelect.value * 0.5;
        const milkPrice = milkSelect.value * 0.75;
        const totalPrice = typePriceValue + sugarPrice + milkPrice;
        alert("Totale Prijs: " + totalPrice.toFixed(2) + " euro");
    });

    brewCoffeeBtn.addEventListener("click",  () => {
        const typeText = typeSelect.options[typeSelect.selectedIndex].text;
        const sugarText = sugarSelect.options[sugarSelect.selectedIndex].text;
        const milkText = milkSelect.options[milkSelect.selectedIndex].text;
        const orderText = typeText + " - " + sugarText + " - " + milkText;
        orders.push(orderText);
        const option = document.createElement("option");
        option.text = orderText;
        ordersList.add(option);
    });

    const typePrices = {
        espresso: 2.5,
        cappuccino: 3.0,
        latte: 3.5,
    };

    const typePrice = (typeValue) => {
        return typePrices[typeValue] || 0;
    };

};
    window.addEventListener("load", initialize);