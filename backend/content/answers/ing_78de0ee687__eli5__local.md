---
qid: ing_78de0ee687__eli5__local
question: 'Explain: Now the hard one: an agent that calls tools over multiple steps.
  Test it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 302
total_tokens: 468
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:48:17-05:00'
sources: []
---

Think of a smart assistant as a chef who can only cook with ingredients he’s already in the kitchen.  
The “tools” are the pantry items—spices, appliances, recipes—and each step is a tiny cooking instruction: *grab salt*, *preheat oven*, *mix dough*.  

A multi‑step tool‑using agent works just like that chef but on the internet or a database. First it asks a question (“What’s the latest price of Tesla?”), sees no answer in its own memory, so it **calls** a tool—here, an API that pulls stock data.  
It receives the result, then decides what to do next: maybe format the number into a sentence, or compare it with yesterday’s price. Each call is a discrete action; after every one the agent updates its internal state and plans the next call until the final answer is ready.

Testing such an agent means giving it a goal (e.g., “Find and summarize the best hiking trails near Denver”) and watching that it:  
1) queries a map API,  
2) filters by distance,  
3) calls a review‑site tool for ratings,  
4) compiles a short report.  

If all those steps succeed in order, the agent has proven it can orchestrate multiple tools like a well‑trained chef following a recipe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
