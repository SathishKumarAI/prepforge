---
qid: ing_b8489578f1__aws__local
question: 'Explain: Level 2: MCP Architecture and How a Request Flows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 454
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:21:02-05:00'
sources: []
---

**Situation / Task**  
I led the design of a Level‑2 Machine‑Learning‑Core (MCP) service that ingests user queries, routes them to the right inference model, and returns predictions within **200 ms** for an internal recommendation engine used by 1 million daily active users.

**Action – Architecture & Request Flow**  
- **API Gateway + Lambda@Edge**: Front‑end receives REST/GraphQL calls; edge routing reduces latency.  
- **Step Functions (State Machine)** orchestrates the pipeline:  
  1. *Validate & enrich* → DynamoDB for feature store.  
  2. *Model Selection* → S3 metadata + SageMaker Endpoint registry.  
  3. *Inference* → SageMaker Real‑Time endpoint or Lambda‑based lightweight model (for edge cases).  
- **SageMaker Pipelines** for continuous training; outputs to S3 and pushes new model versions to the registry.  
- **CloudWatch & X-Ray** provide end‑to‑end tracing; metrics feed into an Auto Scaling policy on Lambda concurrency.

**Result**  
- Latency dropped from 450 ms to **180 ms** (30% improvement).  
- Throughput increased by **4×**, supporting a projected 5M DAU without additional cost.  
- Cost per inference fell from $0.005 to **$0.003** due to smarter model selection.

**Leadership Principles Reflected**  
- **Customer Obsession**: Deliver instant, accurate predictions for the recommendation engine.  
- **Ownership / Dive Deep**: Built end‑to‑end observability; iterated on failure modes (e.g., cache misses) and quantified impact.  

**Bar‑raiser cues I’d look for**  
- Demonstrated ownership of the full request lifecycle.  
- Depth in trade‑off analysis (SageMaker vs Lambda, cost vs latency).  
- Clear, data‑driven metrics that show real business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
