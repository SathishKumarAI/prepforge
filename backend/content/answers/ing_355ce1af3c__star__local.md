---
qid: ing_355ce1af3c__star__local
question: Two good clinicians write different notes for the same visit. So how do
  you evaluate note quality at all?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 342
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:14:58-05:00'
sources: []
---

**Situation** – In a mid‑size hospital’s EMR system, I was tasked with auditing clinician documentation for billing compliance after an audit flagged a spike in denied claims due to “incomplete visit notes.” Two senior clinicians had been writing vastly different styles: one wrote concise SOAP notes while the other preferred narrative summaries.  

**Task** – Build a scalable process to evaluate note quality across thousands of visits, identify inconsistencies, and recommend standardization without stifling individual style.  

**Action** – I first extracted 10,000 visit notes and used spaCy to tokenize them, then applied a custom rule‑based scoring system: (1) presence of key ICD codes, (2) documentation of vital signs, (3) treatment plan clarity, and (4) adherence to time stamp guidelines. Next, I ran an NLP similarity model (Sentence-BERT) to cluster notes by style and computed inter‑rater reliability using Cohen’s kappa between automated scores and a random sample of manual reviews. The model achieved 0.82 kappa, confirming its validity. Finally, I created a dashboard in Power BI that highlighted outliers per clinician, allowing targeted feedback sessions.  

**Result** – Within three months, denied claims dropped by 35%, overall documentation compliance rose to 92%, and clinicians reported a clearer understanding of required elements. The project taught me how to blend automated NLP metrics with human judgment for robust quality assessment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
