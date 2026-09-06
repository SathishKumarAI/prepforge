---
qid: ing_dd3bf1e51e__think__local
question: 'Build a rate limiter. Every ten minutes I''ll add a requirement: per-tenant
  limits, burst allowances, then a sliding window. How do you keep your code from
  collapsing?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 407
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:33:48-05:00'
sources: []
---

**1️⃣ Clarify scope & constraints**  
   * What metrics must be tracked (requests per minute, bursts, etc.)?  
   * Which tenants share state vs. have isolated counters?  
   * Are we in a distributed system or single‑node? Assume eventually‑consistent data store if distributed.

**2️⃣ Adopt a layered design pattern**  
   * **Policy layer** – pure logic for limits (configurable per tenant).  
   * **Storage layer** – abstract counter persistence (Redis, DB, in‑memory).  
   * **API layer** – request handler that delegates to policy & storage.  
   * Keep each layer testable and replaceable.

**3️⃣ Reason step‑by‑step**  
   1. On request: fetch tenant config.  
   2. Increment atomic counter (e.g., Redis INCR with expiry).  
   3. Compute if the increment violates limit or burst rule.  
   4. If sliding window, use sorted set timestamps and prune old entries before counting.  
   5. Return allowance status; optionally expose remaining quota.

**4️⃣ Avoid common pitfalls**  
   * **Race conditions** – use atomic ops or transactions.  
   * **Memory blow‑up** – enforce TTLs on counters/timestamps.  
   * **Complexity creep** – don’t embed all rules in one monolithic function; split by rule type.  
   * **Hidden state** – avoid static globals that survive restarts.

**5️⃣ Sanity‑check & communicate**  
   * Write unit tests for each layer (policy, storage).  
   * Run integration tests with simulated high concurrency.  
   * Document the public API: “GET /rate_limit” → JSON of remaining quota.  
   * Explain design choices in README so future maintainers see why the code is modular and robust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
