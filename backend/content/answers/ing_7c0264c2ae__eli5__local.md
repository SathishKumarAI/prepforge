---
qid: ing_7c0264c2ae__eli5__local
question: 'Explain: Metrics: when accuracy lies — Ml And Dl Foundations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 239
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:53:19-05:00'
sources: []
---

**Imagine a classroom quiz where the teacher wants to know how well students remember facts.**  
In machine learning (ML) and deep learning (DL), *accuracy* is like the percentage of correct answers: if 8 out of 10 predictions are right, accuracy is 80 %. It works best when every answer matters equally—just as in a true‑or‑false quiz where each question counts the same.

But sometimes some questions are harder or more important. Then we use *precision* (how many chosen answers were actually correct) and *recall* (how many of all correct answers we found). Think of precision as “out of the students who answered ‘yes’, how many really knew the fact?” and recall as “of all the facts that should have been known, how many did we catch?”

So accuracy is a quick snapshot; precision and recall dig deeper when mistakes cost more or some classes are rare. This trio lets ML/DL models be judged fairly in different real‑world settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
