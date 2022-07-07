const goods =
    [{
        "goodsName": "Sewing machine",
        "goodsImg": "https://cdn.pixabay.com/photo/2014/03/25/16/58/sewing-machine-297770_960_720.png",
        "goodsType": "tool",
        "goodsMaxNumber": 500,
        "goodsImpactFigures": 3000,
        "goodsPrice": 100000,
        "goodsPossessions": 0,
    },
    {
        "goodsName": "ETF Stock",
        "goodsImg": "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png",
        "goodsType": "investment",
        "goodsMaxNumber": -1,
        "goodsImpactFigures": 0.1,
        "goodsPrice": 300000,
        "goodsPossessions": 0,
    },
    {
        "goodsName": "ETF Bonds",
        "goodsImg": "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png",
        "goodsType": "investment",
        "goodsMaxNumber": -1,
        "goodsImpactFigures": 0.01,
        "goodsPrice": 300000,
        "goodsPossessions": 0,
    },
    {
        "goodsName": "shoe store",
        "goodsImg": "https://cdn.pixabay.com/photo/2016/03/31/19/42/clothes-1295223_960_720.png",
        "goodsType": "real estate",
        "goodsMaxNumber": 1000,
        "goodsImpactFigures": 50000,
        "goodsPrice": 500000,
        "goodsPossessions": 0,
    },
    {
        "goodsName": "Tailor",
        "goodsImg": "https://cdn.pixabay.com/photo/2021/12/24/20/17/fashion-6891713_960_720.png",
        "goodsType": "real estate",
        "goodsMaxNumber": 500,
        "goodsImpactFigures": 100000,
        "goodsPrice": 1000000,
        "goodsPossessions": 0,
    },
    {
        "goodsName": "House",
        "goodsImg": "https://cdn.pixabay.com/photo/2013/07/13/11/42/house-158500_960_720.png",
        "goodsType": "real estate",
        "goodsMaxNumber": 100,
        "goodsImpactFigures": 300000,
        "goodsPrice": 20000000,
        "goodsPossessions": 0,
    },
    {
        "goodsName": "TownHouse",
        "goodsImg": "https://cdn.pixabay.com/photo/2016/06/01/17/43/house-1429409_960_720.png",
        "goodsType": "real estate",
        "goodsMaxNumber": 100,
        "goodsImpactFigures": 700000,
        "goodsPrice": 40000000,
        "goodsPossessions": 0,
    },
    {
        "goodsName": "Mansion",
        "goodsImg": "https://cdn.pixabay.com/photo/2017/10/30/20/52/condominium-2903520_960_720.png",
        "goodsType": "real estate",
        "goodsMaxNumber": 20,
        "goodsImpactFigures": 1000000,
        "goodsPrice": 1000000000,
        "goodsPossessions": 0,
    },
    {
        "goodsName": "Industrial Space",
        "goodsImg": "https://cdn.pixabay.com/photo/2012/05/07/17/35/factory-48781_960_720.png",
        "goodsType": "real estate",
        "goodsMaxNumber": 10,
        "goodsImpactFigures": 10000000,
        "goodsPrice": 7000000000,
        "goodsPossessions": 0,
    },
    {
        "goodsName": "Hotel Skyscraper",
        "goodsImg": "https://pixabay.com/ja/vectors/%e3%83%9b%e3%83%86%e3%83%ab-%e7%ad%89%e5%b0%ba%e6%80%a7-%e9%83%bd%e5%b8%82-%e3%83%99%e3%82%af%e3%83%88%e3%83%ab-3635248/",
        "goodsType": "real estate",
        "goodsMaxNumber": 5,
        "goodsImpactFigures": 25000000,
        "goodsPrice": 10000000000,
        "goodsPossessions": 0,
    },
    {
        "goodsName": "Bullet-Speed Sky Railway",
        "goodsImg": "https://cdn.pixabay.com/photo/2013/07/13/10/21/train-157027_960_720.png",
        "goodsType": "real estate",
        "goodsMaxNumber": 1,
        "goodsImpactFigures": 30000000000,
        "goodsPrice": 10000000000000,
        "goodsPossessions": 0,
    }
]

const config ={
    initialPage: document.getElementById("initialPage"),
    mainPage: document.getElementById("mainPage"),
}

class UserAccount{
    constructor(name, goodsObjList) {
        this.name = name;
        this.age = 20;
        this.dateFrom20 = 0;
        this.amountOwned = 5000000000;//50000
        this.clickCount = 0;
        this.incomePerClick = 7000;
        this.incomePerSecond = 0;
        this.stock = 0;
        this.goodsObjList = goodsObjList;
    }

    clickActionTie(price) {
        this.amountOwned += price;
        return this.amountOwned;
    }


}

class Goods{
    constructor(name, img, type, maxNumber, impactFigures, price, possessions) {
        this.name = name;
        this.img = img;
        this.type = type;
        this.maxNumber = maxNumber;
        this.impactFigures = impactFigures;
        this.price = price;
        this.possessions = possessions;
    }

    stockPriceChanger() {
        let currPrice = this.gPrice;
        this.gPrice += currPrice * 0.1;
        return this.gPrice;
    }

    // ETF銘柄の購入金額判定関数
}

const goodsObject = [];
for (let gOI = 0; gOI < goods.length; gOI++) {
    goodsObject.push(new Goods(goods[gOI]["goodsName"], goods[gOI]["goodsImg"], goods[gOI]["goodsType"], goods[gOI]["goodsMaxNumber"], goods[gOI]["goodsEffect"], goods[gOI]["goodsPrice"], goods[gOI]["goodsPossessions"]));
}

class View {
    static initialPage() {
        let container = document.createElement("div");

        container.innerHTML =
        `
        <div class="vh-100 d-flex justify-content-center align-items-center">
            <div class="d-flex align-items-center col-md-6 col-8">
                <div class="bg-lightGray text-center p-4">
                        <h2 class="pb-3">Clicker Empire Game</h2>
                        <form>
                            <div class="form-row pb-3">
                                <input type="text" class="form-control" placeholder="Your name">
                            </div>
                        </form>
                        <div class="d-flex justify-content-between">
                            <div class="col-6 pl-0">
                                <button type="submit" class="btn btn-primary col-12" id="newGame">New</button>
                            </div>
                            <div class="col-6 pr-0">
                                <button type="submit" class="btn btn-primary col-12" id="login">Login</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        `

        return config.initialPage.append(container);
    }



    static mainPage(user) {
        let container = document.createElement("div");

        container.innerHTML =
        `
            <div class="d-flex justify-content-center p-md-5 pb-5" style="height: 100vh;">
                <div class="bg-baioBlue p-2 d-flex col-md-11 col-lg-10">
                    <div id="tieStatus" class="bg-midBlue p-2 col-4">

                    </div>
                    <div class="col-8">
                        <div id="userInfo" class="p-1 bg-midBlue">

                        </div>
                        <div id="displayItems" class="bg-midBlue mt-2 p-1 overflowAuto flowHeight">

                        </div>
                        <div class="d-flex justify-content-end mt-2">
                            <div class="border p-2 mr-2 hover" id="reset">
                                <i class="fas fa-undo fa-2x text-white"></i>
                            </div>
                            <div class="border p-2 hover" id="save">
                                <i class="fas fa-save fa-2x text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        container.querySelectorAll("#tieStatus")[0].append(View.makeTieStatus(user));
        container.querySelectorAll("#userInfo")[0].append(View.makeUserInfo(user));
        container.querySelectorAll("#displayItems")[0].append(View.makeDisplayItems(user));

        container.querySelectorAll("#reset")[0].addEventListener("click", function() {
            Controller.resetGame(user);
        });

        container.querySelectorAll("#save")[0].addEventListener("click", function() {
            Controller.gameSave(user);
            Controller.timerStop();
            Controller.initializePage();
        });

        return config.mainPage.append(container);
    }

    static makeTieStatus(user) {
        let container = document.createElement("div");

        container.innerHTML =
        `
            <div class="bg-baioBlue text-lightGray text-center">
                <h5>${user.clickCount} Tie</h5>
                <p>one click Net income ¥${user.incomePerClick}</p>
            </div>
            <div class="p-2 pt-5 d-flex justify-content-center " >
                <img src="https://cdn.pixabay.com/photo/2016/01/20/06/09/necktie-1150989_960_720.png" alt=""  class="col-12 py-2 hover imgFit" id="jacket">
            </div>
        `

        container.querySelectorAll("#jacket")[0].addEventListener("click", function() {
            Controller.tieClick(user);
        })

        return container;
    }

    static makeUserInfo(user) {
        let container = document.createElement("div");
        container.classList.add("d-flex", "flex-wrap", "p-1", "justify-content-around");

        container.innerHTML =
        `
            <div class="bg-baioBlue text-lightGray text-center col-12 col-sm-5 border-midBlue">
                <p>${user.name}</p>
            </div>
            <div class="bg-baioBlue text-lightGray text-center col-12 col-sm-5 border-midBlue">
                <p>${user.age} years old</p>
            </div>
            <div class="bg-baioBlue text-lightGray text-center col-12 col-sm-5 border-midBlue">
                <p>${user.dateFrom20} days</p>
            </div>
            <div class="bg-baioBlue text-lightGray text-center col-12 col-sm-5 border-midBlue">
                <p>¥ ${Math.floor(user.amountOwned)}</p>
            </div>
        `

        return container;
    }

    static makeDisplayItems(user) {
        let container = document.createElement("div");

        for (let i = 0; i < user.goodsObjList.length; i++) {
            let div = document.createElement("div");
            div.classList.add("text-lightGray", "d-sm-flex", "align-items-center", "m-1", "bg-baioBlue", "hover", "hover-border");

            div.innerHTML =
            `
                <div class="d-sm-block p-1 col-sm-3">
                    <img src="${user.goodsObjList[i].img}" alt="" class="img-fluid">
                </div>
                <div class="col-sm-9">
                    <div class="d-flex justify-content-between">
                        <h4>${user.goodsObjList[i].name}</h4>
                        <h4>${user.goodsObjList[i].possessions}</h4>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>¥ ${user.goodsObjList[i].price}</p>
                        <p class="text-greige">${Controller.goodsEffectUnit(user.goodsObjList[i].type, user.goodsObjList[i].impactFigures)}</p>
                    </div>
                </div>
            `
            div.addEventListener("click", function(){
                Controller.renderingPurchasePage(user, i);
            })

            container.append(div);
        }

        return container;
    }

    static makePurchasePage(user, index) {
        let container = document.createElement("div");
        container.innerHTML =
        `
            <div class="bg-midBlue p-2 m-1 text-lightGray">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4>${user.goodsObjList[index].name}</h4>
                            <p>Max purchases: ${Controller.infiniteOrOther(user.goodsObjList[index].maxNumber)}</p>
                            <p>Price: ￥${user.goodsObjList[index].price}</p>
                            <p>Get ￥${Controller.goodsEffectUnit(user.goodsObjList[index].type, user.goodsObjList[index].impactFigures)}</p>
                    </div>
                    <div class="p-2 d-sm-block col-sm-5">
                        <img src="${user.goodsObjList[index].img}" class="img-fluid">
                    </div>
                </div>
                <p>How many would you like to buy?</p>
                <input type="number" placeholder="0" class="col-12 form-control">
                <p class="text-right" id="totalPrice">total: ￥0</p>
                <div class="d-flex justify-content-between pb-3">
                    <button class="btn btn-outline-primary col-5 bg-light" id="back">Go Back</button>
                    <button class="btn btn-primary col-5" id="purchase">Purchase</button>
                </div>
            </div>
        `

        container.querySelectorAll("#purchase")[0].addEventListener("click", function(){
            let quantity = parseInt(container.querySelectorAll(".form-control").item(0).value);
            Controller.purchaseGoods(user, quantity, index);
        });

        container.querySelectorAll("#back")[0].addEventListener("click", function(){
            Controller.renderingDisplayItems(user);
        });

        return container;
    }


    static kindOfImpactFigures(goods, type){
        if(type=="tool") return goods.perMoney + " /click";
        else return goods.impactFigures + " /sec";
    }
}



class Controller {

    timer;

    static newGameStart() {
        View.initialPage();
        let newGameBtn = config.initialPage.querySelectorAll("#newGame")[0];
        newGameBtn.addEventListener("click", function(){
            let nameInput = config.initialPage.querySelectorAll("input")[0].value;
            if (nameInput == "") {
                alert("Please put your name!")
            } else {
                if (localStorage.getItem(`${nameInput}`) != null) {
                    alert("This name is already in use.")
                } else {
                    let user = Controller.createNewUserAccount(nameInput);
                    Controller.goToMainPage(user);
                }
            }
        })

        let loginBtn = config.initialPage.querySelectorAll("#login")[0];
        loginBtn.addEventListener("click", function() {
            let nameInput = config.initialPage.querySelectorAll("input")[0].value;
            if (nameInput == "") {
                alert("Please put your name!")
            } else {
                if (localStorage.getItem(`${nameInput}`) === null) {
                    alert("This name is not saved.")
                } else {
                    let user = JSON.parse(localStorage.getItem(`${nameInput}`));
                    Controller.goToMainPage(user);
                }
            }
        })
    }

    static goToMainPage(user) {
        config.initialPage.classList.add("d-none");
        View.mainPage(user);
        //Controller.updatedEverySecond(user);
    }

    static goodsEffectUnit(type, impactFigures) {
        if (type == "tool") return impactFigures + " /click";
        else return impactFigures + " /sec";
    }

    static purchaseGoods(user, quantity, index) {
        let goods = user.goodsObjList[index];
        let purchasePrice = goods.price * quantity;
        if (goods.name == "ETF Stock") purchasePrice = Controller.eTFStockPurchasePrice(quantity, goods.price);

        if (user.amountOwned < purchasePrice) {
            alert ("You don't have enough money.");
        } else if (goods.possessions + quantity > goods.maxNumber && goods.maxNumber != -1) {
            alert (`Maximum purchase is ${goods.maxNumber} piece.`);
        } else {
            if (goods.type == "tool") {
                Controller.updateIncomePerClick(user, quantity, index);
            } else if (goods.name == "ETF Stock") {
                Controller.updateStock(user, quantity, index);
            } else if (goods.name == "ETF Bonds") {
                Controller.updateBonds(user, quantity, index);
            } else if (goods.type == "real estate") {
                Controller.realEstatePurchase(user, index, quantity);
            }
        }

        Controller.renderingUserInfo(user);
        Controller.renderingDisplayItems(user);
    }

    static updateIncomePerClick(user, quantity, index) {
        let goods = user.goodsObjList[index];

        goods.possessions += quantity;
        user.incomePerClick += goods.impactFigures * quantity;
        user.amountOwned -= goods.price * quantity;

        Controller.renderingTieStatus(user);
    }

    static updateStock(user, quantity, index) {
        let goods = user.goodsObjList[index];
        let stockPrice = Controller.eTFStockPurchasePrice(quantity, goods.price);

        user.incomePerSecond -= user.stock * 0.1;
        goods.possessions += quantity;
        user.amountOwned -= stockPrice;
        user.stock += stockPrice;
        goods.price = Math.floor(goods.price * Math.pow(1.1, quantity));
        user.incomePerSecond += user.stock * 0.1;
    }

    static updateBonds(user, quantity, index) {
        let goods = user.goodsObjList[index];

        goods.possessions += quantity;
        user.incomePerSecond += goods.price * quantity * 0.07;
        user.amountOwned -= goods.price * quantity;
    }

    static realEstatePurchase(user, index, quantity) {
        let goods = user.goodsObjList[index];

        goods.possessions += quantity;
        user.incomePerSecond += goods.impactFigures * quantity;
        user.amountOwned -= goods.price * quantity;
    }

    static eTFStockPurchasePrice(quantity, currPrice) {
        for (let i = 0; i < quantity; i++) {
            currPrice += currPrice * 1.1;
        }

        return Math.floor(currPrice);
    }

    static renderingMainPage(user) {
        config.mainPage.innerHTML = ``;
        config.mainPage.append(View.mainPage(user));
    }

    static renderingTieStatus(user) {
        let tieStatus = config.mainPage.querySelectorAll("#tieStatus")[0];
        tieStatus.innerHTML = ``;
        tieStatus.append(View.makeTieStatus(user));
    }

    static renderingDisplayItems(user) {
        let displayItems = config.mainPage.querySelectorAll("#displayItems")[0];
        displayItems.innerHTML = ``;
        displayItems.append(View.makeDisplayItems(user));
    }

    static renderingPurchasePage(user, index) {
        let displayItems = config.mainPage.querySelectorAll("#displayItems")[0];
        displayItems.innerHTML = ``;
        displayItems.append(View.makePurchasePage(user, index));
    }


    static infiniteOrOther(maxNumber) {
        if (maxNumber == -1) return "∞";
        else return maxNumber.toString();
    }

    static updatedEverySecond(user) {
        Controller.timer = setInterval(function() {
            user.dateFrom20++;
            user.amountOwned += user.incomePerSecond;
            if(user.dateFrom20 % 356 == 0) user.age++;

            Controller.renderingUserInfo(user);
        }, 1000);
    }

    static timerStop() {
        clearInterval(Controller.timer);
    }

    static renderingUserInfo(user) {
        let userInfo = config.mainPage.querySelectorAll("#userInfo")[0];
        userInfo.innerHTML = ``;
        userInfo.append(View.makeUserInfo(user));
    }

    static tieClick(user) {
        user.amountOwned += user.incomePerClick;
        user.clickCount++
        Controller.renderingTieStatus(user);
        this.renderingUserInfo(user);
    }


    static createNewUserAccount(name) {
        let goodsObject = [
            new Goods("Sewing machine", "https://cdn.pixabay.com/photo/2014/03/25/16/58/sewing-machine-297770_960_720.png", "tool", 500, 3000, 100000, 0),
            new Goods( "ETF Stock", "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png", "investment", -1, 0.1, 300000, 0),
            new Goods("ETF Bonds", "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png", "investment", -1, 0.07, 300000, 0),
            new Goods("shoe store", "https://cdn.pixabay.com/photo/2016/03/31/19/42/clothes-1295223_960_720.png", "real estate", 1000, 50000, 500000, 0),
            new Goods("Tailor", "https://cdn.pixabay.com/photo/2021/12/24/20/17/fashion-6891713_960_720.png", "real estate", 500, 100000, 1000000, 0),
            new Goods("House", "https://cdn.pixabay.com/photo/2013/07/13/11/42/house-158500_960_720.png", "real estate", 100, 300000, 20000000, 0),
            new Goods("TownHouse", "https://cdn.pixabay.com/photo/2016/06/01/17/43/house-1429409_960_720.png", "real estate", 100, 700000, 40000000, 0),
            new Goods("Mansion", "https://cdn.pixabay.com/photo/2017/10/30/20/52/condominium-2903520_960_720.png", "real estate", 20, 1000000, 1000000000, 0),
            new Goods("Industrial Space", "https://cdn.pixabay.com/photo/2012/05/07/17/35/factory-48781_960_720.png", "real estate", 10, 10000000, 7000000000, 0),
            new Goods("Hotel Skyscraper", "https://cdn.pixabay.com/photo/2018/08/27/15/28/hotel-3635248_960_720.png", "real estate", 5, 25000000, 10000000000, 0),
            new Goods("Bullet-Speed Sky Railway", "https://cdn.pixabay.com/photo/2013/07/13/10/21/train-157027_960_720.png", "real estate", 1, 30000000000, 10000000000000, 0)
        ];

        return new UserAccount(name, goodsObject)
    }

    static resetGame(user) {
        if (window.confirm("Reset All Data?")) {
            let newName = user.name;
            user = Controller.createNewUserAccount(newName);
            Controller.timerStop();
            Controller.renderingMainPage(user);
            Controller.updatedEverySecond(user);
        }
    }

    static gameSave(user) {
        if (window.confirm("Saved your data. Please put the same name when you login.")) {
            let jsonEncoded = JSON.stringify(user);
            if (localStorage.getItem(`${user.name}`) != null) {
                localStorage.removeItem(`${user.name}`);
            }
            localStorage.setItem(`${user.name}`, jsonEncoded);
        }
    }

    static initializePage() {
        config.initialPage.classList.remove("d-none");
        config.initialPage.innerHTML = ``;
        config.mainPage.innerHTML = ``;
        Controller.newGameStart();
    }

}

Controller.newGameStart();
