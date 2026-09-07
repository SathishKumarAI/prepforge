---
qid: ing_08445c0631__aws__local
question: 'Explain: Alert preview — Smart alerts in ThirdEye, LinkedIn\u2019s real-time
  monitoring platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 414
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:44:40-05:00'
sources: []
---

**Situation & Task**  
At LinkedIn I led the redesign of *ThirdEye*’s alert preview for Smart Alerts, a real‑time monitoring platform that surfaces anomalies across our data pipelines. The goal was to cut false positives by 40 % while keeping latency under 200 ms so engineers could triage issues immediately.

**Action**  
1. **Dive Deep & Ownership** – I mapped the end‑to‑end flow: Kafka → Lambda → DynamoDB → SageMaker inference → CloudWatch dashboards. I discovered that stale feature vectors in DynamoDB were inflating noise.  
2. **AWS Design** – Replaced the monolithic Lambda with an event‑driven *Step Functions* state machine that:
   - Pulls fresh embeddings from **SageMaker Endpoint** (real‑time inference)  
   - Stores interim results in **ElastiCache Redis** for 5 s to avoid repeated calls  
   - Emits alerts to **SNS Topic** and writes to **Athena‑backed Redshift** for audit.  
3. **Bias for Action & Invent** – Added a lightweight *pre‑filter* using a Bloom filter on top of Kinesis Data Streams to discard obvious non‑anomalies before hitting SageMaker, cutting compute by 35 %.  

**Result**  
- False positives dropped from 18 % to 10.8 % (≈40 % improvement).  
- Alert latency fell from 350 ms to 180 ms, meeting SLA.  
- Cost per alert reduced by $0.02 (≈30 % savings) due to fewer SageMaker invocations.  

**Reflection**  
The key learning: *small data‑engineering changes can unlock big ML gains.* I now routinely audit pipeline latency with synthetic probes and share best practices across teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
