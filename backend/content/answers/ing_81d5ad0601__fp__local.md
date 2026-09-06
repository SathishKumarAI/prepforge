---
qid: ing_81d5ad0601__fp__local
question: 'Explain: Agentic Filtering and Plan Revision — Agentic Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 431
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:41:16-05:00'
sources: []
---

**Agentic Filtering & Plan Revision – a “Plan‑to‑Answer” RAG**

*Fundamental problem*: an LLM can retrieve knowledge, but the retrieved snippets are unstructured and may conflict with one another or with user intent. The system must *decide* which pieces to trust and how to weave them into a coherent plan.

1. **Agentic Filtering**  
   - Treat the language model as an *agent* that evaluates evidence against a *utility function*: “Does this snippet help me reach the user’s goal?”  
   - Formally, each retrieved document \(d_i\) receives a score \(s_i = \sigma(\langle w,\phi(d_i)\rangle)\), where \(\phi\) encodes relevance and confidence features, and \(w\) is learned from demonstrations.  
   - The agent selects the top‑\(k\) documents, ensuring *information‑theoretic sufficiency* (entropy reduction) while discarding noisy evidence.

2. **Plan Revision**  
   - With a filtered set \(\{d_1,\dots,d_k\}\), the model generates an initial plan \(P_0\).  
   - It then simulates execution of each step in isolation, estimating expected utility via a learned *forward model*.  
   - If any step’s predicted payoff drops below a threshold, the agent revises that sub‑plan, possibly re‑retrieving additional context. This iterative loop is an instance of **model‑based reinforcement learning** with continuous state (text) and discrete actions (plan steps).

*Non‑obvious insight*: the filtering and revision stages are *mutually recursive*. A plan’s feasibility informs which documents should be kept; conversely, the quality of retrieved evidence determines how far the plan can be extended. This feedback loop guarantees that the agent never over‑trusts a single retrieval and always grounds its reasoning in actionable knowledge—precisely what “Agentic RAG” formalizes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
