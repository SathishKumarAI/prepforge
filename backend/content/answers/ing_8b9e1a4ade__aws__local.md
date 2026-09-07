---
qid: ing_8b9e1a4ade__aws__local
question: 'Explain: Failure Handling — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 456
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:41:45-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a recommendation engine that served 1 M users per day. The ML inference layer hit a 12 % latency spike after a model rollback, breaking the SLA of <200 ms. My task was to design a failure‑handling strategy that kept predictions fast while allowing graceful degradation.

**Action – Design & Implementation**  
I introduced *caching* as a first‑line defense.  
1. **Cache Layer:** I deployed an Amazon ElastiCache Redis cluster (cluster mode enabled, 3 shards) behind an Application Load Balancer to store the last 30 k inference results per user.  
2. **Cache Key Strategy:** Keys were a hash of `user_id|model_version`. TTL was set to 10 min – long enough for fresh predictions but short enough to avoid stale data.  
3. **Fallback Path:** If Redis missed, the request hit Lambda (dedicated ML‑inference function) which called SageMaker Endpoint. The Lambda result was written back to Redis before returning to the client.  
4. **Observability:** CloudWatch metrics tracked cache hit ratio; I set an alarm at 80 % and automated a Lambda that refreshed stale keys nightly.

**Result**  
Cache hit ratio rose from 0 % (pre‑design) to 88 %, cutting average latency from 480 ms to 110 ms and reducing SageMaker invocations by 70 %. The cost of ElastiCache was <5 % of the inference budget, while SLA compliance improved from 78 % to 99.8 %.

**Learnings & Bar‑raiser Notes**  
- **Ownership:** I owned the entire failure‑domain from detection to remediation.  
- **Dive Deep:** I quantified cache impact and tuned TTLs through A/B testing.  
- **Bias for Action:** Rolled out caching within two weeks, avoiding prolonged outages.  
- **Customer Obsession:** End users saw smoother experiences without visible degradation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
