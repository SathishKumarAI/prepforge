---
qid: ing_c6615ab312__faang__local
question: 'Explain: Q: Explain why transformer attention is O(n²) and what alternatives
  exist.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 446
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:22:02-05:00'
sources: []
---

**Clarify**  
The question asks why the self‑attention mechanism in a Transformer scales quadratically with sequence length *n*, and what algorithmic or architectural tricks can reduce that cost.

**Approach**  
1. Recall that attention computes all pairwise dot products between query, key, and value vectors.  
2. Count operations → *O(n²)*.  
3. Enumerate known alternatives (sparse, linear‑time, kernel‑based).  

**Depth**  
- **Quadratic cost**: For each of the *n* queries we compute a dot product with every one of the *n* keys → *n·n* multiplications and adds per head. The softmax over *n* scores is also *O(n²)* memory/time.  
- **Alternatives**  
  - *Sparse/Local attention*: restrict each query to attend to a fixed window or selected tokens (e.g., BigBird, Longformer). Complexity reduces to *O(n·k)* where *k* ≪ *n*.  
  - *Linear‑time kernels*: rewrite dot‑product attention as a kernel trick (e.g., Performer, Linear Transformers) so that the matrix multiplication becomes *O(n·d)*.  
  - *Recurrent/Streaming models*: use recurrent or convolutional approximations to capture long‑range dependencies without full pairwise comparison.  
  - *Hierarchical/Chunking*: split sequence into chunks, run attention within chunks then a higher‑level summary.  

**Edge Cases**  
- Very short sequences: quadratic cost negligible; alternatives may add overhead.  
- Extremely long sequences: sparse or linear methods essential; ensure tokenization preserves semantics.

**Optimize & Communicate**  
Explain trade‑offs: sparse attention keeps most of the expressive power but may miss distant interactions; linear kernels are faster but introduce approximation error. Emphasize that choosing a method depends on data size, latency constraints, and accuracy requirements. Conclude with a quick reminder that memory (for *n²* score matrix) is often the bottleneck in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
