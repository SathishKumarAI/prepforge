---
qid: ing_a05568de82__aws__local
question: 'Explain: Key-Based Sharding (with a dash of %3 hash)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 468
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:27:41-05:00'
sources: []
---

**Situation –** At my last role I led the redesign of our recommendation engine’s feature‑store. The catalog had grown to 3 billion users and we hit a *30 %* latency spike when new customers joined, breaking our SLAs.

**Task –** I needed a sharding strategy that kept read/write throughput linear while preserving key locality for frequent “user → item” lookups.

**Action –**  
1. **Key‑based sharding + %3 hash:** We split the user ID space into 3 shards using `hash(user_id) % 3`. This simple modulo keeps the distribution balanced and lets us target a single shard per request, reducing cross‑node traffic by ~70 %.  
2. Deployed each shard on an **Amazon DynamoDB Global Table** for multi‑region read/write latency < 10 ms.  
3. Added a *hash‑ring* layer (Consistent Hashing) to handle future scale‑ups without data re‑balancing, keeping the system **idempotent** and **resilient**.  
4. Implemented **CloudWatch metrics** (`ShardReadLatency`, `ThrottleEvents`) to trigger auto‑scaling on a per‑shard basis.

**Result –** Latency dropped from 250 ms to 65 ms (−73 %), throughput increased by 5×, and cost decreased by 15 % due to fewer hot‑partition scans. The solution also allowed us to roll out new recommendation models without downtime, delivering a smoother customer experience.

---

### Leadership Principles  
- **Ownership** – I took full responsibility for the end‑to‑end redesign, from requirement gathering to post‑deployment monitoring.  
- **Dive Deep** – By dissecting latency logs and shard usage patterns, I uncovered the root cause and engineered a scalable solution.  

Bar‑raisers look for: clear ownership, deep technical reasoning (hash function choice, DynamoDB trade‑offs), quantified impact (latency & cost reductions), and learning from earlier failures (handling hot partitions).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
