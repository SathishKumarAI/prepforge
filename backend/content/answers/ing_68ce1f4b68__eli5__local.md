---
qid: ing_68ce1f4b68__eli5__local
question: Why do people say "evals are the moat" for AI products? What makes them
  the core engineering artifact?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 206
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:21:57-05:00'
sources: []
---

Think of an AI product as a smart robot that can answer questions or write stories.  
Its “moat” – the thing that keeps competitors from copying it easily – is its **evaluation system** (evals).  

An eval is just a set of tests: a list of prompts and the answers we want, plus a rule that says whether an answer is good enough. It’s like a teacher giving homework problems to check how well a student learned.  
The robot can be tweaked many ways—different training data, new algorithms—but if its evals stay the same, any improvement must truly make it better on those exact questions.  

Because building an eval is hard (you need clear questions and fair grading), only teams that master this get a reliable benchmark. That reliability becomes the core engineering artifact: it guarantees quality, lets you compare versions, and protects the product’s value against copycats.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
