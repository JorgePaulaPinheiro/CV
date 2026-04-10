import re

with open('App.jsx', 'r') as f:
    content = f.read()

# 1. Retirer numérotation des sections
content = content.replace('01. About Me', 'About Me')
content = content.replace('02. Education', 'Education')
content = content.replace('03. Experience', 'Experience')
content = content.replace('04. Skills', 'Skills')
content = content.replace('05. Beyond Work', 'Beyond Work')
content = content.replace('06. Get in Touch', 'Get in Touch')

# 2. Corriger EPFL (date et détails)
content = content.replace('2017 – 2018', '2012 – 2015')
content = content.replace('Mathematics Section · Propédeutique obtained', 'Microtechnique · Propédeutique 4.41/6 · Échec définitif au Bachelor')

# 3. Ajouter note CFC
content = content.replace('CPNV</p>', 'CPNV · 5.3/6</p>')

# 4. Retirer numéro de téléphone
content = re.sub(
    r'<div className="contact-item">\s*<span className="contact-icon">📱</span>\s*<a href="tel:\+41786159290">\+41 78 615 92 90</a>\s*</div>',
    '',
    content
)

with open('App.jsx', 'w') as f:
    f.write(content)

print('Done')
