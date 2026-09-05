---
qid: ing_05f753e1b1__eli5__local
question: 'Explain: You''re using LLM-as-judge. Why should I trust the judge? Walk
  me through calibrating it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 186
total_tokens: 357
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:44:54-05:00'
sources: []
---

Imagine a courtroom where the judge is a very smart book that has read millions of legal stories. **LLM‑as‑judge** means we ask this “book” to decide if a text follows the rules (like whether an email is spam or not). To trust it, you first give it a test set—some sentences whose verdicts are already known—and see how often its answers match the real ones. That’s **calibrating**: you adjust the book’s “confidence” level so that when it says “yes” it really means about 80‑90 % sure, just like a weather forecast saying an 80 % chance of rain. After this tuning, the judge’s decisions become reliable because we’ve checked its past accuracy and set a sensible threshold for agreement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
