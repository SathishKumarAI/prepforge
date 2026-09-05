---
qid: ing_4bbd3c5636__star__local
question: 'Explain: So we check on a patient named — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 358
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:59:46-05:00'
sources: []
---

**Situation** – At my last internship I was tasked with building a simple health‑monitoring app for an elderly care facility. The clinic had an electronic health record (EHR) system that logged vitals every hour, but the nurses were overwhelmed and often missed critical trends.

**Task** – My goal was to create a lightweight Python script that would automatically flag patients whose blood pressure or heart rate drifted beyond safe limits and send a real‑time alert. I had only 10 days to prototype before the quarterly audit.

**Action** – First, I extracted the raw CSV logs using pandas, then engineered rolling mean features over the past six hours. I trained a lightweight Isolation Forest model (sklearn) on historical “normal” data and set an anomaly score threshold that balanced false positives (≈3 % of alerts) with missed events. The script ran as a scheduled cron job, pushing alerts to Slack via its API. I also built a small Flask dashboard for nurses to review flagged patients.

**Result** – In the two‑month pilot, the system reduced missed vital sign anomalies by 78 %, cutting nurse response time from an average of 45 min to 12 min. The project was adopted as part of the clinic’s standard operating procedure, and I learned how to turn raw clinical data into actionable alerts with minimal overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
