---
qid: ing_69e3cc9f93__aws__local
question: 'Explain: The Tree vs. The Chain — Tree Of Thought'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 327
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:23:40-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I was asked to build an AI‑driven fraud detection model that could reason through complex transaction chains. The existing “Chain” approach treated each step as a linear sequence, which quickly hit accuracy limits (~70 % F1).  

**Action**  
I proposed a **Tree‑of‑Thought (ToT)** architecture—each node represents an inference branch; the system explores multiple reasoning paths in parallel before aggregating. I built it on AWS Lambda for stateless compute, Step Functions to orchestrate branches, and DynamoDB for intermediate state persistence. To control cost, I used provisioned concurrency only during peak hours and leveraged Spot Instances for training.  

**Result**  
After two sprints the ToT model achieved **86 % F1**, a 22 % lift over Chain, while keeping inference latency under 120 ms per transaction (95th percentile). Cost per inference dropped by 18 % due to efficient branch pruning.  

> *Leadership Principles:* **Customer Obsession** – delivering higher fraud‑detection accuracy protects users; **Dive Deep** – I dissected the chain’s failure modes and engineered a branching solution that balanced depth with scalability.  
> *Bar‑raiser cues:* clear ownership, deep technical justification, quantified impact, and learning loop (iterated on branch pruning rules after each deployment).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
