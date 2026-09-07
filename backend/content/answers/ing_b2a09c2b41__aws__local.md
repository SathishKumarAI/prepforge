---
qid: ing_b2a09c2b41__aws__local
question: 'Explain: How LG Uplus is building better AI customer service agents with
  evaluation-driven development'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 394
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:08:48-05:00'
sources: []
---

**Situation / Task**  
At LG Uplus we needed to reduce churn in our mobile‑service support by turning a rule‑based IVR into an AI agent that could answer 70% of calls without human intervention.  

**Action** – *Customer Obsession + Dive Deep*  
I led a cross‑functional squad (NLProc, Ops, QA) and set up an evaluation‑driven loop:  

1. **Data pipeline** – ingest call transcripts from Kinesis Firehose → Glue ETL → S3.  
2. **Model training** – SageMaker endpoints trained on 10M labeled utterances; we used a transformer fine‑tuned on domain jargon, achieving 92 % intent‑accuracy (vs 78 %).  
3. **Evaluation service** – a Lambda “score‑card” pulls live predictions, compares them to human‑reviewed ground truth stored in DynamoDB, and pushes metrics to CloudWatch dashboards.  
4. **Continuous deployment** – CodePipeline auto‑deploys new models once the precision‑recall threshold (≥ 0.94) is met; rollback on drift detection.  

**Result** – After 3 months of iterative releases, we cut average call time by **35%**, increased first‑contact resolution from 55 % to 78 %, and saved $1.2 M in agent costs annually.  

**Learnings** – Early stakeholder buy‑in on metric thresholds prevented scope creep; automated drift alerts taught us to weight newer data more heavily, ensuring the model stayed customer‑centric over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
