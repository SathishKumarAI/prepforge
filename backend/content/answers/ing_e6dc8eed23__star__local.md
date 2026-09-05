---
qid: ing_e6dc8eed23__star__local
question: 'Explain: Build an in-memory key-value store with SET/GET/DELETE, then add
  transactions with BEGIN/COMMIT/ROLLBACK - including nested transactions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 375
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:09:59-05:00'
sources: []
---

**Situation**  
At my last company we had a high‑throughput recommendation engine that needed an ultra‑fast cache for user session data. The existing Redis cluster was over‑provisioned and lagging under peak load, so I proposed building a lightweight in‑memory key‑value store inside the service process.

**Task**  
I had to implement basic SET/GET/DELETE operations with O(1) complexity and then extend it to support ACID‑like transactions—BEGIN, COMMIT, ROLLBACK—including nested scopes—all while keeping memory usage below 200 MB and latency under 2 ms per operation.

**Action**  
I used a `std::unordered_map` for the base store. For transaction isolation I maintained a stack of “delta maps” where each BEGIN pushes a new map that records changes (writes or deletes) relative to its parent. GET first checks the top delta, falling back down the stack; SET and DELETE write only into the current delta. COMMIT merges the top delta into its parent, while ROLLBACK simply discards it. To support nested transactions I let each delta reference its parent, ensuring O(1) merge by iterating over the top delta’s entries. I added a simple version counter per key to detect write‑skew and prevent lost updates in concurrent scenarios.

**Result**  
The prototype handled 150k ops/sec with <1.5 ms latency, using ~180 MB of RAM. Nested transactions up to depth 10 executed in microseconds, and rollback cost was negligible because we only dropped a small delta map. The exercise taught me how lightweight data‑structures plus a clear delta stack can deliver transaction semantics without heavyweight locking or persistence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
