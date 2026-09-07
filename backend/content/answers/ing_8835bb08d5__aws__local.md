---
qid: ing_8835bb08d5__aws__local
question: 'Explain: Best practice questions by the author of Blind 75 | Tech Interview
  Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 496
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:32:09-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When I joined a fintech startup, our data‑science team was asked to build an ML pipeline that could score credit risk in real time for 10 k users per second. The product manager stressed that latency and accuracy were equally critical because the scoring engine directly influenced loan approvals.

**Action (Dive Deep + Bias for Action)**  
I first mapped out the end‑to‑end flow: data ingestion → feature engineering → model inference → post‑processing. I chose **Amazon Kinesis Data Streams** for low‑latency ingestion, **AWS Glue** to orchestrate ETL jobs, and **SageMaker Endpoint** (with a *Multinode GPU* instance) for inference. To guarantee high availability, the endpoint was deployed in an **Auto Scaling Group** across two AZs with **Elastic Load Balancer** routing. For cost control I set up **AWS Cost Explorer** alerts to monitor GPU hours and switched idle endpoints to spot instances.

I also implemented a *canary* deployment strategy: new models were served to 1 % of traffic, monitored via **CloudWatch Metrics** (predicted vs actual default rates), and only promoted after a 5‑day A/B test that showed a 3.2 % lift in precision while keeping latency under 120 ms.

**Result (Deliver Results)**  
Post‑deployment we achieved:  

| Metric | Pre‑Launch | Post‑Launch |
|--------|------------|-------------|
| Latency (95th percentile) | 350 ms | **115 ms** |
| Precision@k (k=5) | 0.82 | **0.88** |
| Cost per inference | $0.015 | **$0.009** |

The model’s improved precision reduced default risk by 12 % annually, saving the company ~$1.2M.

**Learning & Bar‑raiser Insight**  
I documented trade‑offs (GPU cost vs latency) and shared a post‑mortem with the team, reinforcing ownership and continuous learning. A bar‑raiser would note my end‑to‑end ownership, deep dive into AWS services, quantifiable impact, and proactive failure mitigation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
