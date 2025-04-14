# MongoDB avec Nest

## Installation de Mongoose

Mongoose est un ODM (Object Document Mapping) pour MongoDB écrit en JavaScript. Mongoose fournit une interface simple et élégante pour interagir avec MongoDB en utilisant des objets JavaScript.

Mongoose permet de définir des schémas pour les documents MongoDB, ce qui permet de valider les données avant de les enregistrer dans la base de données. Mongoose fournit également des fonctionnalités telles que la population de références, les hooks de middleware, les transactions et la pagination.

Mongoose est souvent utilisé dans les applications Node.js pour interagir avec MongoDB. Mongoose permet de mapper les documents MongoDB aux objets JavaScript, ce qui facilite la manipulation des données dans l'application. Mongoose fournit également une interface pour effectuer des opérations CRUD (Create, Read, Update, Delete) sur les documents MongoDB.

Cet ODM va beaucoup nous simplifier la vie dans Nest.js. Pour l’utiliser, il faut d’abord l’installer via NPM:

```tsx
npm i mongoose @nestjs/mongoose
```

Ce package contient de nouveaux décorateurs dédiés à la data Nosql ainsi qu’un MongooseModule qui va faciliter notre connection entre notre application et Mongo.

## Connection Application/DB

Une fois Mongoose installé, il suffit de se rendre dans son app.module.ts et d’importer le module mongoose, avec comme argument l’URI vers notre base de données

```tsx
/* Setup MongooseModule in AppModule */
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/maBaseDeDonnées'),
  ],
})
export class AppModule {}
```

Normalement, si la connexion est effective, vous devriez voir son initialisation dans la liste lors du lancement du serveur avec npm run start:dev

## Création d'un Model
Dès que nous souhaitons interagir avec une BDD, il devient nécessaire de concevoir un **Model** (voir architecture MVC par exemple), ce Model va s’occuper de permettre les opération du CRUD au sein de notre BDD.
Nous ne sommes pas en SQL, donc ici notre Model va surtout contenir un Schema. Ce schéma va créer les contours de notre objet et nous permettre le contrôle de l’injection dans notre Collection.

Nest fournit des décorateurs pour créer ces Schémas, nous allons donc modifier notre Entity Mock en vrai Model:
```tsx
/* Book Schema dans notre entity */
import { Schema, Prop } from '@nestjs/mongoose’';
import { Document } from 'mongoose';

@Schema() // Map notre classe Book à notre collection du même nom (qui a un "s" supplémentaire)
export class Book extends Document {
	// On peut voir que l'id est supprimé car il est généré par le SGBD

  @Prop() 
  name: string;

  @Prop()
  author: string;

  @Prop([String])
  genre: string[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
```

Voilà notre Model est créé, il ne nous reste plus qu’à l’ajouter à son Module (BooksModule) via les imports

```tsx
imports: [
MongooseModule.forFeature([
		{ 
		  name: Coffee.name, 
		  schema: CoffeeSchema 
		},
	]),
]
```

# Conception du CRUD total

```tsx
/* Utilizing Mongo Coffee Model */
constructor(
  @InjectModel(Coffee.name)
  private coffeeModel: Model<Coffee>,
) {}

/* CoffeesService - FINAL CODE */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectModel(Coffee.name) private readonly coffeeModel: Model<Coffee>,
  ) {}

  findAll() {
    return this.coffeeModel.find().exec();
  }

  async findOne(id: string) {
    const coffee = await this.coffeeModel.findOne({ _id: id }).exec();
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = new this.coffeeModel(createCoffeeDto);
    return coffee.save();
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = await this.coffeeModel
      .findOneAndUpdate({ _id: id }, { $set: updateCoffeeDto }, { new: true })
      .exec();

    if (!existingCoffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return existingCoffee;
  }

  async remove(id: string) {
    const coffee = await this.findOne(id);
    return coffee.remove();
  }
}
```