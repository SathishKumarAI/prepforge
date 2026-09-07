---
qid: ing_64f637523a__aws__local
question: 'Explain: Should you build your agent on a framework or roll the loop yourself?
  Defend a position.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 392
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:13:06-05:00'
sources: []
---

**Situation (S)**  
While leading an AI‑powered recommendation service at my last company, we faced a decision: use the open‑source **RLlib** framework or build our own policy loop from scratch to serve 5 M daily users.

**Task (T)**  
Deliver 20 % lift in click‑through rate (CTR) within six months while keeping infra cost < $200k/month.

**Action (A)**  
I championed *Framework*—specifically RLlib on AWS SageMaker—because:

- **Ownership & Customer Obsession**: The framework let us focus on business logic (reward shaping, data pipelines) instead of low‑level RL plumbing.  
- **Dive Deep & Bias for Action**: We profiled the training loop; RLlib reduced GPU hours by 35 % vs our prototype, cutting compute cost from $180k to $120k/month.  
- **Invent & Simplify**: Leveraging SageMaker’s automatic scaling and spot instances, we achieved 99.9 % availability without custom scheduler code.  

We integrated the RL policy into a Lambda‑driven inference layer (API Gateway → Lambda → DynamoDB) for real‑time scoring, keeping latency < 50 ms.

**Result (R)**  
CTR increased by **22 %** in three months, exceeding our target. Monthly cost dropped to $120k, freeing budget for new features. The bar‑raiser praised the clear ownership trail, depth of metrics, and learning loop: after a 2‑week A/B test failure we tuned reward weights, illustrating rapid iteration.

---

*Leadership Principles highlighted:* **Customer Obsession, Ownership, Dive Deep, Bias for Action, Invent & Simplify, Deliver Results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
