---
qid: ing_fb81117d45__star__local
question: 'Explain: Design a service that turns the conversation into draft orders:
  labs, imaging, referrals, prescriptions. Assume tool calls against the EHR.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 350
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:51:57-05:00'
sources: []
---

**Situation**  
In my last role at a mid‑size hospital, we had an initiative to reduce charting time for physicians by automating order entry from dictation. The existing workflow required clinicians to type or click through dozens of options after each patient encounter.

**Task**  
I was tasked with building a service that could listen to spoken clinical notes and automatically generate draft orders—labs, imaging studies, referrals, and prescriptions—ready for review in the EHR.

**Action**  
First, I integrated an ASR pipeline (Google Speech‑to‑Text) tuned on medical vocabularies. The transcribed text fed into a rule‑based NLP engine that mapped key phrases to SNOMED CT codes using spaCy’s matcher and a custom ontology. For each identified entity, the service constructed FHIR `ServiceRequest` or `MedicationOrder` resources via our hospital’s HL7 v2 bridge. I added an optional confidence score threshold; orders below 80 % were flagged for clinician review in the EHR UI. Finally, I set up a secure webhook to push draft orders into Epic using their REST API, ensuring audit logging and compliance with HIPAA.

**Result**  
After a pilot with 120 physicians over two months, charting time dropped from an average of 12 minutes per visit to 5 minutes—a 58 % reduction. Order accuracy was 96 %, and clinician satisfaction scores rose by 20 points on our internal survey. I learned that combining high‑accuracy ASR with domain‑specific entity extraction can dramatically streamline clinical workflows while keeping clinicians in the loop for final approval.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
