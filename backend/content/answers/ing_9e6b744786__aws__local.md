---
qid: ing_9e6b744786__aws__local
question: 'Explain: Designing a new approach to capacity management'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 356
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:23:00-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of our on‑prem ML training fleet that was consistently over‑provisioned, costing $1 M/yr and causing 3× slower model rollouts.

**Action**  
I applied **Ownership** and **Dive Deep**:  
*Built a data pipeline in **AWS Glue** to scrape historical GPU utilization, job runtimes, and failure rates.*  
*Engineered a predictive capacity model using **Amazon SageMaker Autopilot** + **AWS Forecast** to forecast compute demand 30 days ahead with <10% MAE.*  
*Deployed an autoscaling rule in **Amazon ECS** that spins up Spot‑GPU instances only when the forecast exceeds 80 % of baseline, throttling down during low‑usage windows.*  
*Integrated a real‑time dashboard on **Amazon CloudWatch Dashboards** to flag anomalies.*

**Result**  
- Cut compute spend by **$860K/yr (32%)** while maintaining 99.9 % availability.  
- Reduced model turnaround from 5 days to **2 days**, improving time‑to‑market by **40%**.  
- Deployed a lightweight, cost‑effective architecture that scales linearly with training demand.

**Learning**  
I learned that continuous telemetry + predictive analytics unlock hidden efficiencies; the next step is adding an A/B testing layer to validate capacity changes in production without impacting users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
