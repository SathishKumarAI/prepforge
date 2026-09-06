---
qid: ing_15569d22cd__think__local
question: What is context rot, and what compaction strategies do you use in long-running
  agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 437
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:08:01-05:00'
sources: []
---

**1. Clarify the question & state assumptions**  
   - “Context rot” refers to the loss or degradation of useful information over time in a running AI agent.  
   - Assume we’re talking about *memory‑based* agents that maintain internal state (e.g., LLM‑driven chatbots).  
   - “Compaction strategies” are methods for reducing memory size while preserving essential knowledge.

**2. Adopt a mental model**  
   - Treat the agent’s context as a **sequence of tokens or embeddings** that grows linearly with interactions.  
   - View compaction as *information‑theoretic compression* combined with *semantic pruning*: keep high‑value content, discard low‑impact bits.

**3. Step‑by‑step reasoning**  
   1. Identify the *entropy budget* (max tokens the model can attend to).  
   2. Rank context items by relevance: recentness, frequency, user intent, or policy importance.  
   3. Apply **summarization** (e.g., extractive or abstractive) to long passages.  
   4. Use **embedding clustering** to merge similar memories into prototypes.  
   5. Store compressed representations in a separate key‑value store and inject them back only when needed.

**4. Common traps to avoid**  
   - Over‑compressing: losing subtle user preferences or domain constraints.  
   - Forgetting the *temporal aspect*: older but still relevant facts may be pruned prematurely.  
   - Relying solely on token counts without semantic checks, leading to misleading “short” contexts.

**5. Sanity‑check & communicate**  
   - Verify that after compaction, the agent can still answer a known test question correctly.  
   - Explain to stakeholders: “We keep the 10 most recent user messages plus a one‑sentence summary of earlier interactions; we cluster similar facts into a single token.” This shows transparency and preserves trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
