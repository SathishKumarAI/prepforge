---
qid: ing_8333ea50df__eli5__local
question: Classify support tickets into 40 categories. LLM API, fine-tuned small model,
  or classical classifier - how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 329
total_tokens: 504
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:04:46-05:00'
sources: []
---

Imagine your help desk as a busy post office that receives 40 different types of mail—some need quick sorting to the “Billing” shelf, others go to “Technical Support,” and some are “Account Closure.”  

**LLM API (large language model)** is like hiring a world‑class sorter who can read any letter and place it correctly, but you pay for every single piece of mail. It’s great when you have very few tickets or need the absolute best accuracy, yet it can be slow and expensive.

**Fine‑tuned small model** is a specialized employee trained on your own mailbox. You feed them many examples of each category once; after that they sort quickly and cheaply, but their knowledge is limited to what you taught them.

**Classical classifier (e.g., SVM or Naïve Bayes)** is the old‑school clerk who uses simple rules (“if the word “invoice” appears, send to Billing”). It’s fast and cheap but may miss nuances that a neural model would catch.

Choose the **LLM API** when accuracy matters most and you’re okay with higher cost. Pick a **fine‑tuned small model** if you have many tickets, need speed, and can afford an initial training run. Use a **classical classifier** for budget‑tight projects or when your categories are very distinct and text patterns are clear.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
