---
qid: ing_ff22f52089__aws__local
question: 'Explain: Welcome to the 🤗 AI Agents Course · Hugging Face'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 412
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:54:54-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team that built an internal recommendation engine, I was asked to migrate the model training and inference pipeline from on‑prem GPU racks to a cloud‑native solution so we could scale to +10 × traffic without increasing latency.

**Action (Design & Tech)**  
I chose **Amazon SageMaker** for training and hosting; paired it with **S3** for data lake, **ECS Fargate** for ancillary services, and **API Gateway + Lambda** for a low‑latency inference façade.  
- **Scalability:** SageMaker’s distributed training (multi‑GPU) cut model convergence time from 48 hrs to 4 hrs. Auto‑scaling of endpoints kept 99.9 % SLA while keeping cost < $200/day.  
- **Availability:** I enabled Multi‑AZ deployments and leveraged Spot Instances for cost savings, achieving a 40 % reduction in infra spend.  
- **Cost/Trade‑offs:** Switching from on‑prem to spot reduced GPU hours by 70 %, but required redesigning the data pipeline to be idempotent; we introduced a Kinesis stream to buffer training data, incurring minimal extra cost.

**Result**  
Post‑migration, inference latency dropped from 350 ms to 80 ms and throughput rose from 5 kRPS to 50 kRPS. The cost per request fell by 55 %, freeing $1.2M annually for new feature development.  

**Reflection (Bar‑raiser)**  
I took full ownership of the migration, dived deep into SageMaker’s pricing model, and iterated on the architecture until we hit our SLA targets. The biggest learning was that automated scaling must be coupled with graceful degradation logic—otherwise a spike could still break user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
