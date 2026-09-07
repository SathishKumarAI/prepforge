---
qid: vq_23954667f1__aws__local
question: Have you ever tried virtual reality? What did you think?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 378
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:42:49-05:00'
sources: []
---

**Situation / Task (Customer Obsession)**  
In 2023 I led a cross‑functional team to prototype an AR/VR training module for our field‑service technicians. The goal was to reduce on‑site troubleshooting time by 30 % while keeping the learning curve under 2 hours.

**Action (Dive Deep & Ownership)**  
I personally tested three commercial headsets—Oculus Quest 2, HTC Vive Pro, and Valve Index—to evaluate latency, field of view, and comfort. I built a lightweight Unity prototype that streamed sensor data from our existing IoT devices via AWS IoT Core, processed with Amazon Kinesis Data Streams, and rendered in real time on the headset. I also set up an A/B test using Amazon Pinpoint to collect user feedback.

**Result (Deliver Results)**  
The Quest 2 delivered 90 % of the required fidelity at a 120 Hz refresh rate while keeping latency below 15 ms—critical for preventing motion sickness. After a pilot with 45 technicians, on‑site repair time dropped from 42 min to **27 min** (36 % reduction), and satisfaction scores rose from 3.8/5 to 4.6/5. The prototype also cut training hours from 10 hrs to 2 hrs, saving the company $120k annually in labor.

**Learnings (Bias for Action & Ownership)**  
I realized that early user‑centric testing can surface hardware constraints that would otherwise derail scalability plans. I documented a “VR Readiness” checklist now used by all product teams when evaluating immersive solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
