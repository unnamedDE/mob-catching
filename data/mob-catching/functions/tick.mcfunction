execute if data block ~ ~ ~ Items[{Slot:1b}].tag.PlaceholderMobCatching run replaceitem block ~ ~ ~ container.1 air
execute if data block ~ ~ ~ Items[{Slot:2b}].tag.PlaceholderMobCatching run replaceitem block ~ ~ ~ container.2 air
execute if data block ~ ~ ~ Items[{Slot:3b}].tag.PlaceholderMobCatching run replaceitem block ~ ~ ~ container.3 air
execute if data block ~ ~ ~ Items[{Slot:5b}].tag.PlaceholderMobCatching run replaceitem block ~ ~ ~ container.5 air
execute if data block ~ ~ ~ Items[{Slot:7b}].tag.PlaceholderMobCatching run replaceitem block ~ ~ ~ container.7 air
execute if data block ~ ~ ~ Items[{Slot:10b}].tag.PlaceholderMobCatching run replaceitem block ~ ~ ~ container.10 air
execute if data block ~ ~ ~ Items[{Slot:12b}].tag.PlaceholderMobCatching run replaceitem block ~ ~ ~ container.12 air
execute if data block ~ ~ ~ Items[{Slot:14b}].tag.PlaceholderMobCatching run replaceitem block ~ ~ ~ container.14 air
execute if data block ~ ~ ~ Items[{Slot:19b}].tag.PlaceholderMobCatching run replaceitem block ~ ~ ~ container.19 air
execute if data block ~ ~ ~ Items[{Slot:20b}].tag.PlaceholderMobCatching run replaceitem block ~ ~ ~ container.20 air
execute if data block ~ ~ ~ Items[{Slot:21b}].tag.PlaceholderMobCatching run replaceitem block ~ ~ ~ container.21 air
execute if data block ~ ~ ~ Items[{Slot:23b}].tag.PlaceholderMobCatching run replaceitem block ~ ~ ~ container.23 air
execute if data block ~ ~ ~ Items[{Slot:25b}].tag.PlaceholderMobCatching run replaceitem block ~ ~ ~ container.25 air
execute if block ~ ~ ~ minecraft:barrel{Items:[{Slot:9b,id:"minecraft:end_crystal",tag:{ac_lib:{craftingMode:"mob-catching"}}}]} run function mob-catching:protect_slots
