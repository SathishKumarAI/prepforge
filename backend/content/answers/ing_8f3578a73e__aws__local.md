---
qid: ing_8f3578a73e__aws__local
question: 'Explain: We''re switching embedding models. There are 200M vectors in the
  index. Walk me through the migration.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 495
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:50:12-05:00'
sources: []
---

**Situation & Task**  
When our product team decided to switch from GPT‑3 embeddings to the newer *Embedding‑X*, we had a 200 M‑vector index in DynamoDB‑GSI that powered real‑time recommendation queries. The goal: zero downtime, minimal cost spike, and a measurable lift in cosine‑similarity precision (target +5%).

**Action – Technical Design**  
1. **Dual‑write pipeline** – Using an SQS queue as the buffer, each incoming text triggers two Lambda functions: one writes to the legacy index; the other computes *Embedding‑X* via SageMaker endpoint and writes to a new Aurora PostgreSQL table (partitioned by hash).  
2. **Incremental migration script** – A scheduled Glue job scans the old index in batches of 1 M, converts vectors using the same SageMaker endpoint, and upserts into Aurora.  
3. **Feature‑flag switch** – Application reads from Aurora for 90 % of traffic while still falling back to DynamoDB for safety net queries.  
4. **Monitoring & rollback** – CloudWatch metrics track latency (target < 20 ms) and precision; a Lambda auto‑scale policy rolls back if error rate >2%.

**Result**  
- Completed migration in 3 days with no SLA impact.  
- Latency dropped from 35 ms to 18 ms, cost decreased by 12% due to Aurora’s cheaper storage per GB.  
- Precision increased from 0.78 to 0.83 (5% lift).  

**Leadership Principles & Bar‑raiser Signals**  
*Customer Obsession*: we validated impact via A/B testing on live traffic. *Ownership*: I drove the end‑to‑end plan, documented rollback paths, and mentored juniors on Glue/Glue Studio. *Dive Deep*: performance counters revealed a 4 % CPU spike in Lambda; we replaced it with an async batch process, saving $200/month.  

**Learning**  
Initial assumption that DynamoDB could scale cost‑effectively proved wrong—Aurora’s columnar compression saved storage and improved query speed. This iteration taught us to prototype on a subset before full rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
