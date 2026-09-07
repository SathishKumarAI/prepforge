---
qid: ing_e6b40ad614__aws__local
question: 'Explain: KV-cache memory math and paged attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 376
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:59:51-05:00'
sources: []
---

**Customer Obsession | Ownership**

*Situation*: At my previous role we launched a real‑time recommendation engine that needed to serve millions of requests per day while keeping latency under 50 ms.  
*Task*: I had to reduce the quadratic memory cost of self‑attention from \(O(N^2)\) (where *N* is sequence length) without hurting click‑through rate (CTR).  
*Action*:  
1. **KV‑cache** – I froze key/value tensors after the first pass and reused them for subsequent steps, cutting per‑token memory from 32 GB to 8 GB on a 16 K‑token window.  
2. **Paged attention** – Implemented block‑wise sparse attention using the “paged” pattern: only top‑k keys per query are fetched from a shared cache in SSD‑backed S3 via *Amazon FSx for Lustre*, reducing compute by ~70 %.  
3. Leveraged *AWS Lambda@Edge* to pre‑compute KV‑caches at edge locations, and *Amazon CloudFront* for low‑latency distribution.  

*Result*: Latency dropped from 120 ms to 35 ms; memory usage fell by 75 %, freeing 4 × more instances for other workloads. CTR improved by 3.2 % (≈$12M incremental revenue).  
**Bar‑raiser focus**: I owned the entire pipeline, dove deep into GPU memory profiling, quantified impact with real metrics, and iterated on a failed first attempt that over‑cached keys—learning to balance cache size vs. sparsity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
