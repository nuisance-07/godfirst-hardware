import os
import glob
from PIL import Image

artifacts_dir = '/home/collins/.gemini/antigravity-ide/brain/a9254236-b8f0-4580-aa6d-09b28ebbc731/'
public_dir = '/home/collins/Desktop/Dhawakah Importers/hardware-webapp/public/'

# Get the first premium logo
logo_file = glob.glob(os.path.join(artifacts_dir, 'premium_logo_1_*.png'))[0]
img = Image.open(logo_file).convert("RGBA")

# Crop out the text at the bottom (bottom 35%)
width, height = img.size
img_cropped = img.crop((0, 0, width, int(height * 0.65)))

# Make white/off-white background transparent
newData = []
for item in img_cropped.getdata():
    # The image might have a slight gradient, so we use a threshold
    if item[0] > 220 and item[1] > 220 and item[2] > 220:
        # Create a soft blend if it's close to the threshold (anti-aliasing hack)
        # But for simplicity, just make fully transparent
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img_cropped.putdata(newData)

# Crop to tight bounding box of non-transparent pixels
bbox = img_cropped.getbbox()
if bbox:
    img_cropped = img_cropped.crop(bbox)

icon_path = os.path.join(public_dir, 'logo-icon.png')
img_cropped.save(icon_path, "PNG")
print("Logo icon updated successfully!")
