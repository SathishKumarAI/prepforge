---
qid: ing_e22af691c7__fp__local
question: 'Explain: Step 3: Design core components — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 548
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:00:47-05:00'
sources: []
---

## Step 3: Design the Core Components (Pastebin)

The fundamental problem **Pastebin** solves is *persistent, share‑able text storage* with minimal latency and high write throughput.  
To satisfy this we must:

| Requirement | Why it drives the design |
|-------------|--------------------------|
| **Fast writes** | Users paste once; the system should commit in < 100 ms. |
| **Scalable reads** | Popular pastes are read thousands of times per second. |
| **Durable storage** | Data must survive node failures and be recoverable. |

From these constraints we derive a **write‑throughput first, read‑optimized architecture**:

1. **Client → API Gateway → Paste Service**  
   - *API Gateway* throttles traffic, protects against abuse, and performs auth.  
   - The **Paste Service** receives the raw text, generates a short key (hash or UUID), writes to storage, and returns the key.  
2. **Storage Layer** – **Key‑Value Store (e.g., DynamoDB, Bigtable)**  
   - Keys are the paste IDs; values hold the text plus metadata (timestamp, TTL).  
   - A single write is a fast `PUT` operation; no joins or scans needed.  
3. **Caching Layer** – **In‑memory cache (Redis, Memcached)**  
   - Frequently accessed pastes live in cache to satisfy read latency < 10 ms.  
4. **Optional CDN** – *Static paste URLs* can be cached at edge nodes for global reach.

### Deeper Principle: *Write‑Amortized Consistency*

Because writes are the critical path, we relax consistency on reads (eventual). This mirrors the CAP theorem’s **C → P trade‑off**: we accept eventual consistency to keep **CP** for high availability. The cache acts as a write buffer; stale data is acceptable until it expires.

### Non‑Obvious Insight

Most people focus on *how many* nodes are needed. The key insight is that **short, immutable keys eliminate the need for sharding logic**: any hash function that spreads keys uniformly lets us append new storage shards without moving existing data. Thus, scaling becomes a matter of adding more write‑capable nodes rather than rebalancing.

> **Bottom line:** By treating Pastebin as a *write‑first, read‑cached key/value service*, we achieve low latency, high throughput, and linear scalability—all while keeping the system simple enough to evolve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
