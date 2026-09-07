---
qid: vq_f8f5676e24__aws__local
question: What is Pure function in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 448
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:23:15-05:00'
sources: []
---

**Answer (Amazon‑style)**  

I was asked what a *pure function* is in Scala during a data‑engineering interview for a streaming platform.  
> **Situation** – My team built an Apache Flink job that ingested click‑stream events, enriched them with user profiles from DynamoDB, and wrote aggregates to S3. The enrichment step caused hard‑to‑track bugs because the same input sometimes produced different outputs due to hidden state in a helper class.  
> **Task** – Refactor the enrichment logic so it becomes deterministic, easier to test, and more scalable.  
> **Action** – I rewrote the enrichment as a pure function: `def enrich(event: Event): EnrichedEvent` that takes an immutable input and returns a new value without side effects or mutable state. Inside, I used only local variables and immutable collections; any external call (e.g., to DynamoDB) was moved into a separate `ProfileCache` service that is pure‑by‑contract (returns the same profile for identical keys). This allowed me to use Scala’s `Future` combinators safely and enabled memoization of cache lookups.  
> **Result** – The job now passes 100 % of unit tests, and production failures dropped from 3.2 % to <0.1 %. Because the function is pure, we could parallelize it across all Flink slots without coordination overhead, boosting throughput by 18 % while keeping cost per GB processed unchanged.  

**Leadership Principles Highlighted**  
- **Ownership** – Took full responsibility for the bug and refactored end‑to‑end.  
- **Dive Deep** – Analyzed stateful vs stateless behavior, measured failure rates, and quantified performance gains.  

**Bar‑raiser cues I answered** – demonstrated ownership, deep technical insight, concrete metrics, and learning from a previous failure (non‑deterministic enrichment).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
