---
qid: ing_a4969c90bd__aws__local
question: 'Explain: Inpatient CDI delivered quietly—in the note, not after discharge'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 400
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:36-05:00'
sources: []
---

**Situation (S)** – At a 600‑bed academic hospital we saw that clinicians rarely read the “Clinical Decision Insight” (CDI) alerts because they were displayed only after discharge in the summary report. **Task (T)** – Redesign the CDI delivery so it appears silently inside the progress note while the clinician is writing, increasing uptake without interrupting workflow.

**Action (A)** –  
1. *Ownership & Bias for Action*: I led a cross‑functional squad (EHR architects, data scientists, clinical champions).  
2. *Dive Deep*: Analyzed 4 M notes to identify key decision points using Amazon Comprehend Medical and custom NER models on SageMaker.  
3. *Design*: Deployed a Lambda‑driven microservice that streams note text to an EventBridge rule → DynamoDB stream → real‑time inference via SageMaker endpoint. Results are returned to the EHR’s FHIR API as a “hidden” JSON tag, rendered in the editor UI without pop‑ups.  
4. *AWS Services*: Lambda (serverless compute), SageMaker (model hosting), DynamoDB (low‑latency storage), EventBridge (event bus).  

**Result (R)** – Adoption jumped from 12 % to **78 %** within three months, and the average time per note decreased by **9 %**, saving ~1.2 k clinician hours/month. Cost was $0.02/alert, under budget.

*Bar‑raiser focus*: demonstrated end‑to‑end ownership, quantified impact, deep technical dive, and learned that early user testing avoided UI clutter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
