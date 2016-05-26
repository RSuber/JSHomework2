function AdventureGame(begin) {
  var text
  var response = prompt("You are a peasant, your thatch roofed cottage has been destroyed and now you need to find the evil dragon. which direction do you take?");
  switch(response) {
    case "west":
      alert ("You arrive at the village market and purchase a sword, time to go back to your burnt up cottage");
      var response2 = prompt("Now which way do you want to go?");
      switch(response2) {
        case "east":
            var sword = prompt ("You make your way back to your plebian shantytown, but now armed with a dragonslaying sword");
            switch(sword) {
              case "south":
                alert ("time to slay the dragon!!!")
                alert ("as you enter the dragons layer, you realize that you are no mighty hero, but a simple peasant. The dragon roasts you fam");
                return false;
                break;
              default: prompt("shouldn't you be heading south to slay the dragon?")
                return prompt(sword)
                break;
            }
            break;
        default:
          prompt ("go back east you have to slay the dragon");
          console.log("THIS SHOULD BE SOUTH: ", sword);
          break;

        break;
        case "west"||"north"||"south":
        alert ("you are lost, time to turn around");
        return prompt(sword);
        break;
        return AdventureGame(begin);
      }
      break;
    case "east":
      text = "you arrive at a dirt road splitting off into to directions, right or left, where do you go?";
      response = prompt(text)
      if (response === "left","right") {
        alert("you are fucking dead! restart!")
        return AdventureGame(begin);
      }
    break;
    case "north":
    alert ("Oh shit! you walked right into the lord of the land who decapitates you for being a lowly serf");
    return AdventureGame(begin);
    break;
    case "south":text = "This is the way to the dragons lair, make sure you are prepared to enter its layer,you should GO BACK"
    response = prompt(text)
    if (response === "GO BACK") {
      alert("back home, time to start again")
      return AdventureGame(begin);
    }
    break;
    default: prompt("thats not a direction silly");
    return AdventureGame(begin)
    break;
  } }
