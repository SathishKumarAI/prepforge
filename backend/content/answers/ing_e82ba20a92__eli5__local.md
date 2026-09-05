---
qid: ing_e82ba20a92__eli5__local
question: You're using pass@ k instead of majority vote—doesn't that make the results
  invalid?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 210
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:43:01-05:00'
sources: []
---

Imagine you’re trying to guess which song a group of friends is humming.  
If you ask everyone and then pick the song that *most* people say (majority vote), you’re using the whole crowd’s opinion.  

Now suppose you only listen to the first **k** friends who reply, no matter how many others are there. That’s “pass@ k.” You’re still making a decision, but you’ve ignored a lot of voices. The result is still valid—it just tells you what those **k** people think, not what the whole group thinks.  

In machine‑learning terms, majority vote uses every model’s prediction; pass@ k uses only the top k predictions (often the most confident ones). Both give a correct answer for their chosen set of models, but they’re not equivalent. So using pass@ k doesn’t invalidate results—it just changes what you’re measuring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
