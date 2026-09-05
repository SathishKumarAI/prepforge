---
qid: ing_ebcc794beb__eli5__local
question: 'Explain: Deterministic, single-token scoring — Luna Evaluation Models  Cloud
  Observability | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 198
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:48:42-05:00'
sources: []
---

Imagine a detective who only looks at one clue at a time to decide if a crime scene is suspicious.  
In **deterministic, single‑token scoring**, the “detective” (the Luna Evaluation Model) examines each piece of data—each token—separately and always gives it the same score when it sees that exact token again. It never guesses or mixes clues together; its decision rule is fixed (hence *deterministic*).  

So, if a log line contains the word “ERROR”, the model will assign it a high suspicious score every time it appears, just as the detective would always flag that clue. This approach makes the system fast and predictable, ideal for cloud observability where many logs arrive in real time and you need instant, repeatable risk ratings for each token.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
