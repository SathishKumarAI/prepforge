---
qid: ing_cabf840def__aws__local
question: 'Explain: Infrastructure — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 508
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:59:32-05:00'
sources: []
---

**Scenario (S)**  
While leading a cross‑functional team that built an autonomous customer‑support chatbot, I was tasked to design the *agent memory* layer so that each session could retain context across multi‑turn conversations and adapt over time.

**Task (T)**  
Create a scalable, low‑latency state store that supports:  
1. **Short‑term contextual memory** (≤ 5 min) for turn‑by‑turn inference.  
2. **Long‑term learning** of user preferences and sentiment for personalization.

**Action (A)**  
- Deployed an **Amazon DynamoDB** table with a composite key `(AgentId, SessionTimestamp)` for short‑term state; provisioned on‑demand throughput to auto‑scale during traffic spikes.  
- Integrated **Amazon ElastiCache‑Redis** as an in‑memory cache (TTL = 300 s) to reduce read latency from ~12 ms to < 2 ms, cutting inference cost by 18 %.  
- For long‑term learning, streamed state changes to **Kinesis Data Streams**, processed with **AWS Lambda** into a **Amazon SageMaker Feature Store**.  
- Employed **IAM fine‑grained policies** and **encryption at rest** (KMS) to satisfy security requirements.

**Result (R)**  
- Latency dropped from 12 ms → 2 ms, improving user satisfaction scores by **23 %** (from 4.1→5.0/5).  
- Cost per session fell from $0.08 → $0.05 (≈ 38 % savings) while maintaining 99.999 % availability.  
- The system handled a peak of 120k concurrent sessions without throttling, validating our scalability assumptions.

---

### Leadership Principles Anchored
- **Customer Obsession** – delivered measurable UX gains.  
- **Ownership & Dive Deep** – designed end‑to‑end state flow, tuned metrics, and iterated on failure modes (e.g., cache miss handling).  

Bar‑raiser focus: depth of AWS service choices, quantified impact, and lessons from early cache failures that led to the hybrid DynamoDB‑Redis design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
