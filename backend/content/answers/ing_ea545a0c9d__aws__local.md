---
qid: ing_ea545a0c9d__aws__local
question: 'Explain: Enterprise Sales Engineer (Brazilian Portuguese speaking)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 451
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:08:03-05:00'
sources: []
---

**Situation / Task**  
I was hired by a SaaS startup that sold AI‑driven sales enablement tools to Fortune 500 firms in Brazil. The challenge: build an end‑to‑end ML pipeline that recommends the best product bundle for each prospect while respecting local language nuances and compliance rules.

**Action**  
*Customer Obsession & Ownership* – I mapped the entire customer journey, interviewed 12 key prospects, and identified three critical metrics: **CLV uplift**, **deal close rate**, and **NPS**.  
I designed a scalable solution on AWS:
1. **Data ingestion**: Kinesis Data Streams → Glue ETL (Portuguese NLP tokenization).  
2. **Feature store**: SageMaker Feature Store, persisted in DynamoDB for low‑latency lookup.  
3. **Model training**: SageMaker Pipelines with XGBoost + transformer‑based language model fine‑tuned on Brazilian Portuguese sales transcripts.  
4. **Inference**: SageMaker Endpoint behind an Application Load Balancer, auto‑scaling to 50 requests/sec per region.  
5. **Observability**: CloudWatch metrics + Evidently experiments for A/B testing.  

*Bias for Action & Dive Deep* – I ran a pilot with 300 prospects; the model increased deal close rate by **18 %** and CLV by **12 %**, while keeping latency under 200 ms.

**Result**  
Within six months, revenue grew from $2M to $4.5M YoY, NPS rose from 65 to 78, and the solution was adopted across all Brazilian accounts. The bar‑raiser would note my ownership of the full stack, deep dive into language specifics, quantified impact, and lessons learned when a compliance audit forced us to rebuild data pipelines—an experience that sharpened our governance framework.

*Leadership Principles highlighted: Customer Obsession, Ownership, Dive Deep, Bias for Action.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
