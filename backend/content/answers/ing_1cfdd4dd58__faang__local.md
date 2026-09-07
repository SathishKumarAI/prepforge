---
qid: ing_1cfdd4dd58__faang__local
question: 'Explain: Step 7: Plot Rewards per Training — Reinforcement Learning - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 460
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:52:26-05:00'
sources: []
---

**1️⃣ Clarify**  
The question asks why, in a typical RL tutorial (e.g., GeeksforGeeks), we plot *rewards per training episode* after the learning loop finishes.  
Assumptions:  
- The learner is an episodic agent (finite horizon).  
- `reward` is scalar and accumulates over steps.  
- We have a fixed number of episodes for evaluation.

**2️⃣ Approach**  
Explain that plotting rewards serves two purposes: 1) visualizes learning progress; 2) diagnoses convergence or instability. Outline the data pipeline: during each episode, accumulate reward → store in list → after all episodes plot `episode_index` vs `cumulative_reward`.

**3️⃣ Depth**  
- **Why cumulative?** The raw step‑wise rewards are noisy; summing over an episode yields a single performance metric per episode.  
- **Interpretation:** A rising curve indicates the policy is improving; plateaus suggest convergence or a local optimum.  
- **Statistical smoothing:** Often we use a moving average (e.g., window = 10) to reduce variance, especially in high‑variance environments like CartPole.  
- **Complexity:** O(N) time and space where N = #episodes; negligible overhead.

**4️⃣ Edge Cases**  
- **Sparse rewards:** If most episodes return zero until a success, the plot will show flat lines punctuated by spikes—signals of exploration difficulty.  
- **Non‑episodic tasks:** Plotting per episode is meaningless; instead use time steps or cumulative reward over fixed intervals.  
- **Reward scaling:** Very large or negative rewards can distort the axis; normalize or clip if necessary.

**5️⃣ Optimize & Communicate**  
- *Enhancement:* Overlay confidence intervals (e.g., ±1 SD) to quantify variability across runs.  
- *Narrative:* “By inspecting this plot we quickly see whether our agent is learning, stuck, or diverging, and can then adjust hyper‑parameters such as learning rate or exploration schedule.”  

This structured explanation demonstrates clear reasoning, technical depth, and practical insight—qualities prized in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
