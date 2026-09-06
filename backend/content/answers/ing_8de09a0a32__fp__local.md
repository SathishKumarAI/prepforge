---
qid: ing_8de09a0a32__fp__local
question: 'Explain: Triad Failure Modes — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 509
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:06:41-05:00'
sources: []
---

### Why “Triad Failure Modes” arise in Retrieval‑Augmented Generation (RAG)

A RAG system solves the **information bottleneck**: a generator must produce fluent text using only evidence retrieved by a search module.  
Formally, let \(x\) be the user query, \(E=\{e_1,\dots ,e_k\}\) the retrieved snippets, and \(G(E)\) the language model’s output. The objective is to maximise
\[
\mathbb{E}_{x,E}[\,\log P(G|E,x)\,] \quad\text{s.t.}\quad E=\operatorname{retr}(x).
\]
When training or evaluating such a system, three failure modes inevitably surface:

| Mode | What breaks | Why it must occur |
|------|-------------|-------------------|
| **Retrieval Error** | \(E\) contains irrelevant or missing facts. | The search objective (e.g., BM25, dense vectors) optimises ranking, not downstream generation; small cosine gaps can flip relevance, leading to wrong context. |
| **Fusion Error** | The generator mis‑interprets or ignores \(E\). | Language models are trained on free text; they may hallucinate facts if \(E\) is noisy, treating it as another token stream rather than evidence. |
| **Relevance–Fluency Trade‑off** | High relevance but low fluency, or vice versa. | The loss function balances cross‑entropy (fluency) against retrieval accuracy; optimizing one harms the other because they pull the model in orthogonal directions. |

#### Non‑obvious insight  
The *fusion error* is not merely a hallucination problem—it reflects **semantic misalignment** between the embedding space used for retrieval and the token embeddings of the generator. If retrieval vectors are learned to minimise semantic distance, but the generator’s attention operates on subword tokens, the model may map retrieved content to unrelated latent dimensions, effectively “forgetting” the evidence.

#### Takeaway  
Triad failure modes expose a deeper principle: **joint optimisation across heterogeneous modalities is impossible without aligning their internal representations**. Addressing this alignment—e.g., via cross‑modal fine‑tuning or contrastive fusion objectives—breaks the triad and yields robust RAG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
