import os
import glob
import zipfile
from PIL import Image

artifacts_dir = '/home/collins/.gemini/antigravity-ide/brain/a9254236-b8f0-4580-aa6d-09b28ebbc731/'
public_dir = '/home/collins/Desktop/Dhawakah Importers/hardware-webapp/public/'

# Gather the 5 premium logos
logo_files = glob.glob(os.path.join(artifacts_dir, 'premium_logo_*.png'))

# Prepare zip file
zip_path = os.path.join(public_dir, 'premium_dhawakah_logos.zip')
with zipfile.ZipFile(zip_path, 'w') as zipf:
    for i, file_path in enumerate(logo_files, 1):
        try:
            img = Image.open(file_path)
            # Convert to RGB
            if img.mode in ('RGBA', 'LA'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[3])
                img = background
            else:
                img = img.convert('RGB')
            
            jpg_name = f'premium_concept_{i}.jpg'
            temp_jpg_path = os.path.join('/tmp', jpg_name)
            img.save(temp_jpg_path, 'JPEG', quality=95)
            
            # Add to zip
            zipf.write(temp_jpg_path, arcname=jpg_name)
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

print("Successfully created premium_dhawakah_logos.zip!")
