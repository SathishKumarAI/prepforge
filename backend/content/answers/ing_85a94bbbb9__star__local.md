---
qid: ing_85a94bbbb9__star__local
question: 'Explain: Red flags interviewers watch for — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 349
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:00:26-05:00'
sources: []
---

**Situation** – While leading a research sprint at my previous company, we were tasked with creating a customer‑support chatbot that could adapt to our brand tone by fine‑tuning a large language model on internal FAQs. Our deadline was tight: launch in six weeks.

**Task** – I needed to ensure the fine‑tuned model stayed aligned with safety guidelines (no hallucinations or biased responses) and still delivered accurate, on‑brand answers without overfitting to the limited dataset.

**Action** – First, I performed a bias audit on the seed data and removed any skewed phrasing. Then I applied differential privacy noise during fine‑tuning to guard against memorizing private content. For alignment, I set up an automated prompt‑engineering loop: after each training epoch, we ran a curated test suite of edge‑case queries (e.g., ambiguous product terms) and scored responses for factuality and tone consistency. When the model drifted—identified by a >5% increase in hallucination rate—I reverted to the previous checkpoint and added more negative examples. I also implemented a “safe completion” filter that flagged any output containing policy‑violating language before it reached users.

**Result** – The final chatbot achieved 92 % accuracy on our test set, with hallucination rates below 1 %. User satisfaction scores rose from 3.8 to 4.6 out of 5 in post‑launch surveys. I learned that continuous alignment monitoring and data hygiene are as crucial as the fine‑tuning algorithm itself when deploying AI responsibly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
