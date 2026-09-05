---
qid: ing_3b904011ef__eli5__local
question: Your eval reports 82% pass on 100 examples. What does that number not tell
  you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 203
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:10:44-05:00'
sources: []
---

Imagine a teacher grading 100 quiz papers and finding that 82 are correct. That 82 % score tells you how many students passed, but it doesn’t show **how hard the questions were** or whether the wrong answers were close misses or big blunders. In AI terms, “pass” usually means the model’s answer meets a simple rule (e.g., matches a reference string). It hides:

* **Quality of failures** – Were the 18 wrong answers completely nonsense or just slightly off?
* **Distribution of errors** – Did the mistakes cluster on one topic or spread evenly?
* **Model confidence** – How sure was it when it got things right or wrong?

So, while 82 % gives a quick snapshot, it leaves out depth, bias, and reliability details that matter for real‑world use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
