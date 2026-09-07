---
qid: ing_8bfa55b177__aws__local
question: 'Explain: Making regional capacity shift plans at scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 381
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:42:24-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑region ML model deployment team at a global e‑commerce platform that had to shift compute capacity for seasonal demand spikes (e.g., Black Friday) while keeping latency <20 ms and cost below 5% of the baseline.

**Action**  
1. **Data‑driven Forecasting** – Built a time‑series model in SageMaker using historical traffic + marketing spend; achieved 92 % MAE accuracy.  
2. **Dynamic Capacity Planner** – Wrote a Lambda workflow (Step Functions) that, every hour, reads the forecast, calculates required GPU/CPU instances per region, and triggers Auto Scaling policies on ECS/EKS clusters.  
3. **Infrastructure as Code** – Deployed CloudFormation stacks with AWS Fargate Spot to cut compute spend by 30 %.  
4. **Multi‑Region Replication** – Used Global Accelerator + Route 53 latency routing; S3 cross‑region replication for model artifacts ensured zero cold‑start.

**Result**  
- Reduced average inference latency from 35 ms to 18 ms across all regions.  
- Cut overall ML spend by $1.2 M annually while maintaining 99.9 % uptime.  
- The planner was adopted company‑wide, now handling 3× the traffic during peak events.

**Learning & Ownership**  
I iterated on the forecast model after a spike misprediction, adding anomaly detection that prevented over‑provisioning in future cycles. This reinforced *Ownership* and *Dive Deep*, proving my design’s scalability and cost efficiency to stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
