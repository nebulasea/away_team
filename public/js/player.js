  
  
  
  /// unused as of yet - pushed it to main game logic for testing purposes
  
  var Player = function (id) {
    this.playerID = id;
    this.level = 1;
    this.race = 'Human';
    this.weapon;
    this.armor;
    this.ship;
    this.aide;
    this.class = 'None';
    this.cardsOut = [];
    this.hand = [];
    this.drawCard = function (deck) {
      console.log("Hello");
      var cardNumber = deck.shift();
      var tempObj = {}
      db.Item.findOne({ where: { id: cardNumber } }).done(function (dbItem) {

        // var tempObj = {}
        tempObj.name = dbItem.name;
        tempObj.bonus = dbItem.bonus;
        tempObj.itemNumber = dbItem.id;
        // console.log(tempObj);
        // this.hand.push(tempObj);
      });
      this.hand.push(tempObj);
      //query DB
      // var cardIndex = findWithAttr(test, "itemNumber", cardNumber);
      // var card = test[cardIndex];
      // this.hand.push(card);
    }
    this.addItem = function (number) {
      var itemIndex = findWithAttr(itemDeck, itemNumber, number);
      this.effectiveLevel += itemDeck[itemIndex].bonus;
      this[itemDeck[itemIndex].itemType] = itemIndex;
    }

    this.calcEffectiveLevel = function () {
      var effectiveLevel = this.level;
      for (var i in this.cardsOut) {
        console.log(this.cardsOut[i])
        effectiveLevel += this.cardsOut[i].bonus
      }
      return effectiveLevel;
    }
    this.playCard = function (card) {
      //remove frome hand array and either immediate or add to 
    }
    this.showHand = function () {
      console.log(this.hand);
    }
  }