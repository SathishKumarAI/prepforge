---
qid: ing_2de08dbd2f__fp__local
question: 'Explain: Memory systems for LLM agents — MemoryGraft: Persistent Compromise
  of LLM Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 478
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:42:21-05:00'
sources: []
---

**Why LLM agents need memory**

An LLM agent that acts repeatedly in a world must *retrospect* on past interactions to improve its policy.  
Formally we want a **state‑to‑action function**  
\(f_\theta : \mathcal{S}\times\mathcal{M} \rightarrow \mathcal{A}\)  
where \(\mathcal{M}\) is the memory of prior observations, rewards and actions.  
Without such a memory, the agent reduces to a stateless policy \(g_\theta(s)\), which can never learn long‑term credit assignment.

**How memory is usually built**

Typical architectures store *experience tuples* \((s_t,a_t,r_{t+1},s_{t+1})\) in a replay buffer.  
When training, batches are sampled uniformly or prioritized by TD‑error.  
The implicit assumption: the buffer contains *clean*, unmodified samples that faithfully represent the environment.

**MemoryGraft’s core insight**

If an attacker can inject **poisoned experiences** into the buffer—instances that mislabel rewards or actions—the agent will learn a distorted policy.  
Because the learning process is iterative, once a corrupted trajectory enters the buffer it is reused many times, amplifying its influence and making the compromise *persistent*.

The attack leverages two properties:

1. **Replay bias** – uniform sampling means every stored example has equal chance of being used in gradient updates.
2. **Self‑reinforcement** – as the agent follows the poisoned policy, it generates more similar experiences that feed back into the buffer (a bootstrap loop).

Thus a single malicious insertion can cascade through the learning dynamics.

**Non‑obvious insight**

Most defenses focus on detecting anomalous inputs at inference time, but MemoryGraft shows that **the memory itself is a vector field of influence**.  
To secure an LLM agent you must treat the replay buffer as part of the *optimization landscape*, not just data storage.  
Robustness requires either *differential privacy* over stored samples or *online anomaly detection* on the trajectory distribution, otherwise a subtle poisoning can silently steer the policy for ever.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
