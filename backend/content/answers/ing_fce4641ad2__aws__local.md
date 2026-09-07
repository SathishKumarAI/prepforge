---
qid: ing_fce4641ad2__aws__local
question: 'Q: Why does Agentic RAG often lead to higher quality but lower "Reliability"
  (Determinism)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 406
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:42-05:00'
sources: []
---

**Why does Agentic Retrieval‑Augmented Generation (RAG) often trade higher quality for lower determinism?**

**Situation & Task**  
At a cloud‑native startup, I led the migration of our customer support chatbot from a rule‑based engine to an **Agentic RAG** model that fetched up‑to‑date docs from S3 and DynamoDB. The goal was to improve answer relevance while maintaining 99% uptime.

**Action**  
1. **Design** – Built a stateless Lambda layer that queried Athena for the top‑k documents, then fed them into an Amazon Bedrock agent with a *retrieval policy* (`retrieve_and_generate`).  
2. **Metrics & Controls** – Logged each retrieval score and generation confidence to CloudWatch; set a threshold of 0.7. If below, the agent fell back to a deterministic FAQ endpoint.  
3. **Cost/Scale** – Used Spot Instances for Bedrock inference (≈ $0.0005 per request) and S3 Transfer Acceleration for low‑latency reads.

**Result**  
- *Quality*: Mean user satisfaction rose from 78% to **92%** (NPS +15).  
- *Reliability*: Determinism dropped: 18% of sessions hit the fallback path, causing a 2.5× increase in latency variance.  
- *Cost*: Overall spend increased by **12%**, but the quality lift justified it.

**Learnings**  
- Ownership means accepting trade‑offs; we documented that higher relevance can reduce determinism.  
- Dive deep into failure logs revealed that ambiguous retrievals were the root cause—prompt engineering and tighter scoring thresholds mitigated this in later iterations.  

*Leadership Principles*: **Customer Obsession**, **Ownership**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
