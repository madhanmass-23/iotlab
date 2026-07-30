// IoT Course Syllabus — based on exact university curriculum

export const units = [
  {
    id: 1,
    code: "UNIT_01",
    title: "Introduction to IoT",
    abstract:
      "Definition and Characteristics of IoT, physical design of IoT, IoT protocols, communication models, APIs, embedded systems, IoT levels and templates.",
    topics: [
      {
        id: "definition",
        title: "Definition & Characteristics of IoT",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
        excerpt: "What exactly is the Internet of Things, and what makes a system truly 'IoT'?",
        content: `The Internet of Things (IoT) is a global network of physical objects — 'things' — embedded with sensors, software, and connectivity that enables them to collect and exchange data over the internet without direct human intervention.

Think of a smart thermostat in your home. It senses the room temperature (sensor), connects to the internet (connectivity), sends your usage pattern to a server (data exchange), and automatically adjusts heating based on your routine (intelligence). That is IoT in action.

Key Characteristics of IoT:
• Connectivity — Every IoT device must connect to a network (internet, LAN, or local mesh) to share data.
• Intelligence — Devices process data locally or in the cloud to make decisions automatically.
• Dynamic Nature — IoT systems adapt based on real-time context and data.
• Enormous Scale — By 2030, over 75 billion IoT devices will be active globally.
• Sensing — Physical phenomena (heat, motion, light, pressure) are converted to digital signals.
• Heterogeneity — Devices from different manufacturers and using different protocols must interoperate.
• Cyber-Physical Integration — IoT bridges the gap between the physical and digital worlds by creating digital representations of physical objects (Digital Twins).
• Actuation — Beyond just sensing, many IoT systems can act on data (like turning off a valve or moving a robot arm) to close the control loop.
• Scalability — The infrastructure must be able to handle sudden additions of new devices and massive spikes in data traffic without collapsing.
• Resource Constraints — Many IoT devices possess limited processing power, memory, and battery life, necessitating highly optimized software and network protocols.
• Unique Identity — Every individual device must have a unique ID (like an IP address or serial number) so it can be specifically addressed, managed, and secured.

Real-World Example: A smart agricultural system places soil sensors across a 100-acre farm. Each sensor measures moisture, temperature, and pH every 15 minutes, uploads to a cloud dashboard, and automatically triggers irrigation when soil moisture drops below a threshold — all with zero human involvement.`,
       videos: [
    {
      id: "res-1",
      title: "Basics of Physical Design",
      // Keep your existing YouTube embed link here
      url: "https://www.youtube.com/embed/5F-0wzO5_C0", 
    },
    {
      id: "res-2",
      title: "Physical vs. Logical Design",
      // I found a related video from the same channel to use as an example
      url: "https://www.youtube.com/embed/A8-K5-gX4Zk", 
    }
  ],
}
      {
        id: "physical-design",
        title: "Physical Design of IoT",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
        excerpt: "The hardware anatomy of an IoT device — from sensor to gateway.",
        content: `The physical design of an IoT system refers to the actual hardware components and how they are assembled to form a complete, working IoT node.

A standard IoT device is physically composed of:

1. Sensors/Actuators — The interface with the physical world. Sensors detect (temperature, humidity, motion). Actuators respond (motor, relay, buzzer).

2. Microcontroller/Processor — The brain. Reads sensor inputs, runs logic, formats data. Examples: ATmega328 (Arduino Uno), ESP32, STM32.

3. Memory — Stores program code (Flash), working data (RAM), and persistent data (EEPROM).

4. Communication Module — Sends/receives data. Could be Wi-Fi (ESP8266), Bluetooth (HC-05), Zigbee (XBee), or LoRa (SX1276).

5. Power Supply — Battery, solar, PoE, or mains. Power budget is critical for field-deployed sensors.

6. PCB & Enclosure — The board that connects all components, housed in a weatherproof casing for outdoor use.

Real-World Example: A smart streetlight node physically contains a light-dependent resistor (LDR sensor), an STM32 microcontroller, a cellular modem, and a rechargeable LiFePO4 battery housed in an IP67-rated outdoor enclosure mounted on the lamp post.`,
        videos: ["https://www.youtube.com/watch?v=xG6WGad80wA&list=PLgwJf8NK-2e6FvFUItZbGYnKiqjrlLpCb&index=13"],
      },
      {
        id: "iot-protocols",
        title: "IoT Protocols",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop",
        excerpt: "The language IoT devices speak — MQTT, CoAP, HTTP, AMQP and more.",
        content: `IoT protocols define the rules by which devices communicate. Choosing the wrong protocol wastes battery, wastes bandwidth, or causes devices to miss messages. There are protocols at every layer:

Network-Layer Protocols:
• IPv6 / 6LoWPAN — Allows IPv6 addresses over low-power wireless links (crucial because IPv4 addresses are exhausted).
• RPL (Routing Protocol for Low-Power & Lossy Networks) — Routes packets through unreliable mesh sensor networks.

Application-Layer Protocols:
• MQTT — Lightweight publish/subscribe over TCP. Perfect for slow, bursty sensor data. Used by Facebook Messenger at massive scale.
• CoAP — REST-like over UDP. Designed for constrained devices that can't run HTTP.
• HTTP/HTTPS — Familiar but heavy. Used when power and bandwidth are not constrained.
• AMQP — Robust message queuing for enterprise IoT, supports complex routing.
• WebSocket — Persistent two-way channel. Good for real-time dashboards.

Real-World Example: A weather station in Antarctica uses MQTT over satellite because MQTT retains the last known reading ('Last Will' feature) even when the link drops for hours, ensuring the monitoring team always sees the most recent valid data.`,
        videos: ["https://www.youtube.com/watch?v=xG6WGad80wA&list=PLgwJf8NK-2e6FvFUItZbGYnKiqjrlLpCb&index=13"],
      },
      {
        id: "communication-models",
        title: "IoT Communication Models",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
        excerpt: "Device-to-Device, Device-to-Cloud, Device-to-Gateway, and Back-End Data Sharing.",
        content: `The ITU and IETF describe four fundamental communication models that IoT systems use depending on scale, latency needs, and infrastructure:

1. Device-to-Device (D2D):
Devices communicate directly with each other without a central server. Uses Bluetooth, Zigbee, or Z-Wave. 
Example: A smart door lock communicates directly with a smart doorbell when someone rings — no cloud needed, so it works even without internet.

2. Device-to-Cloud (D2C):
Devices connect directly to the cloud platform over the internet.
Example: A Fitbit uploads your daily steps directly to Fitbit's cloud server every hour.

3. Device-to-Gateway (D2G):
Devices (which may lack internet connectivity) connect to a local gateway, which relays data to the cloud.
Example: Zigbee temperature sensors in a building connect to a local hub (gateway), which aggregates and forwards data to AWS IoT Core.

4. Back-End Data Sharing:
Multiple cloud systems share IoT data with each other through APIs.
Example: A smart energy meter shares usage data with both the utility company's billing system and the homeowner's Google Home platform via standardised APIs.

Real-World Example: A modern smart home uses all four — smart bulbs use D2D (Zigbee mesh), the hub uses D2G, the hub uploads to Google Cloud (D2C), and Google shares data with third-party energy management apps (back-end sharing).`,
        videos: ["https://www.youtube.com/watch?v=tTqrSN--KC8&list=PLgwJf8NK-2e6FvFUItZbGYnKiqjrlLpCb&index=15"],
      },
      {
        id: "communication-apis",
        title: "IoT Communication APIs",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
        excerpt: "REST APIs, WebSocket APIs, and how cloud platforms expose IoT data.",
        content: `An API (Application Programming Interface) is the contract that defines how one piece of software talks to another. In IoT, APIs connect device firmware, gateways, cloud platforms, and end-user applications.

REST API (Representational State Transfer):
The most common API style. Uses standard HTTP methods: GET (read), POST (create), PUT (update), DELETE (remove). Each resource (sensor reading, device config) has a URL.
Example: GET https://api.thingspeak.com/channels/1234/feeds.json returns the last 100 readings from your sensor channel.

WebSocket API:
Maintains a persistent, bidirectional connection. Ideal when the server needs to push data to the client in real time without the client polling.
Example: A live earthquake sensor dashboard uses WebSockets — the server pushes new seismometer readings to all connected browsers the instant they arrive.

ThingSpeak API:
A concrete IoT API example. An Arduino with WiFi shield does:
GET /update?api_key=XYZ&field1=23.5 → uploads temperature 23.5°C to ThingSpeak.

Real-World Example: A smart factory uses REST APIs for device provisioning (registering a new sensor with the platform), WebSocket APIs for the live production-line dashboard, and MQTT APIs for the sensor-to-cloud data stream — each API chosen for its strengths.`,
        videos: ["https://www.youtube.com/watch?v=cRV4HQ39S2s&list=PLgwJf8NK-2e6FvFUItZbGYnKiqjrlLpCb&index=16"],
      },
      {
        id: "embedded-systems",
        title: "Embedded Systems",
        image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=800&auto=format&fit=crop",
        excerpt: "Microcontrollers, RTOS, memory, and why embedded differs from general computing.",
        content: `An embedded system is a computer designed to perform a specific function, often with real-time constraints, built into a larger device. Every IoT node is an embedded system.

Key Differences from General Computers:
• Single-purpose — An embedded system runs one application; a PC runs thousands.
• Resource-constrained — Kilobytes of RAM, not gigabytes. MHz clock, not GHz.
• Real-time — Must respond within a precise time window (e.g., airbag must deploy within 20ms of collision detection).
• Reliable & robust — Must run continuously for years, often in harsh environments.

Core Components of an Embedded System:
• Microcontroller Unit (MCU) — CPU + RAM + Flash + peripherals on one chip.
• Real-Time Operating System (RTOS) — FreeRTOS, Zephyr — manages task scheduling.
• Peripheral interfaces — GPIO, ADC, PWM, I2C, SPI, UART.
• Bootloader — Initialises hardware on power-up.

Common IoT Embedded Platforms:
• Arduino Uno — ATmega328P, 2KB RAM, 32KB Flash. Entry level.
• ESP32 — Dual-core 240MHz, 520KB RAM, built-in Wi-Fi + Bluetooth. Most popular IoT MCU.
• Raspberry Pi — Full Linux SBC. Used when heavy processing or a camera is needed.
• STM32 — Industrial-grade ARM Cortex-M. Used in critical systems.

Real-World Example: A pacemaker contains an embedded system that monitors heart rhythm in real time, detects arrhythmia within milliseconds, and delivers a corrective electrical pulse — a life-critical embedded IoT application.`,
        videos: ["https://www.youtube.com/watch?v=-eK_niCyf5Y&list=PLrjkTql3jnm-lZMoUb1xMCp0HgxvJ7ocx"],
      },
      {
        id: "iot-levels",
        title: "IoT Levels & Deployment Templates",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
        excerpt: "The six IoT complexity levels from single-node to fully cloud-native deployments.",
        content: `The IoT Levels framework (proposed by Dr. Arshdeep Bahga & Dr. Vijay Madisetti) classifies IoT deployments from simplest to most complex based on data volume, processing location, and infrastructure.

Level 1 — Single Device:
• One device collects and processes data locally. No cloud.
• Example: A standalone Arduino measuring room temperature and displaying it on an LCD.

Level 2 — Single Device + Cloud:
• Device uploads data to the cloud for storage and remote access.
• Example: ESP32 temperature sensor posting data to ThingSpeak every 5 minutes.

Level 3 — Multiple Devices + Cloud:
• Many devices upload to one cloud platform. Adds device management.
• Example: 50 soil sensors across a farm all reporting to AWS IoT Core.

Level 4 — Multiple Devices + Gateway + Cloud:
• Introduces a local gateway for data aggregation and protocol translation.
• Example: 200 Zigbee sensors in a factory connect to a Raspberry Pi gateway, which forwards to Azure IoT Hub.

Level 5 — Multiple Devices + Gateway + Cloud + Big Data:
• Adds big data analytics — Apache Kafka, Spark — for processing millions of events per second.
• Example: A smart city with traffic, pollution, and energy sensors — all feeding a real-time city operations dashboard.

Level 6 — Fully Cloud-Native + Edge + AI:
• Combines edge computing, machine learning, and serverless cloud. Data is processed at the edge for latency-sensitive tasks and in the cloud for analytics.
• Example: Tesla's fleet — each car processes sensor data at the edge for instant driving decisions; petabytes of fleet data are uploaded to Tesla's cloud to train improved Autopilot models.`,
        videos: ["https://www.youtube.com/watch?v=JbUBOpXFc9E&list=PLgwJf8NK-2e6FvFUItZbGYnKiqjrlLpCb&index=17"],
      },
    ],
  },
  {
    id: 2,
    code: "UNIT_02",
    title: "Prototyping IoT Objects",
    abstract:
      "Working principles of sensors and actuators, setting up the board, programming for IoT, reading from sensors, communication through Bluetooth and Wi-Fi.",
    topics: [
      {
        id: "sensors-working",
        title: "Working Principles of Sensors",
        image: "https://images.unsplash.com/photo-1580983559367-0dc2f8934365?w=800&auto=format&fit=crop",
        excerpt: "How sensors convert physical phenomena into measurable electrical signals.",
        content: `A sensor is a transducer — a device that converts one form of energy into another. In IoT, sensors convert physical quantities (temperature, pressure, light, motion) into electrical signals a microcontroller can read.

Core Working Principle:
All sensors exploit a physical effect that creates a predictable, measurable electrical change:

• Temperature (DHT11/DHT22) — Uses a thermistor: resistance changes predictably with temperature. DHT11 reads both temperature and humidity on a single digital pin using a 1-wire protocol.
• Light (LDR) — Light-dependent resistor: resistance decreases as light increases. Combined with a fixed resistor, creates a voltage divider readable by ADC.
• Motion (PIR HC-SR501) — Passive Infrared: detects change in infrared radiation (heat) emitted by moving humans. Two pyroelectric sensors: if one detects more IR than the other, motion is detected.
• Ultrasonic Distance (HC-SR04) — Emits a 40kHz ultrasonic pulse, measures time until the echo returns. Distance = (Time × Speed of Sound) / 2.
• Gas (MQ-2) — Metal-oxide semiconductor changes resistance when specific gas molecules adsorb onto its surface. Heater burns off contaminants for baseline.

Signal Chain: Physical Phenomenon → Sensor → Analog Voltage or Digital Signal → ADC or GPIO → Microcontroller → Processing.

Real-World Example: The DHT11 sensor in an air conditioner measures room temperature every second. When the temperature rises above the set point, the MCU sends a signal to activate the compressor relay.`,
        videos: ["https://www.youtube.com/watch?v=8jS_zB8r5gQ"],
      },
      {
        id: "actuators-working",
        title: "Working Principles of Actuators",
        image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&auto=format&fit=crop",
        excerpt: "How digital commands become physical motion — relays, servos, motors.",
        content: `An actuator converts an electrical control signal into a physical effect — movement, sound, light, or fluid control. They are the 'output muscles' of IoT systems.

Types & Working Principles:

1. Relay Module:
An electrically operated switch. The MCU sends a small 5V signal to a coil, creating a magnetic field that physically moves a mechanical switch — completing or breaking a high-power circuit (AC mains, motor circuit).
Example: Arduino turns on a 220V water pump by triggering a relay using a 5V GPIO pin.

2. Servo Motor (SG90):
Contains a DC motor + gearbox + potentiometer + control circuit. A PWM signal (pulse width 1ms–2ms, every 20ms) directly commands the angle (0°–180°). Feedback loop via potentiometer ensures accurate positioning.
Example: A robotic arm joint controlled by PWM signal for precise angular positioning.

3. DC Motor with L298N Driver:
H-bridge motor driver controls direction (by reversing voltage polarity) and speed (via PWM). The L298N can drive two DC motors up to 2A each.
Example: Robot wheels in an autonomous trolley, driven by DC motors with speed/direction controlled via L298N.

4. Stepper Motor (28BYJ-48):
Moves in discrete steps (typically 64 steps/revolution with gearbox). Energising coils in a sequence makes the rotor turn precisely. Great for applications needing exact positioning without a feedback sensor.
Example: The paper feed mechanism in a printer.

5. Buzzer:
Piezoelectric element vibrates at audio frequency when AC voltage is applied. Active buzzers have an internal oscillator; passive buzzers need PWM from the MCU.
Example: Alarm buzzer in a fire detection system.`,
        videos: ["https://www.youtube.com/watch?v=liC7UuWpGdw"],
      },
      {
        id: "board-setup",
        title: "Setting Up the Board — Arduino & ESP32",
        image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=800&auto=format&fit=crop",
        excerpt: "Installing the IDE, drivers, libraries, and uploading your first program.",
        content: `Before writing IoT code, the development environment must be configured correctly.

Setting Up Arduino IDE for Arduino Uno:
1. Download Arduino IDE from arduino.cc/en/software.
2. Connect Arduino Uno via USB. Install CH340/FTDI driver if not auto-detected.
3. In IDE: Tools → Board → Arduino Uno. Tools → Port → select COM port (Windows) or /dev/ttyUSB0 (Linux).
4. File → Examples → Basics → Blink. Upload (Ctrl+U). The onboard LED should blink — your board works.

Setting Up Arduino IDE for ESP32:
1. File → Preferences → Additional Board Manager URLs:
   https://dl.espressif.com/dl/package_esp32_index.json
2. Tools → Board → Board Manager → search 'esp32' → Install by Espressif.
3. Select Tools → Board → ESP32 Arduino → ESP32 Dev Module.
4. Press and hold BOOT button on ESP32 while uploading if not auto-detected.

Key Board Anatomy (ESP32):
• GPIO pins — numbered, can be digital input/output or analog (ADC).
• 3.3V & 5V rails — power sensors. ESP32 is 3.3V logic; 5V sensors need a level shifter.
• BOOT & EN buttons — programming mode and reset.
• Built-in LED — typically GPIO 2.

Real-World Example: Setting up an ESP32 to read a DHT22 sensor and blink the built-in LED whenever temperature exceeds 30°C, verifying sensor + MCU + IDE setup all work before building the full IoT node.`,
        videos: ["https://www.youtube.com/watch?v=Li0Qqk3vF3A"],
      },
      {
        id: "programming-iot",
        title: "Programming for IoT",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
        excerpt: "Arduino C, MicroPython, and IoT coding patterns — loops, timers, and state machines.",
        content: `IoT programming differs from app development. Programs run on bare metal or a minimal RTOS, with strict memory limits and no user interface.

Arduino Programming Language:
Based on C/C++ with simplified abstractions:
• setup() — runs once on power-up. Initialise pins, serial, sensors, Wi-Fi.
• loop() — runs continuously (infinite loop). Read sensors, process, transmit.

Critical IoT Coding Patterns:

1. Non-Blocking Timing (millis() instead of delay()):
delay(1000) freezes the entire processor — it cannot read sensors or respond to inputs.
Instead, record the last action timestamp and check elapsed time.

2. State Machine:
IoT devices behave as state machines. E.g., a smart door lock has states: LOCKED, UNLOCKING, OPEN, ALARM. Events trigger state transitions.

3. Interrupt-Driven Sensing:
Instead of constantly polling a PIR pin, attach an interrupt: the MCU pauses its main task only when the pin changes state — saving CPU and power.

4. Power Management:
esp_sleep_enable_timer_wakeup(30e6) puts ESP32 into deep sleep for 30 seconds, then wakes, reads sensor, transmits, sleeps again. Extends battery life from days to months.

MicroPython (for ESP32/Pi Pico):
Python syntax on embedded hardware. Easier to learn, slightly less efficient.
import dht; sensor = dht.DHT11(Pin(4)); sensor.measure(); print(sensor.temperature())

Real-World Example: A flood sensor attached to a bridge pillar sleeps 95% of the time, wakes every 60 seconds to measure water level via ultrasonic sensor, and sends an SMS alert via GSM module only when water rises above 80% of bank level.`,
        videos: ["https://www.youtube.com/watch?v=En2R2KCr1Hk"],
      },
      {
        id: "reading-sensors",
        title: "Reading from Sensors",
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&auto=format&fit=crop",
        excerpt: "ADC, digital protocols, calibration, and filtering noisy sensor data.",
        content: `Reading sensor data correctly requires understanding the electrical interface, analog-to-digital conversion, and noise filtering.

Analog Reading (ADC):
Sensors like LDR, MQ-2, soil moisture output an analog voltage (0–3.3V on ESP32, 0–5V on Arduino).
int rawValue = analogRead(A0); // 0–1023 on Arduino (10-bit ADC)
float voltage = rawValue * (5.0 / 1023.0);
float temperature = (voltage - 0.5) * 100; // for TMP36 sensor

Digital Protocol — DHT11/DHT22 (1-Wire):
Uses a single data pin with a precise timing sequence. A library (DHT.h) handles the protocol:
DHT dht(4, DHT11); dht.begin();
float temp = dht.readTemperature(); // Returns °C

Digital Protocol — I2C (BME280, MPU6050):
Two wires: SDA (data), SCL (clock). Up to 127 devices on one bus.
Wire.begin(); bme.begin(0x76); // 0x76 is the I2C address

Noise Filtering:
Raw sensor readings are noisy. Apply a moving average:
// Collect 10 readings, sum, divide — smooth out transients
float average = 0;
for(int i=0; i<10; i++) { average += analogRead(A0); delay(10); }
average /= 10;

Calibration:
Sensors have offsets. For a temperature sensor, compare against a known reference thermometer and apply an offset constant: corrected_temp = raw_temp + 1.5.

Real-World Example: A weather station takes 10 ADC readings from a wind speed sensor every second, applies a moving average filter, converts the averaged ADC count to m/s via calibration curve, and publishes the result to MQTT every 5 minutes.`,
        videos: ["https://www.youtube.com/watch?v=Tt5L_d1O_qA"],
      },
      {
        id: "bluetooth-comm",
        title: "Communication via Bluetooth",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
        excerpt: "Classic Bluetooth SPP and BLE — pairing IoT devices with smartphones.",
        content: `Bluetooth provides short-range (10–100m) wireless communication between IoT devices and phones/computers without needing a Wi-Fi router or internet.

Classic Bluetooth — HC-05 Module:
The HC-05 uses the Serial Port Profile (SPP) — it creates a virtual serial cable over Bluetooth, making it trivially easy to use with Arduino.
Setup: AT+NAME=MyDevice (set device name), AT+PSWD=1234 (set PIN), AT+ROLE=0 (slave mode).
Arduino code: use SoftwareSerial on pins 10, 11. Send data via bluetooth.println(temperature);
A smartphone app (Serial Bluetooth Terminal) pairs and receives the data.

Bluetooth Low Energy (BLE) — ESP32 Built-in:
BLE dramatically reduces power consumption — devices advertise periodically and sleep otherwise.
Core concepts: Peripheral (ESP32 sensor) vs Central (phone). GATT Services (e.g., Heart Rate Service) contain Characteristics (e.g., Heart Rate Measurement value). The phone subscribes to a Characteristic and gets notified when the value changes.

ESP32 BLE Example:
BLEServer → BLEService (custom UUID) → BLECharacteristic → setValue("25.3°C") → notify() — phone receives the updated temperature.

Range & Power Comparison:
• HC-05 Classic: ~10m, high power (active connection)
• BLE: ~100m, very low power (periodic advertising + sleep)

Real-World Example: A wearable fitness band uses BLE to communicate with a smartphone. The band (peripheral) measures heart rate every second and notifies the phone app (central) only when the value changes — saving battery while keeping the phone display always current.`,
        videos: ["https://www.youtube.com/watch?v=P6TwNTqJzSc"],
      },
      {
        id: "wifi-comm",
        title: "Communication via Wi-Fi",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop",
        excerpt: "Connecting ESP8266/ESP32 to Wi-Fi and pushing data to the cloud.",
        content: `Wi-Fi connects IoT devices to the internet, enabling cloud data upload, remote control, and integration with web services — the full IoT loop.

ESP32/ESP8266 Wi-Fi Connection:
#include <WiFi.h>
WiFi.begin("MyNetwork", "password");
while (WiFi.status() != WL_CONNECTED) { delay(500); }
// Now connected. Use HTTP, MQTT, WebSocket...

Sending Data to ThingSpeak via HTTP GET:
WiFiClient client;
String url = "/update?api_key=KEY&field1=" + String(temperature);
client.connect("api.thingspeak.com", 80);
client.print("GET " + url + " HTTP/1.1\r\nHost: api.thingspeak.com\r\n\r\n");
ThingSpeak plots the data on an online channel — visible globally.

MQTT over Wi-Fi (PubSubClient library):
client.connect("esp32-sensor"); // Connect to broker
client.publish("home/temp", String(temp).c_str()); // Publish
client.subscribe("home/control"); // Subscribe to commands
client.setCallback(callback); // Handle incoming messages

Wi-Fi Considerations for IoT:
• Always use WPA2. Never open networks for IoT.
• Handle reconnection: if WiFi drops, detect and reconnect automatically.
• Deep sleep between transmissions to save battery.
• mDNS (esp_mdns) lets devices be found by name (sensor.local) without knowing IP.

Real-World Example: An ESP32 in a home energy monitor connects to the home Wi-Fi, reads current clamps via ADC every 10 seconds, publishes power consumption to an MQTT broker on a Raspberry Pi, which logs to InfluxDB and displays live watts on a Grafana dashboard visible on any browser in the house.`,
        videos: ["https://www.youtube.com/watch?v=w0w6XqQ2tFE"],
      },
    ],
  },
  {
    id: 3,
    code: "UNIT_03",
    title: "IoT Architecture & Protocols",
    abstract:
      "Architecture Reference Model, IoT Reference Model, Protocols — 6LoWPAN, RPL, CoAP, MQTT, IoT frameworks including ThingSpeak.",
    topics: [
      {
        id: "arm",
        title: "Architecture Reference Model (ARM)",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
        excerpt: "The IoT-A reference model — the standard blueprint for designing IoT systems.",
        content: `The IoT Architecture Reference Model (IoT-ARM) was developed by the IoT-A European project to provide a unified conceptual framework for designing interoperable IoT systems.

Why a Reference Model?
Without a common model, every IoT vendor builds its own proprietary stack — devices can't talk to each other and standards fragment. The ARM provides a shared vocabulary and layer definitions.

The IoT-ARM consists of 5 Layers:

1. Physical Layer (Device Domain):
The actual hardware — sensors, actuators, embedded microcontrollers, and the physical world they interact with. This is where data is born.

2. Network Layer:
Handles transmission of device data to the service layer. Includes all IoT communication protocols (Zigbee, LoRaWAN, Wi-Fi, cellular) and gateways.

3. Service Layer (Middleware):
Provides standardised interfaces for device management, data storage, and service enablement. Hides the complexity of the network and physical layers from applications.

4. Application Layer:
Implements the actual IoT use case — smart home, fleet tracking, precision farming — using the services provided by the layer below.

5. Management & Security Layer (Horizontal):
Cuts across all layers. Handles device provisioning, software updates, authentication, encryption, and monitoring.

Key Concepts from IoT-ARM:
• Virtual Entity — A digital representation of a physical object.
• Service — An exposed capability (e.g., "read temperature") that can be consumed by applications.
• Resource — A physical or computational source of data on the device.

Real-World Example: When Google Home controls a Philips Hue bulb, the ARM layers are all at work: physical bulb (device layer) ↔ Zigbee mesh ↔ Hue Bridge gateway (network layer) ↔ Philips cloud service (service layer) ↔ Google Home app (application layer).`,
        videos: ["https://www.youtube.com/watch?v=xzYpXqTq7xk"],
      },
      {
        id: "6lowpan",
        title: "6LoWPAN Protocol",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
        excerpt: "IPv6 over Low-Power Wireless Personal Area Networks — the key to IP-addressable sensor nodes.",
        content: `6LoWPAN (IPv6 over Low-Power Wireless Personal Area Networks) is an IETF standard (RFC 4944) that allows tiny IoT devices using IEEE 802.15.4 radio (the same physical layer as Zigbee) to communicate using IPv6.

Why 6LoWPAN?
IPv6 packets can be up to 1280 bytes. IEEE 802.15.4 frames are only 127 bytes. 6LoWPAN solves this with header compression and packet fragmentation/reassembly.

Key Functions:
1. Header Compression — Compresses 40-byte IPv6 headers to as few as 2 bytes using IPHC (IP Header Compression). Both ends know the context, so redundant information is omitted.
2. Fragmentation — Splits large IPv6 packets into multiple small 802.15.4 frames, reassembles at the destination.
3. Mesh Addressing — Enables multi-hop routing across the sensor mesh without full IP routing overhead.
4. Adaptation Layer — Sits between IEEE 802.15.4 (link layer) and IPv6 (network layer), translating between them.

Benefits for IoT:
• Every sensor gets a real IPv6 address — directly reachable from the internet (with firewall rules).
• Uses the standard IP stack — no proprietary protocols or translation gateways.
• Interoperates with existing internet infrastructure.

Where 6LoWPAN is Used:
Smart metering, industrial sensors, smart building automation.

Real-World Example: A smart electricity meter in a neighbourhood uses 6LoWPAN over 802.15.4 radio. Each meter has its own IPv6 address. The utility company's server pings each meter's IPv6 address directly to collect usage readings, using the same protocols as the rest of the internet.`,
        videos: ["https://www.youtube.com/watch?v=P6TwNTqJzSc"],
      },
      {
        id: "rpl",
        title: "RPL — Routing Protocol for IoT",
        image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&auto=format&fit=crop",
        excerpt: "How packets find their way through a lossy, low-power wireless mesh.",
        content: `RPL (Routing Protocol for Low-Power and Lossy Networks, pronounced 'ripple') is the standard IETF routing protocol (RFC 6550) for IPv6-based IoT mesh networks, typically used with 6LoWPAN.

Why Standard Routing Fails in IoT:
Traditional routing protocols (OSPF, BGP) assume reliable, high-bandwidth links between powerful routers. IoT sensor networks use weak radios over distances of 10–50m with frequent packet loss (lossy links), tiny MCUs (low-power nodes), and dynamic topology (nodes join/leave). RPL is designed for exactly these conditions.

How RPL Works:
RPL builds a tree-structured routing topology called a DODAG (Destination-Oriented Directed Acyclic Graph).

1. One root node (usually the border router/gateway) starts and sends DIO (DODAG Information Object) messages downwards.
2. Sensor nodes receive DIOs and compute a rank (distance from root) using an Objective Function (OF).
3. Each node selects a preferred parent (the best neighbour closer to the root).
4. Nodes send DAO (Destination Advertisement Object) messages upward to register their routes.
5. Data flows up the DODAG toward the root (and onward to the internet).

Objective Functions:
• OF0 — Minimises hop count.
• MRHOF — Minimises path ETX (Expected Transmission Count) — prefers reliable links even if longer.

Real-World Example: A smart irrigation network has 30 soil sensors scattered across a field. They form a 6LoWPAN/RPL mesh — sensors near the barn edge relay data from farther sensors hop-by-hop to the gateway at the barn, which connects to 4G internet. When one sensor's battery dies, RPL automatically routes around it.`,
        videos: ["https://www.youtube.com/watch?v=mYP7VYBlqU4"],
      },
      {
        id: "coap-detail",
        title: "CoAP — Constrained Application Protocol",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop",
        excerpt: "REST for tiny devices — GET, POST, PUT, DELETE over UDP.",
        content: `CoAP (Constrained Application Protocol, RFC 7252) is a web transfer protocol designed specifically for constrained IoT nodes and networks that cannot run HTTP.

CoAP vs HTTP:
HTTP runs over TCP — reliable, ordered, connection-oriented, but with large headers and the overhead of the three-way handshake. IoT nodes often can't sustain a TCP connection and can't spare the power.
CoAP runs over UDP — no connection setup, smaller packets, no guaranteed delivery. CoAP adds its own lightweight reliability on top.

CoAP Message Types:
• CON (Confirmable) — Must be acknowledged (ACK) by receiver. Used for important data.
• NON (Non-Confirmable) — Fire and forget. Used for frequent sensor readings where losing one is acceptable.
• ACK (Acknowledgement) — Response to a CON message.
• RST (Reset) — Reject a message.

CoAP Methods (mirrors HTTP):
• GET — Read a resource. GET coap://sensor.local/temperature
• POST — Create a resource. POST coap://server/sensors/new
• PUT — Update a resource.
• DELETE — Remove a resource.

CoAP Observe Extension:
Client registers to observe a resource. Server sends notifications whenever the value changes — similar to MQTT subscribe, without a broker.

CoAP vs MQTT Comparison:
• CoAP: Request/Response, suited for querying devices, RESTful architecture.
• MQTT: Pub/Sub, suited for continuous telemetry streams, requires a broker.

Real-World Example: A network of CoAP-enabled smart electricity plugs. The energy management server does GET coap://plug_living_room/power every 15 minutes to read current wattage. It does PUT coap://plug_living_room/state with body "off" to switch off the plug remotely. No broker needed.`,
        videos: ["https://www.youtube.com/watch?v=EIqdP5qY7gk"],
      },
      {
        id: "mqtt-detail",
        title: "MQTT Protocol In Depth",
        image: "https://images.unsplash.com/photo-1580983559367-0dc2f8934365?w=800&auto=format&fit=crop",
        excerpt: "Publish/subscribe, QoS levels, retained messages, and Last Will.",
        content: `MQTT (Message Queuing Telemetry Transport) is the de-facto standard messaging protocol for IoT telemetry. Originally designed by IBM for monitoring oil pipelines over satellite links, it is now used by Facebook Messenger, Amazon IoT, and millions of IoT deployments.

Publish/Subscribe Architecture:
Unlike HTTP (client-server), MQTT uses a broker (e.g., Mosquitto, AWS IoT, HiveMQ) as an intermediary.
• Publisher — Device that sends data. e.g., temperature sensor publishes to topic home/bedroom/temperature.
• Subscriber — Any client that registers interest in a topic. e.g., a dashboard and an automation rule both subscribe to home/bedroom/temperature.
• Broker — Receives all publishes and delivers to all matching subscribers. Decouples producers from consumers entirely.

Quality of Service (QoS):
• QoS 0 — At most once. No acknowledgement. Fastest, may lose messages.
• QoS 1 — At least once. Broker/sender retries until ACK received. Message may duplicate.
• QoS 2 — Exactly once. Four-step handshake. Slowest but guaranteed single delivery. Use for critical data (medical, billing).

Retained Messages:
When a new subscriber joins, they normally miss all past messages. A retained message is stored by the broker and immediately delivered to any new subscriber. Perfect for device status ('online/offline').

Last Will & Testament (LWT):
Device registers a LWT message when connecting. If it disconnects ungracefully (power cut, crash), the broker automatically publishes the LWT to alert other subscribers.

Real-World Example: A factory floor has 500 machine vibration sensors, all publishing to machines/<id>/vibration at 10Hz. A central monitoring server subscribes to all topics. When a machine's vibration pattern deviates, an ML model running on the server triggers an alert — all in under 100ms from sensor to alert.`,
        videos: ["https://www.youtube.com/watch?v=EIqdP5qY7gk"],
      },
      {
        id: "thingspeak",
        title: "ThingSpeak IoT Framework",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        excerpt: "Setting up channels, sending data from Arduino/ESP32, and visualising live charts.",
        content: `ThingSpeak is a free, open-source IoT platform by MathWorks (makers of MATLAB) that lets you collect, visualise, and analyse sensor data in the cloud with minimal setup.

Key Concepts:
• Channel — A container for your device's data. Each channel has up to 8 numeric fields (Field 1 to Field 8), a GPS location, and metadata.
• Write API Key — Secret key your device uses to upload data. Keep it private.
• Read API Key — Key others can use to view public channels (optional).

Sending Data from ESP32:
#include <WiFi.h>
#include <ThingSpeak.h>
ThingSpeak.begin(client);
ThingSpeak.setField(1, temperature);
ThingSpeak.setField(2, humidity);
ThingSpeak.writeFields(channelNumber, writeAPIKey);
// Data uploads to ThingSpeak. Updates limited to once per 15s on free plan.

Reading Data via HTTP:
GET https://api.thingspeak.com/channels/CHANNEL_ID/feeds.json?results=10
Returns JSON with the last 10 readings, timestamps, and all field values.

MATLAB Analytics:
ThingSpeak allows MATLAB code to run directly on channel data — compute statistics, detect anomalies, and generate reports with no local installation.

ThingSpeak Alerts:
When a field value exceeds a threshold, ThingSpeak sends an email or webhook — e.g., SMS via Twilio when CO₂ level exceeds 1000ppm.

React Widget in ThingSpeak:
Channels can be embedded as iframes in custom web dashboards, showing live line charts that update every 15 seconds.

Real-World Example: Students build a classroom air-quality monitor with MQ-135 (CO₂), DHT22 (temp/humidity), and ESP32. Data streams to ThingSpeak every 30 seconds. The teacher opens the public channel dashboard on a projector — if CO₂ spikes above 1000ppm (stuffy room), a MATLAB analysis triggers a ThingSpeak alert email: 'Open the windows!'`,
        videos: ["https://www.youtube.com/watch?v=2uLQre1DAUE"],
      },
    ],
  },
  {
    id: 4,
    code: "UNIT_04",
    title: "Device Discovery & Cloud Services",
    abstract:
      "Device discovery capabilities, registering and deregistering devices, cloud storage models, communication APIs, web servers and web servers for IoT.",
    topics: [
      {
        id: "device-discovery",
        title: "Device Discovery Capabilities",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
        excerpt: "How IoT devices announce themselves and are found on a network.",
        content: `Device Discovery is the process by which IoT devices announce their presence on a network and other devices/servers locate and identify them — automatically, without manual IP configuration.

Why Device Discovery Matters:
In a smart home with 50 devices, manually configuring each device's IP address is impractical. Discovery allows the hub to automatically find and identify all devices the moment they connect.

Discovery Technologies:

1. mDNS (Multicast DNS) — Zeroconf:
Used by Apple Bonjour and esp_mdns library. Devices broadcast their hostname (e.g., sensor.local) over the local network using multicast UDP (port 5353). No DNS server needed.
Example: ESP32 running mDNS registers as "temperature-sensor.local". Any device on the network can resolve that hostname to the ESP32's IP automatically.

2. UPnP (Universal Plug and Play):
Devices broadcast SSDP (Simple Service Discovery Protocol) messages on the local network. Other devices receive these and discover the device's capabilities via an XML description document.
Example: A smart TV automatically discovers a DLNA media server on the home network.

3. CoAP Resource Discovery:
Devices running CoAP expose a /.well-known/core resource listing all available endpoints.
GET coap://sensor.local/.well-known/core → <\temperature>;rt="TemperatureSensor"

4. DHCP + DNS Registration:
Devices request an IP via DHCP. The router's DNS server registers the hostname automatically.

5. Cloud-Based Discovery:
Devices register with a cloud registry (AWS IoT Thing Registry). Applications query the registry to find devices by type, location, or capability.

Real-World Example: When you plug a Philips Hue Bridge into your router, it uses UPnP to announce its presence. The Hue app running on your phone receives the SSDP announcement and automatically finds the Bridge — no IP address entry needed.`,
        videos: ["https://www.youtube.com/watch?v=8X8o6F3l5R4"],
      },
      {
        id: "register-device",
        title: "Registering & Deregistering Devices",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
        excerpt: "Device lifecycle management — provisioning, certificates, and graceful decommissioning.",
        content: `Device registration is the process of formally enrolling an IoT device with a platform so it is authenticated, authorised to send data, and tracked throughout its lifecycle.

Device Lifecycle Phases:
Manufacturing → Provisioning → Registration → Active → Maintenance → Deregistration.

Registration Process (AWS IoT Core example):

1. Certificate Creation:
Each device gets a unique X.509 certificate at manufacture. The certificate contains the device's public key and is signed by a Certificate Authority (CA) trusted by AWS IoT.

2. Device Registration:
aws iot create-thing --thing-name "FactorySensor_001"
aws iot attach-thing-principal --thing-name "FactorySensor_001" --principal <cert_arn>
The thing is now registered, with its certificate bound to it.

3. Policy Attachment:
Policies define what the device is allowed to do — which MQTT topics it can publish/subscribe to.
aws iot attach-policy --policy-name "SensorPolicy" --target <cert_arn>

4. Device Connects:
Device connects to AWS IoT endpoint using its certificate for TLS mutual authentication. AWS verifies the certificate → grants access to allowed topics only.

5. Deregistration:
When a device is replaced, stolen, or retired:
aws iot update-certificate --certificate-id <id> --new-status REVOKED
aws iot detach-thing-principal --thing-name "FactorySensor_001" --principal <cert_arn>
aws iot delete-thing --thing-name "FactorySensor_001"
The certificate is revoked and the device can no longer connect.

Real-World Example: A logistics company deploys GPS trackers in 10,000 trucks. Each tracker is factory-provisioned with a unique certificate. When a truck is sold, the tracker is deregistered — its certificate revoked immediately, preventing it from accessing the company's fleet platform.`,
        videos: ["https://www.youtube.com/watch?v=b-3BIjQv1jQ"],
      },
      {
        id: "cloud-storage",
        title: "Cloud Storage Models for IoT",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
        excerpt: "Time-series databases, data lakes, object storage — choosing the right store for sensor data.",
        content: `IoT generates continuous, time-stamped data streams. Choosing the right storage model determines whether your system scales gracefully or collapses under load.

1. Time-Series Databases (TSDB):
Optimised for storing and querying sequences of timestamped values. Indexes on time — range queries over time windows are extremely fast.
Examples: InfluxDB, TimescaleDB, Amazon Timestream.
Use case: Storing every sensor reading. Query: "Average temperature per hour for the last 7 days."

2. Relational Databases (RDBMS):
Tables with fixed schemas. Strong consistency. Use for device registry, user accounts, configurations — structured, infrequently-updated data.
Examples: PostgreSQL, MySQL, Amazon RDS.
Use case: Device registration table, user permissions, alert rules.

3. Document Databases (NoSQL):
Flexible JSON documents. Schema-free. Good for heterogeneous device types.
Examples: MongoDB, DynamoDB, Firestore.
Use case: Device metadata (different fields per device type), event logs.

4. Object Storage:
Stores unstructured binary files (images, video, audio) at massive scale.
Examples: AWS S3, Azure Blob Storage.
Use case: Dashcam footage from vehicle IoT, drone imagery, audio recordings.

5. Data Lake:
Repository holding raw data in native format until needed. Combines all types above.
Example: All raw sensor CSV uploads land in S3 (data lake), a pipeline runs nightly analytics and writes aggregates into InfluxDB (TSDB) for the dashboard.

Real-World Example: A smart city platform uses: InfluxDB (sensor readings every second), PostgreSQL (device registry and user management), S3 (traffic camera images), and DynamoDB (real-time parking spot availability — high read/write, flexible schema).`,
        videos: ["https://www.youtube.com/watch?v=bAyrOfl7T3o"],
      },
      {
        id: "web-server",
        title: "Web Server Fundamentals",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
        excerpt: "HTTP, REST, request-response cycle, and building a basic Node.js IoT server.",
        content: `A web server is software that listens for HTTP requests on a network port and responds with data, web pages, or API results. For IoT, web servers act as the backend that devices send data to and applications query.

HTTP Request-Response Cycle:
1. Client (device or browser) opens a TCP connection to the server (default port 80 / 443 for HTTPS).
2. Client sends an HTTP request: method, URL, headers, optional body.
3. Server processes the request, queries database or reads sensor data.
4. Server sends HTTP response: status code (200 OK, 404 Not Found, 500 Error), headers, body (HTML, JSON, binary).
5. Connection is closed (HTTP/1.1) or kept alive for reuse (HTTP/2).

Building a Node.js REST API for IoT:
const express = require('express');
const app = express();
app.use(express.json());

// Devices POST sensor readings
app.post('/api/readings', (req, res) => {
  const { device_id, temperature, humidity } = req.body;
  db.insert({ device_id, temperature, humidity, timestamp: new Date() });
  res.status(201).json({ status: 'stored' });
});

// Dashboard queries
app.get('/api/readings/:device_id', (req, res) => {
  const readings = db.query({ device_id: req.params.device_id, limit: 100 });
  res.json(readings);
});
app.listen(3000);

REST Principles Applied to IoT:
• Resources: /devices, /sensors, /readings, /alerts
• CRUD via HTTP methods: GET (read), POST (create), PUT (update), DELETE (remove)
• Stateless: each request contains all needed information

Real-World Example: A hospital patient monitoring system has a Node.js web server. Each bedside device (ESP32 + pulse oximeter) POSTs vital signs to /api/vitals every 30 seconds. Nurses' workstations GET the latest readings from /api/vitals?ward=ICU. The server also triggers an alert via WebSocket if SpO₂ drops below 94%.`,
        videos: ["https://www.youtube.com/watch?v=aircAruvnKk"],
      },
      {
        id: "web-server-iot",
        title: "Web Server for IoT — ESP32 Embedded Server",
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&auto=format&fit=crop",
        excerpt: "Running a full HTTP server directly on a microcontroller for local control without the cloud.",
        content: `An ESP32 can run its own HTTP web server, serving web pages and API endpoints directly — without any cloud platform. This enables local IoT control that works even without internet, reduces latency, and keeps data private.

ESP32 WebServer Library:
#include <WiFi.h>
#include <WebServer.h>

WebServer server(80);
DHT dht(4, DHT22);

void handleRoot() {
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  String html = "<html><body>";
  html += "<h1>Room Sensor</h1>";
  html += "<p>Temperature: " + String(temp) + " °C</p>";
  html += "<p>Humidity: " + String(hum) + " %</p>";
  html += "</body></html>";
  server.send(200, "text/html", html);
}

void handleAPI() {
  float temp = dht.readTemperature();
  String json = "{\\"temperature\\":" + String(temp) + "}";
  server.send(200, "application/json", json);
}

void setup() {
  WiFi.begin("SSID", "password");
  while (WiFi.status() != WL_CONNECTED) delay(500);
  dht.begin();
  server.on("/", handleRoot);       // Web page
  server.on("/api/temp", handleAPI); // JSON API
  server.begin();
}

void loop() { server.handleClient(); }

Access: Open browser → type ESP32's IP (e.g., 192.168.1.45) → see live temperature page.

AsyncWebServer (ESPAsyncWebServer library):
Handles multiple concurrent requests without blocking — better for production. Server responds to requests asynchronously, freeing the main loop for sensor reading.

mDNS Integration:
mdns.begin("room-sensor"); → accessible at http://room-sensor.local from any device on the same Wi-Fi.

Real-World Example: A homeowner builds an ESP32 soil sensor. The ESP32 runs a local web server. The gardener opens http://garden-sensor.local on their phone while in the garden — no internet or cloud needed — and sees live soil moisture, temperature, and last-watered time. A button on the page triggers the irrigation pump via relay.`,
        videos: ["https://www.youtube.com/watch?v=4S4wx5o5Pz8"],
      },
    ],
  },
  {
    id: 5,
    code: "UNIT_05",
    title: "UAV IoT",
    abstract:
      "Introduction to UAVs/Drones, drone types, defense/civil/environmental applications, UAV elements and sensors (Arms, ESC, GPS, IMU, Ultrasonic), UAV Software (ArduPilot, Mission Planner), Internet of Drones, Flybase case study.",
    topics: [
      {
        id: "uav-intro",
        title: "Introduction to UAVs / Drones",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
        excerpt: "What is a UAV, how it differs from RC aircraft, and the UAV-IoT connection.",
        content: `An Unmanned Aerial Vehicle (UAV), commonly called a drone, is an aircraft that operates without a human pilot on board. It is controlled either remotely by a human operator or autonomously by onboard computers using pre-programmed flight plans or dynamic automation.

UAV vs Radio-Controlled Aircraft:
Traditional RC aircraft are purely operator-controlled with no autonomous capabilities. UAVs are distinguished by:
• Onboard flight controller with sensors (GPS, IMU, barometer)
• Autonomous modes: stabilisation, waypoint navigation, return-to-home
• Ability to carry and operate payloads (cameras, sensors, sprayers)
• Real-time telemetry via radio or cellular link

UAV Classification by Size:
• Nano UAV — <250g. Indoor use, surveillance. DJI Mini series.
• Small UAV — 250g–25kg. Consumer drones, mapping, inspection.
• Tactical UAV — 25kg–600kg. Military reconnaissance.
• Strategic/MALE UAV — >600kg. Predator drone, Global Hawk.

UAV Classification by Configuration:
• Multirotor — Most common. Quadcopter (4 rotors), hexacopter (6), octocopter (8). VTOL, hover-capable, simple design.
• Fixed-Wing — Longer range and endurance (2–16 hours). Can't hover. Used for large-area surveys.
• VTOL Fixed-Wing — Hybrid. Takes off vertically, transitions to efficient fixed-wing flight.
• Single Rotor Helicopter — Highly efficient, complex, large payload capacity.

The UAV-IoT Connection:
A UAV is fundamentally a flying IoT node. It has sensors (GPS, IMU, camera, environmental sensors), an embedded processor (flight controller), wireless connectivity (telemetry radio, 4G LTE), and a cloud backend (mission planning, data storage). It senses, connects, thinks, and acts in 3D space.

Real-World Example: DJI Agras drones monitor and spray crops autonomously. The drone's multispectral camera is an IoT sensor (capturing crop health data as NDVI index). The data uploads to DJI's cloud. An AI model identifies stressed crop zones. The next flight plan targets those zones with precise pesticide spraying — a complete IoT loop through the air.`,
        videos: ["https://www.youtube.com/watch?v=RJCQ0y0DYA8"],
      },
      {
        id: "drone-types",
        title: "Drone Types & Configurations",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&auto=format&fit=crop",
        excerpt: "Quadcopters, hexacopters, fixed-wing, VTOL — when to use which.",
        content: `Drone selection depends entirely on the mission. Each configuration makes specific trade-offs between payload, endurance, stability, and operational simplicity.

Quadcopter (4-Rotor):
The most popular UAV configuration. Four motors in a cross or X pattern. Diagonal pairs rotate in opposite directions to cancel torque.
Advantages: Simple design, low cost, very maneuverable, VTOL (Vertical Take-Off and Landing).
Disadvantages: Short flight time (typically 20–30 min), limited range.
Best for: Photography, inspection, racing, education, short-range delivery.
Example: DJI Phantom 4, DJI Mavic series.

Hexacopter (6-Rotor) & Octocopter (8-Rotor):
More rotors = more lift, redundancy (can land on 5/7 rotors if one fails), and stability.
Advantages: Heavy payload capacity, motor redundancy for safety-critical missions.
Disadvantages: More expensive, heavier, higher power consumption.
Best for: Professional cinematography, heavy payload delivery, industrial inspection.
Example: DJI Matrice 600 (hex), FreeFly Alta 8 (octo).

Fixed-Wing:
Traditional aircraft shape. Lift is generated by wings moving through air, not rotating motors.
Advantages: Very long endurance (2–16 hours), covers large distances (100s of km), efficient.
Disadvantages: Needs runway or catapult to launch, cannot hover.
Best for: Large-area agricultural survey, pipeline inspection, search and rescue over large areas.
Example: senseFly eBee, Parrot Disco.

VTOL Fixed-Wing (Hybrid):
Takes off and lands vertically (multirotor mode), then transitions to efficient fixed-wing cruise.
Best of both worlds: hovering ability + endurance.
Example: WingtraOne (used for mapping), Autel Dragonfish.

Tethered UAV:
Connected to ground power via a cable. Unlimited flight time.
Best for: Persistent surveillance, providing temporary communications relay.

Real-World Example: A disaster response organisation uses fixed-wing drones for initial large-area search over 50km² of flood zone (2-hour flight), then switches to quadcopters for detailed inspection of specific damaged buildings identified in the fixed-wing imagery.`,
        videos: ["https://www.youtube.com/watch?v=qsX2WEPdKxk"],
      },
      {
        id: "uav-applications",
        title: "UAV Applications: Defence, Civil & Environmental",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop",
        excerpt: "How drones are transforming warfare, cities, agriculture, and climate science.",
        content: `UAVs are transforming operations across three major sectors, each with very different requirements.

DEFENCE Applications:
• Intelligence, Surveillance, Reconnaissance (ISR) — Persistent high-altitude surveillance without risking pilot lives. MQ-9 Reaper provides 27-hour endurance surveillance.
• Strike Missions — Precision strikes on high-value targets. Hellfire missile-equipped UAVs.
• Electronic Warfare — Jamming enemy radar or communications.
• Logistics — Delivering supplies to troops in contested areas. Lockheed Martin SARA drone delivers 2.7kg to forward positions.
• Swarm Tactics — 100s of coordinated micro-drones to overwhelm air defences.

CIVIL Applications:
• Package Delivery — Amazon Prime Air, Zipline delivering blood/medicine in Rwanda.
• Infrastructure Inspection — Power lines, bridges, wind turbines, pipelines — drone inspection is 10x cheaper and safer than rope access.
• Search & Rescue — Night vision and thermal cameras locate missing persons faster than ground teams.
• Traffic Monitoring — Police drones monitoring highway incidents, providing real-time feeds.
• Construction Progress — Weekly aerial surveys track construction progress against BIM plans.
• Journalism — News agencies use drones for aerial footage that previously required helicopters at 100x the cost.

ENVIRONMENTAL MONITORING Applications:
• Air Quality Mapping — Drones equipped with gas sensors fly grid patterns to map CO₂, NOx, PM2.5 over cities.
• Forest Fire Detection — Thermal cameras detect heat signatures of underground smouldering before flames emerge.
• Wildlife Census — Counting elephant herds, nesting seabirds, whale pods without disturbance.
• Glacier Monitoring — Photogrammetry surveys measure ice volume changes year-over-year.
• Pollution Tracking — Flown downstream from a factory, sensors pinpoint discharge sources.
• Reef Health Monitoring — Waterproof drones photograph coral bleaching patterns.

Real-World Example: In Rwanda and Ghana, Zipline operates the world's largest commercial drone delivery network. Fixed-wing drones autonomously deliver blood products and COVID-19 vaccines from distribution centres to 2,500+ health facilities, covering 80% of the country. Each delivery is an IoT event — tracked, logged, and optimised in real time.`,
        videos: ["https://www.youtube.com/watch?v=O0pMu6o0P3k"],
      },
      {
        id: "uav-elements-sensors",
        title: "UAV Elements & Sensors",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&auto=format&fit=crop",
        excerpt: "Arms, motors, ESC, GPS, IMU, ultrasonic sensors — every component explained.",
        content: `A UAV is an integration of mechanical structure, power systems, sensors, and electronics. Understanding each component is essential for building or troubleshooting a drone.

Frame & Arms:
The structural skeleton. Arms extend outward from the centre body to mount motors. Made from carbon fibre (lightest, most rigid), aluminium (affordable), or glass fibre (impact-resistant). Wheelbase (motor-to-motor distance) determines frame class — 250mm (racing), 450mm (consumer), 680mm (professional).

Motors (Brushless DC):
Brushless motors are highly efficient, powerful, and reliable. Three-phase AC (generated by the ESC from DC battery) creates a rotating magnetic field.
Key specs: KV rating (RPM per volt) — lower KV = larger, slower props for lift; higher KV = smaller, faster props for agility.

Electronic Speed Controller (ESC):
Converts battery DC to three-phase AC for brushless motors. Receives PWM or DSHOT commands from the flight controller and proportionally adjusts motor speed.
BLHeli_32 and AM32 are popular ESC firmware. 4-in-1 ESCs combine four ESCs into one board for clean builds.

GPS Module (u-blox M8N/M9N):
Receives signals from GPS, GLONASS, BeiDou satellite constellations. Provides: Latitude/Longitude (±1–3m accuracy), altitude, velocity, heading, and time. Minimum 6 satellite lock needed for stable flight. GPS enables waypoint navigation, geofencing, and Return-To-Home.

IMU (Inertial Measurement Unit — MPU-6000 / ICM-42688):
Combines: 3-axis Gyroscope (measures angular rate in roll/pitch/yaw), 3-axis Accelerometer (measures linear acceleration in X/Y/Z), sometimes 3-axis Magnetometer (measures magnetic field = compass). The flight controller reads the IMU at 1000–8000Hz and runs PID control loops to keep the drone level. Without IMU, a drone cannot stabilise.

Barometric Altimeter (MS5611):
Measures atmospheric pressure. Pressure decreases with altitude. Resolution: ±10cm altitude hold. Used for altitude hold mode — GPS altitude is too slow and noisy for fine height control.

Ultrasonic Sensor (HC-SR04):
Measures distance to ground via echo timing. Used for precise landing and low-altitude hold (under 5m). Immune to GPS error near ground.

LiDAR (TF-Mini, Garmin LiDAR-Lite):
Laser time-of-flight distance measurement. More accurate and longer range than ultrasonic. Used for terrain following and precise obstacle avoidance.

Optical Flow Sensor:
Camera + DSP chip tracks ground features like a mouse optical sensor. Provides velocity feedback in GPS-denied environments (indoors).

Real-World Example: During autonomous precision landing on a moving ship deck, the drone uses GPS for coarse approach, then switches to optical flow + ultrasonic as it descends below 10m, finally using a precision landing beacon (IR marker) for a sub-10cm touchdown — each sensor type handling the altitude range where it performs best.`,
        videos: ["https://www.youtube.com/watch?v=c9iUgZQfcRw"],
      },
      {
        id: "ardupilot",
        title: "UAV Software — ArduPilot & Mission Planner",
        image: "https://images.unsplash.com/photo-1543159779-17b065f82fcd?w=800&auto=format&fit=crop",
        excerpt: "The world's most advanced open-source autopilot — configuring, tuning, and planning missions.",
        content: `ArduPilot is the world's most widely used open-source autopilot software, running on flight controllers like Pixhawk, Cube Orange, and Matek. It supports multirotors (ArduCopter), fixed-wing (ArduPlane), rovers (ArduRover), and submarines (ArduSub).

ArduPilot Architecture:
ArduPilot runs on a Real-Time Operating System (ChibiOS or NuttX). Core processes:
• Sensor reading — IMU at 1kHz, GPS at 5–10Hz, barometer at 50Hz.
• State Estimation (EKF — Extended Kalman Filter) — Fuses all sensor data to estimate the drone's precise position, velocity, and attitude.
• Flight Mode Logic — Interprets pilot input and executes flight modes.
• PID Control — Translates desired vs actual attitude into motor commands.
• Logging — Records all flight data to SD card (black box).

ArduPilot Flight Modes (ArduCopter):
• Stabilize — Pilot controls attitude. Auto-levels when stick centred.
• Altitude Hold — Barometer maintains altitude. Pilot controls horizontal position.
• Loiter — GPS hold. Drone hovers in place. Pilot can nudge position.
• Auto — Executes pre-programmed mission (waypoints uploaded via Mission Planner).
• Return To Home (RTH) — Flies home and lands automatically if RC signal lost.
• Land — Descends and lands at current position.

Mission Planner (Ground Control Station):
Mission Planner is a Windows application (also available on Android as QGroundControl) that connects to the flight controller via USB (on bench) or telemetry radio (in field).

Key Mission Planner functions:
• Firmware Upload — Flash latest ArduPilot firmware to Pixhawk.
• Initial Setup — Accelerometer calibration, compass calibration, ESC calibration, RC calibration.
• PID Tuning — Adjust roll/pitch/yaw PID gains for specific airframe. Autotune mode flies the drone and determines optimal PIDs automatically.
• Mission Planning — Place waypoints on a map. Set altitude, speed, actions (take photo, loiter). Upload to flight controller. Drone executes autonomously.
• Live Telemetry — Real-time display of GPS, attitude, battery, altitude, airspeed, flight mode.
• Log Analysis — Download SD card logs. Replay flight, analyse vibration, detect failures.

MAVLink Protocol:
ArduPilot communicates with Mission Planner via MAVLink — a lightweight binary telemetry protocol over radio link or USB. MAVLink messages include: heartbeat, attitude, position, command, etc. MAVLink is the universal drone communication protocol — used by DJI SDK, PX4, and all serious autopilots.

Real-World Example: A civil engineering firm surveys a dam wall for cracks. An operator uploads a mission in Mission Planner: 50 waypoints at 10m distance, 5m altitude, triggering a camera every 2m. The hexacopter (Pixhawk + ArduCopter) executes the entire 45-minute inspection autonomously. The operator monitors on a laptop via telemetry. Afterward, images are processed via photogrammetry software to generate a 3D model identifying cracks as small as 0.1mm.`,
        videos: ["https://www.youtube.com/watch?v=RJCQ0y0DYA8"],
      },
      {
        id: "internet-of-drones",
        title: "Internet of Drones (IoD) & Flybase Case Study",
        image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&auto=format&fit=crop",
        excerpt: "UTM, drone clouds, and how Flybase connects drones to IoT platforms.",
        content: `The Internet of Drones (IoD) is the extension of IoT principles to unmanned aerial vehicles — creating a cloud-based network where drones, ground stations, air traffic controllers, and service providers all communicate and coordinate.

Internet of Drones (IoD) Architecture:
The IoD architecture has four layers:

1. Access Control Layer — Communicates with Air Traffic Management (ATM) for flight authorisation. Checks airspace restrictions (no-fly zones near airports, stadiums, prisons).

2. Monitoring Layer — Tracks drone positions in real time. Detects conflicts (two drones approaching the same airspace). Manages handoffs between ground stations.

3. Information Sharing Layer — Cloud database of drone telemetry, flight plans, and operator identities. Enables forensics after incidents.

4. Application Layer — Third-party apps access IoD APIs: delivery scheduling, inspection reporting, payload commands, live video streaming.

UAV Traffic Management (UTM):
Analogous to Air Traffic Control (ATC) for crewed aircraft, but highly automated. NASA, EASA, and FAA are developing UTM standards. Key capabilities: Drone registration, flight plan filing, conflict detection, automated deconfliction, real-time tracking.

Flybase — IoD Platform (Case Study):
Flybase is an IoT platform purpose-built for drone fleets. It abstracts the complexity of MAVLink/ArduPilot and exposes a clean web API and dashboard.

Key Flybase features:
• Fleet Dashboard — View all drones on a live map, see battery, status, altitude in real time.
• RESTful API — POST /drones/{id}/commands → send takeoff, land, goto waypoint commands via HTTP.
• Webhooks — Flybase POSTs to your server when a drone completes a waypoint or encounters a fault.
• Telemetry Streaming — Subscribe to WebSocket stream for 10Hz position/attitude/battery updates.
• Mission Management — Upload, store, and trigger missions via API. Schedule recurring inspection flights.
• Integration with IoT platforms — Flybase pushes drone telemetry to AWS IoT, MQTT brokers, or ThingSpeak channels.

Flybase Code Example:
// Command a drone via REST API
fetch('https://api.flybase.io/v1/drones/drone-001/commands', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer <API_KEY>' },
  body: JSON.stringify({ command: 'goto', lat: 12.9716, lon: 77.5946, alt: 50 })
});

Real-World Example: A solar farm operator uses Flybase to schedule weekly inspection flights. Every Monday at 6am, Flybase automatically commands the DJI drone to execute a pre-uploaded inspection mission, captures thermal images of solar panels, uploads images to AWS S3, triggers an AI defect detection model, and emails a fault report with panel IDs and GPS coordinates to the maintenance team — an end-to-end IoT+UAV automated pipeline with zero human intervention.`,
        videos: ["https://www.youtube.com/watch?v=oYZgr4DlZQ4"],
      },
    ],
  },
];

export const getUnit = (id) => units.find((u) => u.id === Number(id));
export const getTopic = (unitId, topicId) => {
  const unit = getUnit(unitId);
  if (!unit) return null;
  const topic = unit.topics.find((t) => t.id === topicId);
  return topic ? { unit, topic } : null;
};