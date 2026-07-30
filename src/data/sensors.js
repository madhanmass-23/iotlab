// IoT Sensors catalogue. Replace image placeholders / descriptions with your content.
// Images use generated macro renders.

export const sensors = [
  {
    slug: "dht11",
    name: "DHT11",
    category: "Temperature & Humidity",
    image: "https://media.base44.com/images/public/6a68107f358084bdb749725c/a2f547ff6_generated_57cb17bc.png",
    short: "A low-cost digital sensor measuring temperature and humidity in one package.",
    overview:
      "The DHT11 is a basic, ultra-low-cost digital temperature and humidity sensor. It uses a capacitive humidity element and a thermistor to sense the environment, and outputs a calibrated digital signal on a single data pin. It's the 'Hello World' of environmental sensing — found in countless beginner IoT projects. It's not precision-grade (±2°C, ±5% RH) but is more than enough for room-condition monitoring.",
    howItWorks:
      "Inside the DHT11, a polymer capacitive humidity sensor changes capacitance as it absorbs moisture, and an NTC thermistor changes resistance with temperature. A small 8-bit microcontroller inside the module measures both, digitises them, and transmits the result as a 40-bit serial data stream over a single-wire custom protocol. The host microcontroller (Arduino/ESP32) pulls the data line low to request a reading, then reads the 40 bits — 8 bits humidity integer, 8 bits humidity decimal, 8 bits temperature integer, 8 bits temperature decimal, and 8 bits checksum.",
    applications: [
      "Home HVAC and climate monitoring",
      "Greenhouse environment control",
      "Cold-chain storage temperature logging",
      "Smart weather stations",
    ],
    miniProjects: [
      "Smart room thermostat with an OLED display",
      "WhatsApp alert when humidity crosses a threshold",
      "Datalogger publishing readings to ThingSpeak",
    ],
    videos: ["https://www.youtube.com/watch?v=R8GtO4owmMI"],
  },
  {
    slug: "pir-hc-sr501",
    name: "PIR Motion (HC-SR501)",
    category: "Motion & Proximity",
    image: "https://media.base44.com/images/public/6a68107f358084bdb749725c/1e59a31b7_generated_6765d15a.png",
    short: "A passive infrared sensor that detects human movement within its field of view.",
    overview:
      "The HC-SR501 is a Passive Infrared (PIR) motion sensor. 'Passive' means it doesn't emit anything — it only detects the infrared energy radiated by objects (mostly humans and animals) moving through its detection zone. It's the backbone of security lighting, occupancy sensing, and countless 'something moved!' IoT projects. It outputs a simple HIGH signal when motion is detected.",
    howItWorks:
      "Every object above absolute zero emits infrared radiation. The human body emits strongly around 9–10 µm. The PIR sensor houses a pyroelectric crystal split into two halves behind a Fresnel lens. When a warm body moves, the infrared pattern shifts from one half to the other, generating a small voltage spike. An onboard amplifier and comparator turn this into a clean digital HIGH output. The Fresnel lens focuses IR from a wide field of view onto the sensor, creating multiple detection 'beams'.",
    applications: [
      "Security and intruder alarms",
      "Automatic lighting (staircases, corridors)",
      "Occupancy-based HVAC control",
      "Wildlife camera triggers",
    ],
    miniProjects: [
      "Auto-on porch light with an LDR override",
      "Telegram notification on motion detection",
      "Counting foot traffic in a hallway",
    ],
    videos: ["https://www.youtube.com/watch?v=ZCdj7F0M8m4"],
  },
  {
    slug: "hc-sr04",
    name: "Ultrasonic (HC-SR04)",
    category: "Distance & Proximity",
    image: "https://media.base44.com/images/public/6a68107f358084bdb749725c/f73470279_generated_81e50b64.png",
    short: "Measures distance using ultrasonic sound waves — accurate from 2cm to 4m.",
    overview:
      "The HC-SR04 is an ultrasonic distance sensor. It works like a bat's echolocation — it sends out a burst of high-frequency sound (40 kHz, inaudible to humans) and listens for the echo. By timing how long the echo takes to return, the distance to the nearest object is calculated. It's cheap, easy to interface, and accurate enough for obstacle detection, level measurement, and parking aids.",
    howItWorks:
      "The module has two cylindrical transducers: a transmitter and a receiver. A 10 µs 'trigger' pulse from the microcontroller tells the transmitter to emit eight 40 kHz ultrasonic bursts. Sound travels at ~343 m/s in air; the receiver detects the echo. The module outputs a pulse on its ECHO pin whose duration equals the round-trip time. Distance = (time × 343 m/s) / 2. The 'divide by 2' accounts for the sound travelling to the object and back.",
    applications: [
      "Robot obstacle avoidance",
      "Water tank level monitoring",
      "Parking distance sensors",
      "People height / presence detection",
    ],
    miniProjects: [
      "Blind-spot obstacle-avoidance robot",
      "Smart dustbin that opens on approach",
      "Digital tape measure with an LCD",
    ],
    videos: ["https://www.youtube.com/watch?v=4jU_QyRzqZ8"],
  },
  {
    slug: "mq-135",
    name: "MQ-135 Gas",
    category: "Gas & Air Quality",
    image: "https://media.base44.com/images/public/6a68107f358084bdb749725c/e9fcafb65_generated_b6eb7631.png",
    short: "Detects a broad range of gases including CO₂, NH₃, alcohol, and benzene.",
    overview:
      "The MQ-135 is a low-cost gas sensor sensitive to a wide range of harmful gases — carbon dioxide, ammonia, alcohol, benzene, and smoke. It's widely used in air-quality monitors and gas-leak detectors. It outputs an analog voltage proportional to gas concentration, plus a digital threshold output adjustable via a potentiometer. Like all MQ sensors, it needs a warm-up period to stabilise.",
    howItWorks:
      "The sensor contains a small heating element that warms a tin-dioxide (SnO₂) sensing layer to ~200°C. In clean air, the SnO₂ layer has low conductivity. When a target gas is present, it reacts with the surface, changing conductivity — lower resistance means higher gas concentration. The load resistor on the module converts this resistance change into a voltage the microcontroller reads via ADC. The MQ-135 responds to many gases, so precise identification requires calibration against known concentrations.",
    applications: [
      "Indoor air-quality monitors",
      "Gas-leak alarms (ammonia, benzene)",
      "Industrial safety monitoring",
      "Smart ventilation triggers",
    ],
    miniProjects: [
      "Air-quality dashboard on Blynk",
      "Buzzer alarm when CO₂ exceeds safe levels",
      "Smoke detector with SMS alert",
    ],
    videos: ["https://www.youtube.com/watch?v=I9Zq1WZcOQM"],
  },
  {
    slug: "ldr",
    name: "LDR (Light)",
    category: "Light & Vision",
    image: "",
    short: "A light-dependent resistor that changes resistance with brightness — the simplest light sensor.",
    overview:
      "An LDR (Light Dependent Resistor), or photoresistor, is the simplest light sensor. Its resistance drops in bright light and rises in darkness. It's not a precision sensor, but it's incredibly cheap and perfect for binary 'is it light or dark?' decisions like automatic street lighting. Combined with a fixed resistor it forms a voltage divider readable by an ADC.",
    howItWorks:
      "An LDR is made of a semiconductor material (typically cadmium sulphide). In darkness, few charge carriers are free, so resistance is high (megaohms). When light photons strike the material, they excite electrons into the conduction band, dramatically lowering resistance (to kilohms in bright light). Wired into a voltage divider with a fixed 10 kΩ resistor, this resistance change becomes a voltage the microcontroller's ADC can read as a light level.",
    applications: [
      "Automatic street / garden lighting",
      "Camera auto-exposure",
      "Solar tracker sun-position sensing",
      "Day/night detection for smart homes",
    ],
    miniProjects: [
      "Auto-dimming night lamp",
      "Light-activated security camera trigger",
      "Sunlight datalogger for plant care",
    ],
    videos: ["https://www.youtube.com/watch?v=2N8a8mZ7xS0"],
  },
  {
    slug: "soil-moisture",
    name: "Soil Moisture",
    category: "Environmental",
    image: "",
    short: "Measures water content in soil to drive automated irrigation.",
    overview:
      "A soil moisture sensor measures the volumetric water content of soil. The common resistive type has two exposed probes that act as a variable resistor — wet soil conducts electricity better than dry soil, lowering resistance. Capacitive versions avoid corrosion by measuring dielectric changes without exposed metal, lasting much longer. Essential for smart agriculture and automated plant care.",
    howItWorks:
      "Resistive sensors insert two metal probes into the soil. Soil water acts as an electrolyte; more water means lower resistance between the probes. The module converts this to an analog voltage. Capacitive sensors instead create an electric field through an insulating layer; water's high dielectric constant changes the field's capacitance, which an onboard oscillator converts to a readable voltage — with no exposed metal to corrode.",
    applications: [
      "Automated irrigation systems",
      "Greenhouse plant monitoring",
      "Lawn and garden watering",
      "Crop health and drought alerts",
    ],
    miniProjects: [
      "Self-watering plant pot with a pump",
      "Soil moisture SMS alerts for farmers",
      "Multi-zone irrigation controller",
    ],
    videos: ["https://www.youtube.com/watch?v=7ojG7qJ0Z0c"],
  },
];

export const getSensor = (slug) => sensors.find((s) => s.slug === slug);