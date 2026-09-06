---
qid: ing_4fae26dcf7__fp__local
question: 'Explain: New Key on Every Retry — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 423
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:54:34-05:00'
sources: []
---

**New Key on Every Retry – Idempotency in Machine‑Learning Pipelines**

In a distributed ML service, a client sends a request (e.g., “train this model”) and may receive no response due to transient network failure. The naive retry strategy resends the same request verbatim; if the server already executed the job, a duplicate training run would waste compute, inflate costs, and corrupt metrics.  
The core problem is *ambiguity*: after a failure we cannot tell whether the previous attempt succeeded or not. To resolve this, each client generates a fresh **idempotency key** for every retry. The key is a cryptographic hash of the request payload plus a monotonically increasing counter (or timestamp). When the server receives a request, it first checks if that key has been seen:

1. **If unseen**, it starts the job and records the key.
2. **If seen**, it returns the cached result without re‑executing.

Why this works:  
- The key space is effectively infinite (hash + counter), so collisions are astronomically unlikely, guaranteeing uniqueness across retries.  
- From an *optimization* perspective, we avoid redundant computation, reducing resource consumption and latency.  
- From a *probabilistic* standpoint, the chance of two distinct requests sharing a key is negligible; thus the system behaves as if each job were idempotent.

**Non‑obvious insight:** The counter in the key is not merely for uniqueness—it also preserves *temporal order*. If a client inadvertently sends the same payload twice in quick succession (e.g., due to a double click), the counter ensures the server treats them as distinct jobs, preventing accidental deduplication of legitimate consecutive requests. This subtle design choice balances strict idempotency with flexibility for intentional repeated operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
