---
qid: ing_c00f173e7d__aws__local
question: 'Explain: The Single Biggest Change in 2026: AI-Assisted Rounds'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 500
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:38:14-05:00'
sources: []
---

**Situation (S)** – In Q1 2026 we launched a pilot in the oncology department where physicians spent an average of **4 h per patient** on chart review, imaging analysis and literature lookup before each round.  

**Task (T)** – Reduce that prep time by 60% while keeping diagnostic accuracy above 95 %.  

**Action (A)** – I owned a cross‑functional team and built an AI‑assisted “Round Assistant” using:
1. **Amazon SageMaker** for multimodal models (NLP + computer vision) to auto‑extract key facts from EHR, interpret CT scans, and surface evidence‑based guidelines.  
2. **AWS Lambda & Step Functions** orchestrate the inference pipeline in < 3 s per patient.  
3. **Amazon Kinesis Data Streams** ingest real‑time vitals; a **Comprehend Medical** layer tags medications, doses, and contraindications.  
4. **Amazon QuickSight dashboards** give physicians an instant “Patient Snapshot” that updates as new data streams in.  

We deployed the solution on a **multi‑AZ VPC** with **ECS Fargate** to guarantee 99.9 % availability, and used **S3 Intelligent‑Tiering** for long‑term audit logs, keeping monthly cost under $12k (≈ 30 % below baseline).  

**Result (R)** – After three months of rollout, prep time dropped from 4 h to **1.5 h** (a **62 % reduction**), diagnostic accuracy stayed at **96 %**, and physician satisfaction scores rose from 3.2/5 to **4.6/5**.  

*Leadership Principles:*  
- **Customer Obsession** – we built the tool directly around clinician pain points.  
- **Ownership & Dive Deep** – I led architecture decisions, debugged model drift, and iterated on data pipelines until SLA met.  

*Bar‑raiser takeaways:* ownership shown by end‑to‑end delivery; deep dive into latency trade‑offs; quantified impact (time saved, cost reduced); lessons learned from early bias in the imaging model were corrected with active monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
