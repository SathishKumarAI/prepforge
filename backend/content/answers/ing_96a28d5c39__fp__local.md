---
qid: ing_96a28d5c39__fp__local
question: 'Explain: Interviewer — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 453
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:25:58-05:00'
sources: []
---

**Why a leaderboard needs its own architecture**

In a data‑science competition the *score* is the only observable that determines ranking; it is a one‑dimensional statistic derived from an arbitrary model and dataset. The system must therefore

1. **Accept millions of submissions per day**  
2. **Compute scores deterministically and reproducibly**  
3. **Return top‑k lists with sub‑second latency**  

These constraints imply a *write‑heavy, read‑light* workload where consistency outweighs availability: a wrong rank can invalidate an entire competition.

---

### Core components

| Component | Function | Design principle |
|-----------|----------|------------------|
| **Submission queue** | Decouple ingestion from scoring | Back‑pressure; eventual consistency |
| **Scoring microservice** | Runs the evaluation script in isolated containers | Isolation + statelessness → horizontal scalability |
| **Score cache (Redis)** | Stores latest score per user | O(1) read for leaderboard updates |
| **Leaderboard store (Cassandra/Bigtable)** | Persistent sorted set of `(score, user)` pairs | Append‑only logs + secondary index on score |
| **API gateway** | Exposes `/rank`, `/leaderboard` endpoints | Rate limiting & caching |

---

### Optimization insights

* **Lazy recomputation:** Only re‑evaluate when a new submission arrives; otherwise reuse cached score.  
* **Delta updates to leaderboard:** Store only the delta between old and new scores, then run an incremental sort (e.g., `INSERT … ON DUPLICATE KEY UPDATE`) rather than full rebuilds.

---

### Non‑obvious insight

The *determinism* of scoring is often taken for granted. In practice, even minor nondeterministic operations (GPU random seeds, parallel reduction order) can change a score by 0.001%. By enforcing a fixed execution environment (e.g., container with pinned CPU/GPU and deterministic libraries), the leaderboard becomes a *measurement device* rather than a black box, preserving fairness across all participants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
