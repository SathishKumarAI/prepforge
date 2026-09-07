---
qid: vq_0a0c8e5415__aws__local
question: what is option in scala? why do we use it?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 422
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:37:54-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Customer Obsession* – I built a real‑time recommendation engine that delivered 2 × higher click‑through rates for our e‑commerce platform.  
> *Dive Deep* – I dissected the data pipeline to eliminate null‑related failures.

### Situation
Our Spark jobs were crashing on production due to sporadic `NullPointerException`s in user profile enrichment, hurting recommendation latency and customer experience.

### Task
I had to design a fault‑tolerant ingestion layer that would gracefully handle missing fields without manual intervention or data loss.

### Action
In Scala I switched from raw `String`/`Int` types to **`Option[T]`** for every nullable attribute.  
* `Option` is an algebraic type (`Some(value)` or `None`) that forces callers to explicitly handle the absence of a value, eliminating unchecked nulls.  
* I wrapped all external data sources (Kinesis → Glue ETL) in `Try/Success/Failure` blocks and mapped results to `Option`.  
* The downstream microservice (AWS Lambda + DynamoDB Streams) pattern‑matched on `Some`/`None`, logging missing fields and defaulting only when business rules allowed.  

### Result
- Null‑related job failures dropped from 18 % to **0 %** in the first month.  
- Recommendation latency improved by **35 ms** per request (≈ 4 % faster overall).  
- Cost savings: fewer retry cycles reduced EC2 spot usage by **12 %**, saving ~US$3k/month.

### Learnings
*Adopting `Option` gave us ownership of data quality and a clear contract for downstream consumers.* I documented the pattern in our internal playbook, enabling other teams to replicate the approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
