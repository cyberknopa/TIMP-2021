import os
from os.path import expanduser

os.chdir(expanduser("~"))
for dir_path, dir_names, filenames in os.walk('Lab2'):  #  СЃРјРѕС‚СЂРёРј С‡С‚Рѕ Р»РµР¶РёС‚ 
    for file in filenames:
        os.remove(os.path.join(dir_path, file))  #  СЃС‚РёСЂР°РµРј РїСѓС‚СЊ Рє С„Р°Р№Р»Р°Рј
    for name in dir_names:
        os.removedirs(os.path.join(dir_path, name))  #  СЂРµРєСѓСЂСЃРёРІРЅРѕ СѓРґР°Р»СЏРµРј РєР°С‚Р°Р»РѕРіРё
        os.rmdir('/Lab2')  #  СѓРґР»СЏРµРј РїСѓС‚СЊ Рє РєР°С‚Р°Р»РѕРіСѓ
print("You uninstalled a program")
