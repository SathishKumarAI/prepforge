---
qid: ing_143712ed94__aws__local
question: 'Explain: Problem Statement — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 368
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:10:38-05:00'
sources: []
---

**Situation & Task**  
When recruiting for an AI‑engineer role at AWS I introduced a *Whiteboard Problem Statement* to surface how candidates reason under ambiguity. The exercise asked: **“Design a scalable, cost‑effective system that ingests streaming sensor data, runs real‑time anomaly detection with a 95 % precision/recall threshold, and triggers alerts.”**  

**Action (Dive Deep + Ownership)**  
I guided the candidate to:  
1. **Clarify requirements** – define latency (<200 ms), data volume (≈10⁶ events/s), retention (30 days).  
2. **Propose a design** – Kafka → Lambda → SageMaker Endpoint → SNS/SQS → DynamoDB for state, using *Amazon Kinesis Data Streams* and *Amazon Lookout for Metrics*.  
3. **Choose services & trade‑offs** – Kinesis for high throughput, Lambda for serverless scaling, SageMaker for model hosting; discuss batch vs streaming inference, cold start impact, and cost per invocation.  

**Result (Deliver Results)**  
The candidate produced a diagram that lowered estimated operational costs by 30 % compared to a monolithic EC2 solution while meeting SLA targets. I later benchmarked the architecture in a sandbox: latency stayed at 180 ms and the alert precision/recall hit 97 %.  

**Learnings (Bias for Action + Customer Obsession)**  
The exercise revealed how quickly candidates own the problem, dive into AWS services, quantify trade‑offs, and iterate—exactly what we look for in an AI leader.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
