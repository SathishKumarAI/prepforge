---
qid: ing_a3c23659b4__aws__local
question: 'Explain: Implement an LRU cache with O(1) get/put. Now add per-entry TTL.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 523
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:37:31-05:00'
sources: []
---

**Situation** – While leading a data‑science platform, we had to expose a high‑throughput recommendation API that cached user embeddings in memory. The cache needed O(1) `get/put` for latency < 5 ms, but also per‑entry TTLs because embeddings expire after 24 h of inactivity.

**Task** – Design an LRU cache with constant‑time operations and integrate fine‑grained TTL without breaking the O(1) guarantee or inflating memory usage.

**Action**  
1. **Data structures** – Use a *hash map* (`key → node`) and a *doubly linked list* for recency ordering, exactly as classic LRU.  
2. **Per‑entry metadata** – Each node stores `value`, `expiry` (Unix epoch).  
3. **TTL enforcement** – On every `get` or `put`, check the node’s expiry; if expired, treat it as a miss and delete the node from both map and list.  
4. **Background cleanup** – Run a lightweight thread that scans the tail of the LRU list (least recently used) and removes entries whose `expiry < now`. Since expired items are already at the tail after inactivity, this scan is O(k) where *k* is the number of stale items, far less than total size.  
5. **AWS services** – Deploy on EC2 with *Elasticache Redis* for production; Redis natively supports per‑key TTL and LRU eviction policy, giving us sub‑microsecond access and automatic persistence to SSD. For local dev, use an in‑memory Python implementation.

**Result** – The cache served 10 M requests/day with <3 ms latency. TTL enforcement reduced stale data by 97 % and lowered memory footprint by ~30 %. The system stayed within the $0.25/hr EC2 spot budget, and we avoided a costly Redis cluster upgrade.

**Bar‑raiser takeaways** –  
- **Ownership:** I owned both algorithmic design and operational deployment.  
- **Dive Deep:** I quantified hit/miss rates and TTL decay curves to justify the background sweep.  
- **Quantified Impact:** 30 % cost savings + 97 % stale data reduction.  
- **Learning from Failure:** Initial naive per‑node timers caused O(n) scans; refactoring to a tail‑scan fixed latency spikes observed in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
