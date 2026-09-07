---
qid: ing_a210e8eda5__aws__local
question: What are you using that lock for? — How to do distributed locking \u2014
  Martin Kleppmann\u2019s blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 571
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:31:26-05:00'
sources: []
---

**Context (S – Situation)**  
I was building a nightly training pipeline for a recommendation model that pulls ~2 TB of click‑stream data from S3, processes it with Spark on EMR, and writes the trained model to SageMaker. Multiple team members ran the job concurrently, causing duplicate jobs, stale checkpoints, and race conditions in the parameter store.

**Task (T – Task)**  
Implement a fault‑tolerant distributed lock that guarantees only one instance of the pipeline runs at a time while still allowing rapid retries if a worker crashes.

**Action (A – Action)**  
1. **Requirements & Design**  
   * Lock must survive EMR node failures, scale to 100+ workers, and cost‑effectively run on AWS.  
   * Use **Amazon DynamoDB** for its single‑digit millisecond latency, built‑in atomic `PutItem` with conditional expression (lock acquisition), and TTL for automatic release.  
2. **Implementation**  
   ```python
   # Acquire lock
   try:
       dynamodb.put_item(
           TableName='ml_lock',
           Item={'resource': {'S':'train_job'}, 'owner': {'S':worker_id}},
           ConditionExpression='attribute_not_exists(resource)'
       )
   except ClientError as e:  # lock held
       raise
   ```
   * Workers publish a heartbeat to CloudWatch every minute; if the TTL expires, another worker can acquire the lock.  
3. **Scalability & Cost**  
   * DynamoDB’s on‑demand capacity handles spikes; cost ≈ $0.25 / month for this usage.  
   * Availability: 99.999% because the table is multi‑AZ.  

**Result (R – Result)**  
- Reduced duplicate training jobs by **98 %**, cutting GPU hours from ~120 to ~3 per day.  
- Saved $18k annually in compute costs and improved model freshness (deployment latency dropped from 12 h to 2 h).  

---

### Leadership Principles Highlighted
* **Ownership** – Took end‑to‑end responsibility for the pipeline’s reliability.  
* **Dive Deep** – Chose DynamoDB after profiling latency, consistency, and cost trade‑offs.

### Bar‑Raiser Signals
* Demonstrated *quantified impact* (cost savings & job reduction).  
* Showed *depth* by explaining atomicity, TTL mechanics, and failure scenarios.  
* Learned from a prior “soft lock” that caused deadlocks; pivoted to DynamoDB’s conditional writes for safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
