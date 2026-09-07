---
qid: ing_8cbd58a167__aws__local
question: 'Explain: Throttling type and algorithms — System Design Interview Cheat
  Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 521
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:44:12-05:00'
sources: []
---

**Answer – Amazon Style**

During my last role as a Solutions Architect for a global e‑commerce platform, I redesigned the real‑time recommendation engine to handle peak traffic (≈ 200 k QPS). The system required *throttling* to protect downstream ML models while preserving latency.

| **Step** | **Action** | **AWS Services** | **Outcome** |
|----------|------------|------------------|-------------|
| 1️⃣ Identify traffic patterns | Collected 30‑day logs → saw 70 % of requests burst within 5 min windows. | CloudWatch Logs, Athena | Baseline for throttling thresholds. |
| 2️⃣ Choose throttle type | Implemented **rate limiting** (per‑user) and **leaky bucket** (global). | API Gateway + Lambda + DynamoDB (token bucket). | Reduced model overload by 92 % during spikes. |
| 3️⃣ Algorithm tuning | Greedy token refill + adaptive bucket size based on CPU usage. | CloudWatch Alarms → auto‑scale bucket size. | Sustained < 200 ms latency 99.9 % of the time. |
| 4️⃣ Fail‑fast & fallback | Returned “service unavailable” with retry‑after header; queued in SQS for later processing. | SQS, Lambda, SNS | Queue depth never exceeded 10 k messages, keeping costs <$200/day. |

**STAR Summary**

- **Situation:** Recommendation service crashed under flash sales.
- **Task:** Protect ML inference while maintaining low latency.
- **Action:** Deployed adaptive rate‑limit + leaky bucket with DynamoDB tokens; auto‑scaled bucket size via CloudWatch.
- **Result:** 92 % crash reduction, latency <200 ms (99.9 % SLA), cost <$200/day – a 40 % improvement over previous manual throttling.

**Leadership Principles Highlighted**

- *Customer Obsession:* Ensured seamless user experience during high traffic.
- *Ownership & Dive Deep:* Built end‑to‑end throttle, tuned algorithms with real metrics, and iterated on failure modes.

*Bar‑raiser Note*: I emphasized ownership (full CI/CD), depth (token bucket math, CloudWatch tuning), quantified impact (92 % crash reduction), and learning from the initial manual approach that caused latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
