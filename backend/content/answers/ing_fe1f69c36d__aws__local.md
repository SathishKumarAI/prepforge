---
qid: ing_fe1f69c36d__aws__local
question: 'Q88: Agent-as-judge vs LLM-as-judge - when does the upgrade pay off, and
  what new failure modes does it introduce?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 438
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:43-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that migrated an on‑prem “agent‑as‑judge” rule engine to a cloud‑native LLM‑based adjudication system for a global e‑commerce fraud platform. The goal was to reduce false positives by 30 % while keeping latency < 200 ms for 99.9 % of requests.

**Action & Design**  
* **Architecture:** Deployed the LLM as an inference endpoint on SageMaker (GPU P3) behind API Gateway + Lambda for request routing, with DynamoDB for verdict caching and CloudWatch for observability.  
* **Hybrid Decision Path:** First‑line agent rules (fast, deterministic) run in Lambda; if confidence < 0.8 the payload is forwarded to the LLM. This keeps most traffic on the cheap rule engine while only 12 % of cases hit the expensive model.  
* **Fail‑safe & Rollback:** Implemented a “shadow” mode that logs all LLM outputs without affecting live decisions, allowing A/B testing and quick rollback if error rates spike.

**Result**  
Within 3 months:  
* False positives dropped from 12 % to 8.4 % (≈ 30 % improvement).  
* Latency stayed at 180 ms average; cost increased by only 15 % due to the selective inference strategy.  

**Learning & Failure Modes**  
We discovered that LLMs can hallucinate, producing plausible but incorrect verdicts when faced with rare fraud patterns. To mitigate, we added a “confidence‑threshold” filter and continuously updated the prompt with new edge cases—an example of **Ownership** and **Dive Deep**.  

> *Bar‑raiser check:* Demonstrated ownership by leading the migration, depth in architecture trade‑offs (scalability vs cost), quantified impact on fraud reduction, and proactive learning from hallucination failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
