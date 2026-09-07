---
qid: ing_187d3ab420__aws__local
question: 'Explain: Online evaluations — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 488
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:21:02-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led the launch of *LangWatch*, an internal platform that continuously tests our multilingual AI agents in real‑time user conversations. The product had to validate 12 models per language pair while guaranteeing zero downtime for live traffic.

**Task (T)**  
Design a scalable, cost‑efficient online evaluation pipeline that could ingest millions of conversation logs, run inference against multiple model variants, and surface actionable metrics back to the ML team in under 5 minutes.

**Action (A)**  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| Ingest & queue | **Amazon Kinesis Data Streams** | Handles >200 k events/s with low latency. |
| Parallel inference | **AWS Lambda + Amazon SageMaker Endpoint** | Auto‑scales per shard; cost‑effective for bursty traffic. |
| Aggregation & storage | **Amazon DynamoDB + S3 (Glacier)** | Real‑time results in DynamoDB, long‑term logs archived in Glacier. |
| Visualization | **Amazon QuickSight** | Zero‑code dashboards; refresh every minute. |

I added a *canary* switch that routes 1 % of traffic to the new model and compares BLEU & F1 scores against baseline. If drift >2 %, the pipeline auto‑reverts. The whole system is fully CI/CD‑driven with **AWS CodePipeline**.

**Result (R)**  
- Reduced evaluation latency from 30 min to <5 min.  
- Cut operational cost by 37 % compared to our legacy batch tests.  
- Detected a drift in the Spanish model two days before it impacted user satisfaction, preventing a projected 12 % drop in NPS.

**Leadership Principles Highlighted**

1. **Customer Obsession & Bias for Action** – Fast feedback loop keeps users happy and teams nimble.  
2. **Ownership & Dive Deep** – I own the end‑to‑end pipeline and dug into Lambda throttling to avoid cold starts.  

Bar‑raisers look for measurable ownership, deep technical insight, and a clear learning curve—here I iterated on the canary logic after an initial false positive that taught us to refine confidence thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
