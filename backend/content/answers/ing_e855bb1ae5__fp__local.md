---
qid: ing_e855bb1ae5__fp__local
question: 'Explain: Write scenarios in Claude Code — AI Agent Testing and Evaluation
  | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 502
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:12:56-05:00'
sources: []
---

### Why “Claude Code” is the right language for scenario‑driven evaluation

The core problem of AI‑agent validation is *reproducible stress‑testing*: we must expose an agent to a controlled sequence of states and actions, then observe its responses under stochastic world dynamics. Traditional unit tests are too narrow—they only check isolated functions, not the emergent behaviour that arises from many interacting components.

Claude Code solves this by treating a scenario as a *probabilistic program* over the joint space of environment‑agent interactions. Each line declares an event (e.g., `user says "help me"`) or a probabilistic transition (`world flips coin → 0.5`). The interpreter samples from these distributions, producing a full execution trace that can be replayed deterministically by seeding the RNG. This guarantees *exact repeatability* while still allowing us to explore many possible futures in one file.

#### Key principle: **Monte‑Carlo counterfactuals**  
A scenario is essentially a Monte‑Carlo simulation of counterfactual worlds. By sampling from the world’s stochastic model, we approximate the distribution over agent behaviours without enumerating all states. The evaluation metric (e.g., success rate) is then an unbiased estimator of true performance.

#### Non‑obvious insight
Most people treat scenarios as “if‑then” scripts. In Claude Code the *order* of statements matters: earlier events constrain later ones, creating a Bayesian network of dependencies. This allows us to encode *conditional priors* (e.g., “if user is impatient, reduce response latency”) without extra syntax—just by placing constraints early in the file.

#### Quick example
```claude
# Scenario: User requests password reset under high load
user says "reset my password"
world loads 80% of capacity
agent chooses action
assert agent replies contains "reset link"
```

Running this twice with different RNG seeds yields two distinct traces, both statistically representative of real‑world variance. The same file can be reused across multiple agents or environments, ensuring a fair, rigorous comparison.

In short, Claude Code turns scenario testing into a principled, probabilistic experiment rather than ad‑hoc scripting, giving us the reproducibility and statistical power needed for trustworthy AI evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
