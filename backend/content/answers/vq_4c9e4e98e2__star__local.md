---
qid: vq_4c9e4e98e2__star__local
question: Do you think everyone has a creative side?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 286
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:58:22-05:00'
sources: []
---

**Situation**  
During my senior design project at university we were tasked with creating an energy‑efficient HVAC control system for a small office building. Midway through, our prototype was blowing temperatures off by 4 °C on average, causing client dissatisfaction and jeopardizing the funding for the next phase.

**Task**  
I had to redesign the temperature regulation algorithm so it stayed within ±1 °C of the setpoint while keeping power consumption below the original specification.

**Action**  
I introduced a predictive control loop that sampled ambient data every 30 seconds, applied a Kalman filter to smooth noise, and used a PID controller tuned via the Ziegler–Nichols method. I also swapped the single‑zone thermostat for a multi‑zone model so each room could be adjusted independently. To keep the system lightweight, I implemented the algorithm in C on an ESP32 microcontroller, leveraging its low‑power deep sleep mode.

**Result**  
The new controller reduced temperature variance to 0.8 °C and cut energy usage by 18 % compared to the prototype. The client approved a $12K contract extension for further development. I learned that creativity often means rethinking assumptions—here, treating each room as an independent control problem turned out to be the key insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
