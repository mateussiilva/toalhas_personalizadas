import os
from os.path import join,isfile
from PIL import Image

SIZE = 32,32
path = "assets/imgs"

for data in os.listdir(path):
    p = join(path,data)
    if isfile(p) and ".jpg" in data:
        img = Image.open(p)
        img.resize(SIZE)
        img.save(p)
        print(p)