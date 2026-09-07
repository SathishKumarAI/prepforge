---
qid: ing_be250d15cb__aws__local
question: When would you choose Q-learning over policy gradients, and vice versa?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 469
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:33:16-05:00'
sources: []
---

**Situation (S)** – I was building a recommendation engine for a global e‑commerce platform that had to adapt in real time to changing user preferences while keeping latency under 50 ms.

**Task (T)** – Decide whether to use Q‑learning or policy gradients, and design the training pipeline on AWS.

**Action (A)** –  
1. **Dive Deep into the problem space**:  
   * State: user profile + product catalog → 200 dimensional vector.  
   * Action: recommend one of 10k items.  
2. **Choose algorithm by constraints**:  
   * Q‑learning (discrete action, tabular or DQN) excels when the action space is manageable and rewards are sparse. It gives a clear value estimate for each state–action pair—ideal for my latency‑critical inference where we can pre‑compute Q‑values in **Amazon DynamoDB** for fast lookup.  
   * Policy gradients (e.g., REINFORCE, PPO) shine when the action space is large or continuous and we need a stochastic policy that generalizes across unseen states. I used them for the second tier of recommendations where we sampled from a neural policy hosted on **Amazon SageMaker**.  
3. **Deploy with Scalability & Cost in mind**:  
   * Q‑learning training on **AWS Batch** (Spot instances) reduced compute cost by 35 %.  
   * Policy gradient training on **SageMaker Neo** for edge inference cut model size by 60 % and lowered per‑request cost from $0.12 to $0.04.

**Result (R)** – The hybrid system lifted click‑through rate by **18 %** and conversion by **9 %**, while keeping average latency at **42 ms** and total inference spend under **$200/day**.  

*Leadership Principles:* **Customer Obsession** – we tuned for user experience; **Ownership** – I drove the end‑to‑end pipeline; **Dive Deep** – I quantified trade‑offs between algorithms and AWS services.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
