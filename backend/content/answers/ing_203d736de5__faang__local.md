---
qid: ing_203d736de5__faang__local
question: 'Explain: Storage Requirements — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 495
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:59:32-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *notification service* that persists notifications and serves them on demand.  
Key assumptions:  
1. Notifications are immutable once created.  
2. Users can fetch their own notification stream in reverse‑chronological order.  
3. Scale is millions of users, billions of messages per day.  
4. Strong consistency for reads (a user should see the latest notifications).  

**Approach**  
1. **Data model** – Store each notification as a document: `{userId, ts, type, payload}`.  
2. **Storage layer** – Use a partitioned column‑store (e.g., Bigtable/Scylla) keyed by `(userId, ts)`; this gives fast range scans per user.  
3. **Write path** – Append to the user’s partition; no sharding overhead.  
4. **Read path** – Query the latest N rows per user; use pagination tokens for infinite scroll.  
5. **Caching** – LRU cache (Redis) for hot users’ last 100 notifications.  

**Depth**  
- **Write throughput**: O(1) per insert; compaction handles old data.  
- **Read latency**: ≤ 50 ms for the first page, increases linearly with offset.  
- **Consistency**: Single‑writer per user guarantees ACID on a row; multi‑user writes don’t interfere.  
- **Retention policy**: TTL or background job to delete older than X days.  

**Edge Cases**  
- Burst of writes for a single user → shard the partition or use write buffering.  
- Users with > 10k notifications → use key ranges (e.g., bucket by day).  
- Deleted accounts → soft‑delete flag and periodic purge.  

**Optimize & Communicate**  
Explain trade‑offs: using a wide‑column store keeps reads fast but requires careful partition sizing; caching reduces hot traffic but adds staleness risk (mitigated with TTL). Conclude with monitoring metrics: write latency, read QPS, cache hit ratio, and retention job success rate. This structure shows clear problem framing, systematic design, and thoughtful trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
