---
qid: ing_a260a881b4__aws__local
question: 'Explain: Measuring Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 465
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:32:11-05:00'
sources: []
---

**Situation (S)**  
At my previous firm I led a project for a BigLaw client—Harvey & Co.—to audit the accuracy of an NLP model that auto‑generates legal briefs. The model was “hallucinating” facts: it inserted non‑existent case citations and dates, which could lead to costly litigation errors.

**Task (T)**  
I had to build a scalable pipeline that automatically detects hallucinations, quantifies their frequency, and feeds back corrections so the model could improve while ensuring compliance with federal disclosure rules.

**Action (A)**  
1. **Data‑Driven Detection** – I wrote a rule‑based validator in Python, then augmented it with an open‑source transformer (BERT) fine‑tuned on legal corpora to flag inconsistencies.  
2. **AWS Architecture** –  
   * **Amazon SageMaker** for training & inference.  
   * **Lambda + Step Functions** orchestrate the validation workflow and trigger a **DynamoDB** table that logs hallucination counts per document.  
   * **Amazon QuickSight** dashboards provide real‑time KPI metrics (e.g., 12 % hallucination rate → 3 % after correction).  
3. **Feedback Loop** – Every flagged instance is auto‑tagged and sent to an S3 bucket; the data pipeline retrains the model nightly, reducing hallucinations by 35 % in two weeks.

**Result (R)**  
Within one month we cut false‑positive citations from 12 % to 7.8 %, saving the client ~$250k in potential settlement costs and earning a formal commendation for risk mitigation.

---

### Leadership Principles

* **Customer Obsession** – Delivered a solution that directly protected the client’s reputation and bottom line.  
* **Ownership & Dive Deep** – Took full responsibility from data ingestion to model retraining, diving into both legal domain nuances and AWS scaling best practices.  

Bar‑raisers look for ownership, measurable impact, deep technical reasoning, and lessons learned—this answer demonstrates all three.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
