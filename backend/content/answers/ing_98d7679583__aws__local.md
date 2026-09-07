---
qid: ing_98d7679583__aws__local
question: 'Explain: Approach 3: Distributed unique ID generator'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 567
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:11:09-05:00'
sources: []
---

**Situation / Task**  
At my previous role we built a global event‑tracking platform that ingested > 10 M events per day. The existing sequential ID generator caused hot‑spots and race conditions when scaling to new regions, leading to duplicate IDs and 2 % data loss. I owned the redesign of the identifier system.

**Action (Design)**  
I chose *Approach 3 – Distributed Unique ID Generator* based on a hybrid **Snowflake‑style** scheme:  

1. **Timestamp (41 bits)** – UTC epoch ms, giving > 69 years of unique space.  
2. **Region + Datacenter (10 bits)** – 1024 locations, enabling cross‑region uniqueness without coordination.  
3. **Machine ID (10 bits)** – derived from EC2 instance metadata; each node gets a unique 10‑bit value via DynamoDB “NodeRegistry” table with conditional writes to guarantee exclusivity.  
4. **Sequence (12 bits)** – per‑node counter reset every ms, protecting intra‑millisecond collisions.

Implementation details:  

- **AWS Lambda** functions generate IDs on demand, calling the *NodeRegistry* in DynamoDB for machine ID lookup.  
- The registry uses **ConditionalWrite** to avoid race conditions; failed writes trigger a retry with back‑off.  
- For high throughput, we pre‑allocate 10 000 IDs per node and cache them in an **Elasticache Redis** cluster, reducing DB round trips.  

**Result**  
After rollout:  

| Metric | Before | After |
|--------|--------|-------|
| Duplicate ID rate | 2 % | < 0.001 % |
| Latency (ID generation) | 12 ms avg | 1.5 ms avg |
| Operational cost | $1200/month | $680/month |

**Reflection & Learning**  
I learned that *ownership* means anticipating edge cases—here, clock drift across regions—and building self‑healing logic (e.g., fallback to monotonic counter if time jumps). The *Dive Deep* principle guided me to quantify the impact of each component and iterate until cost/latency hit target thresholds.

**Leadership Principles Highlighted**  
- **Customer Obsession** – eliminated data loss that could frustrate downstream analytics users.  
- **Ownership & Bias for Action** – designed, deployed, and monitored the system end‑to‑end without external dependencies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
