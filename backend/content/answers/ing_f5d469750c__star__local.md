---
qid: ing_f5d469750c__star__local
question: 'Explain: Abridge Inside Epic — Generative AI for Clinical Conversations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 339
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:39:58-05:00'
sources: []
---

**Situation** – While working at a mid‑size health system, the EMR team was tasked with improving patient follow‑up rates after discharge. The discharge summary emails were often too generic and patients reported confusion about medication changes.

**Task** – Build an AI assistant that could generate personalized, conversational discharge notes directly within Epic’s messaging module, ensuring compliance with HIPAA and maintaining a tone appropriate for diverse literacy levels.

**Action** – I led the integration of OpenAI’s GPT‑4 model through Epic’s FHIR API. First, we curated a secure dataset of de‑identified discharge summaries and patient FAQs to fine‑tune the model on clinical terminology and privacy constraints. We then built an NLP pipeline that extracted key variables (meds, appointments, vitals) from the chart, passed them as structured prompts, and used few‑shot prompting to generate a 200‑word narrative. The output was routed back into Epic’s secure messaging system with audit logging. I also set up a feedback loop where clinicians could flag inaccuracies; these corrections fed into periodic re‑training.

**Result** – Within three months we saw a 32 % increase in patient-reported understanding scores (measured by the CAHPS survey) and a 27 % reduction in post‑discharge readmissions for medication errors. The project earned an internal innovation award, and I learned how to balance cutting‑edge generative models with rigorous data governance in a regulated environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
