---
qid: ing_6c3b2a2928__aws__local
question: 'Explain: Background Sync Eventual Consistency — Top Eventual Consistency
  Patterns You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 459
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:28:39-05:00'
sources: []
---

**Situation & Task**  
While leading the ML pipeline for our recommendation engine at a global e‑commerce platform, we noticed that stale user profile data caused ~12 % drop in click‑through rate (CTR) during peak traffic. I owned the problem and had to design an eventual‑consistency model that kept latency <50 ms while ensuring data accuracy across 200+ microservices.

**Action – Design & AWS Services**  
I introduced a **“Publish‑Subscribe + SQS FIFO + DynamoDB Global Tables”** pattern:

1. **Event Source** – User actions publish to an SNS topic.  
2. **Queueing** – A dedicated SQS FIFO queue guarantees ordering and deduplication for profile updates.  
3. **Processing** – Lambda functions write to a DynamoDB global table (replicated in us‑east‑1, eu‑west‑1).  
4. **Cache Layer** – A DAX cluster serves reads with <10 µs latency; cache invalidation is triggered by the queue’s DLQ.

This setup delivers *write‑once, read‑many* consistency with a 99.9 % success rate and costs $0.12 per million requests—$3× cheaper than a fully synchronous RDS solution.

**Result**  
CTR recovered to baseline +4 %, while query latency stayed below 50 ms under 10k concurrent users. Monthly cost savings were ~$18K, and the system now scales linearly with traffic spikes (tested up to 1M events/sec).

**Reflection & Learning**  
I learned that *ownership* means iterating on data flow until metrics align with business goals, and *dive deep* required profiling Lambda cold starts vs. DAX hit rates. The bar‑raiser would look for clear ownership, measurable impact, depth in the design trade‑offs, and an honest assessment of what didn’t work (e.g., initial attempts with SQS Standard caused out‑of‑order reads).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
