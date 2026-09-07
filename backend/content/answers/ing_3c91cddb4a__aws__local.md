---
qid: ing_3c91cddb4a__aws__local
question: 'Explain: Distributed Systems — Software Engineer Interview Learning Resources
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 547
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:42:50-05:00'
sources: []
---

**Situation (S)** – While leading a cross‑team effort to launch an ML inference platform for real‑time recommendation, I realized our monolithic model server would hit latency and cost ceilings as traffic grew from 10k to 200k requests per second.

**Task (T)** – Design a distributed system that scales horizontally, keeps inference < 50 ms, and reduces EC2 spend by 30 %.

**Action (A)**  
1. **Micro‑service decomposition**: Split the model into “pre‑processor”, “inference” and “post‑processor” containers.  
2. **AWS services** –  
   * **ECS Fargate + Application Load Balancer** for zero‑maintenance scaling and 99.9 % availability.  
   * **SageMaker Endpoint** (multi‑model) behind the ALB to host the heavy inference logic; we use *on‑demand* instances for peak, *spot* for steady load, cutting GPU cost by 35 %.  
   * **DynamoDB** for feature store, auto‑scaling read/write units.  
   * **CloudWatch + X-Ray** for end‑to‑end latency telemetry; we set a 50 ms SLO and use CloudWatch Alarms to trigger scaling policies.
3. **Trade‑offs** – We accept slightly higher cold‑start time (≈200 ms) in exchange for lower operational overhead and cost.

**Result (R)** – Post‑deployment, request latency dropped from 120 ms to 38 ms (60 % improvement), traffic scaled to 250k RPS without manual intervention, and cloud spend fell by 32 %. The system’s resilience was validated with a 99.98 % uptime over three months.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered sub‑50 ms latency, directly improving user experience.
- **Ownership & Dive Deep** – Own end‑to‑end pipeline, dive into AWS cost models to engineer savings.

### Bar‑raiser Expectations
| What they listen for | Why it matters |
|----------------------|----------------|
| Quantified impact (latency drop, cost reduction) | Shows measurable business value |
| Depth of design (service choice, scaling logic) | Demonstrates ownership and technical depth |
| Learning from failure (cold‑start trade‑off) | Reflects growth mindset |

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
