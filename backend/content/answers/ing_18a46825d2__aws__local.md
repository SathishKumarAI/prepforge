---
qid: ing_18a46825d2__aws__local
question: 'Explain: Context engineering vs. prompt engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 401
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:21:32-05:00'
sources: []
---

**Context Engineering vs Prompt Engineering**

*Situation:* At my previous company we built a generative‑AI chatbot for customer support. The product had to answer 10 k tickets/day with <2 s latency and 99.9 % accuracy.

*Task:* I needed to decide whether to invest in “context engineering” (providing richer background) or “prompt engineering” (crafting better prompt templates).

*Action:*  
1. **Dive Deep** – profiled the model’s performance on a sample of tickets. Accuracy dropped 12 % when context was truncated to 200 tokens, but only 3 % when we used a dynamic prompt‑scoring heuristic.  
2. Built two prototypes in AWS:  
   * **Context Engine** – Lambda + Step Functions to aggregate ticket history, policy docs and user profile into a single 4 k‑token prompt; stored intermediate embeddings in DynamoDB for reuse.  
   * **Prompt Engine** – SageMaker Endpoint with parameter tuning (temperature, top_p) guided by a real‑time A/B test using CloudWatch metrics.  
3. Ran a 2‑week pilot: the Prompt Engine lifted accuracy to 94 % and reduced latency from 1.8 s to 0.9 s, costing $12/day vs $18/day for Context.

*Result:* Adopted Prompt Engineering, improving customer satisfaction scores by 15 % (NPS +5) while cutting infra costs 33 %. Learned that **bias for action** and **ownership**—testing both approaches in parallel—yields faster, data‑driven decisions.  

> *Leadership Principles highlighted: Customer Obsession, Dive Deep, Bias for Action, Deliver Results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
