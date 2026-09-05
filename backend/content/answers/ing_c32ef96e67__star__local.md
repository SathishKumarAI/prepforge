---
qid: ing_c32ef96e67__star__local
question: Want help in improving your AI application using evals?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 350
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:00:06-05:00'
sources: []
---

**Situation** – I was leading a chatbot product for a fintech client that had just rolled out a new natural‑language interface. Within the first month, customer satisfaction dropped from 92 % to 78 %, and we were seeing an uptick in escalations around loan eligibility queries.  

**Task** – My goal was to reduce the error rate on those high‑impact intents by at least 30 % while keeping response time under 1 s, so the user experience stayed smooth.

**Action** – I introduced OpenAI’s Evals framework. First, I built a custom eval suite that mirrored real customer logs: we labeled 4,000 utterances with intent and correctness tags, then wrote a Python function to score the model against those labels. Using `Evals`’s `evaluate()` loop, I ran nightly runs on our production prompt set and automatically generated a report of precision/recall per intent. The insights revealed that “loan‑eligibility” was confused with “account‑balance” by 45 % of predictions. I then fine‑tuned the model with targeted prompts, added a retrieval step for policy documents, and updated the prompt engineering to include explicit disambiguation cues.  

**Result** – After two eval cycles, we cut the misclassification rate from 22 % down to 12 %, lifting customer satisfaction back to 90 %. The automated eval pipeline also reduced manual QA time by 50 %. I learned that continuous, data‑driven evaluation is essential for maintaining AI quality in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
