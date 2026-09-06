---
qid: ing_0881332221__think__local
question: 'Explain: Handling In-Progress Requests — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 410
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:17:02-05:00'
sources: []
---

**1. Clarify the problem and state assumptions**  
- Identify what “in‑progress request” means (e.g., a long‑running inference job, a training batch).  
- Assume the client may retry due to timeouts or network glitches; we need deterministic results without duplicating work.

**2. Adopt an idempotency framework**  
- Treat each request as an *operation* with a unique **idempotency key** (client‑supplied or server‑generated).  
- Model the system state as a finite‑state machine: *Pending → Running → Completed/Failed*.  

**3. Step‑by‑step reasoning**  
1. On first receipt, store the key + metadata in a durable queue or database and mark *Pending*.  
2. Transition to *Running* when worker starts; keep a lock per key to avoid parallel execution.  
3. If a duplicate request arrives while state ≠ *Completed*, reply with current status (e.g., “running” or cached result).  
4. On completion, persist the output and mark *Completed*. Subsequent duplicates return the stored result instantly.

**4. Common traps to avoid**  
- Forgetting to handle *Expired* keys: clean up stale entries after a TTL.  
- Allowing concurrent workers on the same key (race conditions).  
- Returning incomplete results if a worker crashes mid‑run; use atomic commits or checkpoints.

**5. Sanity‑check & communicate**  
- Verify that each unique key maps to exactly one result regardless of retries.  
- Explain the flow verbally: “We queue, lock, run once, cache, and serve repeats from cache.”  
- Show a diagram if possible: client → idempotency key → queue → worker (lock) → DB (status/result).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
