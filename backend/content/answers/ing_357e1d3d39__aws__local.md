---
qid: ing_357e1d3d39__aws__local
question: Compare plan-then-execute with reactive (ReAct-style) execution. When does
  each win?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 462
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:25:34-05:00'
sources: []
---

**Situation**  
I led a cross‑functional team building an AI‑powered recommendation engine for a global e‑commerce platform that had to scale to 10M active users and deliver sub‑second responses.

**Task**  
Decide whether to adopt a *plan‑then‑execute* pipeline (batch model training + scheduled inference) or a *reactive ReAct‑style* approach (real‑time feedback loop with continuous learning).

**Action**  
I ran a two‑phase experiment:

1. **Plan‑Then‑Execute** – Trained models nightly on Amazon SageMaker, staged them to Amazon CloudFront edge caches for low latency. We used Amazon EventBridge to trigger inference jobs in batch mode during off‑peak hours.
2. **Reactive ReAct** – Built an end‑to‑end pipeline with AWS Lambda + Step Functions that ingested user interactions via Kinesis Data Streams, updated embeddings in DynamoDB, and re‑trained a lightweight model every 5 minutes.

I compared CPU/GPU usage, cost (Spot vs On‑Demand), latency, and recommendation accuracy.  

**Result**  
The reactive pipeline lowered inference latency from **350 ms to 120 ms** and improved click‑through rate by **8%**, but increased AWS spend by **23%** due to continuous training. The planned approach saved **$12k/month** and maintained a **5–7%** accuracy advantage in rare‑event scenarios where data volume was low.

**Takeaway**  
*Plan‑then‑execute* wins when data volumes are predictable, cost sensitivity is high, and model stability matters (e.g., regulatory compliance). *Reactive ReAct* excels in dynamic environments with rapid user feedback loops (e.g., personalization at scale).  

---

### Leadership Principles Highlighted
- **Customer Obsession** – Chose the approach that maximized recommendation relevance.  
- **Ownership & Dive Deep** – Conducted end‑to‑end cost and performance analysis, iterated on trade‑offs, and documented learnings for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
