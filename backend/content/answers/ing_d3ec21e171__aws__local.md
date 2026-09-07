---
qid: ing_d3ec21e171__aws__local
question: 'Explain: Telemetry — GitHub - Arize-ai/phoenix: AI Observability & Evaluation
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 463
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:43-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional AI team at my previous company, we built a real‑time model monitoring platform that ingested millions of inference events per day (≈ 5 M/day). The goal was to surface performance drift before customers saw degraded predictions.

**Action**  
I owned the architecture and drove it from a “Telemetry” standpoint:

1. **Data ingestion** – Kinesis Data Streams for low‑latency, fault‑tolerant event capture; each record carried model ID, input hash, output score, latency, and metadata.  
2. **Processing & feature extraction** – Lambda functions performed schema validation and extracted key metrics (mean, std dev, confidence intervals).  
3. **Storage & analytics** – DynamoDB tables indexed by `model_id` + timestamp; aggregated aggregates were pushed to Amazon Timestream for time‑series queries.  
4. **Alerting** – CloudWatch Alarms monitored drift thresholds; SNS notified data scientists and Ops.  
5. **Dashboard** – QuickSight visualized live KPIs (latency, accuracy, drift) with drill‑down into offending inputs.

I also introduced a “Model‑Version” flag to enable A/B testing of new releases without impacting production traffic.  

**Result**  
Within 3 months the platform reduced model‑drift incidents by **68 %**, cutting customer support tickets from 120/month to 42/month. The cost per event stayed below $0.00002, keeping overall spend under $200/day while supporting 10× more models.

**Reflection (Bar‑raiser cues)**  
- Demonstrated *Ownership* by driving the full stack and aligning stakeholders.  
- Showed *Dive Deep* through detailed service choices and trade‑offs (Lambda vs Fargate, Timestream vs Redshift).  
- Quantified impact with concrete metrics and cost analysis.  
- Learned from a failed prototype that used S3 event notifications; we pivoted to Kinesis for lower latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
