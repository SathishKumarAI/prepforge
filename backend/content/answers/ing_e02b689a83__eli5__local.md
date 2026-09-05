---
qid: ing_e02b689a83__eli5__local
question: 'Q89: Design a Process Reward Model (PRM) for a customer-support agent.
  What signals do you score, and how do you avoid degenerate reward?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 224
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:30:36-05:00'
sources: []
---

Imagine the support agent as a gardener who tends to plants (customers).  
**Signals to score:**  
1. **Growth rate** – quick first reply and resolution time show the plant’s health.  
2. **Water quality** – customer satisfaction scores and sentiment in chat reflect how well the plant is nourished.  
3. **Pruning skill** – number of escalations or repeat contacts indicates whether the gardener trimmed problems correctly.  

The reward is a *garden score* that gives points for each signal but only when they are *balanced*. To avoid degenerate rewards (e.g., answering all tickets in seconds with low quality), we cap the maximum points from speed and tie them to satisfaction: if speed is high but sentiment drops, the total score falls. We also add a small bonus for learning new FAQ topics—encouraging depth, not just speed.  
Thus the gardener gets rewarded for healthy plants that grow fast, stay happy, and never need re‑watering (escalation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
