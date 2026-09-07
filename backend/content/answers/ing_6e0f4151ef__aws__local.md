---
qid: ing_6e0f4151ef__aws__local
question: 'Explain: Real-world Systems — Foodorderingzomatoswiggy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 381
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:32:40-05:00'
sources: []
---

**Situation & Task**  
I led the ML‑driven demand forecast for *FoodOrderingZomato* (daily orders > 1 M). The goal was to reduce delivery idle time by 20 % and improve restaurant partner satisfaction.

**Action**  
- **Ownership & Dive Deep**: I built a pipeline that ingested order logs, weather, local events, and historical sales from Kinesis Streams into Redshift.  
- **Model Design**: Trained a Gradient‑Boosted Trees model (using SageMaker) with 200+ features; feature importance analysis revealed *event proximity* contributed 35 % of variance.  
- **Deployment & Scaling**: Deployed via SageMaker Endpoint behind an Application Load Balancer, autoscaling to 50 instances for peak hours (12 pm‑8 pm).  
- **Cost/Availability**: Leveraged spot instances + Lambda post‑processing; total spend < $0.02 per forecasted batch versus $0.08 without spot savings.

**Result**  
- Forecast accuracy improved from 68 % to 86 % (MAE reduced by 45 %).  
- Delivery idle time dropped 22 %, directly boosting partner earnings and reducing cancellations by 18 %.  
- Customer wait times fell 12 %, reflected in a 4.6‑star rating bump.

**Learning**  
When first deploying, latency spikes caused order backlogs; I introduced a warm‑up strategy and improved data partitioning, cutting SLA violations from 3 % to < 0.5 %. This iteration taught me the value of continuous monitoring and rapid rollback in ML ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
