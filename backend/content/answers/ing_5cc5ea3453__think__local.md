---
qid: ing_5cc5ea3453__think__local
question: 'Explain: Calculate usage — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 220
output_tokens: 549
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:07:12-05:00'
sources: []
---

**1. Clarify the goal and assumptions**  
   - *Goal*: Estimate read/write traffic (requests per second) for a Pastebin‑style service.  
   - *Assumptions*:  
     - Each paste is ~1 KB on average.  
     - 70 % of traffic is reads, 30 % writes.  
     - Pasted content lives in memory for 24 h before eviction.

**2. Adopt a simple queuing / throughput model**  
   Use the *arrival rate* (λ) and *service time* (s) to compute required capacity:  
   \[
   R = λ \times s
   \]  
   where R is the number of concurrent workers needed.

**3. Step‑by‑step reasoning**  
   1. **Estimate users**: Suppose 10 k active users/day → ~400 users/hour.  
   2. **Requests per user**: Average 5 requests/user → 2000 reqs/hr ≈ 0.56 req/s.  
   3. **Separate reads/writes**: Reads = 0.39 req/s, writes = 0.17 req/s.  
   4. **Service time**: Assume read = 5 ms, write = 15 ms (DB + serialization).  
   5. **Compute workers**:  
      - Reads: 0.39 × 0.005 ≈ 0.002 workers → 1 worker suffices.  
      - Writes: 0.17 × 0.015 ≈ 0.003 workers → 1 worker suffices.  
   6. **Add headroom** (e.g., ×2) → 2 read + 2 write workers, plus a small cache layer.

**4. Common traps to avoid**  
   - Forgetting that writes are heavier than reads.  
   - Ignoring bursty traffic (peak spikes).  
   - Underestimating serialization or DB latency in service time.

**5. Sanity‑check & communicate**  
   - Verify that the total traffic is far below typical cloud VM limits (~10 k req/s).  
   - Present the calculation as a table: users → requests → workers.  
   - Conclude that a modest microservice cluster (≈4 workers + cache) can comfortably handle the load, with room for growth.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
