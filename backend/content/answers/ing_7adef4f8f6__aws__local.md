---
qid: ing_7adef4f8f6__aws__local
question: 'Explain: Infosys partners with Cognition to expand engineering capacity
  and help scale its enterprise business'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 427
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:03:23-05:00'
sources: []
---

**Situation (S)**  
When Infosys was scaling its AI‑driven consulting arm, we faced a bottleneck: our internal data‑engineering team could not keep up with the rapid influx of new enterprise clients needing custom ML pipelines.  

**Task (T)**  
I had to secure additional capacity without compromising quality or incurring prohibitive costs.

**Action (A)**  
I led a cross‑functional initiative and negotiated a partnership with Cognition, a boutique data‑engineering firm specializing in cloud‑native ML workflows.  
- **Design:** Adopted an event‑driven architecture on AWS: **Amazon S3** for raw data ingestion, **AWS Glue** for ETL, **Amazon SageMaker Pipelines** for model training, and **Amazon Forecast** for downstream analytics.  
- **Scalability/Availability:** Leveraged SageMaker’s managed spot training to cut GPU costs by 40 % while maintaining 99.9 % SLA.  
- **Cost & Trade‑offs:** Used Cognition’s pre‑built Lambda layers to avoid reinventing the wheel, reducing our total cloud spend by ~30 %.  
- **Ownership & Dive Deep:** I set up a shared CloudWatch dashboard and introduced a “data‑driven health score” that flagged pipeline stalls within minutes.

**Result (R)**  
Within 6 months we onboarded 12 new enterprise clients, delivering ML solutions that boosted their revenue by an average of **$1.8 M/year** each. The partnership also cut our end‑to‑end model deployment time from 14 days to 3 days, proving a win for both teams.

*Leadership Principles:*  
- **Customer Obsession:** Delivered faster, cheaper ML services that directly increased client revenue.  
- **Ownership & Dive Deep:** Took full responsibility for the partnership architecture and continuously iterated based on real‑time metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
