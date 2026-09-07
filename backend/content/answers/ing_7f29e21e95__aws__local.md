---
qid: ing_7f29e21e95__aws__local
question: 'Explain: Drawing Tips — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 484
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:12:42-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I led a cross‑functional sprint to build an *AI‑assisted sketch assistant* that would let designers prototype quickly on a whiteboard. The goal was to cut concept‑to‑prototype time by 40 % and reduce the need for manual vector conversion.

**Action (A)**  
1. **Dive Deep into Requirements** – I mapped user journeys, interviewed 12 designers, and quantified the average hand‑drawn sketch duration (≈ 8 min).  
2. **Design Architecture** –  
   * **Front‑end:** React + Canvas API for real‑time drawing.  
   * **Back‑end:** Lambda functions triggered by WebSocket events to stream strokes to a **SageMaker Endpoint** that runs a lightweight CNN (MobileNet‑V3) to classify gesture intent and output SVG paths.  
   * **Storage & Caching:** DynamoDB for session metadata; ElastiCache Redis to cache the latest model predictions, reducing latency from 300 ms to < 80 ms.  
3. **Bias for Action** – I prototyped a minimal viable feature in 48 h, iterated on user feedback, and rolled out A/B testing across 200 designers.  
4. **Deliver Results** – The final product cut prototype time from 8 min to 4 min (50 % reduction) and increased designer satisfaction scores by 18 pts (from 7.2 to 8.0/10). Cost per session dropped from $0.12 to $0.08.

**Result (R)**  
The feature was adopted company‑wide, contributing a projected $1.5M annual savings in design labor. Post‑deployment monitoring revealed a 99.9 % availability SLA, and the system scaled to handle 10k concurrent sessions with < $50/month on AWS services.  

**Leadership Principles Highlighted**  
* **Customer Obsession:** Built directly from designer pain points.  
* **Ownership & Deliver Results:** Took end‑to‑end responsibility for feature success and measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
