const { ByteLengthQueuingStrategy } = require('node:stream/web')
const db = require('../db')
const { Fit, Plant } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const asparagus = await Plant.find({ Name: 'Asparagus' })
  const basil = await Plant.find({ Name: 'Basil' })
  const beans = await Plant.find({ Name: 'Beans' })
  const broadB = await Plant.find({ Name: 'Broad beans' })
  const bushB = await Plant.find({ Name: 'Bush beans' })
  const climbingB = await Plant.find({ Name: 'Climbing beans' })
  const beets = await Plant.find({ Name: 'Beets' })
  const broccoli = await Plant.find({ Name: 'Broccoli' })
  const brussel = await Plant.find({ Name: 'Brussell Sprouts' })
  const cabbage = await Plant.find({ Name: 'Cabbage' })
  const chamomile = await Plant.find({ Name: 'Chamomile' })
  const carrot = await Plant.find({ Name: 'Carrots' })
  const cauli = await Plant.find({ Name: 'Cauliflower' })
  const celery = await Plant.find({ Name: 'Celery' })
  const chives = await Plant.find({ Name: 'Chives' })
  const coriander = await Plant.find({ Name: 'Coriander' })
  const corn = await Plant.find({ Name: 'Corn' })
  const cucumber = await Plant.find({ Name: 'Cucumber' })
  const dill = await Plant.find({ Name: 'Dill' })
  const eggplant = await Plant.find({ Name: 'Eggplant' })
  const fennel = await Plant.find({ Name: 'Fennel' })
  const tree = await Plant.find({ Name: 'Fruit trees' })
  const garlic = await Plant.find({ Name: 'Garlic' })
  const grape = await Plant.find({ Name: 'Grape vine' })
  const lavender = await Plant.find({ Name: 'Lavender' })
  const leeks = await Plant.find({ Name: 'Leeks' })
  const lemonB = await Plant.find({ Name: 'Lemon balm' })
  const lettuce = await Plant.find({ Name: 'Lettuce' })
  const melon = await Plant.find({ Name: 'Melon' })
  const mint = await Plant.find({ Name: 'Mint' })
  const mustard = await Plant.find({ Name: 'Mustard' })
  const onion = await Plant.find({ Name: 'Onions' })
  const parsley = await Plant.find({ Name: 'Parsley' })
  const parsnip = await Plant.find({ Name: 'Parsnip' })
  const peas = await Plant.find({ Name: 'Peas' })
  const potatoes = await Plant.find({ Name: 'Potatoes' })
  const pumpkin = await Plant.find({ Name: 'Pumpkin' })
  const radish = await Plant.find({ Name: 'Radish' })
  const rosemary = await Plant.find({ Name: 'Rosemary' })
  const sage = await Plant.find({ Name: 'Sage' })
  const shallot = await Plant.find({ Name: 'Shallots' })
  const spinach = await Plant.find({ Name: 'Spinach' })
  const squash = await Plant.find({ Name: 'Squash' })
  const strawberry = await Plant.find({ Name: 'Strawberry' })
  const sunflower = await Plant.find({ Name: 'Sunflower' })
  const thyme = await Plant.find({ Name: 'Thyme' })
  const tomato = await Plant.find({ Name: 'Tomato' })
  const zucchini = await Plant.find({ Name: 'Zucchini' })
  console.log(String(basil[0]._id))
  const fit = [
    {
      Name: asparagus[0].name,
      fit: [
        String(basil[0]._id),
        String(chives[0]._id),
        String(parsley[0]._id),
        String(tomato[0]._id)
      ]
    }
    // {
    //   Name: basil[0]._id,
    //   fit: [asparagus[0]._id, cucumber[0]._id, fennel[0]._id, tomato[0]._id]
    // },
    // {
    //   Name: beans[0]._id,
    //   fit: [
    //     cabbage[0]._id,
    //     carrot[0]._id,
    //     corn[0]._id,
    //     cucumber[0]._id,
    //     eggplant[0]._id,
    //     lettuce[0]._id,
    //     melon[0]._id,
    //     parsley[0]._id,
    //     parsnip[0]._id,
    //     potatoes[0]._id,
    //     rosemary[0]._id,
    //     sage[0]._id,
    //     zucchini[0]._id
    //   ],
    //   notFit: [onion[0]._id, shallot[0]._id, garlic[0]._id, fennel[0]._id]
    // },
    // {
    //   Name: broadB._id,
    //   fit: [
    //     cabbage[0]._id,
    //     corn[0]._id,
    //     lettuce[0]._id,
    //     potatoes[0]._id,
    //     spinach[0]._id
    //   ]
    // },
    // {
    //   Name: bushB[0]._id,
    //   fit: [
    //     beets[0]._id,
    //     cabbage[0]._id,
    //     celery[0]._id,
    //     corn[0]._id,
    //     cucumber[0]._id,
    //     potatoes[0]._id,
    //     strawberry[0]._id,
    //     sunflower[0]._id
    //   ],
    //   notFit: [chives[0]._id, garlic[0]._id, onion[0]._id]
    // },
    // {
    //   Name: climbingB[0]._id,
    //   fit: [cabbage[0]._id, corn[0]._id, lettuce[0]._id, radish[0]._id],
    //   notFit: [
    //     beets[0]._id,
    //     chives[0]._id,
    //     garlic[0]._id,
    //     onion[0]._id,
    //     sunflower[0]._id
    //   ]
    // },
    // {
    //   Name: beets[0]._id,
    //   fit: [
    //     bushB[0]._id,
    //     cabbage[0]._id,
    //     dill[0]._id,
    //     lettuce[0]._id,
    //     onion[0]._id,
    //     potatoes[0]._id
    //   ]
    // },
    // {
    //   Name: broccoli[0]._id,
    //   fit: [
    //     beans[0]._id,
    //     broadB[0]._id,
    //     bushB[0]._id,
    //     climbingB[0]._id,
    //     beets[0]._id,
    //     coriander[0]._id,
    //     cucumber[0]._id,
    //     cucumber[0]._id,
    //     dill[0]._id,
    //     potatoes[0]._id,
    //     tomato[0]._id
    //   ],
    //   notFit: [strawberry[0]._id]
    // },
    // {
    //   Name: brussel._id,
    //   fit: [
    //     beans[0]._id,
    //     broadB[0]._id,
    //     bushB[0]._id,
    //     climbingB[0]._id,
    //     beets[0]._id,
    //     coriander[0]._id,
    //     cucumber[0]._id,
    //     dill[0]._id,
    //     potatoes[0]._id,
    //     strawberry[0]._id,
    //     sunflower[0]._id
    //   ]
    // },
    // {
    //   Name: cabbage._id,
    //   fit: [
    //     beans[0]._id,
    //     broadB[0]._id,
    //     bushB[0]._id,
    //     climbingB[0]._id,
    //     beets[0]._id,
    //     celery[0]._id,
    //     ,
    //     coriander[0]._id,
    //     cucumber[0]._id,
    //     dill[0]._id,
    //     lavender[0]._id,
    //     lettuce[0]._id,
    //     mint[0]._id,
    //     ,
    //     onion[0]._id,
    //     potatoes[0]._id,
    //     rosemary[0]._id,
    //     sage[0]._id,
    //     thyme[0]._id
    //   ],
    //   notFit: [garlic[0]._id, strawberry[0]._id]
    // },
    // {
    //   Name: chamomile[0]._id,
    //   fit: [cabbage[0]._id],
    //   notFit: [mint[0]._id]
    // },
    // {
    //   Name: carrot[0]._id,
    //   fit: [
    //     beans[0]._id,
    //     chives[0]._id,
    //     coriander[0]._id,
    //     cucumber[0]._id,
    //     dill[0]._id,
    //     tree[0]._id,
    //     leeks[0]._id,
    //     lettuce[0]._id,
    //     onion[0]._id,
    //     radish[0]._id,
    //     tomato[0]._id
    //   ],
    //   notFit: [parsnip[0]._id]
    // },
    // {
    //   Name: cauli[0]._id,
    //   fit: [
    //     beans[0]._id,
    //     broadB[0]._id,
    //     bushB[0]._id,
    //     climbingB[0]._id,
    //     beets[0]._id,
    //     celery[0]._id,
    //     coriander[0]._id,
    //     cucumber[0]._id,
    //     dill[0]._id,
    //     potatoes[0]._id,
    //     tomato[0]._id
    //   ],
    //   notFit: [strawberry[0]._id]
    // },
    // {
    //   Name: chives[0]._id,
    //   fit: [
    //     basil[0]._id,
    //     carrot[0]._id,
    //     tree[0]._id,
    //     parsley[0]._id,
    //     parsnip[0]._id,
    //     strawberry[0]._id,
    //     tomato[0]._id
    //   ],
    //   notFit: [beans[0]._id, broadB[0]._id, bushB[0]._id, climbingB[0]._id]
    // },
    // {
    //   Name: coriander[0]._id,
    //   fit: [cabbage[0]._id, carrot[0]._id, dill[0]._id, parsley[0]._id],
    //   notFit: ['']
    // },
    // {
    //   Name: corn[0]._id,
    //   fit: [
    //     beans[0]._id,
    //     broadB[0]._id,
    //     bushB[0]._id,
    //     climbingB[0]._id,
    //     cucumber[0]._id,
    //     parsnip[0]._id,
    //     potatoes[0]._id,
    //     pumpkin[0]._id,
    //     radish[0]._id,
    //     zucchini[0]._id
    //   ]
    // },
    // {
    //   Name: cucumber[0]._id,
    //   fit: [
    //     basil[0]._id,
    //     beans[0]._id,
    //     bushB[0]._id,
    //     broccoli[0]._id,
    //     brussel[0]._id,
    //     cabbage[0]._id,
    //     carrot[0]._id,
    //     cauli[0]._id,
    //     corn[0]._id,
    //     dill[0]._id,
    //     lettuce[0]._id,
    //     radish[0]._id,
    //     sunflower[0]._id
    //   ],
    //   notFit: [potatoes[0]._id, sage[0]._id, melon[0]._id, zucchini[0]._id]
    // },
    // {
    //   Name: dill[0]._id,
    //   fit: [
    //     beets[0]._id,
    //     broccoli[0]._id,
    //     brussel[0]._id,
    //     cabbage[0]._id,
    //     carrot[0]._id,
    //     cauli[0]._id,
    //     celery[0]._id,
    //     coriander[0]._id,
    //     cucumber[0]._id,
    //     fennel[0]._id,
    //     tomato[0]._id,
    //     zucchini[0]._id
    //   ]
    // },
    // {
    //   Name: eggplant[0]._id,
    //   fit: [beans[0]._id, potatoes[0]._id]
    // },
    // {
    //   Name: fennel[0]._id,
    //   fit: [basil[0]._id, dill[0]._id],
    //   notFit: [beans[0]._id, broadB[0]._id, tomato[0]._id]
    // },
    // {
    //   Name: tree[0]._id,
    //   fit: [
    //     chives[0]._id,
    //     garlic[0]._id,
    //     lemonB[0]._id,
    //     mustard[0]._id,
    //     spinach[0]._id
    //   ]
    // },
    // {
    //   Name: garlic[0]._id,
    //   fit: [rosemary[0]._id, tree[0]._id],
    //   notFit: [
    //     beans[0]._id,
    //     broadB[0]._id,
    //     bushB[0]._id,
    //     climbingB[0]._id,
    //     cabbage[0]._id,
    //     peas[0]._id,
    //     strawberry[0]._id,
    //     zucchini[0]._id
    //   ]
    // },
    // {
    //   Name: grape[0]._id,
    //   fit: [beans[0]._id, mustard[0]._id, sunflower[0]._id, tomato[0]._id]
    // },
    // {
    //   Name: lavender[0]._id,
    //   fit: [cabbage[0]._id, garlic[0]._id, strawberry[0]._id, pumpkin[0]._id],
    //   notFit: [fennel[0]._id]
    // },
    // {
    //   Name: leeks[0]._id,
    //   fit: [carrot[0]._id, celery[0]._id, onion[0]._id, melon[0]._id]
    // },
    // {
    //   Name: lemonB[0]._id,
    //   fit: [tree[0]._id]
    // },
    // {
    //   Name: lettuce[0]._id,
    //   fit: [
    //     beans[0]._id,
    //     broadB[0]._id,
    //     beets[0]._id,
    //     climbingB[0]._id,
    //     cabbage[0]._id,
    //     carrot[0]._id,
    //     cucumber[0]._id,
    //     onion[0]._id,
    //     peas[0]._id,
    //     radish[0]._id,
    //     strawberry[0]._id,
    //     squash[0]._id
    //   ],
    //   notFit: [parsley[0]._id]
    // },
    // {
    //   Name: melon[0]._id,
    //   fit: [
    //     beans[0]._id,
    //     chives[0]._id,
    //     onion[0]._id,
    //     peas[0]._id,
    //     leeks[0]._id
    //   ],
    //   notFit: [cucumber[0]._id, zucchini[0]._id]
    // },
    // {
    //   Name: mint[0]._id,
    //   fit: [cabbage[0]._id, tomato[0]._id, zucchini[0]._id],
    //   notFit: [chamomile[0]._id, parsley[0]._id]
    // },
    // {
    //   Name: mustard[0]._id,
    //   fit: [tree[0]._id, grape[0]._id]
    // },
    // {
    //   Name: onion[0]._id,
    //   fit: [
    //     beets[0]._id,
    //     cabbage[0]._id,
    //     cauli[0]._id,
    //     lettuce[0]._id,
    //     parsley[0]._id,
    //     strawberry[0]._id,
    //     melon[0]._id,
    //     tomato[0]._id
    //   ],
    //   notFit: [
    //     beans[0]._id,
    //     broadB[0]._id,
    //     bushB[0]._id,
    //     climbingB[0]._id,
    //     peas[0]._id,
    //     pumpkin[0]._id
    //   ]
    // },
    // {
    //   Name: parsnip[0]._id,
    //   fit: [
    //     beans[0]._id,
    //     chives[0]._id,
    //     coriander[0]._id,
    //     dill[0]._id,
    //     corn[0]._id,
    //     lettuce[0]._id,
    //     onion[0]._id,
    //     peas[0]._id,
    //     potatoes[0]._id,
    //     radish[0]._id,
    //     sage[0]._id,
    //     tomato[0]._id
    //   ],
    //   notFit: [carrot[0]._id, celery[0]._id]
    // },
    // {
    //   Name: peas[0]._id,
    //   fit: [
    //     cabbage[0]._id,
    //     beans[0]._id,
    //     carrot[0]._id,
    //     celery[0]._id,
    //     corn[0]._id,
    //     cucumber[0]._id,
    //     lettuce[0]._id,
    //     parsnip[0]._id,
    //     potatoes[0]._id,
    //     sage[0]._id,
    //     melon[0]._id
    //   ],
    //   notFit: [chives[0]._id, garlic[0]._id, onion[0]._id]
    // },
    // {
    //   Name: potatoes[0]._id,
    //   fit: [
    //     broadB[0]._id,
    //     beans[0]._id,
    //     bushB[0]._id,
    //     beets[0]._id,
    //     broccoli[0]._id,
    //     brussel[0]._id,
    //     cabbage[0]._id,
    //     cauli[0]._id,
    //     corn[0]._id,
    //     peas[0]._id
    //   ],
    //   notFit: [celery[0]._id, cucumber[0]._id, pumpkin[0]._id]
    // },
    // {
    //   Name: pumpkin[0]._id,
    //   fit: [corn[0]._id, lavender[0]._id, sunflower[0]._id],
    //   notFit: [potatoes[0]._id, beets[0]._id, onion[0]._id, zucchini[0]._id]
    // },
    // {
    //   Name: radish[0]._id,
    //   fit: [
    //     climbingB[0]._id,
    //     carrot[0]._id,
    //     corn[0]._id,
    //     cucumber[0]._id,
    //     lettuce[0]._id
    //   ]
    // },
    // {
    //   Name: rosemary[0]._id,
    //   fit: [beans[0]._id, cabbage[0]._id, garlic[0]._id, sage[0]._id],
    //   notFit: [potatoes[0]._id, tomato[0]._id]
    // },
    // {
    //   Name: sage[0]._id,
    //   fit: [
    //     cabbage[0]._id,
    //     beans[0]._id,
    //     carrot[0]._id,
    //     peas[0]._id,
    //     rosemary[0]._id,
    //     strawberry[0]._id
    //   ],
    //   notFit: [cucumber[0]._id]
    // },
    // {
    //   Name: shallot[0]._id,

    //   notFit: [beans[0]._id, peas[0]._id]
    // },
    // {
    //   Name: spinach[0]._id,
    //   fit: [broadB[0]._id, tree[0]._id, strawberry[0]._id]
    // },
    // {
    //   Name: squash[0]._id,
    //   fit: [corn[0]._id, lettuce[0]._id, sunflower[0]._id],
    //   notFit: [melon[0]._id]
    // },
    // {
    //   Name: strawberry[0]._id,
    //   fit: [
    //     bushB[0]._id,
    //     chives[0]._id,
    //     lavender[0]._id,
    //     lettuce[0]._id,
    //     onion[0]._id,
    //     sage[0]._id,
    //     spinach[0]._id
    //   ],
    //   notFit: [cabbage[0]._id, garlic[0]._id]
    // },
    // {
    //   Name: sunflower[0]._id,
    //   fit: [bushB[0]._id, brussel[0]._id, cucumber[0]._id, squash[0]._id],
    //   notFit: [climbingB[0]._id, potatoes[0]._id]
    // },
    // {
    //   Name: thyme[0]._id,
    //   fit: [cabbage[0]._id]
    // },
    // {
    //   Name: tomato[0]._id,
    //   fit: [
    //     basil[0]._id,
    //     carrot[0]._id,
    //     celery[0]._id,
    //     chives[0]._id,
    //     dill[0]._id,
    //     grape[0]._id,
    //     mint[0]._id,
    //     onion[0]._id,
    //     parsley[0]._id,
    //     parsnip[0]._id
    //   ],
    //   notFit: [beets[0]._id, cabbage[0]._id, fennel[0]._id, rosemary[0]._id]
    // },
    // {
    //   Name: zucchini[0]._id,
    //   fit: [beans[0]._id, corn[0]._id, dill[0]._id, garlic[0]._id, mint[0]._id],
    //   notFit: [cucumber[0]._id, pumpkin[0]._id, melon[0]._id]
    // }
  ]
  await Fit.insertMany(fit)
  console.log('New fit plants', fit)
}
const run = async () => {
  await main()
  db.close()
}
run()
