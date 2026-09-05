---
qid: ing_f75422e869__star__local
question: 'Explain: Purpose-built for every care setting. — Abridge | Ambient AI for
  Revenue Cycle'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 341
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:43:25-05:00'
sources: []
---

**Situation:** At a mid‑size regional hospital, the billing department was drowning in manual claim rejections—over 18% of submissions were flagged for coding errors or missing documentation, pushing the days‑in‑accounts receivable (A/R) from 42 to 57 days.

**Task:** I was tasked with implementing an ambient AI system that could adapt to each care setting—ER, inpatient, outpatient clinics—and reduce claim rejections by at least 30% within six months.

**Action:** First, I mapped the workflow differences across departments and built a lightweight NLP pipeline on AWS Comprehend Custom. Using labeled training data from each unit, the model learned local terminology (e.g., “ED discharge” vs. “inpatient discharge”) and automatically flagged incomplete ICD‑10 codes in real time. I integrated this with Epic’s FHIR API so that as clinicians entered chart notes, the AI suggested missing modifiers or required documentation. We also set up a feedback loop: rejected claims were routed back to the system for continuous learning, and a Slack bot sent instant alerts to coders when high‑risk claims were detected.

**Result:** Within four months, claim rejection rates fell from 18% to 12%, a 33% reduction, and days‑in‑A/R dropped by 9 days—bringing revenue back $2.1 M annually. I learned that tailoring AI models to the semantic nuances of each care setting is key; one generic model would have missed critical context and underperformed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
