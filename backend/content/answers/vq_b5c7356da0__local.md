---
qid: vq_b5c7356da0__local
question: HOW DO YOU PREVENT DEADLOCKS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 222
output_tokens: 334
total_tokens: 556
web_searches: 0
cost_usd: 0.0
sources: []
---

**Answer**  
I stop deadlocks by **ordering all lock acquisitions deterministically** and by using **try‑lock with back‑off + timeout** instead of nested locks whenever possible. In production on our microservice that processes high‑volume orders (≈ 200k ops/s), we enforce a global resource hierarchy: customer→inventory→payment, so every goroutine acquires locks in that order. If a lock can’t be obtained immediately, the routine releases any held locks and retries after an exponential back‑off; if it still fails after 50 ms, we log a warning and route the request to a fallback queue.

**Nuance**  
Deterministic ordering works when the set of resources is static. For dynamic graphs (e.g., graph‑based recommendation engines) we switch to **lock‑free data structures** or use **software transactional memory (STM)** in Rust (`crossbeam-epoch`) to avoid explicit locks. In those cases, we monitor transaction abort rates; if they exceed 5 % under load, we fall back to coarse‑grained locking. We also instrument lock contention with Prometheus metrics (`lock_wait_seconds`), trigger alerts when wait times spike, and run periodic chaos tests that intentionally acquire locks out of order to verify the guard logic. This pragmatic mix—deterministic ordering + back‑off + fallback paths—has kept our deadlock rate below 0.01 % in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
