---
qid: ing_d51ead6770__aws__local
question: 'Explain: AI Infrastructure Design — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 488
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:40-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team at a fintech startup that needed an end‑to‑end ML pipeline to predict credit risk in real time. The goal was to reduce false positives by 30 % while keeping latency < 200 ms for each transaction.

**Action**  
*Design*: I chose **Amazon SageMaker** for training and inference, coupled with **S3** (raw data lake), **Glue** (ETL), **ECS Fargate** (feature store) and **API Gateway + Lambda** for the low‑latency inference endpoint.  
*Scalability*: The training cluster auto‑scales on GPU instances; inference uses a multi‑model endpoint that routes traffic based on model version, guaranteeing 99.9 % availability.  
*Cost*: By enabling SageMaker’s **managed spot training**, we cut GPU hours by 45 %. We also leveraged **S3 Intelligent-Tiering** for storage, reducing monthly data costs by $2k/month.  
*Monitoring*: CloudWatch metrics + SageMaker Model Monitor fed into an SNS alerting system, ensuring drift detection within 10 minutes.

**Result**  
- Reduced false positives from 12 % to 8.4 % (30 % drop).  
- Achieved 95 % inference success rate with < 180 ms latency.  
- Cut overall ML spend by $15k/month, a 25 % savings versus the previous on‑prem stack.

**Leadership Principles Reflected**  
*Customer Obsession*: Delivered a faster, more accurate risk score for our users.  
*Ownership & Dive Deep*: Architected every layer, from data ingestion to model monitoring, and iterated based on real metrics.  

**Bar‑raiser Takeaway**  
Listen for concrete ownership (end‑to‑end responsibility), depth in the technical stack (service choices, trade‑offs), quantified impact (exact percentages and cost numbers), and evidence of learning—here we shifted from on‑prem to managed AWS services after a costly failure during a pilot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
