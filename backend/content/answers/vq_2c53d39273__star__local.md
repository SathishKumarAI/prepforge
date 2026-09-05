---
qid: vq_2c53d39273__star__local
question: Q2 .How does Generative AI work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 316
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:53:20-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, our product team wanted to add an automated report‑generation feature for quarterly compliance reports that were manually drafted by analysts—an effort that took roughly eight hours per quarter.

**Task:** I was tasked with designing and deploying a generative AI solution that could produce accurate, regulator‑compliant text from raw data while reducing turnaround time to under two hours per report.

**Action:** I first selected an open‑source transformer model (GPT‑Neo 1.3B) fine‑tuned on our historical reports using Hugging Face’s Trainer API. To ensure compliance, I built a rule‑based post‑processing pipeline that flagged unapproved terminology and cross‑checked key metrics against the source database via SQL queries. We deployed the model behind an AWS Lambda function with SageMaker endpoints for scaling, adding a lightweight caching layer in Redis to serve repeated queries quickly. Throughout development I ran unit tests on generated content and performed user acceptance testing with our compliance officers.

**Result:** The system cut report creation time from 8 hours to 1.5 hours—an 80% reduction—and maintained 98% factual accuracy against manual benchmarks. It also freed analysts to focus on higher‑value analysis tasks, and I learned how to blend deep learning with rule‑based safeguards for regulated domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
