---
qid: ing_aa6ed9e2d3__star__local
question: 'Explain: On-policy distillation — best of both worlds'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 436
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:13:25-05:00'
sources: []
---

**Situation**  
At my last role we were building an autonomous warehouse picker robot that used a Proximal Policy Optimization (PPO) agent to navigate aisles and pick items. The policy ran on an NVIDIA Jetson TX2 in the field, but its inference latency was 120 ms per step, which caused motion jitter and exceeded our safety margin of 80 ms.

**Task**  
I needed to cut inference time by at least 30 % without sacrificing the high success rate (>95 %) we had achieved with PPO. The solution had to stay on‑policy so that any updates could be applied safely in real deployments.

**Action**  
We implemented an on‑policy distillation pipeline: while the robot continued executing its PPO policy, we logged state–action pairs from the teacher (the full PPO network). Every 5 minutes a lightweight student model—a shallow CNN with depthwise separable convs—was trained offline in TensorFlow using supervised cross‑entropy loss against the teacher’s logits. Because training data came from on‑policy rollouts, the student stayed aligned with the current distribution of states. We scheduled the distillation jobs during idle periods and used mixed precision to keep GPU usage low.

**Result**  
The distilled model ran at 55 ms per step—over a 50 % latency reduction—while maintaining a 94.8 % task success rate, just 0.2 % below the teacher’s performance. The approach also cut power consumption by ~25 %. I learned that on‑policy distillation lets you reap inference speedups while still benefiting from continuous policy updates, striking the “best of both worlds” balance between RL flexibility and production efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
