const products = [
  {
    name: "CPU-Processor",
    image: "/images/processor.jpg",
    description:"Intel Core i5-12600K Desktop Processor 10 (6P+4E) Cores up to 4.9 GHz Unlocked  LGA1700 600 Series Chip-set 125W. Offers hyper-threading architecture that delivers high performance for demanding applications with improved onboard Intel UHD Graphics controller for great graphics and visual quality and turbo boost.",
    brand: "Intel",
    category: "Electronics",
    price: 26340,
    countInStock: 5,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: "ASUS Mother Board",
    image: "/images/motherboard.jpg",
    description:"ASUS TUF Gaming Z590-Plus WiFi 6 LGA 1200 ATX Gaming Motherboard (PCIe 4.0, 3xM.2/NVMe SSD, 14+2 Power Stages, USB 3.2 Front Panel Type-C,2.5Gb LAN, Thunderbolt 4, Aura RGB). ProCool sockets, military-grade TUF components, and Digi+ VRM for maximum durability and performance .Comprehensive Cooling. ",
    brand: "Asus",
    category: "Electronics",
    price: 34000,
    countInStock: 10,
    rating: 5.0,
    numReviews: 7,
  },
  {
    name: "32GB RAM",
    image: "/images/ram.jpg",
    description:"Corsair Dominator Platinum RGB 32GB (2x16GB) DDR4 3200 (PC4-25600) C16 1.35V Desktop Memory. Patented dual-channel Dhx cooling .Technology High speed and Tight Timings. Iconic and refined high-performance RGB Memory.",
    brand: "Corsair",
    category: "Electronics",
    price: 22600,
    countInStock: 5,
    rating: 4.5,
    numReviews: 5,
  },
  {
    name: "SSD 1TB Storage",
    image: "/images/storage.jpg",
    description:"Western Digital WD SN850 1TB, PCIe Gen 4 SSD 7000MB/s R, 5300MB/s W, for Gaming. Downloadable WD_BLACKTM Dashboard software to customize and control your gaming experience.Optimized for top-tier gaming",
    brand: "WD",
    category: "Electronics",
    price: 15500,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "Computer Cabinet",
    image: "/images/cabinet.jpg",
    description:"ASUS GT501 WITH Handle TUF Gaming Mid-Tower Computer Case for up to EATX Motherboards with USB 3.0 Featuring a metal chassis. Ergonomic. Pre-drilled water pump/reservoir mounting holes. Easy and safe transport up to 65lbs. Vertical GPU expansion slot Plus 7 Traditional expansion Slots",
    brand: "ASUS",
    category: "Electronics",
    price: 14000,
    countInStock: 3,
    rating: 5,
    numReviews: 7,
  },
  {
    name: "CPU Cooler",
    image: "/images/cooler.jpg",
    description:"ASUS ROG Ryujin 360 RGB AIO Liquid CPU Cooler 360mm Radiator (Three 120mm 4-pin Noctua iPPC PWM Fans) with LIVEDASH OLED Panel and FanXpert Controls. 2000 RPM PWM noctuid radiator fans and software control via fan pert reduces unnecessary noise while keeping your system cool.",
    brand: "ASUS",
    category: "Electronics",
    price: 19900,
    countInStock: 4,
    rating: 3.5,
    numReviews: 4,
  },
  {
    name: "GPU-Graphic Card",
    image: "/images/gpu.jpg",
    description:"ASUS Dual NVIDIA GeForce RTX 3060 Ti V2 OC Edition Gaming Graphics Card (PCIe 4.0, 8GB GDDR6 Memory, LHR, HDMI 2.1, DisplayPort 1.4a, Axial-tech Fan Design, Dual BIOS, Protective Backplate). support for up to 8K resolution. Provides 1710 MHz (Gaming mode). world’s fastest, most efficient GPU.",
    brand: "ASUS",
    category: "Electronics",
    price: 84500,
    countInStock: 2,
    rating: 3,
    numReviews: 6,

  },

  {
    name: "Power Supply Unit",
    image: "/images/powerSupplyUnit.jpg",
    description:"Antec Signature Series SP1300, 80 PLUS Platinum Certified, 1300W Full Modular with OC Link Feature, PhaseWave Design, Full Top-Grade Japanese Caps, Zero RPM Mode, 135 mm FDB Silence & 10-Year Warranty. 92% energy efficiency under regular loads.",
    brand: "Antec",
    category: "Electronics",
    price: 84500,
    countInStock: 0,
    rating: 4.5,
    numReviews: 5,

  },

  {
    name: "Monitor",
    image: "/images/monitor.jpg",
    description:"LG Ultragear 27-inch, Nano IPS -True 1 ms, 144 Hz, G-Sync Compatible, HDR 10, QHD Monitor, HDMI x 2,DP,USB 3.0 (1up, 2 Down), Height Adjust & Pivot Stand. 27 Inch Quad HD (1440p) Nano IPS Screen (sRGB 135%, DCI 98%) with HDR 10, 350 nits Brightness, 1.07 Billon Color Depth.",
    brand: "LG",
    category: "Electronics",
    price: 36500,
    countInStock: 11,
    rating: 4.5,
    numReviews: 8,

  },

  
  {
    name: "Mouse",
    image: "/images/mouse.jpg",
    description:"Razer DeathAdder V2 Wired Gaming Mouse | 8 Programmable Buttons | 20,000 DPI Optical Sensor - Chroma RGB Lighting. 3x Faster Than Traditional Mechanical Switches. Drag-Free Cord for Wireless-Like Performance: Razer Speedflex cables.",
    brand: "Razer",
    category: "Electronics",
    price: 6500,
    countInStock: 13,
    rating: 4,
    numReviews: 7,

  },

  
  {
    name: "Keyboard",
    image: "/images/keyboard.jpg",
    description:"Corsair K100 Throughput 44-Zone RGB Light Edge PBT Double-Shot Keycaps Mechanical Gaming Keyboard with Cherry MX Speed Silver Key Switches.A programmable iCUE control wheel gives you command over backlighting, media jogging and more through iCUE software to perform actions in games and applications.",
    brand: "Corsair",
    category: "Electronics",
    price: 32500,
    countInStock: 5,
    rating: 4,
    numReviews: 6,

  },

  
  {
    name: "Cabinet Fan",
    image: "/images/cabinetfans.jpg",
    description:"Corsair LL120 120 mm Dual Light Loop RGB LED PWM Fan.Pwm fan control allows for dynamic speed adjustment between 600 rpm to 1, 500 rpm, minimizing noise or maximizing airflow and without sacrificing performance. 16 independent rgb leds in every fan.",
    brand: "Corsair",
    category: "Electronics",
    price: 84500,
    countInStock: 8,
    rating: 4,
    numReviews: 3,

  },

  
  {
    name: "Mouse Pad",
    image: "/images/mattPad.jpg",
    description:"MAD CATZ The Authentic G.L.I.D.E. 38 High Performance Silicon Rubber Cloth Extra Large Gaming Mousepad | 900 x 400 x 1.8mm. Gaming accessories come with a 1-Year Limited Warranty.",
    brand: "MAD CATZ",
    category: "Electronics",
    price: 4600,
    countInStock: 12,
    rating: 5,
    numReviews: 9,

  },


  
  {
    name: "Gaming-Laptop",
    image: "/images/laptop.jpg",
    description:"Razer Blade 14 Gaming Laptop: AMD Ryzen 9 5900HX 8 Core, NVIDIA GeForce RTX 3080, 14inch QHD 165Hz,16GB RAM, 1TB SSD-CNC Aluminum-Chroma RGB-THX Spatial Audio-Vapor Chamber Cooling. Experience the best ever for gaming with superior graphics and faster load times.",
    brand: "Razer",
    category: "Electronics",
    price: 264500,
    countInStock: 1,
    rating: 4,
    numReviews: 3,

  },

  
  {
    name: "Headphones",
    image: "/images/headphone.jpg",
    description:"Razer BlackShark V2 Pro - Wireless Gaming Headset. Cardioid Mic With USB Sound Card, FlowKnit Memory Foam Ear Cushions. COMPATIBILITY : PC, Mac, PS4, Xbox One, Nintendo Switch and mobile devices. Razer Triforce Titanium 50mm Drivers.",
    brand: "Razer",
    category: "Electronics",
    price: 18500,
    countInStock: 4,
    rating: 5,
    numReviews: 7,

  },

  
  {

    name: "Gaming Chair",
    image: "/images/gamingChair.jpg",
    description:"Razer Iskur gaming chair. Fully sculpted lumbar support. Multi Layered synthetic leather. High density foam cushions.",
    brand: "Razer",
    category: "Furniture",
    price: 36800,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,

  }
];

export default products
