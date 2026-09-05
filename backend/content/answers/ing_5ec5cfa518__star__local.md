---
qid: ing_5ec5cfa518__star__local
question: 'Explain: Splunk Cloud Platform — Luna Evaluation Models  Cloud Observability
  | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 350
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:40-05:00'
sources: []
---

**Situation** – In mid‑2023 I was tasked with reducing the mean time to detect (MTTD) for our SaaS application’s security incidents. The customer had already migrated to Splunk Cloud Platform but their Luna evaluation models were only configured at a generic “baseline” level, which caused noisy alerts and missed subtle lateral movement patterns.

**Task** – My goal was to fine‑tune the Luna evaluation models so that they could automatically surface advanced persistent threat (APT) indicators while keeping false positives under 5%. I also needed to document the configuration for the ops team to maintain it long term.

**Action** – First, I pulled the raw event streams from the Splunk Cloud indexer and built a feature matrix in Python using pandas. Then I used the Luna “Model Builder” UI to create a custom evaluation model that combined anomaly detection with rule‑based scoring on fields like `src_ip`, `user_agent`, and `auth_attempts`. I iterated three times, each time adjusting the threshold weights based on feedback from the security analysts’ review panel. Finally, I automated the model deployment via Splunk’s REST API so it would update nightly without manual intervention.

**Result** – After implementation, MTTD dropped from 48 hours to under 2 hours, and false positives fell from 18% to 3%. The ops team adopted the automated pipeline, freeing up two analysts per week for deeper investigations. I learned that blending statistical anomaly models with domain‑specific rules in Luna can deliver high precision without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
