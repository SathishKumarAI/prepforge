---
qid: ing_f6d4d29429__aws__local
question: 'Explain: Accept block is only cashing exceptions of'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 481
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:34:51-05:00'
sources: []
---

**Answer (Amazon style)**  

**Situation** – In a high‑throughput event ingestion pipeline we observed that downstream ML inference calls were intermittently throwing `ResourceNotFoundException`. The naïve retry logic caused exponential back‑pressure, driving latency from **120 ms to 2.5 s** and increasing error rates by 35 %.  

**Task** – Redesign the fault‑tolerance layer so that we only cache *known* exception types while preserving real‑time performance for valid requests.  

**Action** –  
1. **Ownership & Customer Obsession**: I scoped the problem to the “accept block” (the Lambda handler’s try/catch around the inference SDK).  
2. **Dive Deep**: Logged each exception type, measured hit rates, and identified that 92 % of failures were `ResourceNotFoundException`.  
3. **Design**: Implemented a *short‑lived in‑memory cache* (DynamoDB TTL + Redis) keyed by request ID + exception code. If the same key is seen within 30 s, we skip the inference call and return a cached failure response.  
4. **AWS Services**: Lambda for orchestration, DynamoDB Streams to purge stale keys, CloudWatch metrics for hit/miss ratios.  

**Result** – Latency dropped from 2.5 s to **650 ms**, error rates fell by **42 %**, and CPU usage on the inference service decreased by 28 %. The cache was tuned to keep 99.9 % of legitimate failures out of the critical path while still allowing real‑time retries for new requests.  

**Bar‑raiser notes** – I owned the end‑to‑end impact, dove into telemetry, quantified gains, and iterated on a fallback strategy that balances resilience with cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
