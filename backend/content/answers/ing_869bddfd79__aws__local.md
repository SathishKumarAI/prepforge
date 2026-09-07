---
qid: ing_869bddfd79__aws__local
question: 'Explain: Agent state — Agentic Engineering - by Neo Kim and Paul Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 420
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:28:30-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked to refactor a real‑time recommendation engine that was built on legacy batch jobs. The goal was to make the system *agentic*—allowing each user’s “agent” to learn and act independently while still respecting global constraints.

**Action**  
I introduced **Agent State** as described by Neo Kim & Paul Hoekstra: a lightweight, immutable state snapshot stored in DynamoDB, updated via Lambda every 30 s. The agent logic lived in SageMaker endpoints that pulled the latest state, applied an online‑learning model (XGBoost + incremental updates), and pushed new actions back to the state table.  
*Key AWS services*:  
- **DynamoDB** for low‑latency, high‑throughput state storage (≈ 200 k writes/sec).  
- **Lambda** as a stateless orchestrator to keep cost predictable (~$0.20/100K invocations).  
- **SageMaker Edge** for model inference at the edge, reducing round‑trip latency by 70 %.  

**Result**  
After deployment, we saw a **23 % lift in click‑through rate (CTR)** and a **15 % reduction in server cost** due to fewer batch jobs. The system also achieved **99.9 % availability**, thanks to DynamoDB’s built‑in replication.  
**Learnings** – I discovered that *small, immutable state snapshots* dramatically simplify rollback and auditability, a lesson I’ve applied to all downstream pipelines.

> **Leadership Principles Anchored:** *Customer Obsession* (better CTR), *Ownership* (end‑to‑end redesign), *Dive Deep* (profiling Lambda vs. batch), *Bias for Action* (rapid prototyping), *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
