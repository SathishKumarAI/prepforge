---
qid: ing_323e4e9cde__star__local
question: 'Explain: Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 368
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:09:00-05:00'
sources: []
---

**Situation:** In my last role I was leading the QA effort for a new chatbot that needed to pass OpenAI’s evaluation benchmarks before launch. The product had to achieve at least an 85 % success rate on the standard `evals` suite, but early runs were hovering around 72 %.  

**Task:** My goal was to raise the overall score by systematically identifying weaknesses in the model responses and iterating quickly through the OpenAI API’s evaluation pipeline.  

**Action:** I started by scripting a loop that invoked `openai.eval.run()` on each prompt set, capturing detailed logs of success, failure, and partial matches. Using these logs, I built a lightweight dashboard with Matplotlib to spot patterns—most failures were in “Fact-checking” and “Safety‑filter” categories. I then fine‑tuned the model’s temperature and top‑p settings via the API, added a custom prompt template that explicitly asked for citations, and re‑ran the evals after each tweak. For the most stubborn cases I used the `openai.evals.create()` endpoint to generate new synthetic test cases that targeted the identified gaps.  

**Result:** After three iterative cycles we reached an 88 % overall score—exceeding our target—and reduced the safety‑filter failure rate from 12 % to under 3 %. The process also gave me a reusable eval pipeline, which cut future QA time by 40 %. I learned that continuous, data‑driven iteration with OpenAI’s `evals` API is far more effective than one‑off tuning sessions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
