const TypeElement = Object.freeze({
  ALLERGENE: 'ALLERGENE',
  INGREDIENT: 'INGREDIENT',
  ADDITIF: 'ADDITIF',
});


const Unite = Object.freeze({
  MILLI_GRAMMES: 'mg',
  GRAMMES: 'g',
});


class Element {
  constructor(nom, valeur, unite) {
    this.nom = nom;
    this.valeur = valeur;
    this.unite = unite;
  }
}

class Allergene extends Element {
  constructor(nom, valeur, unite) {
    super(nom, valeur, unite);
  }
}

class Ingredient extends Element {
  constructor(nom, valeur, unite) {
    super(nom, valeur, unite);
  }
}

class Additif extends Element {
  constructor(nom, valeur, unite) {
    super(nom, valeur, unite);
  }
}


class ElementFactory {
  static creerElement(type, nom, valeur, unite) {
    if (!Object.values(Unite).includes(unite)) {
      throw new Error("Unite pas reconnue. Veuillez utilisez l'enumeration Unite");
    }
    switch (type) {
      case TypeElement.ALLERGENE:
        return new Allergene(nom, valeur, unite);
      case TypeElement.INGREDIENT:
        return new Ingredient(nom, valeur, unite);
      case TypeElement.ADDITIF:
        return new Additif(nom, valeur, unite);
      default:
        throw new Error("Type d'élément inconnu");
    }
  }
}


const gluten = ElementFactory.creerElement(TypeElement.ALLERGENE, 'Gluten', 70, Unite.GRAMMES);
const sucre = ElementFactory.creerElement(TypeElement.INGREDIENT, 'Sucre', 100, Unite.MILLI_GRAMMES);
const additif = ElementFactory.creerElement(TypeElement.ADDITIF, 'Additif', 30, Unite.GRAMMES);

console.log(gluten);   
console.log(sucre);    
console.log(e330);