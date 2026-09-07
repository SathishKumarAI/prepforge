---
qid: ing_6063536fdc__aws__local
question: 'Explain: Availability in parallel vs in sequence — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 473
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:03:46-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked with redesigning a data‑pipeline that processed user events for a recommendation engine. The original design ran jobs sequentially on an EC2 instance, taking ~8 hrs per day and causing stale models.

**Action (A)**  
1. **Dive Deep into Bottlenecks** – profiled the pipeline; I found three independent stages: ingestion → feature extraction → model training.  
2. **Parallelize with AWS Glue & EMR** – launched a *Glue ETL job* for ingestion and a *Spark cluster on EMR* for feature extraction, each running in parallel across 4 m5.xlarge nodes (≈$0.12 h⁻¹ per node).  
3. **Serverless Model Training** – swapped the training step to SageMaker Pipelines with an *ml.m5.large* notebook, auto‑scaling to 2 instances for peak load.  
4. **Cost & Availability Trade‑offs** – leveraged Spot Instances (80 % cost reduction) with On‑Demand fallbacks; used S3 Event Notifications and Lambda to trigger jobs, ensuring high availability (>99.9 %) without manual intervention.

**Result (R)**  
- Reduced total processing time from 8 hrs to **1 hr** (90 % faster).  
- Model freshness improved by 96 %, boosting recommendation click‑through rate from 3.2 % to **4.7 %** (+46 %).  
- Daily cost dropped from ~$120 to **$35**, a 70 % savings.

---

### Leadership Principles Highlighted
- **Customer Obsession:** Faster, fresher recommendations directly improved user engagement.  
- **Ownership & Dive Deep:** I took full responsibility for the pipeline, dissected every component, and re‑engineered it end‑to‑end.  

### What a Bar‑Raiser Listens For
- Clear ownership of the problem and solution.  
- Quantified impact (time, cost, CTR).  
- Depth: detailed design choices, AWS services used, scalability & trade‑offs.  
- Reflection on failure modes (Spot interruptions) and mitigation strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
