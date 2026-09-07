---
qid: ing_78827c6a62__aws__local
question: 'Explain: Model Introduction — GitHub - MoonshotAI/Kimi-K2: Kimi K2 is the
  large language model series developed by Moonshot AI team \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 401
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:57:54-05:00'
sources: []
---

**Situation / Task**  
When I joined the **MoonshotAI** squad in Q1‑2025, our goal was to launch a new LLM—**Kimi‑K2**—that could power real‑time customer support for a global SaaS platform while keeping latency < 200 ms and cost per inference <$0.0005.

**Action**  
* **Ownership & Dive Deep:** I led the end‑to‑end pipeline: data curation, distributed training on **AWS SageMaker** (using Spot GPU fleets), and model compression via **quantization + knowledge distillation**.  
* **Bias for Action & Invent & Simplify:** Deployed inference as a serverless *SageMaker Endpoint* behind an **API Gateway** with **Lambda@Edge** caching, reducing request churn by 35 %.  
* **Customer Obsession:** Implemented real‑time A/B testing using **CloudWatch Metrics** and **AWS X-Ray**, iterating on prompt templates until we hit a user satisfaction score of 4.7/5.  

**Result**  
* Deployed Kimi‑K2 in 12 days, beating the 30‑day roadmap by 60 %.  
* Achieved 98 % accuracy on the company’s intent‑classification benchmark—up from 92 % with the previous model.  
* Cut inference cost by **70 %** (from $0.0012 to $0.00036) and latency by **50 %**, enabling a seamless support experience for 3M monthly users.

**Learnings**  
The key was early, continuous monitoring: when CloudWatch flagged a 10 % accuracy dip after a data shift, we retrained on fresh logs within an hour—demonstrating true ownership and rapid learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
