import os
import glob
import zipfile
from PIL import Image

artifacts_dir = '/home/collins/.gemini/antigravity-ide/brain/a9254236-b8f0-4580-aa6d-09b28ebbc731/'
public_dir = '/home/collins/Desktop/Dhawakah Importers/hardware-webapp/public/'

# Gather the 9 new logos and the 1 current logo
logo_files = glob.glob(os.path.join(artifacts_dir, 'logo_idea_*.png'))
current_logo = glob.glob(os.path.join(artifacts_dir, 'new_dhawakah_logo_*.png'))

if current_logo:
    logo_files.append(current_logo[0])

# Prepare zip file
zip_path = os.path.join(public_dir, 'dhawakah_logo_ideas.zip')
with zipfile.ZipFile(zip_path, 'w') as zipf:
    for i, file_path in enumerate(logo_files, 1):
        try:
            img = Image.open(file_path)
            # Convert to RGB (JPEG doesn't support alpha, replacing transparent with white)
            if img.mode in ('RGBA', 'LA'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[3]) # 3 is the alpha channel
                img = background
            else:
                img = img.convert('RGB')
            
            # Save as jpg in a temp location
            if 'new_dhawakah' in file_path:
                jpg_name = 'current_logo_concept.jpg'
            else:
                jpg_name = f'logo_idea_{i}.jpg'
                
            temp_jpg_path = os.path.join('/tmp', jpg_name)
            img.save(temp_jpg_path, 'JPEG', quality=95)
            
            # Add to zip
            zipf.write(temp_jpg_path, arcname=jpg_name)
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

print("Successfully created dhawakah_logo_ideas.zip!")
