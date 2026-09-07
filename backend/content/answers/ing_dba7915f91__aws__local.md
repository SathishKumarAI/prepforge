---
qid: ing_dba7915f91__aws__local
question: 'Explain: Sources — Deepseek'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 372
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:34:15-05:00'
sources: []
---

**Situation / Task**  
I was leading a product‑owner‑led feature to surface AI knowledge bases for our internal training platform. The challenge was to ingest *DeepSeek*’s public datasets (text corpora, code snippets) while keeping ingestion latency < 5 min and cost < $0.01 per 1k tokens.

**Action**  
- **Ownership & Bias for Action:** I scoped the pipeline end‑to‑end: S3 bucket → Lambda → Amazon Bedrock (DeepSeek model) → DynamoDB cache.  
- **Dive Deep:** Benchmarked three storage options; chose **S3 Intelligent Tiering** to auto‑move infrequently accessed data, cutting storage cost by 35 %.  
- **Invent & Simplify:** Implemented a serverless ETL using EventBridge + Step Functions so each batch ran in parallel, reducing end‑to‑end latency from 12 min to 4.7 min.  
- **Customer Obsession:** Added a real‑time health dashboard (CloudWatch + QuickSight) for the engineering team to monitor token usage and model errors.

**Result**  
- Achieved **99.8 % SLA on ingestion latency** while cutting cost by **$2,400 annually**.  
- The feature reduced training time for new hires from 3 days to 1 day (30 % faster).  

*Bar‑raiser note:* I owned the entire stack, dove deep into performance metrics, quantified impact, and learned that pre‑warming Lambda concurrency was key—an adjustment that improved cold‑start times by 40 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
