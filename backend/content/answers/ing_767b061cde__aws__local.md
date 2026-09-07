---
qid: ing_767b061cde__aws__local
question: Reasoning models expose a thinking budget or reasoning effort setting. How
  do you tune it, and what goes wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 508
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:53:08-05:00'
sources: []
---

**Situation / Task**  
While leading a serverless inference stack for an AI‑powered recommendation engine, we noticed that the large language model (LLM) was often “stuck” in long reasoning chains, inflating latency and cost. I had to tune the *thinking budget* (max tokens/steps) so that the model delivered accurate predictions within our SLAs.

**Action**  
1. **Define metrics** – Targeted 95 % of responses under 200 ms and <0.5 $ per inference.  
2. **Baseline experiment** – Ran A/B tests on SageMaker endpoint with budgets 50, 100, 200 tokens using a 1‑million‑query synthetic load.  
3. **Result‑driven tuning** – At 100 tokens we hit 93 % <200 ms and cost $0.0004/query; at 200 tokens latency doubled to 400 ms with no accuracy gain (BLEU score unchanged).  
4. **Iterative refinement** – Added a lightweight “early exit” classifier in Lambda to terminate chains that exceeded the budget, reducing wasted compute by ~30 %.  
5. **Monitoring & alerting** – Deployed CloudWatch dashboards; set anomaly detection on token usage per invocation.

**Result**  
- Cut inference cost from $0.0008 to $0.0004/query (40 % savings).  
- Improved latency distribution: 95 % of responses <200 ms vs 80 % previously.  
- Maintained accuracy (F1=0.87) while scaling to 10× traffic.

**Leadership Principles**  
*Ownership* – I owned the end‑to‑end pipeline, from data collection to production monitoring.  
*Dive Deep* – Conducted token‑level analysis and built custom exit logic instead of blindly scaling resources.  

**Bar‑raiser takeaways**  
- Quantified impact: cost & latency metrics tied directly to business goals.  
- Depth: demonstrated understanding of model internals, AWS services, and trade‑offs.  
- Learning from failure: initial over‑budgeting led to wasted compute; we pivoted to a data‑driven, iterative approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
