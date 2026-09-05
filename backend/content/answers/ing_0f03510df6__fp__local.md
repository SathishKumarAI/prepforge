---
qid: ing_0f03510df6__fp__local
question: 'Explain: Deploy — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 508
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:37:32-05:00'
sources: []
---

### Deploy – Agentic AI Use Cases (Neo Kim)

**Fundamental problem:**  
In most enterprise pipelines the *agent*—the AI that interacts with the world—is a black‑box model fed by a fixed set of inputs and returning static outputs. This architecture forces a “pipeline” of hand‑crafted feature engineering, manual monitoring, and brittle error handling. The core challenge is to turn an opaque model into a **self‑sufficient decision maker** that can autonomously gather data, act, and learn in real time.

**Why the framework must be structured this way:**  
1. **Feedback loop closure** – An agent needs *continuous* observations to refine its policy; otherwise it stalls at deployment.  
2. **Safety through observability** – Every action should generate audit‑ready logs; without that, regulatory or operational risk explodes.  
3. **Scalability via modularity** – Separating perception, planning, execution, and learning allows each component to be upgraded independently, mirroring the microservice principle in software engineering.

Neo Kim’s “Deploy” schema formalises these points:  
- *Perception* feeds a state‑representation into a policy network.  
- *Planning* produces a distribution over actions conditioned on constraints (budget, ethics).  
- *Execution* sends actuators to the environment while capturing **counterfactuals** for later learning.  
- *Learning* updates the policy with offline replay + online gradient steps, ensuring convergence under non‑stationary data.

**Non‑obvious insight:**  
Most deployments treat the agent’s reward as a scalar objective. Kim shows that embedding **hierarchical sub‑goals**—derived from the same reward signal but at different temporal scales—dramatically stabilises learning. The agent can then *plan* long‑term while still reacting to immediate signals, reconciling exploration and exploitation without explicit tuning of ε‑greedy schedules.

In short, Deploy is a disciplined recipe that turns an AI model into a *real‑world actor*, guaranteeing observability, safety, and continual improvement—all grounded in the principle that **agents must be able to learn from their own actions**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
