---
qid: ing_1109778d65__fp__local
question: 'Explain: RAG & Retrieval - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 394
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:42:09-05:00'
sources: []
---

**Retrieval‑Augmented Generation (RAG)** is a paradigm that stitches *information retrieval* and *sequence generation* into one end‑to‑end model.  
At its core, RAG addresses the **knowledge‑scarcity problem**: language models are trained on static corpora; when asked about niche facts they hallucinate because their parameters cannot encode an unbounded knowledge base. Retrieval supplies a *dynamic memory*: given a query \(q\), a dense or sparse index returns the most relevant documents \(\{d_i\}\). The generative head then conditions its decoder on both \(q\) and the retrieved context, effectively learning to “consult” external sources during decoding.

Why must it work this way?  
1. **Modularity**: Retrieval is an *information‑theoretic* step that reduces uncertainty by providing high‑entropy evidence before generation.  
2. **Scalability**: The index can grow arbitrarily, decoupling model size from knowledge breadth—an essential property for practical deployments.  
3. **Differentiable fusion**: Modern RAG variants embed the retrieval weights into a soft attention mechanism, allowing gradient flow from the generation loss back to the retriever. This aligns with *optimisation* principles: the system learns which parts of the retrieved text are most useful.

A non‑obvious insight is that retrieval can **regularise** the generator. By exposing it to noisy or contradictory evidence during training, RAG discourages overconfidence and reduces hallucinations—effectively turning an external knowledge source into a *self‑supervised regulariser*. Interviewers often overlook this: ask candidates how retrieval signals influence loss landscapes and whether they can exploit retrieval for uncertainty estimation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
