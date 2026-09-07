---
qid: ing_75ce6cb978__aws__local
question: 'Explain: it back and forth so now this — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 497
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:52:09-05:00'
sources: []
---

**Situation / Task**  
I led a two‑month sprint to build a real‑time collaborative editor for an internal SaaS product. The requirement was *Operational Transformation (OT)* with differential sync so that dozens of users could edit the same document concurrently without conflicts, and latency had to stay below 50 ms even at peak load.

**Action**  
*Architecture*: I designed a stateless API layer on **Amazon API Gateway + Lambda** for CRUD operations, backed by an **Aurora Serverless v2** database that stores versioned diffs.  
*OT Engine*: A dedicated **ECS‑Fargate** cluster runs the OT algorithm; each document is locked in a **Redis (Elasticache)** queue to serialize edits and broadcast updates via **Amazon Kinesis Data Streams**.  
*Differential sync*: Clients receive only delta packets over WebSocket (API Gateway) and replay them locally, keeping local state minimal.  

I introduced *chaos‑engineering* tests that injected 20 % packet loss; the system still converged in <3 s. Production metrics showed **99.9 % success rate** and average round‑trip latency of **32 ms** under 500 concurrent users.

**Result**  
The feature reduced support tickets by 37 % and increased user retention from 58 % to 72 %. It also cut infrastructure costs by 18 % compared with a monolithic approach.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – built a low‑latency, conflict‑free experience that users love.  
- **Ownership & Dive Deep** – I drove end‑to‑end design, debugged OT edge cases, and tuned AWS services for scale.  

### What the Bar‑raiser Listened For  
- Clear ownership of all moving parts (API, OT engine, sync).  
- Quantified impact (latency, success rate, cost savings).  
- Depth: detailed trade‑offs between Lambda vs Fargate, Kinesis vs SQS.  
- Learning loop: post‑mortem on the chaos test led to a smarter retry policy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
