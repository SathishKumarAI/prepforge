---
qid: ing_750283bb6f__star__local
question: 'Explain: incorrect assumptions so to start off i — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 323
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:28:46-05:00'
sources: []
---

**Situation:**  
While preparing for an Amazon system‑design interview, my study group tackled a classic “Design a Parking Garage” problem. We sketched out the architecture quickly, assuming that every vehicle would enter and exit through the same gate and that all sensors were 100 % reliable.

**Task:**  
I needed to identify the flawed assumptions, redesign the system to handle real‑world edge cases, and present a robust solution within 30 minutes.

**Action:**  
First I mapped out typical failure points: multi‑level entry/exit, sensor noise, power outages, and irregular parking patterns. I introduced redundant RFID readers per lane, an event‑driven message queue (Kafka) to buffer sensor data, and a state machine that reconciles conflicting readings. For reliability, I added a watchdog service that flags anomalies after three consecutive mismatches. The design also includes a lightweight mobile API for drivers to reserve spots and receive dynamic pricing updates.

**Result:**  
The revised architecture reduced the error rate from 8 % (original assumptions) to <0.2 %. My group earned top marks on the interview simulation, and I learned that questioning every “obvious” assumption is essential before committing to a design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
