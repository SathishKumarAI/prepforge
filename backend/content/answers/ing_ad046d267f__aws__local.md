---
qid: ing_ad046d267f__aws__local
question: 'Explain: Euclidean Distance — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 502
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:56:56-05:00'
sources: []
---

**Situation & Task**  
At my previous firm we built a recommendation engine that needed to rank millions of user‑product pairs in real time. The team struggled because our similarity metric was naïve and slowed down the inference pipeline by ~40 %. I owned the problem, diving deep into vector math to replace our cosine similarity with Euclidean distance over learned embeddings.

**Action**  
1. **Model & Embeddings** – Trained a 512‑dimensional embedding layer in SageMaker using a contrastive loss (triplet).  
2. **Vector Store** – Deployed the vectors in an Amazon OpenSearch cluster, enabling efficient k‑NN searches with *knn* plugin.  
3. **Real‑time API** – Built a Lambda authorizer that pulls the user vector from S3, computes Euclidean distance against candidate items on the fly, and returns top‑k scores to API Gateway.  
4. **Cost & Scale** – Using OpenSearch’s *serverless* mode kept spend at $0.10 per 1 M queries; Lambda concurrency auto‑scales to 10K req/s with <200 ms latency.

**Result**  
- Latency dropped from 350 ms to 80 ms (≈77 % improvement).  
- Click‑through rate increased by **12 %**, translating to $1.2M additional revenue in the first quarter.  

**Leadership Principles & Bar‑raiser Signals**  
*Customer Obsession*: I focused on user experience and revenue impact.  
*Ownership*: Took end‑to‑end responsibility from data ingestion to production deployment.  
*Dive Deep*: Validated distance metric choice with A/B tests, iterating until metrics converged.  
*Bias for Action*: Deployed a serverless solution in 3 weeks instead of waiting for the next sprint.

**Learnings**  
The first iteration over‑fitted on static embeddings; adding a dynamic fine‑tune step (online learning) further boosted relevance by 4 %. This cycle reinforced that even mature systems benefit from continuous measurement and rapid experimentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
