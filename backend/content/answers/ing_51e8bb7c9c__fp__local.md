---
qid: ing_51e8bb7c9c__fp__local
question: 'Explain: Using Pre-Built Agents from Agent Pack — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 450
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:59:24-05:00'
sources: []
---

### Why Haystack’s *Pre‑Built Agents* Work

At its core, a conversational AI is an **optimization problem**: given a user query \(q\) and a knowledge base \(\mathcal{K}\), we want to produce an answer \(a\) that maximises the probability of being correct and useful. Haystack frames this as a *retrieval‑augmented generation* pipeline, where each agent is a **modular policy** that chooses the next sub‑task (retrieve, embed, generate, summarize).  

The Agent Pack supplies ready‑made policies that have been tuned on large benchmark corpora. They encode two key principles:

1. **Information Bottleneck** – By first retrieving top‑\(k\) passages and then passing only those to a generative model, the agent reduces entropy in the input space, making generation more stable and faithful.
2. **Chain‑of‑Thought Planning** – Agents like `RetrievalAgent` or `GenerateAgent` are designed to emulate human reasoning: retrieve → reason → answer. This mirrors transformer attention’s self‑conditioning, ensuring that each step can be introspected and corrected.

#### Non‑obvious Insight  
Most tutorials focus on *how* to call an agent; the deeper trick is that **agents can be composed arbitrarily** because their outputs are structured as `AgentOutput` objects (containing both text and metadata). This means you can chain a `SummarizeAgent` after a `GenerateAgent` without re‑training, effectively turning any retrieval–generation pipeline into an *interpretable* multi‑step workflow. The modularity turns the black‑box LLM into a *probabilistic planner*, where each agent’s uncertainty can be propagated and calibrated—something most end‑to‑end systems silently ignore.

In short: pre‑built agents are not just code snippets; they’re principled policy modules that enforce an information bottleneck, enable chain‑of‑thought reasoning, and allow compositional, interpretable pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
