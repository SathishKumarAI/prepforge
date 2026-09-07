---
qid: ing_9fed857b43__aws__local
question: 'Question 5: Does the Agent Need to Learn Reusable Procedures?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 359
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:20-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Ownership* & *Dive Deep*  
> **Situation / Task:** In my last role I built an AI‑powered customer‑support agent that handled 120 k tickets/day across five product lines. The team asked whether the agent needed to learn reusable “procedures” (pre‑built intent pipelines) or could rely solely on fine‑tuned LLMs.  
> **Action:** I ran a controlled A/B test: one cohort used the procedural library, the other used pure LLM inference. I instrumented each flow with CloudWatch metrics and added a step‑by‑step trace in X-Ray to capture latency, error rate, and downstream API calls. The reusable procedures were built as AWS Step Functions orchestrating Lambda, DynamoDB, and SageMaker endpoints.  
> **Result:**  
> *Latency* dropped from 2.8 s (LLM only) to 1.4 s (procedures).  
> *Accuracy* (NPS‑aligned SLA of 95%) improved from 88% to 94%.  
> *Cost* per ticket fell by ~30 % because the procedural path used fewer expensive GPU inference calls and cached common responses in ElastiCache.  
> **Learning:** The trade‑off is clear: reusable procedures give you tighter control, observability, and cost predictability—critical at scale. However, they require upfront design effort and continuous maintenance. I now advocate a hybrid model: core flows are procedural for reliability; edge cases fallback to LLMs. This balances ownership (team owns the procedure repo) with the agility of AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
