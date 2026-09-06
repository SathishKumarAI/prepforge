---
qid: ing_84f97101b8__fp__local
question: What is MCP (Model Context Protocol)? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 447
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:47:53-05:00'
sources: []
---

**MCP – Model Context Protocol**

*The fundamental problem*: Large‑scale language models (LLMs) are trained on billions of tokens but deployed in *bounded* contexts—only a few thousand tokens can be fed at inference time. When an application needs to recall information that lies outside this window, the model must be able to fetch, cache, and re‑inject relevant snippets without breaking coherence or violating privacy.

*MCP solves this by treating context as a first‑class resource*. It formalises three operations:

1. **Query** – the model expresses a *semantic request* (e.g., “retrieve facts about X”) rather than raw text.  
2. **Retrieve** – an external store (vector database, knowledge graph) supplies ranked passages that match the semantic vector of the query.  
3. **Re‑contextualise** – the retrieved snippets are wrapped with provenance metadata and stitched into the prompt in a way that preserves causal flow.

*Why it must work this way*:  
- **Optimization**: By delegating heavy retrieval to specialised indexes, MCP reduces the per‑token cost of inference, allowing dynamic scaling.  
- **Information theory**: The protocol ensures *mutual information* between query and retrieved content is maximised while keeping entropy low—only the most informative bits are transmitted back to the model.  
- **Geometry**: Query vectors lie on a manifold that aligns with the model’s embedding space; retrieval operates in the same latent geometry, guaranteeing semantic compatibility.

*Non‑obvious insight*: MCP implicitly implements *contextual attention pooling*. Instead of uniformly blending retrieved passages into the prompt, it assigns adaptive weights based on the alignment between the query vector and each passage’s vector. This weighted fusion preserves local coherence while still allowing long‑range dependencies to influence generation—a subtlety often overlooked when naively concatenating snippets.

In short, MCP turns context management from an ad‑hoc trick into a principled protocol that respects both the computational constraints of LLMs and the mathematical structure of semantic spaces.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
