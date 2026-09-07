---
qid: ing_4eaeec88f7__aws__local
question: 'Explain: Note generation — Transforming Clinical Documentation with Advanced
  AI | Abridge AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 461
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:23:10-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to lead a pilot that could turn raw clinician notes into structured, searchable “note‑generations” for a hospital’s EMR system—essentially turning unstructured prose into machine‑readable data. The goal: cut the 30 min average note‑writing time per patient by 40% while keeping clinical accuracy >95%.

**Action (Technical)**  
I scoped requirements, built an end‑to‑end pipeline on AWS:
- **Data ingestion**: Amazon Kinesis Data Streams → Lambda to strip PHI and store raw notes in S3.  
- **NLP & generation**: SageMaker endpoints running a custom BERT model fine‑tuned on 200k de‑identified notes; output is structured JSON with ICD‑10, CPT codes, and summary text.  
- **Storage & search**: Amazon DynamoDB for quick key/value retrieval + OpenSearch for full‑text queries.  
- **Governance**: IAM roles enforce least privilege; CloudTrail logs every transform.  
I introduced a “double‑check” step where 10% of outputs were manually reviewed, feeding back into model retraining (continuous learning loop).  

**Result**  
After 3 months we saw a **42 % reduction in note‑writing time** and an **accuracy score of 97 %**. Cost per patient dropped from $15 to $9 due to efficient serverless compute. The system scaled to >10,000 notes/day with <99.9 % availability.

**Reflection (Leadership)**  
- *Customer Obsession*: Delivered a solution that directly improved clinicians’ workflow.  
- *Ownership & Dive Deep*: I owned the end‑to‑end stack, debugged latency spikes, and iterated on model performance.  
- *Learn from Failure*: Early mis‑classifications taught us to augment training data with edge cases—now our error rate is <3 %.  

This experience showcases my ability to blend deep technical design with measurable business impact—a hallmark of Amazon’s leadership culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
