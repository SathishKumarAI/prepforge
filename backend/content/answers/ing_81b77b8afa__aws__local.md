---
qid: ing_81b77b8afa__aws__local
question: Turn a conversation into billable diagnosis codes. What is the accuracy
  bar, and how do you build to it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 641
total_tokens: 883
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:18:06-05:00'
sources: []
---

**Situation / Task**  
At a health‑tech startup I led the launch of an AI product that converts free‑text doctor–patient chats into ICD‑10 billable codes. The client demanded *>95 % precision* to meet payer audit standards and avoid denials.

**Action**  

| Step | Technical Stack | Why |
|------|-----------------|-----|
| **Speech → Text** | Amazon Transcribe (medical vocab) + Whisper fine‑tuned on 200k transcripts | Low latency, auto‑speaker diarization |
| **Entity extraction & coding** | Amazon Comprehend Medical + custom SageMaker model (BERT‑based) trained on 1 M labeled notes | Combines pre‑built medical NER with domain‑specific ICD mapping |
| **Post‑processing & validation** | AWS Lambda → DynamoDB for versioned code lists; rule engine in Step Functions to enforce coding hierarchy | Ensures consistency, audit trail |
| **Quality monitoring** | CloudWatch + Athena on logs → weekly dashboards (precision/recall per code group) | Continuous feedback loop |

*Scalability*: Autoscaling Lambda and SageMaker endpoints handle 10k chats/day with <2 s latency.  
*Availability*: Multi‑AZ deployment, S3 for backups, DynamoDB global tables for read/write in all regions.  
*Cost*: Spot instances + Savings Plans reduce compute spend by 35 % while keeping SLAs.

**Result**  

- Achieved **97 % precision / 94 % recall** on a held‑out test set (vs. 85/80 baseline).  
- Reduced claim denials by **38 %** for the first quarter post‑launch.  
- Cut manual coding effort by **70 %**, freeing clinicians to focus on care.

**Learning & Bar‑raiser cues**

- *Ownership*: I owned end‑to‑end pipeline, from data ingestion to billing integration.  
- *Dive Deep*: Trained my own BERT model after discovering that Comprehend Medical missed 12 % of rare codes.  
- *Quantified Impact*: Reported exact denial reductions and cost savings to executive board.  
- *Failure*: Early prototypes over‑coded “pain” as “musculoskeletal disorder”; we introduced a confidence threshold, learned from audit logs, and iterated until metrics met the bar.

**Leadership Principles highlighted**

1. **Customer Obsession** – Delivering accurate codes that protect revenue for payers.  
2. **Ownership** – From data pipeline to post‑production monitoring.  
3. **Dive Deep & Bias for Action** – Rapid experimentation with models and thresholds.  

This approach met the 95 % accuracy bar while staying cost‑effective, scalable, and audit‑ready.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
