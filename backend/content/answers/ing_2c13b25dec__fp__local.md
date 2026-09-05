---
qid: ing_2c13b25dec__fp__local
question: 'Explain: OpenAI Agents SDK — Autogen Crewai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 522
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:38:27-05:00'
sources: []
---

## Why an *Agent* framework is needed

When a large language model (LLM) is given only a prompt, it produces one answer and stops.  
In real‑world tasks—debugging code, planning a trip, negotiating contracts—the correct solution requires **iterative dialogue**: the model must ask clarifying questions, evaluate intermediate results, and revise its plan.  Thus we need an *execution loop* that turns the LLM into a rational agent.

## The core principle

The SDK formalises this loop as a **policy network over actions**:

1. **State** = current task description + all messages exchanged.  
2. **Action** ∈ {`ask`, `execute_code`, `generate_plan`, …}.  
3. **Reward** = task‑specific metric (e.g., correctness, completion time).  

This is precisely a *Markov Decision Process* (MDP) where the LLM acts as a stochastic policy that maximises expected reward.  By treating each turn as an MDP step, we can apply proven techniques from reinforcement learning and information theory to guide the agent’s behaviour.

## Why the SDK works

- **Modular actions** let developers plug in domain‑specific tools (API calls, code runners) without retraining the LLM.  
- **Self‑critique loops** (`evaluate` → `rewrite`) embody *Bayesian updating*: after each action the model updates its posterior belief about the optimal plan.  
- **Parallel crew execution** (`CrewAI`) distributes sub‑tasks across specialised agents, mirroring divide‑and‑conquer in combinatorial optimisation.

## Non‑obvious insight

The SDK’s true power lies in *information bottleneck*: by exposing only the action name and minimal context to each tool, it forces the LLM to compress its internal state.  This compression encourages **abstraction**—the model learns higher‑level concepts (e.g., “validate input”) rather than low‑level string manipulation.  Consequently, agents become more robust to domain shifts, because they rely on distilled representations rather than memorised patterns.

In short, the OpenAI Agents SDK turns an LLM from a one‑shot generator into a principled decision‑maker, grounded in MDP theory and information bottleneck, enabling scalable, modular, and self‑improving AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
