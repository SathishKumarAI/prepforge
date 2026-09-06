---
qid: ing_64f787e080__fp__local
question: 'Explain: Signals — TypeScript AI Framework for Agents and Apps | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 493
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:39:36-05:00'
sources: []
---

**Signals – a TypeScript AI framework for agents and apps**

At its core, an *agent* must answer two intertwined questions:  
1) **What is the agent’s current state?** (beliefs, goals, observations)  
2) **What should it do next?** (action selection, message passing).  

Traditional approaches hand‑craft state objects and dispatch loops, which quickly become brittle as the number of interacting components grows. *Signals* reframes this problem by treating every piece of data that an agent cares about as a **reactive stream**—a *signal*. A signal is nothing more than a value with a dependency graph: whenever its source changes, all downstream consumers are automatically recomputed.

Why must it work this way?  
- **Optimisation:** The framework performs *lazy evaluation*; only the minimal set of signals needed for a particular action is recomputed. This mirrors the principle of incremental computation in functional reactive programming (FRP).  
- **Information‑flow integrity:** Because each signal’s dependencies are explicit, the system guarantees that an agent cannot read data it has not been granted access to, preventing accidental leaks.  
- **Geometry of state:** Signals form a directed acyclic graph (DAG) whose nodes correspond to *coordinate axes* in the agent’s internal space. The DAG’s structure directly encodes the causal relationships between beliefs and actions, allowing the framework to perform static analysis for dead‑code elimination.

A non‑obvious insight: **Signals naturally encode *policy gradients* as derivatives of a loss signal**. By attaching a scalar “utility” signal to an action and propagating its gradient through the DAG, an agent can learn end‑to‑end policies without explicit reinforcement learning loops. This bridges reactive programming with deep learning optimisation in a single TypeScript API.

In practice, a developer writes:

```ts
const location = useSignal(() => env.getLocation());
const move = useSignal(() => policy(location));
env.sendCommand(move);
```

Under the hood, `useSignal` registers dependencies; when `env.getLocation()` changes, only `policy` and downstream commands recompute. The result is a lightweight, type‑safe, and mathematically principled framework that scales from simple bots to complex multi‑agent systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
