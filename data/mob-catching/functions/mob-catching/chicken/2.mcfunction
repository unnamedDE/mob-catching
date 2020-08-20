function ac_lib:advanced_crafter/crafted
execute align xyz positioned ~.5 ~1 ~.5 run tp @e[type=minecraft:chicken,limit=1,sort=nearest,distance=...75] ~ -100 ~
execute align xyz run particle minecraft:cloud ~.5 ~2 ~.5 .25 1 .25 .1 10
tag @s remove ac_lib_advanced_crafter_crafted
tag @s remove ac_lib_advanced_crafter_crafted_mob-catching_chicken
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
