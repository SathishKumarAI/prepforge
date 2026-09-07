---
qid: ing_6f838ae7b6__aws__local
question: LLMs are non-deterministic, but a refund over $200 must never be auto-approved.
  Where's the line between prompting and code?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 412
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:37:12-05:00'
sources: []
---

**Situation & Task**  
At my previous role I built an automated refund engine for a marketplace that used a large‑language model (LLM) to triage high‑value requests (> $200). The business rule was: “no auto‑approval above $200.” My goal was to keep the LLM’s flexibility while guaranteeing deterministic compliance.

**Action**  
I split responsibility into two layers.  
1. **Prompting Layer** – a lightweight Lambda invoked by API Gateway sends the user’s refund narrative to an Amazon SageMaker endpoint (LLM). The prompt includes a hard‑coded instruction: *“Do not auto‑approve any amount over $200.”*  
2. **Code‑Enforced Policy Layer** – immediately after receiving the LLM response, another Lambda parses the decision and checks the `amount` field against DynamoDB’s policy table. If the amount > $200 or the LLM outputs “auto‑approve”, the request is routed to a Step Function that triggers manual review.

I added CloudWatch metrics (`AutoApproveDenied`, `ManualReviewCount`) and set an SNS alarm for any accidental auto‑approvals.

**Result**  
Post‑deployment, the system handled 150k refund requests/month with zero policy violations. Manual review volume dropped from 12% to 4%, saving $35k in labor per quarter. The dual‑layer design earned a “Customer Obsession” badge during my tenure.

**Reflection**  
I learned that *prompting* can’t replace *code* for safety-critical rules—diving deep into the LLM’s outputs is risky. Future iterations will embed policy tokens directly in the model via fine‑tuning, but until then the hybrid approach balances innovation with ownership and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
