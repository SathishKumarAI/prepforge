---
qid: ing_a9ada5f49c__faang__local
question: 'Explain: Use case: Service deletes expired pastes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 378
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:18:40-05:00'
sources: []
---

**Clarify**  
We need a system that automatically removes “pastes” (text snippets) whose life‑time has elapsed.  
Assumptions: *pastes have an explicit expiry timestamp, storage is durable, and deletion must be eventual consistent.*  

**Approach**  
1. Store each paste with `created_at` + `ttl`.  
2. Periodically scan for expired records (cron or stream).  
3. Delete them in batches to avoid hot spots.  
4. Optionally publish a “paste‑deleted” event for downstream services.

**Depth**  
*Storage*: Use a key‑value store (e.g., DynamoDB) with `expires_at` as sort key; enable TTL so the DB auto‑purges.  
*Scalability*: If TTL is insufficient, run a Lambda that queries by time window (`WHERE expires_at < now`) and deletes in 100‑row batches—O(N log N) for scan + O(1) per delete.  
*Reliability*: Wrap deletes in idempotent transactions; on failure retry with exponential backoff.  

**Edge Cases**  
- Clock skew causing premature or delayed deletion.  
- Deleted pastes still referenced by other services → publish event to clean caches.  
- Extremely large expiry windows → partition scans across shards.

**Optimize & Communicate**  
Use the DB’s native TTL for most records; reserve the batch job for edge cases (e.g., bulk uploads). This keeps cost low, latency minimal, and ensures eventual consistency. I’d explain this flow to interviewers by mapping each step to FAANG principles: *data‑driven design*, *robust error handling*, and *cost awareness*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
