---
qid: ing_ab262d7108__aws__local
question: 'Explain: a single state that is the tip — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 488
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:53:23-05:00'
sources: []
---

**Situation (S)**  
I led a cross‑functional team that built the real‑time collaboration layer for a Google‑Docs‑style app at an early‑stage SaaS startup. The core challenge was to keep a *single authoritative state* (“the tip”) consistent across thousands of concurrent editors while minimizing latency.

**Task (T)**  
Design an Operational Transformation (OT) engine that propagates edits as differential synchronisation, guarantees convergence, and scales horizontally on AWS.

**Action (A)**  
1. **State model** – Each document is a *linear history* of operations; the tip is the latest operation ID.  
2. **OT algorithm** – Implemented a conflict‑free transformation library in Go, storing ops in Amazon DynamoDB with a global secondary index on `doc_id#timestamp`.  
3. **Diff sync** – Clients send only deltas (insert/delete ranges). A Lambda authoriser validates and persists ops; another Lambda triggers an SNS topic that pushes the new tip to all subscribers via API Gateway WebSocket endpoints backed by AWS AppSync.  
4. **Scalability & Availability** – DynamoDB’s on‑demand capacity handles 10k concurrent edits per doc; AppSync provides regional failover with minimal cost.  
5. **Cost optimisation** – Offload heavy transformation to spot‑instance EC2 workers, keeping Lambda usage under $0.02/1M ops.

**Result (R)**  
Within three months we achieved <50 ms average round‑trip latency for 95 % of edits and a 99.9 % convergence rate across 200+ concurrent users per doc—up from the baseline 500 ms and 90 %. The system handled peak loads of 20k ops/sec with <$5/day cost, exceeding our SLA targets.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Prioritised low‑latency UX for editors.  
- **Ownership & Dive Deep** – Took end‑to‑end responsibility and iterated on the OT algorithm after profiling failures.  

Bar‑raiser notes: clear ownership, deep technical justification, quantified impact, and evidence of learning from early merge conflicts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
