---
qid: vq_b9e50e78e7__fp__local
question: How long should raw data be retained?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 434
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:53:22-05:00'
sources: []
---

### Why the “right” length matters

Data engineering is not a storage‑agnostic hobby; it’s an optimisation problem over **value density vs. cost density**.  
The *value* of a raw record decays roughly exponentially: a click log from 2024 can be reused for trend analysis or model training, but the same log six years later has little predictive power because user behaviour, APIs, and privacy laws have shifted.  

At the same time, storage cost \(C(t)\) is sub‑linear in time (cloud tiers drop as data ages), while *access cost* \(A(t)\) rises sharply: older snapshots live on cold‑tier disks or archival tape, requiring retrieval pipelines that add latency and engineering effort.  

The optimisation problem becomes:

\[
\max_{T}\; \int_0^T \bigl(V_{\text{raw}}(t)-V_{\text{processed}}(t)\bigr)\,dt
-\lambda\,C(T)-\mu\,A(T)
\]

where \(T\) is the retention horizon.  
Solving for \(T\) under realistic decay curves (e.g., half‑life of 1–2 years for clickstream data, 5–7 years for log‑level analytics) yields a sweet spot where marginal value equals marginal cost.

**Non‑obvious insight:** *The optimal horizon is often shorter than the longest legal or regulatory requirement.*  
Because compliance can be satisfied with **derived artefacts** (e.g., anonymised aggregates, audit logs), you can delete raw traces after they’ve served their analytic purpose, dramatically reducing storage and simplifying governance.  

Thus, a principled retention policy balances decay‑driven value loss against cost gains, often favouring 12–36 months for most operational data while preserving only distilled artefacts for longer regulatory windows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
