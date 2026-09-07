---
qid: ing_acfd388071__aws__local
question: 'Q48: When would you choose fine-tuning over prompt engineering?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 475
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:56:49-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* & *Ownership*.  
> **Situation:** At a fintech startup I led the rollout of a chatbot that answered regulatory queries for 30k daily users.  
> **Task:** Decide between fine‑tuning an LLM or using prompt engineering to keep latency under 200 ms while maximizing accuracy.  
> **Action:**  
> * Ran A/B tests: baseline prompt (no tuning) → 78% F1; fine‑tuned on 5k domain‑specific tickets → 92% F1 but inference cost ↑ 25 %.  
> * Evaluated scalability with SageMaker Inference Scheduler vs Bedrock real‑time endpoints.  
> * Adopted a hybrid: fine‑tune the base model (SageMaker Training) for core legal terms, then use prompt templates to handle edge cases and keep response time <200 ms.  
> * Implemented cost‑control via Spot instances and autoscaling policies.  
> **Result:** Accuracy improved by 14 % F1, user satisfaction (NPS) rose from 52 to 68, and total inference spend dropped 18 % YoY.  

**Why fine‑tune vs prompt engineering?**  
*Fine‑tuning* is preferable when you need high precision on niche vocabularies or have a sizable, labeled corpus—cost and latency trade‑offs are acceptable. *Prompt engineering* works best for generic tasks, rapid iteration, or when inference budgets are tight; it leverages the LLM’s general knowledge without extra training overhead.

**Bar‑raiser takeaways:**  
- Demonstrated ownership by balancing accuracy vs cost.  
- Dived deep into metrics (F1, NPS, spend).  
- Quantified impact with real numbers.  
- Learned from failure: initial prompt-only rollout had >30 % error on regulatory queries, prompting the switch to fine‑tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
