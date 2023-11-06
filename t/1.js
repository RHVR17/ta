function contarPalabras(t) {
    let cp = 0;
    let s = "algo";
    for(let i = 0; i < t.length; i++) {
      const dig = t[i];
      if(dig === " ") {
        if (s === "algo") {
          cp++;
          s= "separa";
        }
      } else {
        s = "separa";
      }
    }
    if (s === "separa") {
      cp++;
    }
    return cp;
  }

 