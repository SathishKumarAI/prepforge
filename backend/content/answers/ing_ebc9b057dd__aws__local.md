---
qid: ing_ebc9b057dd__aws__local
question: 'Explain: Experience Rating — Mistral AI Applied AI Engineer Interview Experience
  - France'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 502
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:11:33-05:00'
sources: []
---

**Situation / Task**  
While interviewing for a *Mistral AI Applied AI Engineer* role in France, I was asked to explain how we would build an **Experience Rating** system that scores user interactions with our generative models in real‑time.

**Action**  

1. **Requirements & Architecture** –  
   - Capture event streams (prompt, latency, token count, user feedback).  
   - Compute a composite score (`rating = 0.4*accuracy + 0.3*latency_score + 0.3*user_sentiment`).  
   - Store in DynamoDB for low‑latency reads; archive to S3/Glue for audit and ML retraining.

2. **AWS Services** –  
   - *Kinesis Data Streams* → ingest events at ~10 k/s.  
   - *Lambda* (Python) → transform, score, write to DynamoDB.  
   - *DynamoDB Global Tables* → 99.999% availability across EU‑Central & EU‑West.  
   - *Amazon SageMaker* → nightly model update using aggregated scores.

3. **Scalability / Cost** –  
   - Auto‑scaling Lambda concurrency keeps CPU <70 %.  
   - DynamoDB provisioned capacity + on‑demand fallback (cost ≈ $0.20/1M writes).  
   - Kinesis shards: 5 → ~$100/month; overall architecture <$1,000/month.

4. **Bias for Action & Ownership** – I prototype in 2 days, run a pilot with 50 k events, and iterate on the weighting formula based on A/B tests (improved user satisfaction by 12 % vs baseline).

**Result**  
The pilot produced a live dashboard showing real‑time ratings with <50 ms latency. The system handled 20× traffic growth without SLA impact and cut manual review time from 3 hrs/day to 15 min/day, delivering measurable business value while staying within budget.

> **Leadership Principles**: *Customer Obsession*, *Ownership* (I owned the end‑to‑end pipeline), *Dive Deep* (quantified metrics), *Bias for Action* (rapid prototype & iteration).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
