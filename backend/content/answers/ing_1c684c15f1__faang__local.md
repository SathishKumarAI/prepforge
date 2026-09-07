---
qid: ing_1c684c15f1__faang__local
question: 'Explain: Redundancy — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 536
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:50:55-05:00'
sources: []
---

**Redundancy vs. Reliability in System‑Design ML Pipelines**

| Step | What to do | Why it matters |
|------|------------|----------------|
| **Clarify** | *Problem:* How does adding redundancy improve the reliability of an ML system? *Assumptions:* 1️⃣ We’re deploying a predictive service (e.g., recommendation). 2️⃣ Latency < 200 ms, SLA 99.9%. 3️⃣ Failure modes: node crash, data corruption, model drift. | Sets scope and constraints for the design. |
| **Approach** | 1️⃣ Identify critical failure points. 2️⃣ Choose redundancy strategy (active‑active vs. active‑passive). 3️⃣ Implement health checks & automated failover. 4️⃣ Quantify reliability gains via MTBF/MTTR. | Gives a roadmap before coding or architecture decisions. |
| **Depth** | • **Active‑Active:** Two identical inference nodes behind a load balancer; each processes the same request and returns the *majority* prediction to guard against single‑node corruption. <br>• **Active‑Passive:** One hot‑standby node that takes over only on failure, saving cost but risking higher latency during switchover. <br>• **Health Checks:** Heartbeat + sanity tests (e.g., compare outputs of a small validation set). <br>• **Reliability Metric:** For n replicas with independent MTTR = t and MTBF = T, system MTBF ≈ T·n; MTTR ≈ t/n. | Shows concrete trade‑offs and math backing the design. |
| **Edge Cases** | • *Correlated failures* (network partition, shared storage). <br>• *Model drift:* both replicas become stale—requires scheduled re‑training. <br>• *Data poisoning*: if input pipeline is compromised, redundancy won’t help. | Highlights limitations and what additional safeguards are needed. |
| **Optimize & Communicate** | • Use vectorized inference to keep per‑node latency low, so active‑active remains under SLA. <br>• Deploy replicas across availability zones for fault isolation. <br>Explain: “By duplicating the inference layer we reduce MTTR from minutes to seconds and raise overall uptime from 99.9 % to >99.999 % without changing the model.” | Wraps up with a clear ROI narrative that interviewers appreciate. |

**Word count:** ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
