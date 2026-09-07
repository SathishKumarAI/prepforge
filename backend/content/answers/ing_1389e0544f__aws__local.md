---
qid: ing_1389e0544f__aws__local
question: When should you split an agent into sub-agents, and what do you pass between
  them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 553
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:09:23-05:00'
sources: []
---

**Situation (S)**  
While building a conversational AI for an e‑commerce platform, the single‑agent model could not keep up with 1 M concurrent users during peak holiday sales—latency spiked to 3 s and SLA drifted beyond 99.9 % availability.

**Task (T)**  
Redesign the architecture so that the agent handles high‑volume “order‑status” queries while still supporting complex “product‑recommendation” flows, all within a single customer session.

**Action (A)**  
I split the system into two sub‑agents:

1. **Context Agent** – lightweight Lambda + DynamoDB to ingest user intent, session state, and retrieve relevant order data from Aurora Serverless.
2. **Decision Agent** – SageMaker real‑time endpoint that runs a fine‑tuned recommendation model.

The Context Agent passes only the *session ID*, *intent type*, and a concise JSON payload (≤ 256 B) to the Decision Agent. This keeps inter‑service traffic minimal, reduces serialization overhead, and allows each agent to scale independently (Lambda concurrency vs. SageMaker inference capacity).

Key AWS services:  
- **Amazon API Gateway** for entry point  
- **AWS Step Functions** orchestrates the two agents, guaranteeing at‑least‑once delivery.  
- **CloudWatch & X-Ray** provide end‑to‑end latency metrics.

**Result (R)**  
Post‑split, average response time dropped from 3 s to 0.7 s, and uptime rose to 99.97 % during the holiday period—meeting SLA with a 40 % cost reduction by scaling only the recommendation endpoint on demand.

---

### Leadership Principles Highlighted
- **Customer Obsession** – delivered a faster, more reliable experience.  
- **Ownership** – took full responsibility for end‑to‑end latency and cost.  
- **Dive Deep** – profiled each sub‑agent to identify bottlenecks.  

### Bar‑Raiser Takeaways
- Clear ownership of metrics (latency, SLA).  
- Depth: quantified impact (40 % cost savings, 99.97 % uptime).  
- Learning loop: after the failure during peak traffic, we redesigned with modularity and observable boundaries—proof that iterative improvement is key.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
