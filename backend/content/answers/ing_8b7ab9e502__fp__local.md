---
qid: ing_8b7ab9e502__fp__local
question: 'Explain: Databricks Launches Agent Bricks: A New Approach to Building AI
  Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 650
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:01:38-05:00'
sources: []
---

### Why “Agent Bricks” make sense

At the heart of every AI‑agent is **decision‑making under uncertainty**: given a state, pick an action that maximises expected future reward. In practice this boils down to two sub‑problems:

1. **Representation** – how do we encode states, actions and observations so that a model can learn from them?  
2. **Execution** – how do we orchestrate the inference pipeline (LLM calls, data retrieval, external APIs) so that the agent’s policy is actually carried out?

Databricks’ Agent Bricks tackle both simultaneously by treating *each capability*—a retriever, a planner, an LLM wrapper—as a first‑class **module** that can be composed into any workflow. This mirrors how modern compiler optimizations treat code blocks as composable units: you can reorder, replace or parallelise them without touching the surrounding logic.

### Why modularity is essential

- **Scalability** – a “brick” can be scaled independently (e.g., spin up more GPU nodes for the LLM brick while keeping the data‑fetching brick on CPU).  
- **Extensibility** – new bricks (say, a custom policy network) can be plugged in without rewriting the entire agent.  
- **Observability** – each brick emits metrics; you can trace where latency or errors arise, just as a microservice architecture benefits from per‑service logging.

### A deeper principle: *Composable optimisation*

In reinforcement learning we often solve for a global objective \(J(\theta)\). If the policy \(\pi_\theta\) is built from sub‑modules \(\{m_i\}\), then

\[
J(\theta) = \mathbb{E}_{s_0} \Big[ \sum_{t=0}^{T-1} r(s_t, a_t) \Big],
\quad a_t = m_k(\cdot)\circ m_{k-1}\circ\!\dots\! (s_t).
\]

Because each \(m_i\) is differentiable (or can be treated with REINFORCE), we can back‑propagate through the entire chain. Agent Bricks expose exactly this chain, letting the optimiser treat *any* composition as a single differentiable graph.

### One non‑obvious insight

Most people think an agent’s performance hinges on a clever LLM prompt or a fancy reward shaping scheme. In reality, **the bottleneck is often the data pipeline**: if the retriever brick returns stale or noisy embeddings, no amount of fine‑tuning will help. Agent Bricks make the data flow explicit and instrumented, so that you can optimise *information throughput* (e.g., by caching embeddings) before even touching the policy network.

In short, Databricks’ Agent Bricks formalise the intuition that an AI agent is a *composition of reusable, optimisable components*, turning what was once ad‑hoc glue code into a disciplined, observable, and scalable architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
