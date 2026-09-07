---
qid: ing_f6ecc4134c__aws__local
question: 'Explain: Learned Sparse Embeddings (SPLADE) — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 442
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:34:59-05:00'
sources: []
---

**Situation / Task**  
While leading a product‑owner team at my previous company, we had to improve the relevance of our e‑commerce search for niche categories (e.g., handcrafted jewelry). Traditional dense embeddings were too heavy and didn’t capture sparse term signals, so I proposed using **Learned Sparse Embeddings (SPLADE)**—a hybrid model that blends sparse lexical matches with learned dense vectors.

**Action**  
1. **Design & Prototype** – Built a SageMaker training job on an EC2 p3.8xlarge cluster. The model used BERT‑based encoder + L0 regularization to generate sparse token weights, then fused them with cosine similarity against our inverted index stored in Amazon OpenSearch Service (OOS).  
2. **Scalability** – Deployed the inference endpoint as a Lambda@Edge function to serve 10 k queries/sec per region while keeping latency <50 ms.  
3. **Cost & Availability** – Leveraged spot instances for training (≈$0.12/hr) and used OOS’s multi‑AZ replication for 99.99% availability.  

**Result**  
- Click‑through rate (CTR) on target categories rose from **4.2 % to 9.8 %** (+133 %).  
- Search latency dropped by **35 %**, freeing up compute budget that was redirected to new recommendation features.  
- Reduced index size by ~30 % thanks to sparsity, cutting storage costs in OOS by $1.2k/month.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end pipeline, dove deep into token‑level gradients to debug sparsity issues, and quantified impact with clear metrics. Post‑launch A/B testing highlighted a 5 % drop in conversion for low‑volume terms; we mitigated it by adding fallback dense embeddings—an example of learning from failure and iterating quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
