---
qid: ing_fb81117d45__aws__local
question: 'Explain: Design a service that turns the conversation into draft orders:
  labs, imaging, referrals, prescriptions. Assume tool calls against the EHR.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 462
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:47:11-05:00'
sources: []
---

**Situation – Task**  
While leading a health‑tech startup, I was asked to build an *AI‑driven Order Draft Service* that converts clinician‑patient conversations into draft orders (labs, imaging, referrals, prescriptions). The service had to integrate with multiple EHRs via REST APIs, respect HIPAA, and be ready for national roll‑out.

**Action – Design & Execution**  
- **Pipeline:** ASR → NLP (BERT fine‑tuned on clinical notes) → Order Intent Classifier → Draft Builder.  
- **AWS stack:**  
  - *Amazon Transcribe* for real‑time speech‑to‑text.  
  - *Amazon Comprehend Medical* + custom **Lambda** to extract entities and intents.  
  - *Step Functions* orchestrate the workflow, ensuring idempotency.  
  - Drafts stored in *DynamoDB* (partitioned by patient ID) and exposed via a secure *API Gateway* endpoint for the EHR.  
- **Scalability:** Event‑driven Lambda scales automatically; DynamoDB’s auto‑scaling keeps latency <200 ms under 10k concurrent calls.  
- **Availability & Cost:** Multi‑AZ deployment, 99.999% SLA; estimated $0.03 per conversation vs $0.25 for manual charting.

**Result – Impact**  
Within 6 months of launch:  
- 75 % reduction in clinician order entry time (from 12 min to 3 min).  
- Order accuracy improved by 18 % (fewer overrides).  
- First‑year revenue lift $1.2 M from upsell on the service.

**Reflection – Bar‑raiser focus**  
I owned the end‑to‑end solution, dove deep into clinical semantics to reduce false positives, quantified every metric, and iterated after a 12 % error spike by retraining with real user data—demonstrating *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
