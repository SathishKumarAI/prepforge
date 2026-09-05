---
qid: ing_fa31500aa5__eli5__local
question: 'Explain: Launch — AWS Scale - by Neo Kim - The System Design Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 229
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:10:59-05:00'
sources: []
---

Imagine you’re hosting a pop‑up shop that suddenly gets a huge crowd. You can’t keep the same number of cashiers forever, or you’ll wait and lose sales; but hiring too many would waste money when the rush ends.  
In AWS machine learning, **“Launch – AWS Scale”** is like that smart staffing system. When a model (the cashier) starts serving requests, it first runs on a single EC2 instance (one cashier). As traffic spikes, AWS automatically spins up more instances—just as you’d add more cashiers. Once the crowd calms, it shuts down the extra ones so you pay only for what you need.

- **EC2**: Virtual servers in the cloud that run your code.  
- **Auto‑Scaling**: The feature that adds or removes EC2s based on traffic.  

This keeps your model responsive without overspending, just like a pop‑up shop stays busy but not bloated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
