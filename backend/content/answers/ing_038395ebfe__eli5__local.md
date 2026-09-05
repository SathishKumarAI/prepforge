---
qid: ing_038395ebfe__eli5__local
question: Explain DPO to someone who knows PPO-based RLHF. When would you still choose
  an online RL method?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 230
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:40:45-05:00'
sources: []
---

Imagine training a dog with two kinds of treats.  
With **PPO (Proximal Policy Optimization)**, the trainer gives a treat whenever the dog’s action is *good enough* compared to what it did before. The dog learns gradually, but sometimes it gets confused because the treats are based on its own past performance rather than an external standard.

**DPO (Direct Preference Optimization)** flips that: instead of comparing the dog to itself, we give a treat only when the new action is *explicitly better* than the old one according to a human’s preference. It’s like having a judge who says, “Yes, this bark sounds friendlier.” The dog learns directly from that judgment, not from its own past.

You’d still pick an online RL method (like PPO) when you need to explore many new behaviors quickly or when preferences are noisy and you want the algorithm to stay flexible. DPO shines when you have clear, consistent human rankings and want stable, interpretable learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
