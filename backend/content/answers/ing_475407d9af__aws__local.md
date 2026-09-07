---
qid: ing_475407d9af__aws__local
question: 'Explain: pass@k — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 488
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:07:03-05:00'
sources: []
---

**Situation / Task**  
I led a data‑science team at a fintech startup that built a recommendation engine for loan offers. The model had to be *fair*, *explainable* and meet an SLA of < 1 s inference. We needed a metric that reflected real‑world relevance, so I chose **pass@k** (the fraction of users who received at least one relevant item in the top‑k list).  

**Action**  
I built a Lambda‑driven pipeline on AWS:

| Step | Service | Reason |
|------|---------|--------|
| Feature extraction | Amazon SageMaker Processing | Scalable batch jobs, integrated with S3 data lake |
| Model inference | SageMaker Endpoint (GPU) + API Gateway | Low latency, auto‑scaling |
| Pass@k calculation | AWS Glue ETL → Redshift Spectrum | Joins user logs & ground truth; SQL aggregate gives pass@k in < 30 s |
| Observability | CloudWatch metrics + X-Ray traces + OpenTelemetry exporters to Grafana | Real‑time dashboards for SLA, drift detection |

I set a **pass@k‑threshold of 0.78** (based on A/B test against baseline). The system achieved **82% pass@k** within the first month, and inference latency averaged 0.6 s.  

**Result**  
The model increased loan uptake by **12%**, translating to ~$1.5M additional revenue in Q3. Cost per inference dropped from $0.04 to $0.02 via spot instances, saving ~30% annually.  

---

### Leadership Principles Highlighted  
- **Customer Obsession:** Pass@k directly measures user relevance.  
- **Ownership & Dive Deep:** I owned the end‑to‑end pipeline and debugged latency spikes by inspecting X‑Ray traces.  

**Bar‑raiser cues** – ownership (end‑to‑end), depth (glue + Redshift query tuning), quantified impact (12% lift, $1.5M revenue), learning from failure (initial 75% pass@k → tuned features).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
