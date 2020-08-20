execute if entity @s[tag=!ac_lib_advanced_crafter_crafted] align xyz positioned ~.5 ~1 ~.5 if entity @e[type=minecraft:wolf,distance=...75] positioned ~ ~-1 ~ if block ~ ~ ~ minecraft:barrel{Items:[{Slot:9b,id:"minecraft:end_crystal",tag:{ac_lib:{craftingMode:"mob-catching"}}}]} if block ~ ~ ~ minecraft:barrel{Items:[{Slot:11b,id:"minecraft:egg"}]} unless data block ~ ~ ~ Items[{Slot:11b}].tag unless block ~ ~ ~ minecraft:barrel{Items:[{Slot: 16b}]} run function mob-catching:mob-catching/wolf/1

execute if entity @s[tag=ac_lib_advanced_crafter_crafted_mob-catching_wolf] if block ~ ~ ~ minecraft:barrel{Items:[{Slot:11b,id:"minecraft:egg"}]} unless data block ~ ~ ~ Items[{Slot:11b}].tag unless block ~ ~ ~ minecraft:barrel{Items:[{Slot:16b,Count:1b,id:"minecraft:wolf_spawn_egg"}]} run function mob-catching:mob-catching/wolf/2

execute if entity @s[tag=ac_lib_advanced_crafter_crafted_mob-catching_wolf] if block ~ ~ ~ minecraft:barrel unless block ~ ~ ~ minecraft:barrel{Items:[{Slot:9b,id:"minecraft:end_crystal",tag:{ac_lib:{craftingMode:"mob-catching"}}}]} run function mob-catching:mob-catching/3
execute if entity @s[tag=ac_lib_advanced_crafter_crafted_mob-catching_wolf] if block ~ ~ ~ minecraft:barrel unless block ~ ~ ~ minecraft:barrel{Items:[{Slot:11b,id:"minecraft:egg"}]} run function mob-catching:mob-catching/wolf/3
execute if entity @s[tag=ac_lib_advanced_crafter_crafted_mob-catching_wolf] if block ~ ~ ~ minecraft:barrel if data block ~ ~ ~ Items[{Slot:11b}].tag run function mob-catching:mob-catching/wolf/3
execute if entity @s[tag=ac_lib_advanced_crafter_crafted_mob-catching_wolf] if block ~ ~ ~ minecraft:barrel align xyz positioned ~.5 ~1 ~.5 unless entity @e[type=minecraft:wolf,distance=...75] positioned ~ ~-1 ~ run function mob-catching:mob-catching/wolf/3

execute if entity @s[tag=ac_lib_advanced_crafter_crafted_mob-catching_wolf,tag=ac_lib_advanced_crafter_destroy] run function mob-catching:mob-catching/wolf/4
