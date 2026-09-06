---
qid: ing_811a64d320__fp__local
question: 'Explain: Delivery Failures — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 419
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:39:42-05:00'
sources: []
---

**Why “delivery‑failure” must exist**

In a publish–subscribe (Pub/Sub) system the *fundamental problem* is to deliver every message that a publisher emits to all its intended subscribers, *exactly once*, while tolerating failures of any component (network partitions, crashed brokers, transient overloads).  
If a subscriber never receives a message it cannot reconstruct the stream; if it receives duplicates it must filter them out. Thus the system must *detect* loss and *recover* from it.

**Deriving the failure‑handling logic**

1. **Detection** – A subscriber acknowledges receipt. If no ACK is seen within a timeout, the broker marks the message as “unacked”.
2. **Retention policy** – The broker keeps unacked messages for a configurable *retention window*. This window is bounded by an upper limit on storage and a lower bound required to allow back‑pressure recovery.
3. **Re‑delivery** – Unacked messages are re‑queued with incremental retry counts. Exponential back‑off ensures that transient issues (e.g., network hiccups) do not flood the subscriber, while persistent failures eventually trigger a *dead‑letter* queue.

This chain is an instance of *optimistic concurrency control*: we assume success, but have a deterministic rollback path when the assumption fails. The retry schedule is derived from queuing theory—exponential back‑off minimizes collision probability in high‑load regimes.

**Non‑obvious insight**

The *retention window* is not merely a safety net; it shapes the system’s *staleness bound*. By tying the window length to the subscriber’s processing capacity (via back‑pressure feedback), we guarantee that at any time the maximum lag between publisher and subscriber cannot exceed a predictable horizon. This transforms an opaque “retry forever” policy into a quantified latency guarantee, enabling SLAs on message delivery timeliness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
