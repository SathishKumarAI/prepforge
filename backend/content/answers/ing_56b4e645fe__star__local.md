---
qid: ing_56b4e645fe__star__local
question: 'Explain: Agents — Harvey | AI software for legal and professional services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 323
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:21:26-05:00'
sources: []
---

**Situation** – At a mid‑size law firm, our litigation support team was drowning in discovery documents: 1.2 million pages of e‑mail and contracts needed triage before the court deadline. The manual review time cost us roughly $30k per month.

**Task** – I had to reduce the triage cycle from 12 days to under three while keeping accuracy above 95 % so we could meet the judge’s filing date without inflating costs.

**Action** – I introduced Harvey, an AI legal‑assistant platform that uses NLP and knowledge graphs. First, I mapped our internal taxonomy into a structured ontology and uploaded it to Harvey. Then I trained its document classification model on a curated set of 10,000 labeled emails, using BERT fine‑tuned for legal jargon. Next, I integrated the tool with our DMS via API so that new documents automatically fed into Harvey’s workflow. Finally, I built a lightweight dashboard in Power BI to surface flagged items and confidence scores for attorneys to review.

**Result** – The triage time dropped from 12 days to 2 days, cutting costs by $27k per month. Accuracy stayed at 96 %, and the team reported higher focus on strategy rather than data cleanup. I learned that coupling a well‑trained NLP model with an existing ontology can deliver rapid ROI in legal tech.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
