---
qid: ing_d480a6d951__star__local
question: 'Explain: Context rot — Agentic Engineering - by Neo Kim and Paul Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 315
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:34:17-05:00'
sources: []
---

**Situation:**  
During a two‑month sprint at my previous company, we were building an AI assistant for customer support. The model was performing well on the training set but its accuracy dropped by ~12% when deployed to production because user queries had shifted over time.

**Task:**  
I needed to design a strategy that would keep the assistant’s performance stable as new types of questions appeared—essentially preventing “context rot” while still allowing the system to learn from fresh data.

**Action:**  
First, I introduced an *Agentic Engineering* loop: the model was wrapped in a lightweight agent that monitored its own confidence scores and flagged low‑confidence predictions. These flagged interactions were automatically sent to a human‑in‑the‑loop review queue. Second, I set up continuous integration of newly labeled examples into a rolling training dataset with a 30‑day window, ensuring recent contexts were always represented. Third, I implemented a reinforcement‑learning component that rewarded the agent for correctly handling novel queries and penalized it when it relied on stale patterns. Finally, I added an online evaluation dashboard to track per‑domain accuracy in real time.

**Result:**  
Within three weeks of deployment, the assistant’s overall accuracy stabilized at 92%, up from 80% pre‑intervention. The confidence‑based flagging reduced human review load by 40%. I learned that combining self‑monitoring agents with a rolling data pipeline effectively combats context rot without sacrificing responsiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
