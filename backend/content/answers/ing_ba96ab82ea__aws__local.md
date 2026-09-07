---
qid: ing_ba96ab82ea__aws__local
question: 'Explain: Common Vertical Scaling Actions — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 505
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:25:33-05:00'
sources: []
---

**Situation (S)**  
At my previous role we built a real‑time recommendation engine that served 1 M requests per day. The model was hosted on an EC2 `ml.m5.xlarge` instance, but during peak traffic our inference latency spiked from **120 ms to 350 ms**, hurting the user experience and increasing error rates by 4 %.

**Task (T)**  
I had to reduce latency while keeping cost under $200 k/yr. The goal: bring average latency below **150 ms** and maintain a 99.9 % uptime SLA.

**Action (A)**  
1. **Vertical scaling** – I evaluated larger instance families (`ml.c5.xlarge`, `ml.p3.2xlarge`) to add CPU/GPU capacity.  
2. Deployed the model on **SageMaker Endpoint** with a *single* `ml.m5.4xlarge` instance, leveraging its 16 vCPU and 64 GB RAM for batch inference.  
3. Added **AWS Lambda** as an edge cache to pre‑process inputs, reducing payload size by 30 %.  
4. Implemented **CloudWatch metrics** (latency, CPU, GPU utilization) and set alarms to trigger manual scale‑up during traffic surges.

The vertical upgrade cut latency from 350 ms to **128 ms** (a 63 % reduction), kept costs at $185 k/yr, and maintained 99.95 % availability.

**Result (R)**  
User satisfaction scores rose by 12 points on NPS, and the system now handles a projected 3× traffic growth without further vertical changes.

---

### Bar‑raiser check

| Owner | Dive Deep | Quantified Impact | Learning |
|-------|-----------|-------------------|----------|
| ✔️ | ✔️ (instance specs, CloudWatch data) | ✔️ (latency %, cost, NPS) | ✔️ Adjusted scaling strategy after profiling bottlenecks |

*Leadership Principles:* **Ownership**, **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
