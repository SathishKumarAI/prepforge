---
qid: ing_ded988ea33__faang__local
question: 'Explain: Alert Prioritization — Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 532
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:17:24-05:00'
sources: []
---

**Alert Prioritization – Observability**

| Section | Content |
|---------|---------|
| **Clarify** | *Problem:* In a large, multi‑service system we receive hundreds of alerts per day from metrics, traces, and logs. We need to rank them so ops can focus on the most critical incidents first. <br> *Assumptions to confirm:* 1) Alert source types (SLO violations, latency spikes, error rates). 2) Severity scales (critical, warning, info). 3) Existing incident‑management workflow and SLAs. |
| **Approach** | 1. **Define a scoring rubric** combining *impact*, *confidence*, *recurrence*, and *business context*.<br> 2. **Normalize metrics** (z‑scores or percentile ranks).<br> 3. **Apply weighted linear combination** or machine‑learning ranking model trained on historical incident outcomes.<br> 4. **Integrate with PagerDuty/Ticketing** to surface top‑N alerts. |
| **Depth** | - *Impact:* estimated downtime cost = affected users × mean time to resolution (MTTR). <br>- *Confidence:* anomaly score from statistical models or ML classifiers; higher confidence → higher weight.<br>- *Recurrence:* alerts that have occurred > k times in last 24h get a boost. <br>- *Business context:* map services to business value (e.g., checkout vs. analytics).<br>Score = w₁·impact + w₂·confidence + w₃·recurrence + w₄·business_value. <br>Complexity: O(n) per alert batch; storage for historical metrics is O(m). |
| **Edge Cases** | - Sudden spike in noise (e.g., log rotation) → confidence drops, preventing false alarms.<br>- New services without historic data → fall back to default weights.<br>- Correlated alerts (same root cause) → deduplicate before scoring. |
| **Optimize & Communicate** | • Periodically re‑train the ranking model on resolved incidents to adapt to changing traffic patterns.<br>• Expose a real‑time dashboard showing score distribution and top alerts, with drill‑through to underlying metrics.<br>Explain to interviewers: “We start by quantifying business impact, then add statistical confidence, and finally adjust for context. The system is linear so we can tune weights quickly and monitor the effect on MTTR.” |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
