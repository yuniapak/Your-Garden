const db = require('../db')
const { Plant } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const plant = [
    {
      Name: 'Asparagus',
      fit: ['Basil', 'Chives', 'Parsley', 'Tomato'],
      notFit: [],
      watering: '1 inch per week',
      grow: '3-5 years',
      about:
        'Asparagus plants are slow to mature, taking three to five years to really fill in, but it is worth the wait. Once they start producing well, you will be harvesting asparagus spears for more than a month every spring. Planted in January or February, or as soon as the ground can be worked.',
      image:
        'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/9/13/0/shutterstock_1049151533.jpg.rend.hgtvcom.1280.960.suffix/1568407911248.jpeg'
    },
    {
      Name: 'Basil',
      fit: ['Asparagus', 'Cucumber', 'Fennel', 'Tomato'],
      notFit: [],
      watering: '1 inch a week',
      grow: '65-70 days',
      about:
        'Basil grows well outdoors in the ground, a container, or a raised bed. It thrives in moist, well-drained soil. Choose a location that gets 6-8 hours of full sunlight every day. Plant basil 2 weeks after the last spring frost.',
      image:
        'https://gardenerspath.com/wp-content/uploads/2018/03/How-to-Grow-Basil.jpg'
    },
    {
      Name: 'Beans',
      fit: [
        'Cabbage',
        'Carrots',
        'Corn',
        'Cucumber',
        'Eggplant',
        'Lettuce',
        'Melon',
        'Parsley',
        'Parsnip',
        'Potatoes',
        'Rosemary',
        'Sage',
        'Zucchini'
      ],
      notFit: ['Onions', 'Shallots', 'Chives', 'Garlic', 'Fennel'],
      watering: '2 inches a week',
      grow: '65 days',
      about:
        'Beans grow best when direct-seeded outdoors. Sow any time after the last spring frost date, when soil have warmed to at least 48°F.',
      image:
        'https://www.gardendesign.com/pictures/images/900x705Max/site_3/bean-plant-green-beans-growing-on-vine-shutterstock-com_15989.jpg'
    },
    {
      Name: 'Broad beans',
      fit: ['Cabbage', 'Corn', 'Lettuce', 'Potatoes', 'Spinach'],
      notFit: ['Onions', 'Chives', 'Garlic', 'Fennel'],
      watering: '0.5 inch a water a day',
      grow: '90 days in spring, 240 days in fall',
      about:
        'Broad beans can be sown in pots under cover from February onwards, for planting out in spring. This method is especially useful where soils are wet or rich in clay. They are not climbers you would have to support each plant if you used pea sticks or canes.',
      image:
        'https://cdn.harvesttotable.com/htt/2009/03/23181520/Broad-Fava-Bean-bigstock-A-Crop-Of-Broad-Bean-Plants-Re-312679561-1024x736.jpg'
    },
    {
      Name: 'Bush beans',
      fit: [
        'Beets',
        'Cabbage',
        'Celery',
        'Corn',
        'Cucumber',
        'Potato',
        'Strawberry',
        'Sunflower'
      ],
      notFit: ['Chives', 'Garlic', 'Onions'],
      watering: '1-2 times a week',
      grow: '50-60 days',
      about:
        'Watering early in the day lets leaves dry out before nighttime. Planting can occur as early as April in southern climate zones, but as late as June in cooler northern regions. Bush beans thrive in full sun and well-drained soil.',
      image:
        'https://gardenerspath.com/wp-content/uploads/2020/04/Rows-of-Bush-Beans-Growing-in-the-Veggie-Patch.jpg'
    },
    {
      Name: 'Climbing beans',
      fit: ['Cabbage', 'Corn', 'Lettuce', 'Radish'],
      notFit: ['Beets', 'Chives', 'Garlic', 'Onions', 'Sunflower'],
      watering: '1inch a week',
      grow: '10-14 weeks',
      about:
        'Start sowing runner beans in spring and keep sowing every couple of weeks until early summer to spread out the harvest. Beans need a little help climbing their support structure, especially when young. It is important to get them up off the ground early to prevent rot and loss of blooms.',
      image:
        'https://cdn.harvesttotable.com/htt/2011/05/23191234/Beans-Growing-on-Strings.jpg'
    },
    {
      Name: 'Beets',
      fit: ['Bush beans', 'Cabbage', 'Dill', 'Lettuce', 'Onions', 'Potato'],
      notFit: ['Climbing beans', 'Tomato', 'Pumpkin'],
      watering: 'twice a week',
      grow: '7-8 weeks',
      about:
        'Beets can be planted in partial shade and grow best in deep, well drained soils. Before planting, make sure the soil is free of rocks, trash and large sticks. Start your first round of beets in early spring, as soon as the soil is workable.',
      image:
        'https://i0.wp.com/www.gardeningchannel.com/wp-content/uploads/2021/05/beet-5790165_1280.jpg?fit=1280%2C853&ssl=1'
    },
    {
      Name: 'Broccoli',
      fit: [
        'Beans',
        'Broad beans',
        'Bush beans',
        'Climbing beans',
        'Beets',
        'Coriander',
        'Cucumber',
        'Dill',
        'Potato',
        'Tomato'
      ],
      notFit: ['Strawberry'],
      watering: '1-2 inches a week',
      grow: '80-100 days',
      about:
        'Broccoli is cool-season crop, so it should be started in early- to mid-spring. Sprouting broccolis are hardy and can can be harvested from March, further extending the growing season.',
      image:
        'https://cdn.harvesttotable.com/htt/2008/09/23190633/Broccoli-planting.jpg'
    },
    {
      Name: 'Brussell Sprouts',
      fit: [
        'Beans',
        'Broad beans',
        'Bush beans',
        'Climbing beans',
        'Beets',
        'Coriander',
        'Cucumber',
        'Dill',
        'Potato',
        'Strawberry',
        'Sunflower'
      ],
      notFit: [''],
      watering: '1-2 inches a week',
      grow: '80-90 days',
      about:
        'Sow seeds of Brussels sprouts 3-4 inches apart or plant seedlings 18-24 inches apart. Plant Brussels sprouts 6-10 weeks before the first expected frost. The small heads mature best in cool and even in light frosty weather.',
      image:
        'https://cdn.harvesttotable.com/htt/2009/01/23181505/bigstock-Brussel-Sprouts-Vegetable-Grow-227419894-1-1-1024x682.jpg'
    },
    {
      Name: 'Cabbage',
      fit: [
        'Beans',
        'Broad beans',
        'Bush beans',
        'Climbing beans',
        'Beets',
        'Celery',
        'Coriander',
        'Cucumber',
        'Dill',
        'Lavender',
        'Lettuce',
        'Mint',
        'Onions',
        'Ppotato',
        'Rosemary',
        'Sage',
        'Thyme'
      ],
      notFit: ['Garlic', 'Strawberry'],
      watering: 'Daily',
      grow: '60-100 days',
      about:
        'Plant spring cabbage 4 weeks before the last frost. Space your cabbage according to the guidelines on the plant tag, in an area that gets 6 or more hours of sun. Plant 1 to 2 inches deep in well-drained.  A July planting will begin to form a head as summer turns to fall, and be ready to harvest before a hard freeze.',
      image:
        'https://www.almanac.com/sites/default/files/users/AlmanacStaffArchive/cabbage-crops_full_width.jpg'
    },
    {
      Name: 'Chamomile',
      fit: ['Cabbage'],
      notFit: ['Mint'],
      watering: 'every week',
      grow: '10 weeks',
      about:
        'Chamomile blooms best in a location with full sun, but it will grow in partial shade, too. In fact, in hot Southern climates, chamomile benefits from a bit of afternoon shade, which will help keep the blooms from drooping.',
      image:
        'https://gardenerspath.com/wp-content/uploads/2020/05/Chamomile-in-Bloom-in-Summer-Garden.jpg'
    },
    {
      Name: 'Carrots',
      fit: [
        'Beans',
        'Chives',
        'Coriander',
        'Cucumber',
        'Dill',
        'Fruit trees',
        'Leeks',
        'Lettuce',
        'Onions',
        'Radish',
        'Tomato'
      ],
      notFit: ['Parsnip'],
      watering: '2 inches per week',
      grow: '70-80 days',
      about:
        'All carrots need soil that is free of weeds, grass, rocks, sticks and other debris. Another tip for success: Grow your carrots in a raised bed instead of the ground. Recommend sowing seeds directly in the garden rather than transplanting. Carrots grow best in cool temperatures of early spring and late fall.',
      image:
        'https://i1.wp.com/blog.backtotheroots.com/wp-content/uploads/2021/02/image1-3.png?fit=1999%2C1274&ssl=1'
    },
    {
      Name: 'Cauliflower',
      fit: [
        'Beans',
        'Broad beans',
        'Bush beans',
        'Climbing beans',
        'Beets',
        'Celery',
        'Coriander',
        'Cucumber',
        'Dill',
        'Potatoes',
        'Tomato'
      ],
      notFit: ['Strawberry'],
      watering: '2 inches a week',
      grow: '60-80 days',
      about:
        'It is best to plant in early to mid- April. For the fall crop, start seeds indoors or direct seed in the garden, in early to late July. Plant cauliflower in rows with each plant spaced 18 inches apart.Needs fertile, well-drained, moist soil with plenty of rich organic matter.',
      image:
        'https://www.gardeningknowhow.com/wp-content/uploads/2009/03/cauliflower.jpg'
    },
    {
      Name: 'Celery',
      fit: ['Bush beans', 'Cabbages', 'Dill', 'Leeks', 'Tomato'],
      notFit: ['Parsnip', 'Potatoes'],
      watering: '1-1.5 inches a week',
      grow: '140 days',
      about:
        'If you live in a colder climate, you will want to start your seeds indoors about 8-10 weeks before the last frost. This typically translates into early to mid-March. Harvest celery from summer and through the autumn until the first hard frosts stop growth.',
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/981/growingcelery-main-1514910811.jpg'
    },
    {
      Name: 'Chives',
      fit: [
        'Basil',
        'Carrots',
        'Fruit tree',
        'Parsley',
        'Parsnip',
        'Roses',
        'Strawberries',
        'Tomato'
      ],
      notFit: ['Beans', 'Broad beans', 'Bush beans', 'Climbing beans', ''],
      watering: '1-2 times per week',
      grow: '80 days',
      about:
        'Chives are considered a cool-season crop, which means that they grow best in the spring and fall. The harsher temperatures of summer usually cause them to go dormant until cool weather arrives again. For a head start in colder regions, start chive seeds indoors 6 to 8 weeks before the last spring frost.',
      image:
        'https://howtoplantyourgarden.com/wp-content/uploads/2019/11/growing-chives-1024x682.jpg'
    },
    {
      Name: 'Coriander',
      fit: ['Cabbage', 'Carrots', 'Dill', 'Parsley'],
      notFit: [''],
      watering: '1 inch per week',
      grow: '60-75 days',
      about:
        'Thin seedlings to 6 inches apart so that they have room to develop healthy leaves. Once the plants are established, they do not need as much water per week. Coriander prefers full sun, but it will grow in a little shade. In hotter zones, protection from the strongest sun is advisable.',
      image:
        'https://www.latiaagribusinesssolutions.com/wp-content/uploads/2017/10/Cilantro-Plant-How-To-Grow-Your-Own-Cilantro-In-Your-Garden-Cilantro-Plant-farm.jpg'
    },
    {
      Name: 'Corn',
      fit: [
        'Beans',
        'Broad beans',
        'Bush beans',
        'Climbing beans',
        'Cucumber',
        'Parsnip',
        'Potatoes',
        'Pumpkin',
        'Radish',
        'Zucchini'
      ],
      notFit: [''],
      watering: '1 inch a week',
      grow: '55-95 days',
      about:
        'Hold off on planting corn in spring until after the last frost. Space seedlings 8 to 12 inches apart in an area with full sun and fertile. Corn is a quick-growing and productive crop. Plant kernels from April through June and you can expect to harvest cobs eight weeks later, from July through October.',
      image:
        'https://www.gardeningknowhow.com/wp-content/uploads/2021/07/maize-or-corn-organic-planting.jpg'
    },
    {
      Name: 'Cucumber',
      fit: [
        'Basil',
        'Beans',
        'Bush Beans',
        'Broccoli',
        'Braseel sprouts',
        'Cabbage',
        'Carrots',
        'Cauliflower',
        'Corn',
        'Dill',
        'Lettuce',
        'Radish',
        'Sunflower'
      ],
      notFit: ['Potatoes', 'Sage', 'Melon', 'Zucchini'],
      watering: '1 inch per week',
      grow: '50-70 days',
      about:
        ' Although cucumbers do best in loose sandy loam soil, they can be grown in any well-drained soil. Cucumbers must be grown in full sunlight. Because their roots reach 36 to 48 inches deep, do not plant them where tree roots will rob them of water and nutrients.',
      image:
        'https://oldworldgardenfarms.com/wp-content/uploads/2020/05/growing-cucumbers.jpg'
    },
    {
      Name: 'Dill',
      fit: [
        'Beets',
        'Broccoli',
        'Braseel sprouts',
        'Cabbage',
        'Carrots',
        'Cauliflower',
        'Celery',
        'Coriander',
        'Cucumbers',
        'Fennel',
        'Tomato',
        'Zucchini'
      ],
      notFit: [''],
      watering: '1 a week',
      grow: '90 days',
      about:
        'Dill grows best in a well drained, slightly acidic soil, rich in organic matter. As with most herbs, dill does not require frequent fertilizing.',
      image:
        'https://gardenerspath.com/wp-content/uploads/2020/05/Rows-of-Dill-Growing-in-the-Garden.jpg'
    },
    {
      Name: 'Eggplant',
      fit: ['Beans', 'Potato'],
      notFit: [''],
      watering: '1inch a week',
      grow: '65-80 days',
      about:
        'Eggplants can only grow in warm soil—50 degrees Fahrenheit or above. The best time to plant eggplant is in late spring after the last threat of frost. Eggplants grow into tall, angular plants, so they should be spaced 24 to 36 inches apart.',
      image: 'https://i.ytimg.com/vi/VvvhUUZieAg/maxresdefault.jpg'
    },
    {
      Name: 'Fennel',
      fit: ['Basil', 'Dill'],
      notFit: ['Beans', 'Broad beans', 'Tomato'],
      watering: '1 inch a week',
      grow: '90 days',
      about:
        'Fennel is easy to grow. They prefer full sun and a well drained soil. They will do best in rich soils. Keep the soil moist by watering regularly particularly during hot, dry periods in summer. Feed every two to three weeks in summer with a high potash plant food.',
      image:
        'https://gardenerspath.com/wp-content/uploads/2019/02/Growing-and-Harvesting-Fennel-Cover.jpg'
    },
    {
      Name: 'Fruit trees',
      fit: ['Carrots', 'Chives', 'Garlic', 'Lemon balm', 'Mustard', 'Spinach'],
      notFit: [''],
      watering: '-',
      grow: '2-5years to mature depends on a tree',
      about:
        'From planting to fruit: Citrus 1-2 years, Fig: 2-4 years, Peach 2-4 years, Plum 3-5 years, Sour or tart cherry 3-5 years, Apple trees 4-5 years, Pear 4-6 years, Mulberry: 10 years.',
      image:
        'https://gardenerspath.com/wp-content/uploads/2018/03/Growing-an-Apple-Orchard.jpg'
    },
    {
      Name: 'Garlic',
      fit: ['Fruit trees', 'Rosemary'],
      notFit: [
        'Beans',
        'Broad beans',
        'Bush beans',
        'Climbing beans',
        'Cabbage',
        'Peas',
        'Strawberry',
        'Zucchini'
      ],
      watering: '1 time a week',
      grow: '8 months',
      about:
        'Garlic is most often planted in the fall (between late September and November) and harvested in the following summer (between June and August). In areas that get a hard frost, plant garlic cloves 6 to 8 weeks before the first fall frost date, before the ground freezes.It is an easy crop to grow it is sown from garlic cloves as opposed to seeds.',
      image:
        'https://www.gardenmyths.com/wp-content/uploads/2017/08/Garlic-planting-time.jpg'
    },
    {
      Name: 'Grape vine',
      fit: ['Beans', 'Mustard', 'Sunflower', 'Tomato'],
      notFit: [''],
      watering: '1 inch of water per week',
      grow: '3 years',
      about:
        'Growing grapes is no more difficult than any other backyard crop. you need a large, open, sunny space with good soil. Grapes need about 50 to 100 square feet per vine if growing vertically on a trellis.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Grape_vines.jpg/1200px-Grape_vines.jpg'
    },
    {
      Name: 'Lavender',
      fit: ['Cabbage', 'Garlic', 'Strawberry', 'Pumpkin'],
      notFit: ['Fennel'],
      watering: '1-2times per week',
      grow: '90-200 days',
      about:
        'Growing lavender is easy and rewarding. Lavender can be grown in garden beds or in pots. To grow lavender successfully it needs well-drained soil and full sun. Lavender is a perennial and has been known to survive up to 15 years in home gardens.',
      image:
        'https://www.thespruce.com/thmb/Rc3RJ2CcRSIhuF_AY7PvNuVo8Ps=/1348x758/smart/filters:no_upscale()/growing-lavender-1402779-hero-d308fde4141e431eabe5ef2e5bf3ba11.jpg'
    },
    {
      Name: 'Leeks',
      fit: ['Carrots', 'Celery', 'Onions', 'Melon'],
      notFit: [''],
      watering: '1 inch a week',
      grow: '120-150 days',
      about:
        'Start seeds indoors and transplant in early spring. Hill the plants to produce a longer white shaft, or plant in a furrow and fill it in. Leeks have shallow root systems and need plentiful watering.',
      image:
        'https://gardenerspath.com/wp-content/uploads/2019/11/Pulling-Leeks-from-the-Garden.jpg'
    },
    {
      Name: 'Lemon balm',
      fit: ['Fruit trees'],
      notFit: [''],
      watering: 'every day',
      grow: '70 days',
      about:
        'Lemon balm companion planting is a real boon in the garden, as this perennial herb attracts bees and other beneficial pollinators, while the strong, citrusy odor deters several unwelcome pests. Keep in mind that like mint, lemon balm grows incredibly fast in rich, well drained, moist soil that receives lots of sun.',
      image:
        'https://gardenerspath.com/wp-content/uploads/2019/11/Lemon-Balm-in-Garden-FB.jpg'
    },
    {
      Name: 'Lettuce',
      fit: [
        'Beans',
        'Broad beans',
        'Climbing beans',
        'Beets',
        'Cabbage',
        'Carrots',
        'Cucumber',
        'Onions',
        'Peas',
        'Radish',
        'Strawberry',
        'Squash'
      ],
      notFit: ['Parsley'],
      watering:
        ' Twice a week and water if the soil is dry down to 1 inch deep.',
      grow: '30 days',
      about:
        'Lettuce is a cool weather crop and is best grown in spring and fall.  To grow great lettuce, find a site that offers at least six to eight hours of direct sun.',
      image:
        'https://www.thespruce.com/thmb/PWkixszv28kUB6Pfk0PCdLa8Yf0=/3067x2300/smart/filters:no_upscale()/how-to-grow-fresh-delicious-lettuce-1403404-3-0c9662567b52457a9f55828604f36b74.jpg'
    },
    {
      Name: 'Melon',
      fit: ['Beans', 'Chievs', 'Onions', 'Peas', 'Leeks'],
      notFit: ['Cucumber', 'Watermelon', 'Zucchini'],
      watering: '1-2 inches of water per week',
      grow: '65-100 days',
      about:
        'You can direct seed or transplant melons into the garden between mid-May and late June, harvest before mid-September, when frost is likely. Melons perform best in hot, sunny locations with fertile, well-drained soils.',
      image:
        'https://modernfarmer.com/wp-content/uploads/2018/07/8-tips-for-sweet-melons.jpg'
    },
    {
      Name: 'Mint',
      fit: ['Cabbage', 'Tomato', 'Zucchini'],
      notFit: ['Camomile', 'Parsley'],
      watering: '2 times per week',
      grow: '90 days',
      about:
        'Mints are vigorous perennials that thrive in light soil with good drainage. Ideally, they prefer a moist but well-drained site, something like their native habitat along stream banks.Most will grow in sun or partial shade.',
      image:
        'https://cdn.shopify.com/s/files/1/0257/4565/3811/articles/BONNIE_mint_iStock-543204012-1800px_4f952d52-ceef-4716-b9ba-063af39b87d7.jpg?v=1642541970'
    },
    {
      Name: 'Mustard',
      fit: ['Fruit tree', 'Grape vine'],
      notFit: [''],
      watering: '2inches of water per week',
      grow: '6 weeks',
      about:
        'Mustard will grow well in most soils, but will produce the most seed in rich, well-drained, well-prepared soil. In the springtime, sow the seed in drills about 0.2 inch deep. Pick leaves for salad when they’re small, young, and tender, or use the larger leaves for sautéing or stewing. ',
      image:
        'https://gardenplannerwebsites.azureedge.net/blog/mustard-cover-crop-2x.jpg'
    },
    {
      Name: 'Onions',
      fit: [
        'Beets',
        'Cabbage',
        'Cauliflower',
        'Lettuce',
        'Parsley',
        'Strawberry',
        'Melon',
        'Tomato'
      ],
      notFit: [
        'Beans',
        'Broad beans',
        'Bush beans',
        'Climbing beans',
        'Peas',
        'Pumpkin'
      ],
      watering: '1-2 inches of water per week',
      grow: '14 weeks',
      about:
        'In spring, plant onion sets outdoors as soon as the ground can be worked, usually in late March or April. Bury onion sets 2 to 6 inches apart, gently pressing them into loose soil no more than 1 inch deep. Space transplants 4 to 5 inches apart',
      image:
        'https://dominicantoday.com/wp-content/uploads/2019/01/Onions-on-plant.jpg'
    },
    {
      Name: 'Parsley',
      fit: ['Asparagus', 'Beans', 'Chives', 'Onions', 'Rosemary', 'Tomato'],
      notFit: ['Lettuce'],
      watering: '2-3 times per week',
      grow: '80-90days',
      about:
        'Parsley does well in both full-sun and part-sun environments. If you are starting from seed, thin to 9″ apart. Plant parsley in spring once the ground is workable. ',
      image:
        'https://www.thespruce.com/thmb/MsjspecoiLpBb4zYz14XxWPKeQA=/3300x2200/filters:fill(auto,1)/grow-parsley-1402629-7-0aed4ecec77a4a9d934491af4d1235b8.jpg'
    },
    {
      Name: 'Parsnip',
      fit: [
        'Beans',
        'Chievs',
        'Coriander',
        'Dill',
        'Corn',
        'Lettuce',
        'Onions',
        'Peas',
        'Potatoes',
        'Radish',
        'Sage',
        'Tomato'
      ],
      notFit: ['Carrots', 'Celery'],
      watering: 'Every 2-3 weeks',
      grow: '100 days',
      about:
        'Parsnips are considered a semi-hardy, cool-season crop because they grow best when daytime temperatures range from 40 to 50 degrees. You can start to harvest your parsnips from late autumn right through to the end of January, once the foliage begins to die back. The crop can be safely left in the ground until you need it.',
      image:
        'https://www.lovethegarden.com/sites/default/files/content/articles/UK_freshly-dug-parsnips.jpg'
    },
    {
      Name: 'Peas',
      fit: [
        'Beans',
        'Cabbage',
        'Carrots',
        'Celery',
        'Corn',
        'Cucumber',
        'Lettuce',
        'Parsnip',
        'Potatoes',
        'Raspberry',
        'Sage',
        'Melon'
      ],
      notFit: ['Chives', 'Garlic', 'Onions', 'Shallots'],
      watering: '1 inch of water each week.',
      grow: '60 days',
      about:
        'Sow seeds 4 to 6 weeks before the last spring frost date when the soil is cool, or when it is at the desired temperature. Sow seeds 1 inch deep (slightly deeper if soil is dry) and about 2 inches apart. Peas rarely need watering more than once per week but they do require an even moisture level throughout the growing season.',
      image:
        'https://www.almanac.com/sites/default/files/users/Christopher%20Burnett/pea-pods-on-plant_full_width.jpg'
    },
    {
      Name: 'Potatoes',
      fit: [
        'Beans',
        'Broad beans',
        'Brush beans',
        'Beets',
        'Brtoccoli',
        'Brusssell sprouts',
        'Cabbage',
        'Cauliflower',
        'Corn',
        'Peas'
      ],
      notFit: ['Celery', 'Cucumber', 'Pumpkin'],
      watering: '2-3 inches of water per week without fully drying out.',
      grow: '80-100 days',
      about:
        'Potatoes grow best in rows about 3 feet apart. With a hoe or round-point shovel, dig a trench row about 6 inches wide and 8 inches deep. Taper the bottom to about 3 inches wide.most gardeners plant in March, April or May, and expect a harvest about four months later, starting to dig new potatoes about two to three weeks after plants flower.',
      image:
        'https://cdn.harvesttotable.com/htt/2009/01/23181312/canstockphoto18445615-1024x768.jpg'
    },
    {
      Name: 'Pumpkin',
      fit: ['Corn', 'Lavender', 'Sunflower'],
      notFit: ['Potatoes', 'Beets', 'Onions', 'Zucchini'],
      watering: '1 inch of water per week',
      grow: '90-120 days',
      about:
        'Pick a day after the last frost to sow seeds directly in the ground. Pumpkins need strong, sturdy vertical structures that can support their weight because the plants will become heavy as the pumpkins mature.',
      image:
        'https://cdn.harvesttotable.com/htt/2009/03/23182802/Pumpkin-in-garden.jpg'
    },
    {
      Name: 'Radish',
      fit: ['Climbing beans', 'Carrots', 'Corn', 'Cucumbers', 'Lettuce', ''],
      notFit: [''],
      watering: 'Lightly water your plants every day',
      grow: '3-5 weeks',
      about:
        'Radishes do best when grown in cooler conditions, and are tolerant of cold weather. Loosen soil before planting at least six inches deep, a foot or more for long types. Plant seeds from April through early May, and again in August. Radishes prefer full sun but grow well in part shade too and in hot climate will prefer full shade in the height of summer.',
      image:
        'https://www.thespruce.com/thmb/Eh_GLOhxwzMTfZKMpaOkLMj5664=/4268x3201/smart/filters:no_upscale()/growing-radishes-in-the-home-vegetable-garden-1403477-02-c295e04667df4c8fac380a5543b663e1.jpg'
    },
    {
      Name: 'Rosemary',
      fit: ['Beans', 'Cabbage', 'Garlic', 'Sage'],
      notFit: ['Potatoes', 'Tomato'],
      watering: 'Every 1-2 weeks',
      grow: '80-100 days',
      about:
        'Strongly recommended to start new rosemary plants from cuttings taken from established plants.For a head start, plant the seeds or cuttings indoors 8 to 10 weeks before the last spring frost. For the best growth, the soil temperature should be around 70ºF (21°C). ',
      image:
        'https://cdn.harvesttotable.com/htt/2022/04/14194805/bigstock-Herbal-Rosemary-Herb-Plant-Gro-295061125-1024x683.jpg'
    },
    {
      Name: 'Sage',
      fit: ['Beans', 'Cabbage', 'Carrots', 'Peas', 'Rosemary', 'Strawberry'],
      notFit: ['Cucucmber'],
      watering:
        'First two weeks need to be watered 1-2 times a week, after you root is developed water every 2 weeks.',
      grow: '90-100 days from seed',
      about:
        'Plant sage in full sun. Sage should be planted in well-draining soil; it won’t tolerate sitting in wet soil. The easiest and best way to start sage is from a small plant. Set the plants 2 feet apart.',
      image:
        'https://www.almanac.com/sites/default/files/users/The%20Editors/sage-leaves-plant_full_width.jpg'
    },
    {
      Name: 'Shallots',
      fit: [''],
      notFit: ['Beans', 'Peas'],
      watering:
        'Sensitieve to overwatering, grow best at 1 inch of water a week.',
      grow: '90 to 120 days',
      about:
        'Shallots are most commonly grown from cloves. Place each clove in the soil with the thick end pointing down and the top just above the soil line. Plant them around 6 to 8 inches apart in rows, and space each row around 12 inches apart.',
      image:
        'https://www.starkbros.com/blog/wp-content/uploads/2015/01/shallots-red-via-Shutterstock.jpg'
    },
    {
      Name: 'Spinach',
      fit: ['Broad beans', 'Fruit trees', 'Strawberry'],
      notFit: [''],
      watering: 'Every 2-3 days.',
      grow: '37 to 45 days.',
      about:
        'Plant spinach during the cool weather of spring and fall. Space spinach plants 12 inches apart in fertile, well-drained soil with a pH of 6.5 to 7.0. Start off the growing season right by mixing in several inches of aged compost or other rich organic matter into your native soil.',
      image:
        'https://gardensnursery.com/wp-content/uploads/2020/02/Growing-Spinach-in-your-Home-Garden.jpg'
    },
    {
      Name: 'Squash',
      fit: ['Corn', 'Lettuce', 'Sunflower'],
      notFit: ['Melon'],
      watering:
        'As a rule of thumb, squash plants need 1 to 2 inches of water each week for healthy growth.',
      grow: '50 to 65 days.',
      about:
        'Grow them in an area that gets 6 or more hours of sun and has rich, well-drained soil. Give your native soil a nutrient boost by mixing in several inches aged compost or other rich organic matter. Squash rely on consistent moisture but avoid wetting the leaves.',
      image:
        'https://cdn.shopify.com/s/files/1/0257/4565/3811/articles/BONNIE_squash_iStock-178387346-1800px_6e9f1750-fa83-4a45-8120-3d0ed4fbb618.jpg?v=1642541977'
    },
    {
      Name: 'Strawberry',
      fit: [
        'Bush beans',
        'Chievs',
        'Lavander',
        'Lettuce',
        'Onions',
        'Sage',
        'Spinach'
      ],
      notFit: ['Cabbage', 'Garlic'],
      watering:
        '2 times per week, or 3-4 times per week during the peak summer days.',
      grow: 'In warm, sunny weather, berries ripen about 30 days after blossoms are fertilized.',
      about:
        'Plant strawberries in spring or fall based on your growing zone. In-ground gardens, raised beds, and containers are all excellent growing areas. Give strawberries room for runners by planting them 18 inches apart. Strawberries can be grown in a variety of ways, but make sure they get 8 or more hours of sun and are planted in slightly acidic soil with a pH of 5.5 to 6.8.',
      image: 'https://www.narsgarden.com/wp-content/uploads/2021/09/F-14.jpg'
    },
    {
      Name: 'Sunflower',
      fit: ['Bush beans', 'Brussell sprouts', 'Cucumber', 'Squash'],
      notFit: ['Climbing beans', 'Potatoes'],
      watering: '1 inch of water per week during the growing season.',
      grow: '70 to 100 days after planting.',
      about:
        'It is best to sow sunflower seeds directly into the garden (or outdoor containers) after the danger of spring frost has passed anytime after soils have warmed to at least 50°F (10°C). Give plants plenty of room, especially for low-growing varieties that will branch out. Make rows about 30 inches apart. (For very small varieties, plant closer together.)',
      image:
        'https://gardenerspath.com/wp-content/uploads/2020/05/Sunflowers-Growing-in-the-Summer-Garden.jpg'
    },
    {
      Name: 'Thyme',
      fit: ['Cabbage'],
      notFit: [''],
      watering: 'Water only every 10-15 days.',
      grow: 'Most thymes are slow-growers. Starting out with a potted plant ensures you will get a usable crop the first year.',
      about:
        'Thyme thrives in full sun and loves heat. If you are growing in a pot indoors, plant near a sunny window. Soil needs to drain well. In the garden, plant with other drought-tolerant perennials. In early spring, you may fertilize with organic matter, like compost, but not much soil amendment is necessary.',
      image:
        'https://gardenerspath.com/wp-content/uploads/2021/03/Learn-How-to-Plant-and-Grow-Common-Thyme-Thymus-vulgaris-FB.jpg'
    },
    {
      Name: 'Tomato',
      fit: [
        'Basil',
        'Carrots',
        'Celery',
        'Chives',
        'Dill',
        'Grape vine',
        'Mint',
        'Onions',
        'Parsley',
        'Parsnip'
      ],
      notFit: ['Beets', 'Cabbage', 'Fennel', 'Rosemary'],
      watering:
        'Water newly planted tomatoes well to make sure soil is moist and ideal for growing. Early in the growing season, watering plants daily in the morning. As temperatures increase, you might need to water tomato plants twice a day. Garden tomatoes typically require 1-2 inches of water a week.',
      grow: 'Early-season tomatoes require 50 to 60 days to reach harvest from transplanting; mid-season tomatoes require 60 to 80 days',
      about:
        'Tomatoes need at least 6 to 8 hours of sun to bring out their best flavors. You will need to stake, trellis, or cage most tomato plants to keep them off the ground. Decide on a support plan before you set out your plants, then add that support directly after planting. Give each plant enough room to grow.',
      image:
        'https://cdn.shopify.com/s/files/1/0257/4565/3811/articles/BONNIE_tomatoes_iStock-481349128-1800px_9f8f5390-a418-4d91-a3d0-00ae0b7900cb.jpg?v=1642541980'
    },
    {
      Name: 'Zucchini',
      fit: ['Beans', 'Corn', 'Dill', 'Garlic', 'Mint'],
      notFit: ['Cucumber', 'Pumpkin', 'Melon'],
      watering:
        'Water zucchini deeply, providing 1 to 2 inches of water whenever the top of the soil feels dry.',
      grow: '45 to 55 days',
      about:
        'Zucchini needs full sun (at least 6 to 8 hours) and consistently moist soil that is high in organic matter. Some zucchini varieties are vining types that require a trellis or a lot of room to sprawl. There are also bush types suitable for container gardening and small space gardening.',
      image:
        'https://images.pexels.com/photos/4750381/pexels-photo-4750381.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ]
  await Plant.insertMany(plant)
  console.log('New Plants!', plant)
}
const run = async () => {
  await main()
  db.close()
}
run()
