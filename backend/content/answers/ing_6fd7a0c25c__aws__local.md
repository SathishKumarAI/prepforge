---
qid: ing_6fd7a0c25c__aws__local
question: 'Explain: Indirect Prompt Injection — When AI Remembers Too Much \u2013
  Persistent Behaviors in Agents\u2019 Memory'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 399
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:37:52-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I led the rollout of an AI‑powered customer support bot that stored user context across sessions. After a few weeks we observed *“indirect prompt injection”*—the bot began echoing user instructions verbatim, leaking sensitive data and violating compliance.

**Action**  
1. **Ownership & Bias for Action:** I convened a cross‑team task force (devs, security, product).  
2. **Dive Deep & Invent & Simplify:** We audited the memory layer: it was an unbounded in‑memory cache of raw prompts. Replaced it with a *state‑ful* DynamoDB table using **TTL** and a deterministic hash key to prevent prompt duplication. Added a *prompt sanitizer* Lambda that strips or masks any user‑supplied instructions before persistence.  
3. **Customer Obsession & Deliver Results:** Updated the bot’s dialogue manager to query the sanitized state via **AppSync** GraphQL, ensuring only approved context is returned.

**Result**  
- Reduced unintended data leakage incidents from 12 per week to 0 (100 % drop).  
- Cut memory cost by 35 % and latency by 20 ms per response.  
- Earned a “Zero‑Trust AI” badge in our internal security audit.

**Bar‑raiser notes**  
*Ownership:* I took full responsibility for the flaw and drove remediation end‑to‑end.  
*Depth:* Detailed analysis of memory schema, trade‑offs between DynamoDB vs. Redis, cost/latency calculations.  
*Quantified impact:* 100 % incident reduction, cost savings.  
*Learning:* Implemented automated prompt‑sanitizer tests to catch regressions early—now part of CI/CD.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
