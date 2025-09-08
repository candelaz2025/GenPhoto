import React from 'react';

interface PromptExamplesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPrompt: (prompt: string) => void;
}

interface PromptExample {
    title: string;
    description: string;
    prompt: string;
    imageUrl: string;
}

export const examplePrompts: PromptExample[] = [
    {
        title: 'รูปบอลลูน 3D สไตล์ Pixar',
        description: 'เปลี่ยนใบหน้าในรูปภาพอ้างอิงให้กลายเป็นตัวการ์ตูนบอลลูน 3D สไตล์ Pixar ที่น่ารักและมีรายละเอียดสูง',
        prompt: `Using the reference face, generate a Pixar-style 3D balloon caricature with ultra-detailed sculpted skin, glossy shine, oversized cheeks, and a balloon knot at the bottom with a balloon string extending downward, while preserving the exact hairstyle and facial proportions from the reference. Maintain the closed-eye kissing expression with cinematic DOF and polished surreal toy-like aesthetics, using the same background and lighting as in the reference image.`,
        imageUrl: 'https://picsum.photos/seed/pixar-balloon-3d/400/300',
    },
    {
        title: 'ฟิกเกอร์ 3D บนคอนโซลรถ',
        description: 'สร้างตุ๊กตาฟิกเกอร์ 3D ที่สมจริงเหมือนคนในภาพถ่าย วางอยู่บนคอนโซลรถยนต์พร้อมกล่องบรรจุภัณฑ์ขนาดเล็ก',
        prompt: `Create an ultra-high-resolution, hyper-realistic dashboard doll of the person in the attached photo. The doll must accurately replicate the person’s facial features, hairstyle, clothing, and pose exactly as in the original image. Place the doll on a car dashboard, fixed on a small round spring-mounted base that allows gentle bobble-head movement. Beside the doll, include a miniature packaging box. The car interior should be realistically detailed with blurred city street scenery visible outside the windshield.`,
        imageUrl: 'https://picsum.photos/seed/dashboard-figure-3d/400/300',
    },
    {
        title: 'เซลฟี่กลุ่มกับทีม Marvel',
        description: 'สร้างภาพเซลฟี่กลุ่มที่สมจริง โดยมีบุคคลในภาพอ้างอิงกำลังถ่ายรูปกับเหล่าซูเปอร์ฮีโร่ Marvel',
        prompt: `A hyper-realistic group selfie using the uploaded image (maintaining the original face, clothes, and natural look). The person is holding a smartphone to take the selfie, surrounded by Marvel members: Iron Man, Captain America, Thor, Hulk, Black Widow, and Spider-Man—all smiling and posing casually like close friends. Full-body view of everyone, looking like a real selfie in a city setting, natural daylight, cinematic quality, vibrant colors, photorealistic style.`,
        imageUrl: 'https://picsum.photos/seed/marvel-selfie/400/300',
    },
    {
        title: 'โลกจิ๋วในร้านหนังสือ',
        description: 'สร้างภาพไดโอรามาขนาดจิ๋วของร้านหนังสือที่ดูอบอุ่นและมีเสน่ห์ พร้อมรายละเอียดเล็กๆ น้อยๆ ที่น่าทึ่ง',
        prompt: `A miniature diorama of a quaint bookstore, tiny books lining the shelves, a small armchair by a fireplace, cinematic lighting, hyperdetailed, 8k, photorealistic.`,
        imageUrl: 'https://picsum.photos/seed/miniature-bookstore/400/300',
    },
    {
        title: 'ภาพถ่ายอาหารน่ารับประทาน',
        description: 'สร้างภาพถ่ายแพนเค้กที่ดูสมจริงและน่าอร่อยจนต้องน้ำลายสอ เหมาะสำหรับบล็อกอาหารหรือเมนู',
        prompt: `A hyperrealistic photo of a stack of fluffy pancakes dripping with maple syrup, topped with fresh berries and a dusting of powdered sugar. Shot with a macro lens, shallow depth of field, warm morning light.`,
        imageUrl: 'https://picsum.photos/seed/delicious-pancakes/400/300',
    },
    {
        title: 'ทิวทัศน์แฟนตาซี',
        description: 'สร้างภาพวาดดิจิทัลของปราสาทบนเกาะลอยฟ้าที่ยิ่งใหญ่และสวยงามเหมือนในโลกแห่งจินตนาการ',
        prompt: `An epic fantasy landscape of a floating island with a majestic castle, waterfalls cascading into the clouds below, vibrant sunset, digital painting, masterpiece.`,
        imageUrl: 'https://picsum.photos/seed/fantasy-landscape/400/300',
    },
    {
        title: 'นักบินอวกาศในป่าเรืองแสง',
        description: 'นักบินอวกาศกำลังสำรวจป่าบนดาวเคราะห์ต่างดาวที่เต็มไปด้วยพืชเรืองแสงและสิ่งมีชีวิตแปลกตา',
        prompt: 'An astronaut exploring an alien bioluminescent forest, glowing mushrooms and fantastical creatures, cinematic, volumetric lighting, hyperdetailed, artstation.',
        imageUrl: 'https://picsum.photos/seed/glowing-forest/400/300',
    },
    {
        title: 'เมือง Cyberpunk ยามค่ำคืน',
        description: 'ภาพมุมกว้างของเมืองแห่งอนาคตที่เต็มไปด้วยแสงนีออน รถบินได้ และตึกระฟ้าสูงตระหง่านในคืนที่ฝนตก',
        prompt: 'Cyberpunk city street at night, heavy rain, neon signs reflecting on wet pavement, flying cars, towering skyscrapers, Blade Runner aesthetic, ultra realistic, 8k.',
        imageUrl: 'https://picsum.photos/seed/cyberpunk-night/400/300',
    },
    {
        title: 'ห้องนั่งเล่นสไตล์ Cozy',
        description: 'ห้องนั่งเล่นแสนอบอุ่นในกระท่อมไม้ มีเตาผิงไฟกำลังลุกโชนและแมวขดตัวนอนอยู่บนพรม',
        prompt: 'Cozy cabin living room, crackling fireplace, a cat curled up on a rug, warm lighting, detailed wood texture, hygge atmosphere, photorealistic.',
        imageUrl: 'https://picsum.photos/seed/cozy-living-room/400/300',
    },
    {
        title: 'ภาพ Portrait สีน้ำ',
        description: 'ภาพวาดบุคคลสไตล์สีน้ำที่ดูอ่อนโยนและมีศิลปะ พร้อมสีที่กระจายตัวอย่างสวยงาม',
        prompt: 'A beautiful watercolor portrait of a young woman, soft pastel colors, splatters and drips, delicate brushstrokes, on textured paper, artistic.',
        imageUrl: 'https://picsum.photos/seed/watercolor-portrait/400/300',
    },
    {
        title: 'มังกรในพายุ',
        description: 'มังกรไฟขนาดมหึมากำลังบินทะยานผ่านพายุสายฟ้าที่รุนแรง แสดงถึงพลังและความยิ่งใหญ่',
        prompt: 'An epic dragon flying through a thunderstorm, lightning striking in the background, dramatic, powerful, fantasy concept art, matte painting.',
        imageUrl: 'https://picsum.photos/seed/dragon-storm/400/300',
    },
    {
        title: 'หุ่นยนต์ในสวนดอกไม้',
        description: 'หุ่นยนต์หน้าตาเป็นมิตรกำลังรดน้ำดอกไม้ในสวนที่สวยงาม เป็นการผสมผสานระหว่างเทคโนโลยีและธรรมชาติ',
        prompt: 'A friendly robot watering flowers in a beautiful garden, detailed mechanical parts, vibrant blossoms, juxtaposition of nature and technology, whimsical.',
        imageUrl: 'https://picsum.photos/seed/robot-garden/400/300',
    },
    {
        title: 'ห้องนอน Isometric',
        description: 'ภาพสามมิติแบบ Isometric ของห้องนอนที่ตกแต่งอย่างมีสไตล์และเต็มไปด้วยรายละเอียดเล็กๆ น้อยๆ',
        prompt: 'Isometric 3D render of a stylish bedroom, cozy bed, plants, bookshelf, soft lighting, miniature, blender render.',
        imageUrl: 'https://picsum.photos/seed/isometric-bedroom/400/300',
    },
    {
        title: 'สติกเกอร์ซูชิสุดน่ารัก',
        description: 'ออกแบบสติกเกอร์รูปซูชิหลากหลายหน้าในสไตล์ Kawaii ที่มีชีวิตชีวาและน่ารัก',
        prompt: 'Kawaii sushi characters sticker sheet, cute faces, vibrant colors, vector illustration, die-cut sticker design, white background.',
        imageUrl: 'https://picsum.photos/seed/kawaii-sushi/400/300',
    },
    {
        title: 'รถสปอร์ต Vintage',
        description: 'รถสปอร์ตคลาสสิกจอดอยู่ริมถนนในเมืองยุโรปเก่า แสงอาทิตย์ยามเย็นส่องกระทบตัวรถอย่างสวยงาม',
        prompt: 'Vintage sports car parked on an old European cobblestone street, golden hour lighting, cinematic, film photography style, Kodak Portra 400.',
        imageUrl: 'https://picsum.photos/seed/vintage-car/400/300',
    },
    {
        title: 'ซุปเปอร์ฮีโร่แมว',
        description: 'แมวสวมผ้าคลุมและหน้ากากซูเปอร์ฮีโร่ ยืนโพสท่าอย่างสง่างามบนยอดตึกสูง',
        prompt: 'A cat as a superhero, wearing a cape and mask, standing heroically on a skyscraper rooftop overlooking the city, dramatic lighting, digital painting.',
        imageUrl: 'https://picsum.photos/seed/superhero-cat/400/300',
    },
    {
        title: 'ภาพถ่ายขาว-ดำแนวสตรีท',
        description: 'ภาพถ่ายแนวสตรีทในรูปแบบขาว-ดำที่จับภาพช่วงเวลาที่น่าสนใจของผู้คนในเมืองใหญ่',
        prompt: 'Black and white street photography, a man walking through the rain with an umbrella, high contrast, grainy, film noir style, candid moment.',
        imageUrl: 'https://picsum.photos/seed/street-photo-bw/400/300',
    },
    {
        title: 'โลกใต้น้ำมหัศจรรย์',
        description: 'โลกใต้ทะเลลึกที่เต็มไปด้วยปะการังสีสันสดใส ฝูงปลา และสิ่งมีชีวิตใต้ทะเลที่น่าอัศจรรย์',
        prompt: 'Vibrant underwater coral reef, teeming with colorful fish, sea turtles, and glowing jellyfish, sunlight filtering through the water, National Geographic photo style.',
        imageUrl: 'https://picsum.photos/seed/underwater-world/400/300',
    },
    {
        title: 'ตัวละครสไตล์ Claymation',
        description: 'สร้างตัวละครนักสืบที่ดูมีเสน่ห์ในสไตล์ Claymation (ดินน้ำมัน) ที่มีรายละเอียดและพื้นผิวที่สมจริง',
        prompt: 'A charming detective character, claymation style, detailed fingerprints on clay texture, stop-motion look, Aardman Animations inspired.',
        imageUrl: 'https://picsum.photos/seed/claymation-detective/400/300',
    },
    {
        title: 'โลโก้ร้านกาแฟมินิมอล',
        description: 'ออกแบบโลโก้ที่เรียบง่ายแต่ดูดีสำหรับร้านกาแฟ โดยใช้รูปทรงของเมล็ดกาแฟและถ้วยกาแฟ',
        prompt: 'Minimalist logo design for a coffee shop, clean lines, using coffee bean and cup shapes, vector art, neutral colors.',
        imageUrl: 'https://picsum.photos/seed/coffee-logo/400/300',
    },
    {
        title: 'ภาพวาดทิวทัศน์โดย Van Gogh',
        description: 'ทุ่งดอกลาเวนเดอร์ในตอนกลางคืนภายใต้ท้องฟ้าที่เต็มไปด้วยดวงดาว ในสไตล์การวาดของ Vincent van Gogh',
        prompt: 'A lavender field at night under a swirling starry sky, in the style of Vincent van Gogh, impasto oil painting, expressive brushstrokes.',
        imageUrl: 'https://picsum.photos/seed/van-gogh-lavender/400/300',
    },
    {
        title: 'ห้องทดลองของนักวิทยาศาสตร์สติเฟื่อง',
        description: 'ห้องทดลองที่รกและเต็มไปด้วยอุปกรณ์วิทยาศาสตร์แปลกๆ ขวดแก้วที่มีของเหลวสีต่างๆ และแผนการที่ซับซ้อน',
        prompt: 'A mad scientist\'s laboratory, cluttered with strange contraptions, bubbling beakers, and complex schematics, steampunk aesthetic, detailed.',
        imageUrl: 'https://picsum.photos/seed/mad-scientist-lab/400/300',
    },
    {
        title: 'ศิลปะ Pixel Art เมืองญี่ปุ่น',
        description: 'ฉากเมืองในญี่ปุ่นยามค่ำคืนที่เต็มไปด้วยโคมไฟกระดาษและร้านค้าเล็กๆ ในรูปแบบ Pixel Art',
        prompt: 'Japanese city street at night, paper lanterns, small shops, pixel art, 16-bit, nostalgic, retro video game style.',
        imageUrl: 'https://picsum.photos/seed/pixel-art-japan/400/300',
    },
    {
        title: 'ภาพ Abstract รูปทรงเรขาคณิต',
        description: 'สร้างสรรค์ภาพศิลปะนามธรรมที่ใช้รูปทรงเรขาคณิตและสีสันที่ตัดกันอย่างสวยงาม',
        prompt: 'Abstract geometric art, overlapping circles and squares, bold color palette, Bauhaus style, clean composition.',
        imageUrl: 'https://picsum.photos/seed/abstract-geometry/400/300',
    },
    {
        title: 'เบอร์เกอร์ชวนหิว',
        description: 'ภาพถ่ายเบอร์เกอร์เนื้อชุ่มฉ่ำขนาดใหญ่ที่เต็มไปด้วยชีสเยิ้มๆ และผักสดใหม่ ถ่ายแบบโคลสอัพ',
        prompt: 'Extreme close-up food photography of a juicy gourmet burger, melted cheese dripping, fresh toppings, macro shot, delicious.',
        imageUrl: 'https://picsum.photos/seed/gourmet-burger/400/300',
    },
    {
        title: 'นักรบซามูไรในป่าไผ่',
        description: 'นักรบซามูไรในชุดเกราะเต็มยศยืนอย่างสงบนิ่งท่ามกลางป่าไผ่ แสงแดดส่องลงมาเป็นลำ',
        prompt: 'A samurai warrior in full armor, standing silently in a dense bamboo forest, rays of sunlight filtering through, cinematic, Kurosawa inspired.',
        imageUrl: 'https://picsum.photos/seed/samurai-bamboo/400/300',
    },
    {
        title: 'บ้านต้นไม้ในฝัน',
        description: 'บ้านต้นไม้ขนาดใหญ่ที่ซับซ้อนและสวยงาม มีสะพานเชือกเชื่อมต่อกันระหว่างต้นไม้หลายต้น',
        prompt: 'An intricate and magical treehouse village, connected by rope bridges, glowing lanterns, fantasy illustration, detailed architecture.',
        imageUrl: 'https://picsum.photos/seed/dream-treehouse/400/300',
    },
    {
        title: 'ภาพ Double Exposure',
        description: 'ภาพถ่ายซ้อนระหว่างเงาของหมาป่าและป่าสนในคืนที่พระจันทร์เต็มดวง',
        prompt: 'Double exposure portrait of a wolf silhouette and a pine forest with a full moon, creative photography, surreal, monochrome.',
        imageUrl: 'https://picsum.photos/seed/double-exposure-wolf/400/300',
    },
    {
        title: 'แฟชั่นยุค 1920s',
        description: 'หญิงสาวในชุดเดรสสไตล์ Flapper ยุค 1920s กำลังเต้นรำในงานปาร์ตี้ที่หรูหรา',
        prompt: 'A woman in a 1920s flapper dress dancing at a glamorous party, Art Deco style, Great Gatsby atmosphere, vintage photography.',
        imageUrl: 'https://picsum.photos/seed/1920s-fashion/400/300',
    },
    {
        title: 'เกาะลอยฟ้าเหนือเมฆ',
        description: 'เกาะเล็กๆ ที่ลอยอยู่บนท้องฟ้า มีบ้านหลังเล็กๆ และต้นไม้หนึ่งต้นอยู่บนนั้น',
        prompt: 'A small floating island in the sky with a tiny cottage and a single tree, surreal, peaceful, Studio Ghibli inspired, beautiful clouds.',
        imageUrl: 'https://picsum.photos/seed/floating-island/400/300',
    },
    {
        title: 'ภาพวาดสเก็ตช์สถาปัตยกรรม',
        description: 'ภาพร่างสถาปัตยกรรมของอาคารสมัยใหม่ที่ใช้ดินสอและหมึก แสดงให้เห็นถึงเส้นสายที่เฉียบคม',
        prompt: 'Architectural sketch of a modern building, pencil and ink, clean lines, concept art, detailed blueprint style.',
        imageUrl: 'https://picsum.photos/seed/architecture-sketch/400/300',
    },
    {
        title: 'สัตว์ในชุดมนุษย์',
        description: 'สุนัขจิ้งจอกในชุดสูทสไตล์วิคตอเรียนกำลังนั่งอ่านหนังสือในห้องสมุดที่หรูหรา',
        prompt: 'A fox dressed in a Victorian gentleman\'s suit, sitting in a lavish library and reading a book, anthropomorphic character, oil painting.',
        imageUrl: 'https://picsum.photos/seed/animal-in-suit/400/300',
    },
    {
        title: 'ของหวานในโลกแฟนตาซี',
        description: 'คัพเค้กที่ตกแต่งเป็นปราสาทเทพนิยายขนาดเล็ก มีน้ำตาลไอซิ่งเป็นหอคอย',
        prompt: 'A fantasy cupcake decorated like a miniature fairytale castle, intricate icing details, magical, whimsical food art.',
        imageUrl: 'https://picsum.photos/seed/fantasy-dessert/400/300',
    },
    {
        title: 'ภาพถ่ายมาโครหยดน้ำ',
        description: 'ภาพถ่ายมาโครของหยดน้ำบนใยแมงมุม สะท้อนภาพดอกไม้ที่อยู่เบื้องหลัง',
        prompt: 'Macro photography of a dewdrop on a spider web, reflecting a flower in the background, beautiful refraction, sharp details.',
        imageUrl: 'https://picsum.photos/seed/macro-droplet/400/300',
    },
    {
        title: 'รถไฟไอน้ำผ่านหุบเขา',
        description: 'รถไฟไอน้ำโบราณกำลังวิ่งข้ามสะพานสูงผ่านหุบเขาที่ปกคลุมด้วยหมอกในยามเช้า',
        prompt: 'A vintage steam train crossing a high bridge over a misty valley at sunrise, epic landscape, cinematic, atmospheric.',
        imageUrl: 'https://picsum.photos/seed/steam-train-valley/400/300',
    },
    {
        title: 'นักสำรวจในซากปรักหักพัง',
        description: 'นักสำรวจกำลังค้นพบเมืองโบราณที่สาบสูญในป่าลึก เต็มไปด้วยเถาวัลย์และซากปรักหักพัง',
        prompt: 'An explorer discovering a lost ancient city in the jungle, overgrown with vines, crumbling ruins, Indiana Jones vibe, adventure.',
        imageUrl: 'https://picsum.photos/seed/explorer-ruins/400/300',
    },
    {
        title: 'ภาพเหมือนสไตล์ Pop Art',
        description: 'ภาพวาดบุคคลที่ใช้สีสันสดใสและลายเส้นที่ชัดเจนในสไตล์ Pop Art ของ Andy Warhol',
        prompt: 'A portrait of a woman in the style of Andy Warhol, bold colors, screen printing effect, pop art, iconic.',
        imageUrl: 'https://picsum.photos/seed/pop-art-portrait/400/300',
    },
    {
        title: 'ตลาดกลางคืนในเอเชีย',
        description: 'ตลาดกลางคืนที่คึกคักในเอเชียตะวันออกเฉียงใต้ เต็มไปด้วยร้านอาหารริมทาง ผู้คน และแสงไฟ',
        prompt: 'A bustling night market in Southeast Asia, street food vendors, crowds of people, steam rising from woks, vibrant, candid photography.',
        imageUrl: 'https://picsum.photos/seed/asian-night-market/400/300',
    },
    {
        title: 'เรือโจรสลัดในทะเลหมอก',
        description: 'เรือโจรสลัดผีสิงกำลังล่องเรือออกจากทะเลที่ปกคลุมด้วยหมอกหนาทึบในตอนเช้าตรู่',
        prompt: 'A ghostly pirate ship emerging from a thick morning fog, tattered sails, eerie, atmospheric, matte painting.',
        imageUrl: 'https://picsum.photos/seed/pirate-ship-fog/400/300',
    },
    {
        title: 'ภาพวาดลายเส้น (Line Art)',
        description: 'ภาพวาดลายเส้นที่เรียบง่ายแต่สง่างามของใบหน้าคน โดยใช้เส้นเพียงเส้นเดียวต่อเนื่องกัน',
        prompt: 'Minimalist one-line drawing of a face, continuous line art, elegant, simple, black and white.',
        imageUrl: 'https://picsum.photos/seed/line-art-face/400/300',
    },
    {
        title: 'ภูเขาไฟกำลังปะทุ',
        description: 'ภาพภูเขาไฟที่กำลังปะทุอย่างรุนแรงในเวลากลางคืน ลาวาสีแดงฉานไหลลงมาตามไหล่เขา',
        prompt: 'A volcano erupting at night, glowing red lava flowing down its slopes, ash clouds billow into the sky, powerful, National Geographic style.',
        imageUrl: 'https://picsum.photos/seed/volcano-eruption/400/300',
    },
    {
        title: 'ร้านขนมหวานในปารีส',
        description: 'หน้าร้านปาติสเซอรี (ร้านขนม) ที่สวยงามในกรุงปารีส โชว์ขนมอบและเค้กที่น่ารับประทาน',
        prompt: 'A charming Parisian patisserie storefront, displaying exquisite pastries and cakes, romantic, inviting, lifestyle photography.',
        imageUrl: 'https://picsum.photos/seed/paris-patisserie/400/300',
    },
    {
        title: 'อัศวินเผชิญหน้ากับปีศาจ',
        description: 'อัศวินในชุดเกราะเงาวับกำลังยืนเผชิญหน้ากับปีศาจขนาดใหญ่ที่น่ากลัวในถ้ำมืด',
        prompt: 'A knight in shining armor confronting a giant, fearsome demon in a dark cave, epic fantasy battle, dramatic lighting, concept art.',
        imageUrl: 'https://picsum.photos/seed/knight-vs-demon/400/300',
    },
    {
        title: 'ภาพถ่ายทางช้างเผือก',
        description: 'ภาพถ่ายท้องฟ้ายามค่ำคืนที่เห็นทางช้างเผือกได้อย่างชัดเจนเหนือทิวเขาที่เงียบสงบ',
        prompt: 'Astrophotography of the Milky Way galaxy stretching across the night sky above a silhouette of mountains, long exposure, vibrant stars.',
        imageUrl: 'https://picsum.photos/seed/milky-way/400/300',
    },
    {
        title: 'ศิลปะกระดาษตัด (Papercraft)',
        description: 'สร้างสรรค์ภาพป่าไม้ที่มีสัตว์ต่างๆ ในรูปแบบศิลปะการตัดกระดาษที่ซับซ้อนและมีมิติ',
        prompt: 'Intricate papercraft art of a forest scene, layered paper, animals like deer and foxes, 3D paper art, beautiful details.',
        imageUrl: 'https://picsum.photos/seed/papercraft-forest/400/300',
    },
    {
        title: 'ดีเจในคลับนีออน',
        description: 'ดีเจกำลังเล่นดนตรีในคลับใต้ดินที่เต็มไปด้วยแสงเลเซอร์และแสงนีออน ผู้คนกำลังเต้นรำอย่างสนุกสนาน',
        prompt: 'A DJ performing in a futuristic underground club, laser lights, neon ambiance, crowd dancing, high energy, cyberpunk aesthetic.',
        imageUrl: 'https://picsum.photos/seed/dj-neon-club/400/300',
    },
    {
        title: 'สวนญี่ปุ่นในฤดูใบไม้ร่วง',
        description: 'สวนสไตล์ญี่ปุ่นที่สงบสุขในฤดูใบไม้ร่วง ใบเมเปิ้ลเปลี่ยนเป็นสีแดงสดใส มีสะพานไม้และบ่อปลาคาร์ป',
        prompt: 'A tranquil Japanese garden in autumn, vibrant red maple leaves, a wooden bridge over a koi pond, serene, landscape photography.',
        imageUrl: 'https://picsum.photos/seed/japanese-garden-autumn/400/300',
    },
    {
        title: 'ห้องสมุดไม่มีที่สิ้นสุด',
        description: 'ห้องสมุดขนาดใหญ่ที่มีชั้นหนังสือสูงจรดเพดานและทอดยาวไปจนสุดลูกหูลูกตา เหมือนไม่มีที่สิ้นสุด',
        prompt: 'An infinite library with towering bookshelves reaching into the sky, surreal, Escher-inspired, atmospheric, endless.',
        imageUrl: 'https://picsum.photos/seed/infinite-library/400/300',
    },
    {
        title: 'ภาพถ่ายหยดหมึกในน้ำ',
        description: 'ภาพถ่ายความเร็วสูงจับภาพหยดหมึกสีดำที่กำลังกระจายตัวในน้ำ สร้างเป็นรูปทรงที่สวยงาม',
        prompt: 'High-speed photography of black ink dropped into water, creating beautiful abstract plumes and shapes, minimalist, monochrome.',
        imageUrl: 'https://picsum.photos/seed/ink-in-water/400/300',
    },
    {
        title: 'มนุษย์ต่างดาวที่เป็นมิตร',
        description: 'มนุษย์ต่างดาวหน้าตาน่ารักและเป็นมิตรกำลังโบกมือทักทาย',
        prompt: 'A cute and friendly alien character waving hello, big eyes, vibrant colors, 3D render, character design.',
        imageUrl: 'https://picsum.photos/seed/friendly-alien/400/300',
    },
    {
        title: 'ภาพวาดเมืองเวนิส',
        description: 'ภาพวาดสีน้ำมันของคลองในเมืองเวนิส มีเรือกอนโดลาลอยอยู่และอาคารสีสันสดใส',
        prompt: 'An oil painting of a canal in Venice, with gondolas and colorful buildings, impressionist style, romantic atmosphere.',
        imageUrl: 'https://picsum.photos/seed/venice-painting/400/300',
    },
    {
        title: 'หน้ากากเผ่าลึกลับ',
        description: 'หน้ากากไม้ที่แกะสลักอย่างประณีตของชนเผ่าลึกลับ ประดับด้วยขนนกและลูกปัด',
        prompt: 'A intricately carved tribal mask made of wood, decorated with feathers and beads, mysterious, artifact photography, studio lighting.',
        imageUrl: 'https://picsum.photos/seed/tribal-mask/400/300',
    },
    {
        title: 'ทางเดินในป่าสน',
        description: 'ทางเดินที่ทอดยาวเข้าไปในป่าสนที่ปกคลุมด้วยหมอกยามเช้า สร้างบรรยากาศที่ลึกลับและเงียบสงบ',
        prompt: 'A path leading into a misty pine forest in the early morning, atmospheric, mysterious, moody tones, landscape photography.',
        imageUrl: 'https://picsum.photos/seed/misty-forest-path/400/300',
    },
    {
        title: 'เมืองลอยน้ำแห่งอนาคต',
        description: 'เมืองแห่งอนาคตที่สร้างอยู่บนผิวน้ำ มีสถาปัตยกรรมที่ล้ำสมัยและเชื่อมต่อกันด้วยทางน้ำ',
        prompt: 'A futuristic floating city on the ocean, sleek architecture, waterways instead of roads, utopian concept art, bright and clean.',
        imageUrl: 'https://picsum.photos/seed/future-floating-city/400/300',
    },
    {
        title: 'เค้กช็อกโกแลตลาวา',
        description: 'ภาพโคลสอัพของเค้กช็อกโกแลตที่กำลังถูกตัดและมีช็อกโกแลตเหลวร้อนๆ ไหลออกมา',
        prompt: 'Close-up shot of a chocolate lava cake being cut, molten chocolate oozing out, decadent, food photography, mouth-watering.',
        imageUrl: 'https://picsum.photos/seed/chocolate-lava-cake/400/300',
    },
    {
        title: 'ภาพเหมือนสไตล์ Steampunk',
        description: 'ภาพเหมือนของนักประดิษฐ์ในยุควิคตอเรียนที่ผสมผสานกับเทคโนโลยีไอน้ำ (Steampunk)',
        prompt: 'A steampunk inventor portrait, wearing goggles and surrounded by brass gears and clockwork, Victorian era, detailed illustration.',
        imageUrl: 'https://picsum.photos/seed/steampunk-portrait/400/300',
    },
    {
        title: 'ทะเลทรายยามค่ำคืน',
        description: 'เนินทรายในทะเลทรายซาฮาร่าในคืนที่ฟ้าโปร่ง เห็นดวงดาวนับล้านและทางช้างเผือก',
        prompt: 'The Sahara desert at night, vast sand dunes under a sky full of stars and the milky way, astrophotography, serene, epic scale.',
        imageUrl: 'https://picsum.photos/seed/desert-night-sky/400/300',
    },
    {
        title: 'บ้านขนมปังขิง',
        description: 'บ้านขนมปังขิงที่ตกแต่งอย่างสวยงามในป่าฤดูหนาว มีหิมะปกคลุมและลูกกวาดประดับ',
        prompt: 'A whimsical gingerbread house in a snowy winter forest, decorated with candy canes and frosting, fairytale illustration, cozy.',
        imageUrl: 'https://picsum.photos/seed/gingerbread-house/400/300',
    },
    {
        title: 'ศิลปะกราฟฟิตี้บนกำแพง',
        description: 'ภาพกราฟฟิตี้สีสันสดใสและทรงพลังบนกำแพงอิฐในเมือง',
        prompt: 'Vibrant and dynamic graffiti art on a brick wall, street art style, bold letters, colorful spray paint, urban culture.',
        imageUrl: 'https://picsum.photos/seed/graffiti-wall/400/300',
    },
    {
        title: 'นักรบไวกิ้ง',
        description: 'ภาพเหมือนของนักรบไวกิ้งที่ดูแข็งแกร่ง มีเคราถักและรอยแผลเป็นบนใบหน้า',
        prompt: 'A portrait of a fierce Viking warrior, braided beard, battle scars, realistic character design, dramatic lighting, cinematic.',
        imageUrl: 'https://picsum.photos/seed/viking-warrior/400/300',
    },
    {
        title: 'ทุ่งดอกทานตะวัน',
        description: 'ทุ่งดอกทานตะวันที่กว้างสุดลูกหูลูกตาในยามพระอาทิตย์ตกดิน ดอกไม้ทุกดอกหันหน้าไปทางเดียวกัน',
        prompt: 'A vast sunflower field at sunset, golden light, landscape photography, beautiful, warm colors.',
        imageUrl: 'https://picsum.photos/seed/sunflower-field/400/300',
    },
    {
        title: 'ห้องควบคุมยานอวกาศ',
        description: 'ภายในห้องควบคุมของยานอวกาศที่ล้ำสมัย มีหน้าจอโฮโลแกรมและแผงควบคุมที่ซับซ้อน',
        prompt: 'Interior of a futuristic spaceship cockpit, holographic displays, complex control panels, view of distant galaxies through the window, sci-fi concept art.',
        imageUrl: 'https://picsum.photos/seed/spaceship-cockpit/400/300',
    },
    {
        title: 'ภาพวาดนกฮัมมิงเบิร์ด',
        description: 'ภาพวาดนกฮัมมิงเบิร์ดที่กำลังบินดูดน้ำหวานจากดอกไม้ จับภาพการเคลื่อนไหวของปีกที่รวดเร็ว',
        prompt: 'A detailed illustration of a hummingbird feeding from a flower, capturing the iridescent feathers and motion blur of the wings, wildlife art.',
        imageUrl: 'https://picsum.photos/seed/hummingbird-art/400/300',
    },
    {
        title: 'ป่าในขวดโหล',
        description: 'โลกของป่าขนาดจิ๋วที่ถูกสร้างขึ้นในขวดโหลแก้ว (Terrarium) มีต้นไม้เล็กๆ และมอส',
        prompt: 'A miniature forest ecosystem inside a glass jar terrarium, tiny trees and moss, magical, detailed macro photography.',
        imageUrl: 'https://picsum.photos/seed/forest-terrarium/400/300',
    },
    {
        title: 'นางฟ้าในแสงจันทร์',
        description: 'นางฟ้าที่มีปีกเรืองแสงกำลังนั่งอยู่บนดอกไม้ในคืนที่พระจันทร์เต็มดวง',
        prompt: 'A beautiful fairy with glowing wings sitting on a flower under the full moon, fantasy art, magical, ethereal lighting.',
        imageUrl: 'https://picsum.photos/seed/moonlight-fairy/400/300',
    },
    {
        title: 'สถาปัตยกรรม Brutalist',
        description: 'อาคารคอนกรีตขนาดใหญ่ในสไตล์ Brutalist ที่ดูน่าเกรงขามและมีรูปทรงเรขาคณิตที่ชัดเจน',
        prompt: 'A massive concrete building in the Brutalist architectural style, sharp geometric shapes, high contrast black and white photography, imposing.',
        imageUrl: 'https://picsum.photos/seed/brutalist-architecture/400/300',
    },
    {
        title: 'ช่างทำนาฬิกา',
        description: 'ช่างทำนาฬิกาสูงอายุกำลังซ่อมนาฬิกาพกที่ซับซ้อนด้วยเครื่องมือขนาดเล็กและแว่นขยาย',
        prompt: 'An elderly watchmaker meticulously repairing a complex pocket watch, close-up shot, detailed tools, warm lighting, nostalgic.',
        imageUrl: 'https://picsum.photos/seed/watchmaker/400/300',
    },
    {
        title: 'เมืองที่จมอยู่ใต้น้ำ',
        description: 'ซากเมืองโบราณที่จมอยู่ใต้ทะเลลึก มีฝูงปลาว่ายวนอยู่รอบๆ และแสงส่องลงมาจากผิวน้ำ',
        prompt: 'The ruins of an ancient sunken city underwater, schools of fish swimming through buildings, rays of light from the surface, mysterious, fantasy.',
        imageUrl: 'https://picsum.photos/seed/sunken-city/400/300',
    },
    {
        title: 'ภาพเหมือนแบบ Low Poly',
        description: 'สร้างภาพเหมือนของบุคคลโดยใช้รูปทรงสามเหลี่ยม (Polygon) น้อยชิ้น ทำให้เกิดเป็นสไตล์ Low Poly ที่มีเอกลักษณ์',
        prompt: 'A low poly portrait of a man, geometric triangles, vibrant colors, vector art, modern digital art style.',
        imageUrl: 'https://picsum.photos/seed/low-poly-portrait/400/300',
    },
    {
        title: 'ม้าหมุนในสวนสนุกร้าง',
        description: 'ม้าหมุนที่ขึ้นสนิมและผุพังในสวนสนุกร้างยามค่ำคืน สร้างบรรยากาศที่น่าขนลุก',
        prompt: 'A rusty, decaying carousel in an abandoned amusement park at night, eerie, atmospheric, horror photography, creepy.',
        imageUrl: 'https://picsum.photos/seed/abandoned-carousel/400/300',
    },
    {
        title: 'รามเม็งชามร้อน',
        description: 'ภาพถ่ายรามเม็งชามโตที่น่ารับประทาน มีเส้น หมูชาชู ไข่ต้ม และควันร้อนๆ ลอยขึ้นมา',
        prompt: 'A delicious bowl of ramen, with noodles, chashu pork, a soft-boiled egg, and steam rising, food photography, top-down view.',
        imageUrl: 'https://picsum.photos/seed/hot-ramen/400/300',
    },
    {
        title: 'พ่อมดในหอคอย',
        description: 'พ่อมดผู้ทรงพลังกำลังร่ายคาถาในหอคอยของเขาที่เต็มไปด้วยหนังสือโบราณและลูกแก้ววิเศษ',
        prompt: 'A powerful wizard casting a spell in his tower, ancient books, crystal balls, glowing magical energy, high fantasy illustration.',
        imageUrl: 'https://picsum.photos/seed/wizard-tower/400/300',
    },
    {
        title: 'ถนนในฤดูใบไม้ผลิ',
        description: 'ถนนที่มีต้นซากุระบานสะพรั่งสองข้างทาง กลีบดอกไม้สีชมพูร่วงหล่นลงมาเหมือนหิมะ',
        prompt: 'A street lined with cherry blossom trees in full bloom, pink petals falling like snow, beautiful spring scene, anime background style.',
        imageUrl: 'https://picsum.photos/seed/spring-road/400/300',
    },
    {
        title: 'หมีขั้วโลกใต้แสงเหนือ',
        description: 'หมีขั้วโลกกำลังยืนอยู่บนแผ่นน้ำแข็งใต้ท้องฟ้าที่เต็มไปด้วยแสงเหนือ (Aurora Borealis)',
        prompt: 'A polar bear standing on an ice floe under the vibrant green and purple lights of the aurora borealis, arctic night, wildlife photography.',
        imageUrl: 'https://picsum.photos/seed/polar-bear-aurora/400/300',
    },
    {
        title: 'ภาพตัดปะ (Collage Art)',
        description: 'สร้างสรรค์งานศิลปะแบบตัดปะที่ผสมผสานระหว่างภาพถ่ายวินเทจ ข้อความจากหนังสือพิมพ์ และพื้นผิวต่างๆ',
        prompt: 'A surreal collage art piece, combining vintage photographs, newspaper clippings, and textured paper, abstract, mixed media style.',
        imageUrl: 'https://picsum.photos/seed/collage-art/400/300',
    },
    {
        title: 'หุ่นไล่กาในทุ่งข้าวโพด',
        description: 'หุ่นไล่กาที่ดูน่ากลัวยืนอยู่กลางทุ่งข้าวโพดในคืนวันฮาโลวีน มีฟักทองแกะสลักวางอยู่ใกล้ๆ',
        prompt: 'A spooky scarecrow in a cornfield on Halloween night, glowing jack-o\'-lanterns nearby, full moon, horror, atmospheric.',
        imageUrl: 'https://picsum.photos/seed/scarecrow-cornfield/400/300',
    },
    {
        title: 'คาเฟ่แมว',
        description: 'บรรยากาศสบายๆ ในคาเฟ่แมว มีแมวหลายตัวกำลังนอนหลับหรือเล่นกับลูกค้า',
        prompt: 'A cozy cat cafe, various cats sleeping and playing, customers petting them, warm and inviting atmosphere, lifestyle photography.',
        imageUrl: 'https://picsum.photos/seed/cat-cafe/400/300',
    },
    {
        title: 'ยานอวกาศลงจอดบนดาวอังคาร',
        description: 'ยานอวกาศกำลังลงจอดบนพื้นผิวดาวอังคารที่มีฝุ่นสีแดง ทำให้เกิดฝุ่นคลุ้งกระจาย',
        prompt: 'A spaceship landing on the dusty red surface of Mars, kicking up red dust, realistic sci-fi, concept art for a movie.',
        imageUrl: 'https://picsum.photos/seed/mars-landing/400/300',
    },
    {
        title: 'ภาพวาดหมึกจีน',
        description: 'ภาพวาดภูเขาและแม่น้ำในสไตล์การวาดด้วยหมึกจีนโบราณ มีความเรียบง่ายและสง่างาม',
        prompt: 'A traditional Chinese ink wash painting (sumi-e) of mountains and a river, minimalist, zen, elegant brushstrokes.',
        imageUrl: 'https://picsum.photos/seed/chinese-ink-painting/400/300',
    },
    {
        title: 'ตลาดคริสต์มาส',
        description: 'ตลาดคริสต์มาสในยุโรปที่เต็มไปด้วยแสงไฟประดับ ร้านค้าไม้ และหิมะที่กำลังตกโปรยปราย',
        prompt: 'A festive European Christmas market at night, decorated with string lights, wooden stalls, snow falling gently, magical atmosphere.',
        imageUrl: 'https://picsum.photos/seed/christmas-market/400/300',
    },
    {
        title: 'นักสืบในยุคฟิล์มนัวร์',
        description: 'นักสืบเอกชนในชุดเสื้อโค้ทและหมวก กำลังยืนอยู่ในซอยมืดๆ ที่มีเงาทอดยาวในสไตล์ฟิล์มนัวร์',
        prompt: 'A private detective in a trench coat and fedora, standing in a dark, shadowy alley, film noir style, high contrast black and white.',
        imageUrl: 'https://picsum.photos/seed/film-noir-detective/400/300',
    },
    {
        title: 'ยูนิคอร์นในป่าเวทมนตร์',
        description: 'ยูนิคอร์นสีขาวสง่างามกำลังดื่มน้ำจากลำธารในป่าที่เต็มไปด้วยแสงวิบวับและเวทมนตร์',
        prompt: 'A majestic white unicorn drinking from a stream in an enchanted forest, sparkling magical lights, fantasy illustration.',
        imageUrl: 'https://picsum.photos/seed/magic-unicorn/400/300',
    },
    {
        title: 'ห้องครัวสไตล์ฟาร์มเฮาส์',
        description: 'ห้องครัวที่กว้างขวางและสว่างสดใสในสไตล์ฟาร์มเฮาส์ที่ทันสมัย มีเคาน์เตอร์หินอ่อนและเครื่องครัวทองแดง',
        prompt: 'A bright and airy modern farmhouse kitchen, marble countertops, copper pots, beautiful interior design photography.',
        imageUrl: 'https://picsum.photos/seed/farmhouse-kitchen/400/300',
    },
    {
        title: 'เรือใบกลางพายุ',
        description: 'เรือใบขนาดเล็กกำลังต่อสู้กับคลื่นยักษ์และลมพายุที่รุนแรงกลางมหาสมุทร',
        prompt: 'A small sailboat battling huge waves and a violent storm in the middle of the ocean, dramatic, oil painting, J. M. W. Turner style.',
        imageUrl: 'https://picsum.photos/seed/sailboat-storm/400/300',
    },
    {
        title: 'ภาพสะท้อนในแอ่งน้ำ',
        description: 'ภาพสะท้อนของตึกในเมืองใหญ่บนแอ่งน้ำบนถนนหลังฝนตก',
        prompt: 'Reflection of city skyscrapers in a puddle on the street after the rain, urban photography, vibrant colors, interesting perspective.',
        imageUrl: 'https://picsum.photos/seed/puddle-reflection/400/300',
    },
    {
        title: 'ก็อบลินนักประดิษฐ์',
        description: 'ก็อบลินตัวเล็กๆ ที่มีแว่นตา กำลังสร้างเครื่องจักรที่ซับซ้อนจากเศษเหล็กและของเก่า',
        prompt: 'A small goblin inventor with goggles, building a complex machine from scrap metal and junk, fantasy character design, detailed workshop.',
        imageUrl: 'https://picsum.photos/seed/goblin-inventor/400/300',
    },
    {
        title: 'พระราชวังใต้น้ำ',
        description: 'พระราชวังของชาวเมอร์เมดที่สร้างจากปะการังและเปลือกหอยเรืองแสงใต้ทะเลลึก',
        prompt: 'An underwater mermaid palace made of glowing coral and shells, schools of exotic fish swimming by, fantasy architecture.',
        imageUrl: 'https://picsum.photos/seed/underwater-palace/400/300',
    },
];


const PromptExamplesModal: React.FC<PromptExamplesModalProps> = ({ isOpen, onClose, onSelectPrompt }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promptExamplesModalTitle"
    >
      <div 
        className="bg-base-200 rounded-lg shadow-2xl p-6 m-4 max-w-5xl w-full transform transition-all flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '90vh' }}
      >
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
          <h2 id="promptExamplesModalTitle" className="text-xl font-bold text-content">
            ตัวอย่าง Prompt ที่สร้างแรงบันดาลใจ
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto pr-2 -mr-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {examplePrompts.map((example, index) => (
                <div key={index} className="bg-base-300 rounded-lg flex flex-col overflow-hidden shadow-lg transition-transform transform hover:-translate-y-1">
                    <img 
                        src={example.imageUrl} 
                        alt={example.title} 
                        className="w-full h-40 object-cover" 
                        loading="lazy" 
                    />
                    <div className="p-4 flex flex-col flex-grow">
                        <h3 className="font-semibold text-brand-light mb-2 flex-grow min-h-[40px]">{example.title}</h3>
                        <p className="text-sm text-gray-400 mb-4 h-20 overflow-hidden">{example.description}</p>
                        <button 
                            onClick={() => onSelectPrompt(example.prompt)}
                            className="w-full mt-auto px-4 py-2 bg-brand-primary text-white text-sm font-semibold rounded-lg hover:bg-brand-secondary transition-colors"
                        >
                            เลือก Prompt นี้
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default PromptExamplesModal;