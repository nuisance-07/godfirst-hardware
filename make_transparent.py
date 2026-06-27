import os
from PIL import Image

logo_path = '/home/collins/Desktop/Dhawakah Importers/hardware-webapp/public/logo.jpg'
out_path = '/home/collins/Desktop/Dhawakah Importers/hardware-webapp/public/logo.png'

img = Image.open(logo_path).convert("RGBA")
newData = []

# Flood fill or threshold to remove white background
# Since it's a JPEG, there are compression artifacts around text.
# A simple threshold might leave some white fringes.
# To do a better job, if it's close to white, we make it transparent.
for item in img.getdata():
    if item[0] > 225 and item[1] > 225 and item[2] > 225:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img.putdata(newData)

# Crop transparent edges
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

img.save(out_path, "PNG")
print("Transparent PNG created successfully!")
