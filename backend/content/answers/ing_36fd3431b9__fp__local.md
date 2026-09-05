---
qid: ing_36fd3431b9__fp__local
question: 'Explain: Push Notification Service — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 608
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:01:19-05:00'
sources: []
---

**Push‑notification engine for a global messenger**

The *fundamental problem* is: **“How can we deliver an instant, ordered message to billions of devices with minimal latency and cost, while respecting user preferences?”**  
At its core this is an *online, distributed publish–subscribe system* that must satisfy three constraints:

| Constraint | Why it matters |
|------------|----------------|
| **Latency (≤ 200 ms)** | Users expect a reply in the same breath as typing. |
| **Scalability (≥ 10⁹ users)** | Every device must be reachable without a global lock. |
| **Reliability & Ordering** | A conversation’s semantics depend on message order; duplicates break trust. |

### Architecture from first principles

1. **Partitioned, per‑user queues**  
   *Why?* A user’s inbox is the natural unit of ordering. Partitioning by `user_id` eliminates cross‑user contention and lets each queue be replicated independently.

2. **Event‑driven ingestion**  
   Messages are written to a *Kafka‑like log* (topic = “push”). The log guarantees durability, linearizability, and allows multiple consumers (delivery workers) to read in parallel.

3. **Worker pool with per‑device affinity**  
   Workers poll the log, pull a batch of pending pushes for a user, and send them through the device’s push provider (APNs/FCM). Affinity ensures that retries hit the same worker, keeping ordering simple.

4. **Back‑pressure & rate limiting**  
   Each device is throttled to 1 push/s. If a device is offline, pushes are retained in an *expiring buffer* (TTL = 30 days) and delivered once connectivity returns.

5. **Failure handling**  
   - **Transient failures** → exponential back‑off; 
   - **Permanent failures** (e.g., revoked token) → mark the device as dead and purge its queue.  
   This keeps the system from blocking on a handful of bad devices.

### Non‑obvious insight

Most designs focus on *delivery*; the subtle bottleneck is actually **“device churn.”** When users uninstall or change phones, old tokens linger in queues until a timeout fires. By coupling the push log with a *token‑revocation service* that emits “delete” events, we can purge stale entries immediately, dramatically reducing storage and avoiding wasted network traffic.

---

> **Bottom line:** Treat pushes as an append‑only log per user, let workers be stateless consumers, and expose token churn as first‑class events. That guarantees low latency, linear scalability, and graceful handling of device failures—all the hallmarks of a production‑ready WhatsApp push system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
