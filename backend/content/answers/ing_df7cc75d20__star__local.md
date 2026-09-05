---
qid: ing_df7cc75d20__star__local
question: 'Explain: Built from the note, not bolted onto it — Abridge | Ambient AI
  for Revenue Cycle'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 317
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:40-05:00'
sources: []
---

**Situation**  
At a mid‑size hospital we were drowning in paper claims: over 12,000 daily, 25% delayed payments, and an aging backlog that cost the revenue cycle $3 M annually.

**Task**  
I needed to build an ambient AI layer that could “read” existing handwritten notes and automatically populate the electronic health record (EHR) without forcing clinicians to adopt a new interface or re‑enter data.

**Action**  
1. I scoped the workflow and gathered 200,000 anonymized chart notes for training.  
2. Using Google Cloud’s AutoML Vision OCR, I fine‑tuned a model on domain‑specific terminology (ICD‑10 codes, CPT modifiers).  
3. Integrated the model into our middleware via RESTful APIs; it listened to the note stream in real time and pushed structured fields back to Epic with HL7 FHIR bundles.  
4. Added an audit trail so physicians could review and correct auto‑filled entries before final submission.  
5. Deployed in a phased rollout, starting with outpatient claims.

**Result**  
Processing speed increased 6×, claim accuracy rose from 78% to 95%, and the backlog shrank by 70% within three months—saving the hospital roughly $2.1 M per year. I learned that embedding AI “from the note” preserves clinician trust while dramatically improving throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
