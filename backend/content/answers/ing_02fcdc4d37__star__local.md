---
qid: ing_02fcdc4d37__star__local
question: 'Explain: Week 2 — Generative AI with Large Language Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 328
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:34:14-05:00'
sources: []
---

**Situation:**  
During my second month in a data‑science internship at a fintech startup, the product team wanted to prototype an automated chatbot that could draft personalized loan offers. The existing rule‑based system was rigid and required constant manual tweaks, so we needed a smarter approach.

**Task:**  
I was tasked with building a quick proof of concept using generative AI—specifically a large language model—to generate offer text from structured customer data while keeping compliance in mind.

**Action:**  
I chose OpenAI’s GPT‑3.5 and wrapped it in an internal microservice written in Python. First, I mapped key fields (credit score, income, loan amount) to prompt templates, then used few‑shot prompting with 10 example offers to teach the model tone and format. To enforce compliance, I added a post‑generation filter that scanned for prohibited phrases and flagged any outputs needing human review. I also set up unit tests using pytest to compare generated text against a gold standard and logged latency metrics in Grafana.

**Result:**  
The prototype cut offer drafting time from 2 hours per customer to under 30 seconds, and the compliance team approved 94% of outputs on first pass—up from 60%. The project earned us an internal “Innovation Award” and was later expanded into a full product feature. I learned how prompt engineering balances creativity with control, and how to embed safety checks directly in the inference pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
