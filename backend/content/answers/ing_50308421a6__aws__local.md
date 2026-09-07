---
qid: ing_50308421a6__aws__local
question: Edit rate is the obvious measure of clinician trust. What does it hide,
  and what would you instrument instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 456
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:26:30-05:00'
sources: []
---

**Answer (Amazon style)**  

During a recent project to onboard an AI‑assisted diagnosis tool for radiologists, I led the metrics team. **Situation:** The product manager insisted that *edit rate*—the proportion of AI suggestions overridden by clinicians—was the sole KPI. **Task:** Show why edit rate alone is misleading and design a richer telemetry suite.  

**Action:**  
1. **Dive Deep into Edit Context** – I introduced a multi‑dimensional event stream (suggestion ID, timestamp, clinician role, confidence score, image quality metrics).  
2. **AWS Services** – Pulled data into *Amazon Kinesis Data Streams*, persisted in *DynamoDB* for low‑latency lookup, and ran batch aggregations with *Glue* into a *Redshift* warehouse.  
3. **New Metrics** –  
   - **Precision@k** (percentage of top‑k AI predictions that match the final report).  
   - **Confidence Calibration Gap** (difference between predicted confidence and actual acceptance rate).  
   - **Time‑to‑Decision** (average latency from suggestion to clinician action).  
4. **Alerting & Feedback Loop** – Set up *CloudWatch* dashboards; when calibration gap > 10%, an automated Slack alert triggers a review of the underlying model.  

**Result:** Over two months, we reduced unnecessary edits by 35% and cut average decision time from 18 s to 12 s, improving clinician satisfaction scores (from 4.2/5 to 4.6/5). The richer telemetry also surfaced a bias in the model for older patients, prompting a retrain that improved overall diagnostic accuracy by 4%.  

**Bar‑raiser note:** I demonstrated ownership (owning the metrics), depth (dive deep into event context), quantified impact (edit reduction & satisfaction lift), and learned from failure (bias discovery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
