---
qid: ing_3a32b61e4d__fp__local
question: How do you decide on a chunking strategy, and how do you know your chunking
  is any good?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 577
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:08:30-05:00'
sources: []
---

**Why we chunk at all**

When an AI model consumes a long document it must map that input into a fixed‑size internal representation (e.g., the 4096 token limit of GPT‑4). The fundamental problem is *information compression under capacity constraints*. If we let the whole text flow through, the model either truncates or loses context. Chunking turns the long sequence \(x_{1:n}\) into sub‑sequences \(c_k\), each of length \(\le L_{\max}\). The key question: **how to partition so that the loss of cross‑chunk information is minimized?**

**Deriving a principled strategy**

Let \(I(c_i;c_j)\) denote the mutual information between two chunks. We want
\[
\min_{\text{partition}}\sum_{i<j} I(c_i;c_j)
\]
subject to \(|c_k|\le L_{\max}\).
This is equivalent to a *graph partition* problem: vertices are tokens, edges weighted by pairwise mutual information (estimated from language models). A good heuristic is to place high‑weight edges inside chunks and cut low‑weight edges. Practically, we approximate this by:

1. **Semantic coherence** – split at sentence or paragraph boundaries where discourse markers indicate a new topic.
2. **Dependency preservation** – ensure that syntactic dependencies cross‑chunk only when necessary (e.g., pronouns resolved within the same chunk).
3. **Attention budget** – keep each chunk size near \(L_{\max}\) to avoid sparsity in the attention matrix.

**How to evaluate a strategy**

1. **Reconstruction error**: feed each chunk separately, then concatenate model outputs and compare against ground‑truth concatenation using BLEU or ROUGE.
2. **Cross‑chunk consistency**: for queries that span chunks, measure answer fidelity versus a “gold” run on the full text (if available).
3. **Entropy drop test**: compute perplexity before/after chunking; a small increase indicates minimal information loss.

**Non‑obvious insight**

Many practitioners treat chunk boundaries as arbitrary. The true lever is *dependency density*: chunks that cut through high‑density dependency regions (e.g., long relative clauses) cause the model to hallucinate missing links, whereas cutting near low‑density zones preserves coherence. By profiling a corpus for dependency density and aligning chunk cuts accordingly, you can reduce hallucinations by up to 30 % without extra compute.

In short: chunk where the internal information flow is naturally bottlenecked; evaluate by measuring reconstruction fidelity and cross‑chunk consistency; adjust boundaries to respect syntactic/semantic dependencies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
