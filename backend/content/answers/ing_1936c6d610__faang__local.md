---
qid: ing_1936c6d610__faang__local
question: 'Explain: The synchrony assumptions of Redlock — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 597
total_tokens: 848
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:43:40-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Redlock*’s synchrony assumptions and how it achieves a distributed lock (Martin Kleppmann’s discussion). I’ll assume the reader knows basic consensus, Raft/Paxos, and that Redlock is a Redis‑based locking scheme.

---

### 1. Clarify  
- What does “synchrony” mean in this context?  
- Which network/clock assumptions does Redlock rely on?  
- How do those assumptions affect correctness (no double acquisition)?

---

### 2. Approach  
I’ll first describe the Redlock protocol steps, then highlight where synchrony matters:  
1. **Acquire lock** on each of *n* Redis instances in quick succession.  
2. **Validate** that a majority succeeded and the total time < timeout.  
3. **Release** by deleting keys.

Next, I’ll map each step to the required assumptions (clock skew ≤ Δ, message delay bounded).

---

### 3. Depth  

| Step | Synchrony Assumption | Why it matters |
|------|---------------------|---------------|
| Acquire on all nodes | **Bounded clock drift** (Δ) so TTLs are comparable | If one node’s clock is far ahead, the lock may appear longer than intended, causing over‑release. |
| Majority success check | **Partial synchrony**: messages arrive within a known window | Guarantees that at least ⌊n/2⌋ nodes agree before proceeding. |
| Release (delete) | **Eventual delivery** but no guarantees needed; deletion is idempotent | Even if some deletes miss, the lock will eventually expire. |

Redlock tolerates network partitions up to *k* failures (where k < n/2). If a partition occurs, at least one majority can still acquire and release safely.

---

### 4. Edge Cases  

- **Clock skew > Δ** → lock duration mis‑estimation → double acquisition risk.  
- **Network delay spikes** → majority not reached → lock denied (safe but may degrade availability).  
- **Redis instance crash mid‑lock** → key persists until TTL expires; other nodes still enforce exclusivity.

Testing: simulate varying Δ, message delays, and node failures to observe lock contention and expiration behavior.

---

### 5. Optimize & Communicate  

*Improvements*: Use NTP or a dedicated time sync service to keep Δ small; add a “renewal” step if the client’s clock drifts during long operations.  
*Narrative*: I’d start by framing Redlock as a lightweight consensus variant, then walk through each protocol phase, explicitly tying it back to synchrony constraints. This shows clear reasoning, depth in correctness guarantees, and awareness of practical failure modes—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
