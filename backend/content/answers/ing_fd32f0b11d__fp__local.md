---
qid: ing_fd32f0b11d__fp__local
question: 'Explain: Design — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 411
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:58:10-05:00'
sources: []
---

**Why “Agentic” matters**

At its core, an AI system is a *solver* for the decision‑making problem: given observations \(o_t\), it must choose actions \(a_t\) that maximise expected cumulative reward \(R=\sum_{t} \gamma^t r(o_t,a_t)\). Traditional pipelines separate perception, planning and control into hand‑crafted modules. An **agentic** system collapses this pipeline into a single policy network trained end‑to‑end on the objective.  

The necessity of agenticity follows from *information bottleneck* theory: any intermediate representation that discards task‑relevant information reduces achievable reward. By letting the policy learn its own internal state, it can preserve precisely those bits that matter for long‑term planning while discarding irrelevant sensory noise.

**Designing use cases**

1. **Autonomous navigation** – The agent learns to map raw LiDAR to steering commands directly from a reward that penalises collisions and encourages progress.  
2. **Conversational assistants** – A policy conditioned on dialogue history generates utterances that maximise user satisfaction, implicitly learning discourse strategies.  
3. **Robotic manipulation** – End‑to‑end control of joints is trained with sparse success signals; the agent discovers intermediate grasping subgoals via intrinsic motivation.

**Non‑obvious insight**

Most people treat reward as a fixed signal. In practice, *reward shaping* becomes a design lever: by embedding higher‑level desiderata (e.g., safety constraints) into the reward function, you steer the policy’s latent geometry, effectively sculpting the agent’s internal representation space without explicit supervision.

In short, agentic AI turns the entire perception–planning–control loop into a differentiable optimisation problem, letting the system discover its own efficient internal structure while solving the underlying decision‑making task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
