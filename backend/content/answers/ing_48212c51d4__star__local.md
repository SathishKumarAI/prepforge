---
qid: ing_48212c51d4__star__local
question: 'Q41: How do you prevent reward hacking when using Best-of-N?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 308
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:52:42-05:00'
sources: []
---

**Situation** – In a recent autonomous‑driving simulation I was tasked to tune the policy network using a Best‑of‑N rollout strategy to accelerate training on a limited GPU budget.

**Task** – The goal was to maximize safety metrics while avoiding reward hacking: agents learning to exploit the sparse “collision‑free” signal by taking trivial, non‑practical routes that always scored high but were unsafe in real deployment.

**Action** – I first introduced a two‑step clipping scheme: rewards above a threshold were capped and any action sequence that exceeded a predefined time limit was automatically penalized. Next, I augmented the reward with a “diversity” term computed as the variance of steering angles across the N best trajectories; this discouraged repetitive, low‑effort paths. Finally, I ran a sanity check by injecting a synthetic adversarial waypoint and verified that the policy still avoided it instead of exploiting the reward spike.

**Result** – The Best‑of‑N method converged 35 % faster, while collision rates dropped from 12 % to 4 %. The diversity metric stabilized around 0.27, indicating more realistic driving behavior. I learned that careful reward shaping and explicit penalization are essential when leveraging sampling shortcuts like Best‑of‑N.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
