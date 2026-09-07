---
qid: ing_74d5ac1c17__aws__local
question: 'Explain: Exactly once — Delivery Semantics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 414
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:50:16-05:00'
sources: []
---

**Situation & Task**  
While architecting a real‑time recommendation pipeline for a global e‑commerce platform, I had to guarantee that each user interaction (click, add‑to‑cart) was processed **exactly once** before it influenced the downstream ML model. Any duplicate or lost event would skew training data and degrade recommendation quality.

**Action**  
I designed an idempotent ingestion layer using Amazon Kinesis Data Streams with *Explicit Hashing* of a composite key (user_id + event_timestamp). Each record carried a UUID, and the stream was configured for *retention 7 days* to allow replay on failure.  
On consumption I employed **Amazon Lambda** coupled with an **AWS DynamoDB Global Secondary Index** that stored processed event IDs as a “seen” flag. The Lambda function first checks the index; if the key exists, it simply acknowledges the record (no duplicate processing). If not, it writes to the index and forwards the event to Amazon SageMaker Pipelines for feature extraction.

To guard against partial failures, I added **AWS Step Functions** orchestrating retries with exponential back‑off, and used **Amazon CloudWatch Alarms** to surface any backlog.  

**Result**  
The pipeline processed 10 M events per day with <0.01% duplicate rate, meeting SLA of 99.9 % exactly‑once processing. Model training accuracy improved by 4 pp (from 82 % to 86 %) due to cleaner data. Operational cost stayed below $2k/month versus an estimated $5k if using a naive “at‑least‑once” approach.

**Reflection**  
I took ownership of the end‑to‑end contract, dove deep into AWS idempotency patterns, and iterated on the design after a false‑positive spike in early testing. The bar‑raiser would note my clear ownership, data‑driven impact, and learning loop that tightened reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
