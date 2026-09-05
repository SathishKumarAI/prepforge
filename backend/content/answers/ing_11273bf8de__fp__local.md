---
qid: ing_11273bf8de__fp__local
question: Explain self-attention. What's its computational complexity, and what are
  your options when contexts get long?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 520
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:42:27-05:00'
sources: []
---

Self‑attention solves the *“how can a model read every token and decide which others matter?”* problem by turning a sequence of hidden states \(h_1,\dots ,h_n\in \mathbb R^d\) into a new representation where each token is weighted by its relevance to all others.  
Mathematically we compute three linear projections per token: query \(q_i=W_Q h_i\), key \(k_j=W_K h_j\), and value \(v_j=W_V h_j\). The attention score for pair \((i,j)\) is a dot product \(s_{ij}=q_i^\top k_j/\sqrt d\); softmax over \(j\) yields weights \(\alpha_{ij}\). The output for token \(i\) is \(\sum_j \alpha_{ij} v_j\).  
The dot‑product step requires \(n^2\) pairwise inner products, each of cost \(O(d)\), so the total complexity is **\(O(n^2 d)\)**. This quadratic term dominates as context length grows.

When contexts become long, we must reduce this cost:

| Strategy | Idea | Complexity |
|----------|------|------------|
| **Sparse attention** | Only compute scores for a fixed pattern (e.g., local windows, top‑k per token). | \(O(n\,w\,d)\) where \(w\ll n\). |
| **Linear/Kernel attention** | Replace softmax with a kernel \(\phi(q_i)\cdot\phi(k_j)\); sum over keys can be pre‑computed. | \(O(n d)\). |
| **Memory‑efficient transformers** | Chunk sequences, cache intermediate results, or use reversible layers to trade compute for RAM. | Still \(O(n^2 d)\) but with reduced memory footprint. |

A non‑obvious insight: *the softmax itself is the bottleneck because it couples every pair of tokens.* By approximating or re‑parameterizing the attention distribution (e.g., using low‑rank kernels or locality‑aware masks), we can preserve most of the expressiveness while breaking the quadratic barrier. This turns self‑attention from a universal but costly operator into a tunable, scalable core for long‑context reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
