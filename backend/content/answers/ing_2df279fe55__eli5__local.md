---
qid: ing_2df279fe55__eli5__local
question: Design the SLOs for a new LLM-powered feature. What do you promise, and
  how do you measure it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 231
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:48:35-05:00'
sources: []
---

Think of your new LLM‑powered feature like a coffee shop that promises “a fresh cup within two minutes.”  
**What you promise (the SLO)** is a clear, measurable goal: *“The model will return an answer in under two seconds for 95 % of user requests.”*  
**How you measure it** is by keeping a simple log—every time someone asks a question, record the response time. Then, every day or week, calculate what fraction of those times were ≤2 s; that’s your *service level indicator (SLI)*.  

If the 95‑percentile drops below 2 s, you know something is wrong—maybe the server is slow or the model is too big—and you can take action before users notice.  
So, define a single, concrete promise (the SLO), track it with an easy metric (the SLI), and adjust when the numbers slip. This keeps your feature reliable and honest to its users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
