---
qid: ing_d4722835de__star__local
question: 'Explain: Introducing :Harvey: II — Harvey | AI software for legal and professional
  services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 311
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:34:11-05:00'
sources: []
---

**Situation**  
When I joined a mid‑size law firm, their document review cycle was stuck at an average of 10 days per client engagement, largely because paralegals were manually tagging and sorting thousands of PDFs for discovery.

**Task**  
I was tasked with cutting that turnaround time by 40 % while keeping the accuracy above 95 %, all within a six‑month implementation window.

**Action**  
I led a cross‑functional team to pilot **Harvey II**, an AI platform built on GPT‑4 fine‑tuned for legal language. We first mapped out the most repetitive tasks—fact extraction, jurisdiction tagging, and privilege screening—and set up a data pipeline that fed anonymized case files into Harvey’s inference engine. Using Python and Airflow, we automated the workflow: documents were ingested, processed by Harvey II, then verified by a senior paralegal in a single screen. We also built an interactive dashboard in Power BI to track model confidence scores and flag outliers for human review.

**Result**  
Within five months, the average document‑review cycle dropped from 10 days to 6 days—a 40 % reduction—while error rates fell below 1.5 %. The firm saved roughly $120K annually in paralegal hours, and I gained deep experience deploying LLMs in regulated environments and balancing automation with auditability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
