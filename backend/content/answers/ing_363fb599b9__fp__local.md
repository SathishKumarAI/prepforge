---
qid: ing_363fb599b9__fp__local
question: 'Explain: Caching — Design Notification Service | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 725
total_tokens: 901
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:59:48-05:00'
sources: []
---

### Why a Notification Service Needs Cache

A notification system is a *real‑time* read–heavy workload: millions of users query “what’s new?” while the write side (events, likes, messages) updates continuously.  
The **fundamental problem** is that every read would otherwise hit the database and pay its latency, cost, and consistency overhead.

#### Derivation from First Principles

1. **Latency & Bandwidth = Cost** – The expected response time \(T\) is dominated by the slowest operation in the critical path.  
   \[
   T_{\text{read}} \approx T_{\text{db}} + T_{\text{network}}
   \]
   By placing a *memory* tier (\(T_{\text{mem}}\ll T_{\text{db}}\)) before the database, we reduce \(T\) to:
   \[
   T_{\text{cached read}} = T_{\text{mem}} + T_{\text{network}} \approx T_{\text{mem}}
   \]
2. **Cache Miss Probability** – If a cache hit probability is \(p_h\), the expected latency becomes:
   \[
   E[T] = p_h\,T_{\text{mem}} + (1-p_h)\,T_{\text{db}}
   \]
   Maximizing \(p_h\) is thus an optimization problem: pick the right key granularity and eviction policy.

3. **Staleness vs Consistency** – A notification must be *fresh*; otherwise users see wrong alerts.  
   The *stale‑read* bound is controlled by the cache TTL or by a publish/subscribe invalidation:
   \[
   \Delta t_{\text{max}} = \min(\text{TTL},\,\text{propagation delay})
   \]
   This turns consistency into a tunable parameter: lower TTL → higher freshness, higher cost.

#### Design Pattern

| Layer | Responsibility | Cache Strategy |
|-------|----------------|----------------|
| **Event Ingest** | Append‑only logs (Kafka) | No cache needed |
| **Aggregation Service** | Build per‑user feed | Write‑through to Redis (LRU) |
| **API Gateway** | Serve `GET /notifications` | Read‑through, TTL 30 s |
| **Invalidation Bus** | Notify cache on new event | Pub/Sub invalidates key |

- **Key Design:** `{user_id}:notifications`.  
- **Eviction:** LRU + max size per user (e.g., 200 items).  
- **TTL:** Short (≤30 s) to keep the feed fresh while preventing thrashing.

#### Non‑Obvious Insight

> **“Cache as a *consistency* layer, not just latency.”**  
> Many designs treat caches purely for speed. In a notification service, the cache must also enforce the freshness contract with users. By coupling TTLs with an invalidation bus (e.g., Redis Pub/Sub or Kafka topics), we can guarantee that every cache miss is due to *actual* staleness rather than arbitrary eviction. This dual role turns the cache into an explicit consistency controller, simplifying reasoning about eventual correctness.

---

**Bottom line:** Caching in a notification service is an optimization of latency and cost, but it must be engineered as a tunable consistency layer that balances freshness against throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
