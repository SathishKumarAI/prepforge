---
qid: ing_e6b74512c1__fp__local
question: 'Explain: GraphRAG (Structured context) — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 406
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:09:32-05:00'
sources: []
---

**Graph‑RAG: Structured Context as a Geometry of Retrieval**

At its core, RAG (Retrieval‑Augmented Generation) solves the *information bottleneck* problem: how can a language model, trained on static weights, incorporate fresh, task‑specific facts without retraining? The answer is to treat knowledge as an external **graph** \(G=(V,E)\), where vertices encode entities and edges capture relations. Retrieval becomes a geometric query in this space: given a prompt \(q\), we locate the nearest subgraph \(\mathcal{S}\subset G\) that maximises relevance \(R(q,\mathcal{S})\) while respecting a capacity constraint (fewest nodes, minimal traversal cost). This is an instance of **submodular optimisation**—the marginal gain of adding a node decreases as the subgraph grows, naturally enforcing concise, diverse context.

During generation, the model conditions on \(\mathcal{S}\) as structured input. The decoder’s hidden state evolves over the graph: at step \(t\), it attends to a *local neighbourhood* (e.g., one hop from the current node). This mirrors message‑passing in graph neural nets, ensuring that the generation trajectory is guided by relational paths rather than flat embeddings.

**Non‑obvious insight:**  
Because retrieval and generation are jointly optimised over the same graph, the system learns *implicit priors* on which relations to surface. If a user asks about “the impact of climate policy,” Graph‑RAG will preferentially bring in nodes that connect policy to measurable outcomes (e.g., emission indices) rather than generic “policy” facts, because those edges yield higher expected reward under the downstream task objective. Thus, the graph acts not just as a knowledge store but as an *information‑theoretic filter* that shapes discourse automatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
