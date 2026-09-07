---
qid: ing_97ffba6df3__aws__local
question: 'Explain: AI Observability & Evals For the Agentic Era'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 602
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:09:28-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led a cross‑functional team that built an autonomous customer‑support agent for a global retailer. By **June 2024** the bot handled 1.2 M tickets/month with a 92 % first‑contact resolution rate, but we noticed subtle drift in intent classification and latency spikes during holiday peaks.

**Task (T)**  
My goal was to create an end‑to‑end observability & evaluation framework that would surface model degradation early, reduce SLA violations by 30 %, and give data scientists a continuous feedback loop—essentially “AI Observability & Evals for the Agentic Era.”

**Action (A)**  
1. **Observability Layer** – Deployed *Amazon CloudWatch* custom metrics + *AWS X-Ray* tracing on Lambda‑based inference endpoints; added *Kinesis Data Firehose* to stream raw request/response logs into an S3 data lake.  
2. **Evaluation Engine** – Built a scheduled Glue ETL that aggregates 1 s latency, accuracy scores (from labeled “golden” tickets), and user sentiment from Amazon Comprehend. Results are pushed daily to a *QuickSight* dashboard with anomaly detection via *Amazon Forecast*.  
3. **Automated Retraining Trigger** – When the drift metric exceeds 2σ, an SNS topic triggers an SageMaker training job (using *SageMaker Model Monitor*) that retrains on recent data and deploys via *ECR + ECS Fargate* with blue/green traffic shifting.  
4. **Cost‑control** – Leveraged Spot Instances for training and reserved capacity for inference, keeping spend below 12 % of the original budget.

**Result (R)**  
- Reduced SLA violations from 8 % to 2.5 % in Q3 2024.  
- Cut average ticket handling time by 18 %.  
- Saved $45K/month on unnecessary over‑provisioning through Spot usage.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – Continuous monitoring ensures the agent delivers consistent, high‑quality support.  
- **Ownership & Dive Deep** – I owned the full pipeline from data ingestion to retraining, digging into latency graphs and model drift statistics.

### Bar‑raiser Takeaways
- Demonstrated *ownership* by building a self‑healing ML system.  
- Showed *dive deep* through metrics (latency, accuracy) and anomaly thresholds.  
- Quantified impact with concrete numbers (SLA drop, cost savings).  
- Learned from early failures: initial model drift caused 4 % SLA spike; after adding real‑time alerts we preemptively retrained before the holiday surge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
