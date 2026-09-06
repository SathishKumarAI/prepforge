---
qid: ing_b77027ffbc__fp__local
question: What's the difference between a workflow and an agent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 382
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:33:51-05:00'
sources: []
---

**From first principles**

A *workflow* is a **deterministic plan of actions** that transforms an initial state into a goal state.  
It can be viewed as a directed acyclic graph (DAG) whose nodes are atomic operations and whose edges encode precedence constraints. The planner’s job is to produce the DAG; execution merely follows it, assuming each node succeeds.

An *agent* is a **self‑contained decision maker** that perceives an environment, chooses actions, and updates its internal model on the fly. Formally, an agent solves an online optimization problem: at time \(t\) it observes state \(s_t\), selects action \(a_t = \pi(s_t)\), receives reward \(r_t\), and transitions to \(s_{t+1}\). The policy \(\pi\) is learned or engineered to maximize expected cumulative reward, often under uncertainty.

**Why the difference matters**

- **Temporal granularity**: Workflows are static; agents are dynamic.  
- **Uncertainty handling**: Workflows assume known outcomes; agents model stochastic transitions and can adapt.  
- **Goal definition**: Workflow goals are explicit final states; agent goals are often long‑term reward functions.

**Non‑obvious insight**

A workflow can be seen as a *deterministic policy* with no learning, whereas an agent is essentially a *policy that optimizes over a probability distribution of future states*. Thus, the boundary between them collapses when a workflow incorporates probabilistic branches and replanning—at which point it becomes a *planning‑based agent*. Recognizing this continuum allows designers to choose the minimal level of autonomy needed for a task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
