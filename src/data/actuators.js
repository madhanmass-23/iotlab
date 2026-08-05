// IoT Actuators catalogue. Replace image placeholders / descriptions with your content.

export const actuators = [
  {
    slug: "relay",
    name: "Relay Module",
    category: "Switching",
    image: "https://media.base44.com/images/public/6a68107f358084bdb749725c/02d98da16_generated_522a6476.png",
    short: "An electrically operated switch that lets a 3.3V microcontroller control high-power devices.",
    overview:
      "A relay is an electromechanical switch. It lets a low-voltage microcontroller (3.3V/5V) safely control high-voltage, high-current loads like lamps, fans, and pumps that the microcontroller could never drive directly. When you 'turn on' a relay from code, an internal electromagnet pulls a metal contact, closing the high-power circuit. It's the bridge between delicate electronics and real-world power.",
    howItWorks:
      "Inside the relay is a coil of wire and a set of contacts. When current flows through the coil, it becomes an electromagnet and pulls a spring-loaded armature. This either connects or disconnects the high-power contacts (NO — normally open, or NC — normally closed). A transistor on the module drives the coil because the microcontroller pin can't supply enough current. A flyback diode protects against the voltage spike generated when the coil's magnetic field collapses on switch-off.",
    applications: [
      "Smart home appliance control (fans, lights)",
      "Garden pump and irrigation control",
      "Industrial motor switching",
      "Automated door / gate openers",
    ],
    miniProjects: [
      "Voice-controlled room light",
      "Scheduled water pump controller",
      "Over-temperature auto power cutoff",
    ],
    videos: ["https://www.youtube.com/watch?v=b6ZagV8UnkY"],
  },
  {
    slug: "servo-sg90",
    name: "Servo Motor (SG90)",
    category: "Rotary Motion",
    image: "https://media.base44.com/images/public/6a68107f358084bdb749725c/09a62a461_generated_219d6e06.png",
    short: "A motor that rotates to a precise angle (0–180°) — ideal for positioning and control.",
    overview:
      "A servo motor (like the SG90) is a small geared motor that can be commanded to rotate to a specific angle, typically 0–180°. Unlike a normal motor that just spins, a servo holds its position against external force. This makes it perfect for tasks needing precise, repeatable positioning — robot joints, camera gimbals, and door locks. It's controlled by a PWM (pulse-width modulation) signal from the microcontroller.",
    howItWorks:
      "Inside a servo are a small DC motor, a reduction gear train, a potentiometer, and a control circuit. The microcontroller sends PWM pulses every 20 ms; the width of each pulse (1–2 ms) encodes the target angle. The internal potentiometer reads the actual shaft angle. The control circuit drives the motor until the actual angle matches the commanded angle, then holds. This closed feedback loop is what gives a servo its precise positioning.",
    applications: [
      "Robotic arm joints",
      "Camera pan/tilt gimbals",
      "Automated door latches and locks",
      "Solar panel sun-tracking",
    ],
    miniProjects: [
      "Web-controlled door lock",
      "Automated pet feeder",
      "Radar sweep with an ultrasonic sensor",
    ],
    videos: ["https://www.youtube.com/watch?v=J8at8Eq5bqc"],
  },
  {
    slug: "dc-motor",
    name: "DC Motor",
    category: "Rotary Motion",
    image: "/moter.jpg",
    short: "A motor that spins continuously — the workhorse for wheels, fans, and pumps.",
    overview:
      "A DC motor converts electrical energy into continuous rotational motion. Apply voltage and it spins; reverse the polarity and it spins the other way. It's the simplest and most common motor, powering fans, wheels, drills, and pumps. Because a microcontroller can't drive a motor directly, a driver circuit (like the L298N or an H-bridge) handles the current and direction control.",
    howItWorks:
      "A DC motor works on the principle that a current-carrying conductor in a magnetic field experiences a force. Inside, a rotor (armature) wound with copper wire sits between permanent magnets. Current flowing through the rotor windings creates an electromagnet that interacts with the permanent magnets, producing torque. A commutator and brushes reverse the current direction every half-turn so the torque always pushes the rotor in the same direction, keeping it spinning continuously.",
    applications: [
      "Robot drive wheels",
      "Fans and ventilation",
      "Conveyor belts",
      "Water pumps",
    ],
    miniProjects: [
      "Obstacle-avoidance rover",
      "Speed-controlled fan with PWM",
      "Automatic curtain opener",
    ],
    videos: ["https://www.youtube.com/watch?v=1xC0vGj0T0g"],
  },
  {
    slug: "stepper-nema17",
    name: "Stepper (NEMA 17)",
    category: "Precision Motion",
    image: "https://media.base44.com/images/public/6a68107f358084bdb749725c/38fb8abd6_generated_d81728a5.png",
    short: "Moves in exact, repeatable steps — the precision choice for CNC and 3D printing.",
    overview:
      "A stepper motor rotates in discrete, equal steps rather than continuously. Command it 200 steps and it turns exactly one revolution, each step being a precise fraction of a turn (1.8° for a NEMA 17). This allows exact, repeatable positioning without feedback — the controller knows the position just by counting steps. It's the motor of choice for 3D printers, CNC machines, and scanners.",
    howItWorks:
      "A stepper motor has a rotor with many teeth and a stator with multiple electromagnet coils (phases). The controller energises the coils in a specific sequence; each step in the sequence pulls the rotor forward by one precise step. Because the rotor 'clicks' into the magnetic alignment, the position is known precisely without a sensor. Microstepping can subdivide each step further for smoother, finer motion.",
    applications: [
      "3D printer axes",
      "CNC milling machines",
      "Robotics precision arms",
      "Automated camera sliders",
    ],
    miniProjects: [
      "Mini CNC plotter",
      "Automated telescope star tracker",
      "Rotating display turntable",
    ],
    videos: ["https://www.youtube.com/watch?v=bkq2u2vNAiA"],
  },
  {
    slug: "solenoid-valve",
    name: "Solenoid Valve",
    category: "Fluid Control",
    image: "https://media.base44.com/images/public/6a68107f358084bdb749725c/751fe459f_generated_eaec3f20.png",
    short: "An electromechanical valve that opens or closes fluid and gas flow on command.",
    overview:
      "A solenoid valve is an electrically operated valve that controls the flow of liquids or gases. Apply power and the valve opens (or closes); remove power and a spring returns it. It lets a microcontroller control water, gas, or air flow in pipes — the heart of automated irrigation, beverage dispensers, and industrial fluid systems. Most are 'normally closed' — they shut off flow when unpowered, a safe default.",
    howItWorks:
      "Inside the valve, a coil of wire (the solenoid) surrounds a movable plunger. When current flows through the coil, it becomes an electromagnet that lifts the plunger against a spring, opening a port and allowing fluid to pass. When power is removed, the spring pushes the plunger back, sealing the port and stopping flow. Because the coil draws more current than a microcontroller pin can supply, a relay or transistor driver is used to switch it.",
    applications: [
      "Automated irrigation systems",
      "Washing machine and dishwasher valves",
      "Beverage and vending dispensers",
      "Industrial process control",
    ],
    miniProjects: [
      "Soil-moisture-triggered irrigation",
      "Auto-refilling pet water bowl",
      "Smart rainwater diverter",
    ],
    videos: ["https://www.youtube.com/watch?v=8j4Dn0vVqOc"],
  },
  
  {
    slug: "buzzer",
    name: "Piezo Buzzer",
    category: "Audio / Alerting",
    image: "Buzzer.jpg",
    short: "A small sounder for alerts, alarms, and audible feedback.",
    overview:
      "A piezo buzzer is a simple, low-cost sounder that produces a tone when voltage is applied. Active buzzers have a built-in oscillator and just need power to beep; passive buzzers need a PWM signal and can play different tones. They're the audible alert layer of almost every IoT system — alarms, keypads, parking sensors, and notifications.",
    howItWorks:
      "A piezo buzzer uses a piezoelectric crystal — a material that physically deforms when voltage is applied. In an active buzzer, an oscillator circuit rapidly switches the voltage, making the crystal vibrate at a fixed frequency and produce a tone. In a passive buzzer, the microcontroller supplies the oscillating signal (PWM), so the frequency — and thus the pitch — is programmable. The vibrating crystal pushes air, creating sound waves.",
    applications: [
      "Security and smoke alarms",
      "Keypad and button feedback",
      "Proximity warning (parking sensors)",
      "Medical device alerts",
    ],
    miniProjects: [
      "Gas-leak alarm buzzer",
      "Door-entry chime",
      "Morse-code sounder",
    ],
    videos: ["https://www.youtube.com/watch?v=2T_3oBqG5E0"],
  },
];

export const getActuator = (slug) => actuators.find((a) => a.slug === slug);