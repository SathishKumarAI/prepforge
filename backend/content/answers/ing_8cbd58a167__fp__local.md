---
qid: ing_8cbd58a167__fp__local
question: 'Explain: Throttling type and algorithms — System Design Interview Cheat
  Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 734
total_tokens: 911
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:04:24-05:00'
sources: []
---

**Throttling – the “speed‑limit” of a distributed service**

*Fundamental problem:*  
When many clients hit an endpoint simultaneously, each request consumes CPU, memory, network, or database capacity. If we let traffic flow unbounded, a few heavy users can starve others and even crash the system. Throttling is therefore the *resource‑aware admission controller*: it decides **when** to accept a request, **how many** requests per unit time a client may issue, and **which requests to drop or delay**.

---

### 1. Types of throttling

| Type | Goal | Typical trigger |
|------|------|-----------------|
| **Rate‑limit** | Enforce *requests per second* (RPS) per user or service | Too many API calls in a window |
| **Burst‑limit** | Allow short spikes above the steady rate | Traffic surges, flash sales |
| **Quota** | Cap total usage over a period (e.g., 10 000 calls/month) | Billing or free tier limits |
| **Backpressure** | Dynamically reduce traffic when downstream is overloaded | Queue depth, CPU utilisation |

*Why they differ:*  
Rate‑limit keeps the *average* stable. Burst‑limit lets users enjoy responsiveness without compromising long‑term stability. Quota enforces business constraints. Backpressure uses real‑time system state to protect latency.

---

### 2. Algorithms

1. **Token Bucket**  
   - Tokens added at a fixed rate; each request consumes a token.  
   - *Burst* handled by bucket capacity.  
   - Optimal for bursty traffic: \(O(1)\) per request, no global state needed beyond the bucket counter.

2. **Leaky Bucket**  
   - Fixed output rate; incoming packets are queued and released at that rate.  
   - Guarantees constant latency but not burst tolerance.  
   - Useful when downstream can only process steadily (e.g., a payment gateway).

3. **Sliding Window Counter**  
   - Count requests in the last \(T\) seconds by storing timestamps or using fixed‑size buckets.  
   - More accurate than simple counters, but requires more storage and occasional compaction.

4. **Backpressure via Reactive Streams**  
   - Downstream signals *request(n)*; upstream supplies up to `n` items.  
   - Directly ties request rate to consumer capacity, eliminating wasteful retries.

---

### Non‑obvious insight

> **Throttling is a *policy* that can be expressed as an optimization problem: maximize user satisfaction subject to resource constraints and fairness.**  
> Instead of hard thresholds, one can solve for the optimal rate vector \(\mathbf{r}\) using convex optimisation (e.g., weighted proportional fairness). This yields adaptive throttles that automatically balance competing users while respecting SLAs—something classic “hard” limits miss.

---

**Takeaway:**  
Design a throttling layer by first identifying *which resource* you’re protecting, then selecting the algorithm whose latency‑resource trade‑off matches your service’s semantics. Use token buckets for bursty APIs, leaky buckets when downstream is steady, sliding windows for precise quotas, and backpressure for real‑time systems. And consider framing throttling as an optimisation problem to get smarter, fairer limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
