---
qid: ing_0da89633a7__fp__local
question: 'Q: What is "Agentic RAG" and how does it differ from "Advanced RAG"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 388
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:34:42-05:00'
sources: []
---

**From the problem to the solution**

In a retrieval‑augmented language model (RAG) the *retriever* supplies evidence and the *generator* rewrites it into an answer.  
The fundamental issue is that a static retriever cannot adapt its query to the evolving context of the dialogue: it treats every request as an isolated “lookup” problem, ignoring how earlier turns shape what the user actually wants.

**Agentic RAG (A‑RAG)** re‑frames retrieval as a *decision‑making* process.  
1. **Policy layer** – an agent learns, via reinforcement learning or imitation, which documents to fetch given the current dialogue state.  
2. **Belief update** – the retrieved snippets are used to maintain a probabilistic belief over the user’s intent.  
3. **Planning** – the generator selects the next query that maximises expected information gain (an application of *active learning*).  

Thus A‑RAG turns retrieval into an *adaptive, goal‑directed* sub‑task rather than a one‑shot lookup.

**Advanced RAG (Adv‑RAG)**, by contrast, merely enhances the retrieval component: better embeddings, larger index, or multimodal search. It still treats queries as static; no policy governs how or when to fetch new evidence.

**Non‑obvious insight**

The key advantage of A‑RAG is that it *couples* the retriever and generator through a shared belief state. This coupling transforms retrieval from a lookup into an *information‑theoretic control problem*: the agent actively seeks documents that reduce uncertainty about the user’s goal, which is why A‑RAG can outperform Adv‑RAG even with identical indexes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
