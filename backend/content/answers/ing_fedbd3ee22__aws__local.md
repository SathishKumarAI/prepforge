---
qid: ing_fedbd3ee22__aws__local
question: 'Explain: A better embedding model ships. You have 400M chunks indexed.
  Walk me through the migration.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 560
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:54:22-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that had just released an upgraded embedding model (from 768‑dim to 1 024‑dim) for our search service. We indexed **400 M text chunks** in Elasticsearch; the new embeddings would double storage and query latency if not handled properly. My goal: migrate all data with zero downtime, <5% cost increase, and <2 s avg query latency.

**Action**  
1. **Data‑driven Planning** – I calculated the new index size (≈ +35%) and estimated a 30% higher CPU for inference.  
2. **Pipeline Architecture** – Built an immutable pipeline on AWS:  
   * **S3** for raw chunks → **Glue** job to convert each chunk into a JSON record with `embedding_v2`.  
   * **Lambda + Step Functions** orchestrated batch re‑indexing (1 M records per batch) into a **new OpenSearch domain**.  
   * **Amazon SageMaker Endpoint** hosted the new model; Lambda invoked it in parallel, throttling at 5 k requests/sec to keep costs in check.  
3. **Dual‑write & Validation** – While reindexing, I kept the old index read‑only and ran **Athena queries** comparing cosine similarity scores between v1/v2 for a random 0.5% sample; all metrics stayed within ±3%.  
4. **Cutover** – At peak night traffic, I swapped DNS target to the new domain via **Route 53 Weighted Routing** (100 % weight) and decommissioned the old index.

**Result**  
* Migration finished in 18 hrs with <0.2 % service interruption.  
* Query latency dropped from 2.8 s → 1.9 s (≈ 32 % improvement).  
* Cost increased by only **$1,200/month** vs projected $5,000, staying within budget.

**Learnings & Ownership**  
I owned the end‑to‑end migration, performed a deep dive into model inference costs, and iterated the pipeline after an initial 10 % spike in Lambda errors—learning that adding a retry layer reduced failures to <0.01%. This demonstrates *Ownership*, *Dive Deep*, and *Bias for Action*—core Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
