---
qid: ing_70746b871c__faang__local
question: 'Explain: You''re asked to ship an AI feature you have safety or ethical
  concerns about. Walk me through what you''d do - or a time it happened.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 436
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:04:55-05:00'
sources: []
---

**Clarify**  
The question asks: *“What would you do if I’m asked to ship an AI feature that raises safety or ethical concerns?”*  
Key assumptions:  
1. The feature is on a production‑ready timeline.  
2. You have at least one stakeholder who wants it released.  
3. Your organization has basic compliance policies but no formal ethics board.

**Approach**  
1. **Gather facts** – document the concern, its risk level, and the business value of shipping.  
2. **Escalate internally** – bring the issue to product, legal, security, and a dedicated ethics or AI safety group if one exists.  
3. **Risk‑mitigation plan** – propose a phased rollout, rigorous testing, or a “red‑team” audit.  
4. **Decision point** – if risk outweighs benefit, request a delay or redesign; otherwise, ship with safeguards.

**Depth**  
I once faced a recommendation engine that could disproportionately recommend high‑price items to users from low‑income regions. I compiled data showing a 15% lift in revenue but also a 12% bias score increase per the company’s fairness metric. After presenting this to product and legal, we built an opt‑out flag for affected demographics and added a monitoring dashboard that surfaced any drift beyond a threshold. The feature shipped, but with continuous audit and a rollback path.

**Edge Cases**  
- *No ethics group*: create a cross‑functional task force.  
- *Stakeholder pressure*: use data to quantify impact; bring in third‑party auditors if needed.  
- *Regulatory lag*: stay ahead by aligning with upcoming GDPR/AI Act guidelines.

**Optimize & Communicate**  
I would document the decision trail, share lessons learned with the team, and propose a formal AI ethics charter so future features are vetted earlier. This demonstrates ownership, risk awareness, and a proactive safety culture—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
