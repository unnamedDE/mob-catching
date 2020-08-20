
summon item ~ ~1 ~ {Item:{id:"minecraft:arrow",Count:1b},Motion:[0.0,0.25,0.0],Tags:["ac_lib_dummy"]}
execute positioned ~ ~1 ~ run data modify entity @e[type=item,limit=1,sort=nearest,tag=ac_lib_dummy] Item.id set from block ~ ~-1 ~ Items[{Slot:12b}].id
execute positioned ~ ~1 ~ run data modify entity @e[type=item,limit=1,sort=nearest,tag=ac_lib_dummy] Item.Count set from block ~ ~-1 ~ Items[{Slot:12b}].Count
execute positioned ~ ~1 ~ run data modify entity @e[type=item,limit=1,sort=nearest,tag=ac_lib_dummy] Item.tag set from block ~ ~-1 ~ Items[{Slot:12b}].tag
execute positioned ~ ~1 ~ run tag @e[type=item,limit=1,sort=nearest,tag=ac_lib_dummy] remove ac_lib_dummy
