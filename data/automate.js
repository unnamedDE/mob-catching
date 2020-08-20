const fs = require('fs');
const templates = require('./templates')

const ent = ['bat',
  'bee',
  'blaze',
  'cat',
  'cave_spider',
  'chicken',
  'cod',
  'cow',
  'creeper',
  'dolphin',
  'donkey',
  'drowned',
  'enderman',
  'endermite',
  'evoker',
  'fox',
  'ghast',
  'guardian',
  'hoglin',
  'horse',
  'husk',
  'llama',
  'magma_cube',
  'mooshroom',
  'mule',
  'ocelot',
  'panda',
  'parrot',
  'phantom',
  'pig',
  'piglin',
  'pillager',
  'polar_bear',
  'pufferfish',
  'rabbit',
  'ravager',
  'salmon',
  'sheep',
  'shulker',
  'silverfish',
  'skeleton',
  'skeleton_horse',
  'slime',
  'spider',
  'squid',
  'stray',
  'strider',
  'trader_llama',
  'tropical_fish',
  'turtle',
  'vex',
  'villager',
  'vindicator',
  'wandering_trader',
  'witch',
  'wither_skeleton',
  'wolf',
  'zoglin',
  'zombie',
  'zombie_horse',
  'zombie_villager',
  'zombified_piglin' ];

const paths = ["mob-catching:tick","mob-catching:mob_catching_crafting_mode"];


ent.forEach(e => {
  paths.push("mob-catching:mob-catching/" + e);
  fs.writeFile(`./mob-catching/functions/mob-catching/${e}.mcfunction`, templates.main(e), err => {
    if(err) console.error(err);
  })
  if(!fs.existsSync(`./mob-catching/functions/mob-catching/${e}`)) fs.mkdir(`./mob-catching/functions/mob-catching/${e}`, err => {
    if(err) console.error(err);
  });
  fs.writeFile(`./mob-catching/functions/mob-catching/${e}/1.mcfunction`, templates.f1(e), err => {
    if(err) console.error(err);
  })
  fs.writeFile(`./mob-catching/functions/mob-catching/${e}/2.mcfunction`, templates.f2(e), err => {
    if(err) console.error(err);
  })
  fs.writeFile(`./mob-catching/functions/mob-catching/${e}/3.mcfunction`, templates.f3(e), err => {
    if(err) console.error(err);
  })
  fs.writeFile(`./mob-catching/functions/mob-catching/${e}/4.mcfunction`, templates.f4(e), err => {
    if(err) console.error(err);
  })
});

// fs.readFile('./mob-catching/functions/mob-catching/zombie.mcfunction', 'utf8', (err, data) => {
//   console.log(data);
// })

console.log(JSON.stringify(paths));
