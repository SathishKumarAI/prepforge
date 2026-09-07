---
qid: ing_0e1b712ca9__aws__local
question: 'Explain: Stateful Architecture — Stateful vs. Stateless Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 415
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:57:35-05:00'
sources: []
---

**Situation & Task**  
While leading a recommendation engine for a global e‑commerce platform, we needed to switch from an **stateless** microservice that recomputed user sessions on every request to a **stateful** architecture that could cache session data and provide real‑time personalization.

**Action (Design)**  
1. Adopted Amazon DynamoDB with *Global Tables* for cross‑region session persistence.  
2. Introduced Amazon ElastiCache‑Redis as an in‑memory store for hot user sessions, backed by AWS Kinesis Data Streams to stream changes to downstream ML inference services.  
3. Built a stateful Lambda layer that writes to DynamoDB and publishes events; the stateless inference service consumes these events via EventBridge.  

**Result (Data‑driven)**  
- Reduced average recommendation latency from **2.5 s → 0.8 s** (30% of users now see results in <1 s).  
- Cut compute costs by **18%**: Redis cached ~70% of session lookups, eliminating expensive recomputations.  
- Improved click‑through rate by **4.7pp**, directly tied to faster personalization.

**Leadership Principles**  
- **Ownership** – I owned the end‑to‑end migration and drove cross‑team alignment.  
- **Dive Deep** – Analyzed per‑user cache hit rates, DynamoDB provisioned throughput, and latency distributions to fine‑tune capacity.  

**Bar‑raiser notes**  
- Demonstrated clear ownership of metrics and cost impact.  
- Showed depth by balancing consistency vs. availability (DynamoDB global tables).  
- Learned from a failed attempt where we over‑provisioned Redis; we then introduced auto‑scaling to match traffic patterns, turning the failure into an opportunity for cost optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
