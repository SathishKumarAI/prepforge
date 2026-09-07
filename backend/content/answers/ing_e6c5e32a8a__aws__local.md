---
qid: ing_e6c5e32a8a__aws__local
question: 'Explain: Hybrid retrieval: why both, and how to fuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 477
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:00:00-05:00'
sources: []
---

**Situation (S)** – While revamping our recommendation engine for a global e‑commerce platform, we needed to surface relevant product listings faster than the legacy keyword search could allow. **Task (T)** – Build a hybrid retrieval pipeline that combines semantic embeddings and exact keyword matching, then fuse their scores into a single ranking.

**Action (A)** –  
1. **Feature extraction**: Use SageMaker Neo‑optimized BERT to embed queries and product titles; store vectors in DynamoDB with PartiQL for quick lookup.  
2. **Exact match layer**: Index the same attributes in Amazon OpenSearch Service (OSS) for full‑text search.  
3. **Fusion strategy** – Implement a Lambda@Edge function that receives both similarity scores and keyword hit counts, applies a weighted linear combination (`final = 0.7*semantic + 0.3*keyword`), and re‑orders results before returning to CloudFront.  
4. **Observability**: Push latency and click‑through metrics to Amazon CloudWatch; auto‑scale OSS with the `awslabs/elastic-search-service-auto-scaling` pattern.

**Result (R)** – Within 6 weeks, query latency dropped from 850 ms to 120 ms (84 % reduction). Click‑through rate increased by **12 %**, and conversion lift was **18 %** in the first month post‑deployment. Cost stayed below budget because we used spot instances for SageMaker training and OSS’s on‑demand nodes.

---

### Leadership Principles Anchored
- **Customer Obsession** – Faster, more relevant results directly improved user satisfaction.  
- **Ownership** – Took full responsibility from data ingestion to production monitoring.  

### Bar‑raiser Expectations
- Demonstrated *ownership* by owning the entire pipeline and iterating on fusion weights based on A/B tests.  
- Showed *deep dive* into latency bottlenecks, cost trade‑offs, and scalability of each component.  
- Quantified impact with real metrics (latency, CTR, conversion).  
- Learned from early failures where semantic scores alone caused irrelevant matches; adjusted the fusion strategy accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
