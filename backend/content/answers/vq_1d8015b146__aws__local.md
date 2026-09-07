---
qid: vq_1d8015b146__aws__local
question: How do you feel about self-driving cars?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 370
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:41:26-05:00'
sources: []
---

**Situation & Task (Ownership, Customer Obsession)**  
When I joined my previous company as a product manager, we were tasked with evaluating whether to launch an autonomous‑driving feature for our fleet of delivery vans. The board wanted a quick go/no‑go decision because the competitive landscape was heating up.

**Action (Dive Deep, Bias for Action)**  
I assembled a cross‑functional squad—data science, software engineering, safety compliance, and operations—and mapped out a “minimum viable autonomous” roadmap. We defined three critical metrics:  
1. **Safety score** – % of incidents avoided compared to manual driving.  
2. **Throughput** – average miles driven per day.  
3. **Cost per mile** – including maintenance and energy.

Using simulation data from our existing fleet, I built a cost‑benefit model in AWS SageMaker, integrating real‑time telemetry via Amazon Kinesis. We ran an A/B test on 200 vehicles over 30 days, collecting 1.2 million miles of data.  

**Result (Deliver Results)**  
The autonomous mode reduced incident risk by **28%** and increased daily mileage from 80 to **112 miles** (+40%). Cost per mile fell by **$0.04**, translating to $360K annual savings for the pilot fleet. The board approved a full rollout, projected to add **$5M/year** in incremental revenue.

**Reflection (Invent & Simplify)**  
I learned that early, data‑driven pilots are essential; relying on hype leads to costly overruns. This experience reinforced my belief that customer safety and operational efficiency must guide innovation—exactly the balance Amazon seeks when it invests in transformative tech.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
