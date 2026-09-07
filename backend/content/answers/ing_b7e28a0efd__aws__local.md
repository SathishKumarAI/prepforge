---
qid: ing_b7e28a0efd__aws__local
question: What is the difference between an outcome reward model and a process reward
  model, and when do you need each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 410
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:48-05:00'
sources: []
---

**Answer (Amazon style)**  

During my last role building a reinforcement‑learning platform for recommendation engines, I had to decide whether to train an **outcome reward model** or a **process reward model**.

| Model | What it optimizes | When to use |
|-------|------------------|-------------|
| Outcome Reward | Final business metric (e.g., click‑through rate, conversion). | When the end goal is clear and you can measure it reliably. |
| Process Reward | Intermediate signals (e.g., user dwell time, engagement streaks). | When the outcome is delayed or noisy, or when you want to shape behavior gradually. |

**Situation:** Our recommendation system’s CTR dropped 12% after a UI refresh.  
**Task:** Restore CTR while preventing short‑term “gaming” of the algorithm (e.g., recommending only clickbait).  
**Action:** I first built an **outcome reward model** using SageMaker RL to maximize CTR, but it over‑optimized for clicks and drove low‑quality content. I then added a **process reward** that penalized rapid topic switching and rewarded sustained user engagement, implemented as a custom `RewardSignal` in SageMaker.  
**Result:** Within 4 weeks, CTR rebounded by 9% while average session length increased 15%, and the model’s variance dropped by 30%.  

**Leadership Principles Anchored:**  
- **Customer Obsession** – we focused on real user engagement rather than vanity clicks.  
- **Dive Deep** – dissected reward signals at the micro‑interaction level to uncover trade‑offs.

The key is: use an outcome model when you have a clean, short‑term metric; switch to a process model (or combine both) when the path to that metric is noisy or risky.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
