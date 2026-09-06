---
qid: ing_8e14b7ad91__fp__local
question: 'Explain: Hypothetical Document Embeddings (HyDE) — Advanced Retrieval Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 522
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:07:19-05:00'
sources: []
---

### From the Retrieval Problem to Hypothetical Document Embeddings  

When a user asks a question *q*, an information‑retrieval system must locate in a corpus **C** the subset of documents that best answer *q*. The classic approach is to score each document *d* by a similarity function 𝑆(q,d) (e.g., BM25, cosine over TF–IDF). This works well when *q* already contains the salient terms, but fails if the query is terse or ambiguous: the representation of *q* is too weak to match the rich content of relevant documents.

**HyDE turns the problem upside down.**  
Instead of scoring documents against a sparse query, we **generate a pseudo‑document** 𝑑̂(q) that explicitly contains the answer’s key facts, using an LLM prompted with *q*. This is a principled application of the *generative retrieval* paradigm: we replace the hand‑crafted query vector with a *hypothetical document vector* that embodies what the correct answer would look like in natural language. Because 𝑑̂(q) is dense and semantically rich, standard dense‑retrieval models (e.g., CLIP‑style encoders) can match it to the real documents *d* via dot product or cosine similarity.

**Why this works:**  
- **Information completeness** – 𝑑̂(q) injects missing terms that would otherwise be omitted.  
- **Geometric alignment** – in embedding space, the answer cluster is pulled closer to its supporting documents.  
- **Probabilistic view** – we approximate \(P(d|q)\) by integrating over a latent “ideal document” \( \hat{d} \), i.e., \( P(d|q) ≈ \int P(d|\hat{d})P(\hat{d}|q)d\hat{d}\). HyDE essentially collapses this integral to its mode.

**Non‑obvious insight:**  
The LLM’s hallucinations, often considered a flaw, become an asset: the *over‑generating* tendency ensures that even rare or unseen terms appear in 𝑑̂(q), expanding the retrieval frontier beyond what query expansion heuristics can reach. Thus HyDE leverages the generative model’s implicit knowledge distribution to overcome sparse-query limitations without manual feature engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
