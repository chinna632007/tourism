import re
with open('keralatourism.html','r',encoding='utf-8') as f:
    content = f.read()

# Find all section headings
sections = re.findall(r'"heading":"([^"]+)"', content)
print("=== ALL SECTION HEADINGS ===")
for s in set(sections):
    print(s)

print("\n=== MEMORIES (Experiences) ===")
memories = re.findall(r'video_bg_activity.*?"items":\[(.*?)\],"video"', content, re.DOTALL)
if memories:
    items = re.findall(r'"heading":"([^"]+)".*?"image".*?"url":"([^"]+)"', memories[0])
    for item in items:
        print(f"  {item[0]} -> {item[1]}")
    video = re.findall(r'"desktop_url":"([^"]+)"', memories[0])
    if video:
        print(f"  Background Video: {video[0]}")

print("\n=== GATEWAY TO KERALA ===")
gateway = re.findall(r'highlight_bg_story.*?"heading":"([^"]+)".*?"description":"([^"]+)".*?"image".*?"url":"([^"]+)"', content)
for g in gateway:
    print(f"  {g[0]}: {g[1][:60]}... -> {g[2]}")

print("\n=== ESSENTIALS ===")
essentials = re.findall(r'"type":"essential".*?"description":"([^"]+)"', content)
for e in essentials:
    print(f"  Description: {e}")

print("\n=== VIDEO GALLERY ===")
video_gallery = re.findall(r'"type":"video_player".*?"heading":"([^"]+)".*?"url":"([^"]+)"', content)
for v in video_gallery:
    print(f"  {v[0]} -> {v[1]}")

print("\n=== ABOUT KERALA ===")
about = re.findall(r'"heading":"([^"]+)".*?"description":"([^"]+)"', content)
for a in about:
    if 'Kerala' in a[0] or 'About' in a[0] or 'God' in a[0]:
        print(f"  {a[0]}: {a[1][:60]}...")