---
qid: ing_e02b689a83__star__local
question: 'Q89: Design a Process Reward Model (PRM) for a customer-support agent.
  What signals do you score, and how do you avoid degenerate reward?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 379
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:57:02-05:00'
sources: []
---

**Situation**  
At my previous SaaS company we had a 1,200‑agent support team handling 30k tickets/month. The manager noticed that the new gamified dashboard was boosting agent clicks but driving up customer wait times and complaints.

**Task**  
I was tasked to design a Process Reward Model (PRM) that incentivizes quality first‑response time, resolution accuracy, and knowledge‑base growth while preventing agents from gaming the system.

**Action**  
I built a multi‑signal PRM:  

1. **Response latency** – weighted against ticket priority, capped at 30 min for high severity.  
2. **Resolution accuracy** – measured by post‑ticket survey scores and re‑open rate; negative points for tickets reopened within 24 h.  
3. **Knowledge contribution** – points per article authored or edited, verified through peer review.  
4. **Compliance flag** – zero‑score penalty for using prohibited phrases or failing to use the approved ticket template.

To avoid degenerate reward, I implemented a *soft‑max* normalization across signals and capped daily rewards at 10% of base salary, ensuring agents couldn’t earn more than a realistic bonus ceiling. I also ran Monte‑Carlo simulations on historical data to check for incentive compatibility before rollout.

**Result**  
Within three months the average first‑response time dropped from 45 min to 22 min, re‑open rate fell by 18%, and knowledge articles grew by 25%. Agents reported higher job satisfaction because rewards reflected real customer impact. I learned that balancing quantitative signals with a cap and continuous simulation is key to preventing reward hacking in AI‑driven incentive systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
