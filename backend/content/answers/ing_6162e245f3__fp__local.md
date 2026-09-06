---
qid: ing_6162e245f3__fp__local
question: 'Explain: Using Graphiti with Azure OpenAI — GitHub - getzep/graphiti: Build
  Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 337
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:32:30-05:00'
sources: []
---

### Why combine **Graphiti** and **Azure OpenAI**?

At the core of every AI agent is a *knowledge representation* that can be queried in real time.  
Graphiti supplies an incremental, graph‑based storage layer that turns arbitrary JSON into a typed property graph. It exposes a SPARQL‑like query API over a distributed key‑value store, ensuring **linearity**: each update touches only the affected subgraph, and read paths remain bounded.

Azure OpenAI, on the other hand, delivers *contextual embeddings* and generation capabilities but has no notion of structured persistence. By feeding Graphiti’s graph into Azure OpenAI’s prompt engine (e.g., via a “knowledge‑aware prompt”), we let the model reason over facts that are guaranteed consistent across sessions.

The trick is to materialise **semantic edges** in Graphiti that mirror the attention patterns of the transformer:  
- *Entity nodes* become prompt tokens.  
- *Relationship edges* become positional embeddings, preserving locality.  

This mapping lets the LLM treat the graph as a “memory bank” rather than raw text, improving recall and reducing hallucination.

> **Non‑obvious insight:** Because Graphiti’s update semantics are *idempotent*, you can safely replay an entire conversation history into the graph without recomputing embeddings. The agent then only needs to generate a single forward pass per turn, yielding near‑real‑time inference even on high‑volume streams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
