---
qid: ing_c21439900b__eli5__local
question: What are Type I and Type II Errors ? — Machine Learning Interview Questions
  and Answers - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 218
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:43:41-05:00'
sources: []
---

Imagine a spam filter as a bouncer at a club.  
* **Type I error (false positive)** – The bouncer mistakenly lets a harmless guest (a legitimate email) into the club. In ML, it’s saying “yes” when the answer should be “no.”  
* **Type II error (false negative)** – The bouncer denies a real party‑goer (spam email) because he thinks the person is uninvited. That’s saying “no” when the correct answer is “yes.”

In practice, you choose how strict the bouncer is: if you’re very strict you’ll rarely let in spam (few Type I errors) but might keep good emails out (more Type II). If you’re more relaxed you catch almost all real emails (few Type II) but a few spams slip through (more Type I). Balancing these two mistakes is the heart of designing any classification model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
