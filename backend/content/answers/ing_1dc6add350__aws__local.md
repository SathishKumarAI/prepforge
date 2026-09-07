---
qid: ing_1dc6add350__aws__local
question: 'Q: How would you prevent an AI agent from causing damage through tool calls?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 446
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:33:52-05:00'
sources: []
---

**Situation:**  
While leading a cross‑functional team that built an autonomous customer‑support bot, we discovered that the AI’s “tool‑calling” feature could invoke external APIs (e.g., payment gateways) without proper validation, risking financial loss.

**Task:**  
Design a safety layer that guarantees every tool call is vetted, logged, and reversible before it reaches production systems.

**Action:**  
1. **Ownership & Bias for Action** – I authored the *Tool‑Call Sandbox* policy and rolled it out in two weeks.  
2. **Dive Deep** – Implemented an AWS Step Functions state machine that intercepts every tool request.  
   - **Validate**: Lambda checks input against a whitelist of allowed endpoints, payload schemas, and user‑role ACLs (using IAM).  
   - **Audit**: DynamoDB stores each call with timestamp, intent confidence, and rollback token.  
   - **Revert**: If downstream service returns an error, another Lambda triggers compensating actions (e.g., voiding a transaction).  
3. **Scalability & Cost** – Step Functions scale automatically; cost ≈ $0.025 per 100 000 executions, < $10/month for our traffic.  

**Result:**  
After deployment, we saw a **99.8% reduction in accidental tool‑call incidents**, translating to ~$1.2M saved over six months (pre‑incident loss estimate). User satisfaction scores rose from 4.3 to 4.7/5 as bots handled queries faster without risking data integrity.

**Bar‑raiser takeaways:**  
- **Ownership**: Took full responsibility for end‑to‑end safety.  
- **Dive Deep**: Engineered a granular validation pipeline rather than a blanket “block all calls.”  
- **Quantified Impact**: Delivered clear cost savings and risk mitigation metrics.  
- **Learning from Failure**: Iterated the policy after a false‑positive incident, tightening schema checks—demonstrating continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
