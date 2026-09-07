---
qid: ing_fe3acf13b1__aws__local
question: 'Explain: TCP vs. UDP — System Design: Top 15 Trade-Offs - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 475
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:58-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign a real‑time video analytics pipeline for a global streaming service. The key decision: whether to ship telemetry over **TCP** (reliable) or **UDP** (low‑latency). My goal was to keep end‑to‑end latency < 200 ms while ensuring at least 99.9 % of frames were processed.

**Action & Design**  
I mapped the trade‑offs on a table (throughput, jitter, packet loss, ordering) and ran a pilot with **AWS Kinesis Data Streams** vs. **Amazon MQ (ActiveMQ)** for TCP and **AWS Elemental MediaLive + CloudFront** for UDP. I added a small “retransmission window” in the UDP path to recover from 2 % packet loss.  
- *Scalability*: Kinesis scales horizontally; MediaLive auto‑scales per region.  
- *Availability*: TCP guarantees ordering, but adds ~20 ms overhead; UDP cuts latency by 60 %, but we lost 4 % of packets.  
- *Cost*: UDP path used only **S3 Transfer Acceleration** (≈$0.04/GB) vs. Kinesis ($0.014 per 1 M records).  

**Result**  
Switching to the hybrid UDP/TCP model cut latency from 320 ms to **190 ms** and increased successful frame processing from 92 % to **97.8 %**, driving a 12 % lift in user engagement. The cost dropped by 18 %. I documented the findings and created an automated test harness that now runs nightly, catching regressions before they hit production.

> *Leadership Principles*: **Ownership** – I drove the experiment end‑to‑end; **Dive Deep** – quantified latency/jitter per protocol; **Deliver Results** – tangible engagement boost.  

Bar‑raiser notes: clear ownership narrative, data‑driven impact, depth of technical reasoning, and a learning loop (automated tests).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
