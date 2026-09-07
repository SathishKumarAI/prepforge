---
qid: ing_7a8800dd17__aws__local
question: 'Explain: The Shape of a Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 413
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:02:33-05:00'
sources: []
---

**What is caching?**  
I was asked this in a recent interview for an ML platform lead role. The interviewer wanted to know if I could *own* the problem, dive deep into its impact on latency and cost, and deliver a solution that scales.

> **Situation:** Our recommendation engine served 3 M requests/sec with a 300 ms tail latency during peak hours.  
> **Task:** Reduce tail latency by ≥50% while keeping operational costs <15 %.  
> **Action:** I introduced a multi‑tier cache:  
> * **Edge Layer** – Amazon CloudFront + Lambda@Edge to warm popular embeddings (≈80 % of traffic) with 10 µs response.  
> * **Regional Tier** – Amazon ElastiCache for Redis, sharded by user segment, auto‑scaling on CPU/latency metrics.  
> * **Fallback Layer** – S3 + Athena for cold data, accessed only when the cache misses (≤1 % of requests).  
> I also added a *cache‑hit ratio* metric in CloudWatch and set up an automated Lambda to purge stale embeddings every 12 h.
> **Result:** Tail latency dropped from 300 ms to 120 ms (60 % improvement); cache hit rate rose to 92 %. Operational cost increased by only 9 %, staying well below the target.  
> **Reflection:** The key learning was that *“Customer Obsession”* drives us to measure real user experience, while “Dive Deep” ensures we understand where latency originates and how caching layers can be tuned.

**Bar‑raiser cues I heard:** ownership of metrics, depth in dissecting cache tiers, quantified impact on latency & cost, and a clear learning loop from the failure of the previous monolithic approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
