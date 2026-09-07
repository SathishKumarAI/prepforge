---
qid: ing_1a76a684eb__aws__local
question: 'Explain: Correcting Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 581
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:26:09-05:00'
sources: []
---

**Situation (S)**  
While building a legal‑research chatbot for BigLaw Bench, we observed that the LLM frequently “hallucinated” case citations—providing plausible but incorrect references. The product team needed a solution to keep clients’ trust and avoid liability.

**Task (T)**  
Design a system that detects and corrects hallucinations in real time without sacrificing latency or cost.

**Action (A)**  

| Step | Technical Choice | Why |
|------|------------------|-----|
| 1. **Real‑time validation layer** | Lambda + DynamoDB stream → Amazon Bedrock `Claude` inference for a *verification prompt* that cross‑checks each citation against the AWS Managed Legal Dataset. | Serverless keeps ops low; Bedrock’s custom models reduce token usage. |
| 2. **Scalable caching** | Elasticache Redis to store verified citations keyed by hash. Cache hit rate > 95 % after 3 weeks of traffic, cutting Bedrock calls by 70 %. | Reduces cost and latency. |
| 3. **Audit & rollback** | Kinesis Data Firehose → S3 + Athena for nightly aggregation; any false positives trigger a re‑ranking job. | Enables continuous learning. |

**Result (R)**  
- Hallucination rate dropped from **12 % to < 1 %** in 6 weeks.  
- Average response latency remained under **650 ms**.  
- Operating cost decreased by **$3,200/month** thanks to caching.  

---

### Leadership Principles Highlighted

| Principle | How it Shaped the Solution |
|-----------|----------------------------|
| **Ownership** | I took full responsibility for data quality and legal compliance, driving end‑to‑end design and monitoring. |
| **Dive Deep** | I benchmarked token usage per model, profiled Lambda cold starts, and iterated on cache eviction policies until we hit the target latency. |
| **Bias for Action** | Launched a minimal viable validation layer in two sprints, then scaled based on real‑world metrics. |

### What a Bar‑Raiser Looks For

1. **Quantified Impact:** Clear before/after metrics (hallucination rate, cost savings).  
2. **Depth of Thought:** Trade‑offs between Bedrock usage, caching, and auditability were explicitly reasoned.  
3. **Learning from Failure:** We identified that the first validation model over‑fired; we iterated on prompt engineering based on failure logs.  

This approach demonstrates ownership, deep technical insight, and a data‑driven mindset—all core to Amazon’s culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
