---
qid: ing_a3a18684e2__star__local
question: 'Explain: Lessons from the trenches — How Do AI Agents Work - by Neo Kim
  and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 322
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:20-05:00'
sources: []
---

**Situation:**  
During a sprint for our e‑commerce recommendation engine, we hit a wall: the static model was stuck at 12 % lift in click‑through rate and couldn’t adapt to new inventory in real time.

**Task:**  
I had to prototype an AI agent that could learn from live user interactions, decide when to update recommendations, and roll out changes safely without degrading performance.

**Action:**  
First, I mapped the system into a Markov Decision Process: states were customer segments, actions were recommendation sets, rewards were conversion metrics. Using Python’s `gym` library I built a custom environment that fed real‑time click data. For learning I chose Proximal Policy Optimization (PPO) from Stable Baselines3 because of its stability in sparse reward settings. To keep drift under control, I wrapped the policy updates with an uncertainty estimate via Bayesian dropout, and only allowed rollout if the confidence interval exceeded a threshold. I also set up a canary deployment pipeline in Kubernetes so that 5 % of traffic would see new policies while we monitored latency and revenue impact.

**Result:**  
Within three weeks the agent achieved a 28 % lift in click‑through rate, and overall conversion increased by 7 %. The experiment taught me that framing an AI problem as an MDP, coupling it with robust policy gradients, and enforcing safety through uncertainty checks are key to turning theory into production gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
