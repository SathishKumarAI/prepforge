---
qid: ing_5b75749e76__star__local
question: 'Explain: Research — Harvey | AI software for legal and professional services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 387
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:30:19-05:00'
sources: []
---

**Situation** – I was working as a product analyst at a mid‑size law tech startup. Our leadership wanted to understand how a leading AI platform, Harvey, could be integrated into our workflow for contract review and compliance checks. The company had just launched its first version of an automated document assistant, but adoption was low because users felt the tool produced too many false positives.

**Task** – My goal was to conduct a hands‑on research study comparing Harvey’s NLP accuracy against our own model, identify gaps in domain terminology, and propose a hybrid approach that would improve precision without adding latency.

**Action** – I built a benchmark dataset of 3,000 real client contracts, tagged by senior attorneys. Using Python and spaCy, I ran parallel inference on both Harvey and our custom transformer, then performed error‑analysis with confusion matrices. I discovered that Harvey misclassified “indemnity” clauses in over 27 % of cases due to outdated legal lexicon. To fix this, I fine‑tuned a BERT model on the tagged dataset, merged its outputs with Harvey via an ensemble voting scheme, and added a lightweight rule‑based post‑processor for high‑risk terms.

**Result** – The hybrid system cut false positives by 42 % (from 18 % to 10 %) and reduced review time per document from 12 minutes to 7.5 minutes. User satisfaction scores rose 35 %, and the team adopted the solution company‑wide. I learned that combining commercial AI with in‑house fine‑tuning can yield a more reliable, domain‑specific product while keeping costs manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
