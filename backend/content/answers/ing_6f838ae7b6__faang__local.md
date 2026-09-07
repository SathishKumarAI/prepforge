---
qid: ing_6f838ae7b6__faang__local
question: LLMs are non-deterministic, but a refund over $200 must never be auto-approved.
  Where's the line between prompting and code?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 394
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:02:28-05:00'
sources: []
---

**Clarify**  
You’re asking how to guard against accidental auto‑approval of refunds >$200 when using an LLM that may generate non‑deterministic code or prompts. The goal is a safety boundary: *any* refund above $200 must always trigger manual review, regardless of what the model outputs. I’ll assume we have a production system where user requests pass through the LLM for policy checks and then to a backend service.

**Approach**  
1. Detect amount in the request (structured field).  
2. Enforce a hard rule: if `amount > 200` → block auto‑approval.  
3. Use the LLM only for contextual or compliance wording, not for the numeric decision.  
4. Log all instances where the model suggests approval to audit drift.

**Depth**  
Implement a two‑step pipeline:  
- **Pre‑model filter:** a deterministic guard (`if amount > 200: flag = true`).  
- **Model prompt:** “Explain why this refund is safe/unsafe.”  
The backend never uses the model’s numeric output; it relies solely on the pre‑filter. Complexity stays O(1) for the guard, and the LLM call remains isolated.

**Edge Cases**  
- Amounts near $200 (e.g., $199.99) – still auto‑approved if below threshold.  
- Currency conversion errors → normalize before checking.  
- Malformed requests where amount is missing – default to manual review.

**Optimize & Communicate**  
Explain that this design preserves model flexibility while guaranteeing compliance. Future improvements could use a separate “risk score” LLM output, but the hard cutoff remains enforced at the API boundary. This approach scores high on structured reasoning and risk mitigation in a FAANG setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
