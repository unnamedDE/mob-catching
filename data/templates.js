module.exports.main = e => `execute if entity @s[tag=!ac_lib_advanced_crafter_crafted] align xyz positioned ~.5 ~1 ~.5 if entity @e[type=minecraft:${e},distance=...75] positioned ~ ~-1 ~ if block ~ ~ ~ minecraft:barrel{Items:[{Slot:9b,id:"minecraft:end_crystal",tag:{ac_lib:{craftingMode:"mob-catching"}}}]} if block ~ ~ ~ minecraft:barrel{Items:[{Slot:11b,id:"minecraft:egg"}]} unless data block ~ ~ ~ Items[{Slot:11b}].tag unless block ~ ~ ~ minecraft:barrel{Items:[{Slot: 16b}]} run function mob-catching:mob-catching/${e}/1

execute if entity @s[tag=ac_lib_advanced_crafter_crafted_mob-catching_${e}] if block ~ ~ ~ minecraft:barrel{Items:[{Slot:11b,id:"minecraft:egg"}]} unless data block ~ ~ ~ Items[{Slot:11b}].tag unless block ~ ~ ~ minecraft:barrel{Items:[{Slot:16b,Count:1b,id:"minecraft:${e}_spawn_egg"}]} run function mob-catching:mob-catching/${e}/2

execute if entity @s[tag=ac_lib_advanced_crafter_crafted_mob-catching_${e}] if block ~ ~ ~ minecraft:barrel unless block ~ ~ ~ minecraft:barrel{Items:[{Slot:9b,id:"minecraft:end_crystal",tag:{ac_lib:{craftingMode:"mob-catching"}}}]} run function mob-catching:mob-catching/3
execute if entity @s[tag=ac_lib_advanced_crafter_crafted_mob-catching_${e}] if block ~ ~ ~ minecraft:barrel unless block ~ ~ ~ minecraft:barrel{Items:[{Slot:11b,id:"minecraft:egg"}]} run function mob-catching:mob-catching/${e}/3
execute if entity @s[tag=ac_lib_advanced_crafter_crafted_mob-catching_${e}] if block ~ ~ ~ minecraft:barrel if data block ~ ~ ~ Items[{Slot:11b}].tag run function mob-catching:mob-catching/${e}/3
execute if entity @s[tag=ac_lib_advanced_crafter_crafted_mob-catching_${e}] if block ~ ~ ~ minecraft:barrel align xyz positioned ~.5 ~1 ~.5 unless entity @e[type=minecraft:${e},distance=...75] positioned ~ ~-1 ~ run function mob-catching:mob-catching/${e}/3

execute if entity @s[tag=ac_lib_advanced_crafter_crafted_mob-catching_${e},tag=ac_lib_advanced_crafter_destroy] run function mob-catching:mob-catching/${e}/4
`

module.exports.f1 = e => `replaceitem block ~ ~ ~ container.16 minecraft:${e}_spawn_egg 1
tag @s add ac_lib_advanced_crafter_crafted
tag @s add ac_lib_advanced_crafter_crafted_mob-catching_${e}
tag @s add ac_lib_keep_0
tag @s add ac_lib_keep_1
tag @s add ac_lib_keep_2
tag @s add ac_lib_keep_3
tag @s add ac_lib_keep_5
tag @s add ac_lib_keep_6
tag @s add ac_lib_keep_7
tag @s add ac_lib_keep_8
tag @s add ac_lib_keep_9
tag @s add ac_lib_keep_10
tag @s add ac_lib_keep_11
`

module.exports.f2 = e => `function ac_lib:advanced_crafter/crafted
execute align xyz positioned ~.5 ~1 ~.5 run tp @e[type=minecraft:${e},limit=1,sort=nearest,distance=...75] ~ -100 ~
execute align xyz run particle minecraft:cloud ~.5 ~2 ~.5 .25 1 .25 .1 10
tag @s remove ac_lib_advanced_crafter_crafted
tag @s remove ac_lib_advanced_crafter_crafted_mob-catching_${e}
tag @s remove ac_lib_keep_0
tag @s remove ac_lib_keep_1
tag @s remove ac_lib_keep_2
tag @s remove ac_lib_keep_3
tag @s remove ac_lib_keep_5
tag @s remove ac_lib_keep_6
tag @s remove ac_lib_keep_7
tag @s remove ac_lib_keep_8
tag @s remove ac_lib_keep_9
tag @s remove ac_lib_keep_10
tag @s remove ac_lib_keep_11
`

module.exports.f3 = e => `replaceitem block ~ ~ ~ container.16 minecraft:air
tag @s remove ac_lib_advanced_crafter_crafted
tag @s remove ac_lib_advanced_crafter_crafted_mob-catching_${e}
tag @s remove ac_lib_keep_0
tag @s remove ac_lib_keep_1
tag @s remove ac_lib_keep_2
tag @s remove ac_lib_keep_3
tag @s remove ac_lib_keep_5
tag @s remove ac_lib_keep_6
tag @s remove ac_lib_keep_7
tag @s remove ac_lib_keep_8
tag @s remove ac_lib_keep_9
tag @s remove ac_lib_keep_10
tag @s remove ac_lib_keep_11
`

module.exports.f4 = e => `kill @e[type=minecraft:item,limit=1,sort=nearest,nbt={Item:{id:"minecraft:${e}_spawn_egg",Count:1b}}]`
