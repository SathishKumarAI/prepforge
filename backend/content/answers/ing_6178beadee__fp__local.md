---
qid: ing_6178beadee__fp__local
question: 'Explain: Building Agentic RAG with Llamaindex - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 497
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:32:40-05:00'
sources: []
---

**Why an “Agentic RAG” is needed**

Retrieval‑augmented generation (RAG) turns a language model into a *data‑aware* agent: it fetches evidence before answering.  In practice the retrieved chunks are treated as static context, so the LM merely regurgitates what it saw.  An **agentic** RAG instead *decides* which documents to pull, how many, and in what order—exactly like a human researcher who plans a search strategy before writing.

**Fundamental design principle**

1. **Goal‑driven retrieval** – treat the query as a goal \(G\) and formalize the agent’s policy \(\pi(a|s)\) over actions \(a=\{\text{search term},k,\text{source}\}\).  
2. **State representation** – encode the current knowledge graph of retrieved facts, their provenance, and uncertainty (e.g., a weighted directed acyclic graph).  
3. **Reward signal** – combine *informativeness* (new unique entities) with *relevance* (semantic similarity to \(G\)) and *brevity* (to avoid bloating the prompt).  
4. **Optimization loop** – use reinforcement learning or bandit algorithms to update \(\pi\), ensuring that future retrievals are increasingly efficient.

**Connecting to deeper theory**

This is an instance of *active information gathering*: the agent trades off exploration (fetching unknown docs) against exploitation (refining a known answer).  The reward structure mirrors the *information bottleneck* principle—maximizing mutual information between retrieved content and the final answer while minimizing prompt length.

**Non‑obvious insight**

Most RAG pipelines treat retrieval as a one‑shot lookup.  In an agentic setup, **retrieval itself becomes part of the model’s inference process**: the LM learns to *hallucinate* plausible search queries that lead it to unseen evidence.  Thus, even if the index lacks perfect coverage, the agent can steer the search toward complementary sources (e.g., a different domain or language) that compensate for gaps—effectively turning a static knowledge base into a dynamic, self‑rectifying system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
