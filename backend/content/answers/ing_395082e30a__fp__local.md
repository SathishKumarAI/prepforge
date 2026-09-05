---
qid: ing_395082e30a__fp__local
question: 'Explain: Multi-agent patterns in LlamaIndex — Multi-agent patterns in LlamaIndex
  | Developer Documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 446
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:06:52-05:00'
sources: []
---

## Why “multi‑agent” matters for a knowledge‑base index

When an LLM is asked to answer a question it must **choose a strategy**: retrieve relevant facts, synthesize them, or ask clarifying questions. A single “black‑box” agent mixes these steps and can’t reason about *when* each subtask is needed.  
A **multi‑agent pattern** splits the workflow into independent agents—retriever, summarizer, planner, verifier—each optimized for a specific objective (recall, precision, coherence). The system then orchestrates them so that the whole behaves like a single coherent solver.

### Core principle

This design follows *modular optimisation* in control theory:  
- **Agent A** maximises recall under a retrieval budget.  
- **Agent B** minimises hallucination given retrieved snippets.  
- **Agent C** ensures factual consistency by cross‑checking.  

The global objective is the product of these local utilities, and the orchestrator learns to weight them via reinforcement or rule‑based policies.

### Deeper insight

Because each agent operates on a *different representation* (raw text vs embeddings vs structured facts), the index must expose **intermediate abstractions**. LlamaIndex’s Multi‑Agent API does this by letting you attach *vector stores*, *document parsers*, and *metadata schemas* to distinct agents, turning a flat index into a *policy network* over representations.

### Non‑obvious takeaway

The most overlooked benefit is that the multi‑agent pattern turns **retrieval latency** into an *optimization variable*: by delegating coarse filtering to a lightweight retrieval agent, you can keep high‑accuracy agents (e.g., reasoning) in memory and only invoke them when necessary. This dynamic gating dramatically reduces cost without sacrificing quality.

In short, LlamaIndex’s multi‑agent patterns formalise the intuition that “doing the right thing at the right time” is more powerful—and cheaper—than a monolithic approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
