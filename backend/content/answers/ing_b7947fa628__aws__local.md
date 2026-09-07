---
qid: ing_b7947fa628__aws__local
question: Your model refuses requests that are perfectly legitimate. How do you diagnose
  and fix over-refusal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 394
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:58-05:00'
sources: []
---

**Situation / Task**  
At my last role I built a conversational AI that served internal support tickets. Two weeks after launch, the model began refusing *legitimate* user requests—customers were stuck waiting for help, and our SLA dropped from 95 % to 70 %.  

**Action (Dive Deep + Bias for Action)**  
1. **Audit logs & metrics** – enabled CloudWatch Logs for every refusal with a unique “reason code.” I noticed 68 % of refusals carried the *“policy‑violation”* tag, even though no policy was triggered.  
2. **Reproduce locally** – loaded the same user prompts into an isolated SageMaker endpoint; the model still refused, confirming it was a logic bug in the post‑processing layer.  
3. **Root‑cause analysis** – traced the refusal to a regex that flagged any word containing “refund” as a high‑risk request. The regex had been copied from a legacy system and wasn’t updated for our new intent taxonomy.  
4. **Fix & test** – rewrote the regex, added unit tests with 1,000 edge cases, and deployed the change via Lambda@Edge to keep latency < 30 ms.  

**Result (Deliver Results)**  
- Refusal rate fell from 32 % to 3 %.  
- SLA improved back to 96 %, saving $120k/month in penalty costs.  
- Created a “policy‑violation” dashboard that now flags future regressions automatically.  

**Learning** – I instituted a quarterly “refusal audit” and added an automated alert when the refusal rate exceeds 5 %. This demonstrates ownership, depth of analysis, and continuous improvement—key Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
