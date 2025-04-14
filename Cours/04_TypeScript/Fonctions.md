# Les fonctions

**Définition du Type des Paramètres et du Type de Retour**

Dans TypeScript, vous pouvez spécifier le type des paramètres et le type de retour d'une fonction pour améliorer la vérification de type et la lisibilité du code. Voici un exemple de fonction avec des types de paramètres et un type de retour :

```tsx
function add(x: number, y: number): number {
  return x + y;
}

```

Dans cet exemple, la fonction `add` prend deux paramètres de type `number` et renvoie un résultat de type `number`. TypeScript vérifiera que les arguments passés à la fonction correspondent aux types spécifiés et que la valeur renvoyée est du type attendu.

**Fonctions Optionnelles et Par Défaut**

TypeScript permet de définir des paramètres optionnels et des valeurs par défaut pour les fonctions.

1. **Paramètres optionnels** : Les paramètres optionnels sont définis en ajoutant un point d'interrogation (`?`) après le nom du paramètre. Les paramètres optionnels doivent toujours suivre les paramètres obligatoires.

```tsx
function logMessage(message: string, userId?: number) {
  // ...
}

```

Dans cet exemple, le paramètre `userId` est optionnel. Vous pouvez appeler la fonction `logMessage` avec un ou deux arguments.

1. **Valeurs par défaut** : Les valeurs par défaut sont définies en affectant une valeur au paramètre directement dans la déclaration de la fonction. Si un argument n'est pas fourni lors de l'appel de la fonction, la valeur par défaut sera utilisée.

```tsx
function getFullName(firstName: string, lastName: string = "Doe") {
  return `${firstName} ${lastName}`;
}

```

Dans cet exemple, le paramètre `lastName` a une valeur par défaut de `"Doe"`. Vous pouvez appeler la fonction `getFullName` avec un ou deux arguments.

**Surcharge de Fonction**

TypeScript prend en charge la surcharge de fonction, ce qui permet de définir plusieurs signatures de fonction pour une même fonction. La surcharge de fonction est utile lorsque vous souhaitez fournir plusieurs façons d'appeler une fonction avec des arguments différents. Voici un exemple de surcharge de fonction :

```tsx
function calculateArea(radius: number): number;
function calculateArea(width: number, height: number): number;
function calculateArea(x: number, y?: number): number {
  if (y === undefined) {
    return Math.PI * x * x; // Calcul de l'aire d'un cercle
  } else {
    return x * y; // Calcul de l'aire d'un rectangle
  }
}

```

Dans cet exemple, la fonction `calculateArea` a deux signatures : une pour calculer l'aire d'un cercle en fonction de son rayon et une pour calculer l'aire d'un rectangle en fonction de sa largeur et de sa hauteur. La mise en œuvre de la fonction vérifie si le deuxième argument est fourni et calcule l'aire en conséquence.