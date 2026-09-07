---
qid: ing_592d6c3557__aws__local
question: 'Explain: Uber — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 484
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:47:33-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When I joined the data‑science team at a rideshare startup, we were asked to build a real‑time surge‑pricing model that could be deployed across 40+ cities while keeping latency below 200 ms and cost under $0.01 per inference. The goal was to improve driver utilization by 15% without alienating riders.

**Action (Dive Deep + Bias for Action)**  
1. **Requirements & Design** – I scoped the problem as a *predictive‑pricing* pipeline:  
   - **Feature Store** on Amazon DynamoDB + AWS Glue to ingest live traffic, weather, and event data.  
   - **Model training** in SageMaker using XGBoost with hyperparameter tuning (≈ 50 GB of feature data).  
   - **Inference** via SageMaker Real‑Time Endpoint behind an Application Load Balancer for 99.9% availability.  
2. **Scalability & Cost** – Leveraged *multi‑region deployment* to keep endpoints within 20 km of each city, reducing network latency by ~30 ms. Used spot instances for training (cost ↓ 70%) and reserved capacity for inference (cost ↓ 15%).  
3. **Monitoring & Feedback Loop** – Integrated CloudWatch Alarms + SageMaker Model Monitor to flag drift; automated retraining every 12 h using a Lambda orchestrator.

**Result (Deliver Results)**  
- **Driver utilization rose by 18%** in the first quarter, surpassing our target.  
- **Rider wait time dropped 12%**, improving NPS from 72 → 78.  
- **Inference cost per request fell to $0.007** (30 % below budget).  

**Learning & Failure**  
Early tests over‑fitted on historical surge peaks; a post‑mortem revealed missing “event‑driven” features. I added real‑time event signals and re‑trained, which stabilized predictions and cut false positives by 40%. This reinforced the principle that *ownership* means iterating until the model truly reflects the customer context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
