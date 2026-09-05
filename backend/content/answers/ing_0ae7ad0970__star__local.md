---
qid: ing_0ae7ad0970__star__local
question: 'Explain: 154: What an agent is, how to configure one, when to use multiple,
  and how to keep them from doing damage.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 366
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:50:32-05:00'
sources: []
---

**Situation:**  
At a fintech startup we were building a fraud‑detection pipeline that had to flag suspicious transactions in real time. The existing rule engine was brittle and couldn’t adapt to evolving attack patterns, so we decided to replace it with a reinforcement‑learning agent.

**Task:**  
Create an agent that learns to classify transactions as legitimate or fraudulent, configure its environment, decide when multiple agents are needed for different transaction types, and ensure the agent never causes financial loss by mislabeling real users.

**Action:**  
I modeled each transaction as a state vector (amount, geolocation, device ID) and defined actions “approve” or “reject.” The reward function gave +1 for correct decisions and –5 for false rejections. Using OpenAI‑Gym I wrapped the pipeline into an environment, then trained a DQN with TensorFlow‑Agents on historical data. To handle high‑volume card payments vs low‑value transfers, I instantiated two parallel agents (one per category) and routed traffic based on transaction size. Safety was enforced by a “safe‑mode” threshold: if the agent’s confidence fell below 0.7, the request defaulted to the legacy rule engine. Continuous monitoring logged any misclassifications; we set up an alerting system that shut down the agent until retraining.

**Result:**  
Within three weeks of deployment, fraud detection accuracy rose from 82% to 94%, and false‑positive rate dropped by 60%. The dual‑agent setup reduced latency by 30 ms per transaction. I learned that careful reward shaping, confidence gating, and modular agent design are key to safe, high‑performance ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
