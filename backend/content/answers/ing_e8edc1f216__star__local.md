---
qid: ing_e8edc1f216__star__local
question: 'Explain: Building an eval set — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 352
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:00-05:00'
sources: []
---

**Situation:**  
When I joined the autonomous‑driving team at a startup, our perception model was hitting a plateau: on‑road test results were fine, but simulated lane‑keeping scenarios revealed a 12 % drop in accuracy. The engineering manager asked me to build an evaluation set that would expose hidden edge cases and give us real‑time observability.

**Task:**  
I had to design a comprehensive eval dataset, integrate it into our CI pipeline, and create dashboards that highlighted performance drift across sensor modalities and geographic regions, all within the next sprint.

**Action:**  
First, I mined 3 TB of raw telemetry from recent test drives, labeling anomalies with an annotation tool (Labelbox) and tagging them by weather, lighting, and traffic density. Next, I scripted a data‑augmentation pipeline in Python using Albumentations to synthesize rare conditions (heavy rain + low light). For observability, I built a lightweight inference wrapper that logged per‑class confidence and latency into InfluxDB; Grafana visualized accuracy heatmaps by region. Finally, I automated the entire flow with GitHub Actions so every PR ran the eval set against the latest model.

**Result:**  
The new eval set uncovered a 4 % drop in performance for wet roads, leading to a targeted data‑collection effort that raised overall lane‑keeping accuracy from 88 % to 95 %. The dashboards reduced mean time to detect drift from weeks to hours. I learned that a well‑curated eval set coupled with observability turns silent model failures into actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
