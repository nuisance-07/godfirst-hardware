from PIL import Image

# Open the image
img = Image.open('/home/collins/.gemini/antigravity-ide/brain/a9254236-b8f0-4580-aa6d-09b28ebbc731/new_dhawakah_logo_1782585556280.png')
img = img.convert("RGBA")

# Crop out the text at the bottom (bottom 30%)
width, height = img.size
img_cropped = img.crop((0, 0, width, int(height * 0.68)))

# Make white pixels transparent (using a floodfill or threshold)
# A simple threshold for white:
newData = []
for item in img_cropped.getdata():
    if item[0] > 235 and item[1] > 235 and item[2] > 235:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img_cropped.putdata(newData)

# Get bounding box to crop the transparent edges
bbox = img_cropped.getbbox()
if bbox:
    img_cropped = img_cropped.crop(bbox)

img_cropped.save('/home/collins/Desktop/Dhawakah Importers/hardware-webapp/public/logo-icon.png', "PNG")
print("Image processed successfully!")
