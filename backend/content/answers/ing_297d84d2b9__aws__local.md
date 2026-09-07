---
qid: ing_297d84d2b9__aws__local
question: 'Q: When would you use ColBERT over a bi-encoder?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 431
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:59:35-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the search‑as‑a‑service team for a global e‑commerce platform. We had to improve relevance for “product‑to‑product” recommendations while keeping latency under 50 ms at peak traffic (≈ 10k QPS). The baseline was a bi‑encoder model that produced fixed‑length vectors and performed cosine similarity against an index in **FAISS**.

**Action**  
I evaluated **ColBERT** because it keeps token‑level embeddings, enabling dynamic reranking without recomputing the entire vector for every query. I redesigned the pipeline:

| Component | AWS Service | Reason |
|-----------|-------------|--------|
| Encode queries & documents | **Amazon SageMaker** endpoint (multi‑GPU) | Fast inference and easy scaling |
| Store token vectors | **DynamoDB** with LSI + **ElastiCache Redis** for hot cache | Low read latency, high availability |
| Rerank top‑k results | **Lambda@Edge** in front of CloudFront | Zero‑touch scaling to millions of users |

We benchmarked:
* **Latency:** ColBERT reduced average inference time from 48 ms (bi‑encoder) to 32 ms.
* **Recall@10:** ↑ 12 % absolute improvement over the baseline.
* **Cost:** $0.15 per query vs. $0.22, a 30 % reduction.

**Result**  
The migration led to a 20 % lift in conversion rate for related‑product views and cut infrastructure spend by ~$100k annually. I documented the trade‑offs (larger index size, more complex cache logic) so future teams could iterate quickly.

**Reflection**  
I owned the end‑to‑end experiment, dove deep into latency profiling, and quantified impact with real A/B data—exactly what Amazon expects of a bar‑raiser: ownership, depth, measurable results, and lessons learned from earlier trials.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
