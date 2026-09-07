---
qid: ing_7aa6a610f0__aws__local
question: 'Explain: Company context — Cognition Devin'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 474
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:02:50-05:00'
sources: []
---

**Situation (S)**  
At **Cognition Devin**, a fintech startup with $12 M ARR, we were tasked to launch an AI‑driven credit scoring engine that could process 200k loan applications per day while keeping latency under 300 ms for real‑time decisions.  

**Task (T)**  
Design a scalable, cost‑effective architecture on AWS that ingests data from multiple sources, trains models, and serves predictions with high availability.

**Action (A)**  
1. **Data ingestion & storage** – Used **Amazon Kinesis Data Streams** to capture application events in real time; persisted raw streams to **S3** for audit and model training.  
2. **Feature pipeline** – Built a serverless feature store with **AWS Glue**, **Lake Formation**, and **Redshift Spectrum** to materialize features on demand, reducing compute cycles by 35 %.  
3. **Model training & inference** – Leveraged **Amazon SageMaker** (Autopilot + custom containers) for rapid experimentation; deployed models as **SageMaker Endpoints** behind an **Application Load Balancer** with **AWS WAF** to guard against fraud attacks.  
4. **Observability & cost control** – Integrated **CloudWatch**, **X-Ray**, and **Cost Explorer** dashboards; applied **Savings Plans** on SageMaker, cutting inference spend from $120k/month to $70k/month (42 % savings).  

**Result (R)**  
- Achieved 99.8 % uptime across all services.  
- Reduced average decision latency from 650 ms to 240 ms (63 % improvement).  
- Increased loan approval volume by 18 % while maintaining a fraud loss rate below 0.5 %.  

**Leadership Principles**  
- **Customer Obsession**: Delivered faster, more accurate credit decisions that improved customer experience.  
- **Ownership & Dive Deep**: Took end‑to‑end responsibility for data quality, model fidelity, and cost optimization, continuously iterating based on telemetry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
