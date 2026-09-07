---
qid: ing_043baab697__aws__local
question: 'Explain: The Idea — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 472
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:34:20-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building a recommendation engine for an e‑commerce catalog that could scale to 10M products and 100k concurrent users while keeping latency < 50 ms. The core challenge was turning unstructured product text into comparable numeric representations.

**Action**  
1. **Embeddings & Vector Spaces** – I leveraged *sentence‑transformers* (SBERT) to generate dense 768‑dim embeddings for each product description, then stored them in an *Amazon OpenSearch Service* index with the `knn` plugin.  
2. **Query Pipeline** – User search queries were converted to vectors on the fly using a Lambda layer that cached the transformer model in /tmp (≈300 MB). The vector was sent to OpenSearch’s KNN endpoint, returning top‑k nearest products.  
3. **Scalability & Cost** – I chose an `m5.large.search` instance type with 2 nodes; this gives ~8 GB heap per node, enough for 10M vectors (~6 TB total). Auto‑scaling based on CPU and query latency kept cost down (≈$0.25/hr) while maintaining <50 ms latency.  
4. **Observability** – CloudWatch metrics on `latency`, `error_rate` were fed into a Lambda that auto‑spins an additional node if latency > 40 ms for >5 min.

**Result**  
- Latency dropped from 200 ms to <50 ms.  
- Click‑through rate increased by **18%** in the first month after deployment, translating to ~$120k/month in incremental revenue.  
- Cost per query reduced from $0.003 to $0.0015.

**Reflection (Bar‑raiser notes)**  
I owned every layer: model selection, indexing strategy, scaling policy. I dove deep into OpenSearch’s KNN tuning and measured impact with A/B tests. When latency spiked after a transformer upgrade, I rolled back the model, logged the regression, and updated our rollback playbook—learning that model size vs. inference speed is a trade‑off that must be quantified before promotion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
