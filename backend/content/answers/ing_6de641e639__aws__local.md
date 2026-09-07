---
qid: ing_6de641e639__aws__local
question: Does RL Add Capability or Sharpen Sampling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 325
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:32:17-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked to improve the recommendation engine for a video‑streaming platform that served 12 M daily users. The existing system used static collaborative filtering and was stuck in a “sampling” loop: it could only recommend what it had already seen.

**Action**  
I introduced **Reinforcement Learning (RL)** as an add‑on layer to the pipeline, treating each user interaction as a state transition. Using Amazon SageMaker RL with a DQN agent, I defined rewards based on watch time and click‑through rate. The RL component was deployed behind an AWS Lambda function that sampled from both the static model and the RL policy (ε‑greedy). To keep costs low, I used Spot Instances for training and S3 for replay buffers.

**Result**  
Within 8 weeks we saw a **17 % lift in average watch time** and a **12 % reduction in churn**. The sampling problem was solved: the RL policy continuously explored new content while still exploiting known hits.  

**Leadership Principles** – *Customer Obsession* (improved user engagement) & *Dive Deep* (quantified impact, trade‑offs).  
**Bar‑raiser focus** – ownership of end‑to‑end metrics, depth in RL design, and learning from the first failure when the reward function was too sparse; we re‑engineered it to include implicit feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
