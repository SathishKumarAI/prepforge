---
qid: ing_211155b1c8__faang__local
question: 'Explain: Redundancy — A Cheat Sheet for Designing Fault-Tolerant Systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 491
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:01:50-05:00'
sources: []
---

**Redundancy – A Cheat Sheet for Designing Fault‑Tolerant ML Systems**

| Section | Key Points |
|---------|------------|
| **Clarify** | *Problem:* We want a model pipeline that stays available and accurate even if components fail. *Assumptions to confirm:* 1) Failure modes (node crash, data loss, network partition). 2) SLAs for latency & accuracy. 3) Budget for extra resources. |
| **Approach** | 1️⃣ Identify critical assets: data source, feature store, model inference service, post‑processing layer.<br>2️⃣ Apply *active* redundancy to each: duplicate nodes, multi‑region deployment, hot standby. <br>3️⃣ Use *passive* checks: health probes, circuit breakers, graceful degradation. |
| **Depth** | • **Data Layer:** Mirror the feature store across zones; use eventual consistency with conflict resolution.<br>• **Model Layer:** Run two identical inference containers behind a load balancer; if one fails, traffic routes to the other (fail‑over). <br>• **Training Pipeline:** Store checkpoints in replicated storage; run training jobs on multiple GPUs so loss of one GPU doesn’t kill the job. <br>Complexity: O(1) for read ops with replication; cost ↑ linearly with replicas. Trade‑off: higher availability vs. resource spend. |
| **Edge Cases** | • *Data drift:* redundant models may diverge—use synchronized retraining.<br>*Network split:* load balancer must detect and isolate partitions to avoid “split brain.”<br>Test by simulating node kills, network latency spikes, and data corruption. |
| **Optimize & Communicate** | • Add *auto‑heal*: if a replica dies, spin up a fresh instance automatically.<br>• Use *canary releases* for new models to ensure redundancy doesn’t mask regressions.<br>Explain: “We’re duplicating every critical path so that a single failure can be absorbed without impacting the user; we monitor health and heal automatically to keep costs low.” |

**Takeaway:** Redundancy is about *duplicating* critical assets, *monitoring* them, and *automatically routing* around failures while keeping consistency and cost in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
