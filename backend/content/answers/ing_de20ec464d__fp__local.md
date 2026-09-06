---
qid: ing_de20ec464d__fp__local
question: 'Q: How does Flash Attention achieve O(n) memory?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 551
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:51:58-05:00'
sources: []
---

**Flash Attention’s linear‑memory trick**

The transformer query–key dot product produces an \(n\times n\) score matrix that is normally stored and then normalised with a softmax. Storing this matrix already costs \(\Theta(n^{2})\) memory, so the key idea of Flash Attention is to *avoid materialising* it at all.

1. **Re‑ordering the operations**  
   The attention output for token \(i\) is
   \[
   y_i=\sum_{j}\frac{e^{s_{ij}}}{Z_i}v_j,\qquad s_{ij}=q_i^\top k_j .
   \]
   If we process tokens in increasing order of \(i\), the normaliser
   \(Z_i=\sum_{j}e^{s_{ij}}\) can be accumulated on‑the‑fly:  
   while scanning over \(j\) we keep a running sum of \(e^{s_{ij}}\).  
   We never need all \(n^2\) exponentials simultaneously.

2. **Chunked, fused kernels**  
   Flash Attention implements this scan as a *fused* CUDA kernel that loads small blocks of queries, keys and values into shared memory, computes the dot products, updates the running sum and partial output, then discards the block. Thus at any instant only \(\mathcal{O}(n)\) data (one query row + a few key/value columns) reside in registers or shared memory.

3. **Why it works**  
   The softmax is *row‑wise*; each row depends only on its own queries and all keys/values. By streaming over \(j\), we respect this locality and preserve the exact mathematical result while never storing intermediate exponentials. This is a direct application of *online aggregation*, a principle from streaming algorithms: you can compute sums, means, or weighted sums with constant memory if the operation is associative.

**Non‑obvious insight:**  
The trick is not merely “do it in smaller pieces”; it relies on the fact that the softmax denominator for each query is *independent* of other queries. If you had a global normaliser (e.g., normalising over all tokens), this streaming would break. Thus Flash Attention’s linear memory hinges on the row‑wise independence inherent to standard self‑attention, a property often overlooked when thinking about memory optimisation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
