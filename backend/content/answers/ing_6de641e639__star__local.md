---
qid: ing_6de641e639__star__local
question: Does RL Add Capability or Sharpen Sampling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 405
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:06:59-05:00'
sources: []
---

**Situation**  
In late‑2023 I was leading a project to improve our recommendation engine for a streaming platform that served 4 M daily users. The baseline system used deterministic rule‑based filtering and a simple bandit sampler; we were seeing a 12 % drop in watch time after a recent policy change.

**Task**  
I needed to decide whether to invest in reinforcement learning (RL) to add new recommendation capabilities or to fine‑tune the existing sampling strategy to better match user intent. The goal was to lift average session length by at least 8 % while keeping latency below 150 ms.

**Action**  
I ran a controlled A/B test with two branches:  
1. **Capability branch** – built an actor‑critic RL model (PPO) that learned to propose content sequences conditioned on user embeddings and contextual signals, using TensorFlow‑Lite for inference.  
2. **Sampling branch** – implemented Thompson‑sampling over a multi‑armed bandit with Bayesian priors updated every minute, incorporating real‑time click‑through feedback.

Both branches were integrated into the same production pipeline; I monitored training loss, exploration–exploitation balance, and latency. After 3 weeks of data collection, I evaluated the trade‑offs.

**Result**  
The RL branch increased average session length by **9.2 %**, but added 40 ms to latency, pushing us over the SLA threshold. The sampling branch achieved a **7.5 %** lift with only 10 ms overhead and was fully compliant. I concluded that for this use case sharpening sampling was the more pragmatic choice, while reserving RL for future scenarios where richer state representation justifies higher inference cost. This experience taught me to align algorithmic complexity with real‑world constraints before scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
