---
qid: ing_940233dc21__fp__local
question: When is prompt compression worth it, and how would you do it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 601
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:20:01-05:00'
sources: []
---

**Prompt compression is worthwhile when the *information‑to‑parameter ratio* of a prompt exceeds the model’s capacity to encode it efficiently.**  
The fundamental problem is that large language models (LLMs) process tokens sequentially; each token consumes an embedding and attention budget. If a user’s prompt contains repetitive or low‑entropy text, the model spends valuable context slots on redundancy rather than novel content. When the total entropy of the prompt *H* divided by the effective capacity per token *C* is greater than 1 (i.e., \( H > C \times N_{\text{tokens}}\)), compression can reduce the number of tokens while preserving the semantic load, freeing space for downstream reasoning.

**Why it must work this way:**  
LLMs are trained on a fixed context window; they do not “compress” internally. The only lever we have is to supply fewer but more informative tokens. By collapsing repeated patterns or highly predictable phrases into single, high‑entropy symbols (e.g., via dictionary coding), we keep the same mutual information \(I(\text{prompt};\text{output})\) while reducing token count. This is a direct application of Shannon’s source coding theorem: a lossless representation exists that achieves the channel’s capacity.

**Practical strategy**

1. **Entropy profiling:**  
   * Tokenize the prompt, compute per‑token entropy (e.g., using unigram frequencies).  
   * Identify contiguous blocks with low entropy (< 0.5 bits).

2. **Dictionary coding:**  
   * Build a small dictionary of the most frequent low‑entropy phrases (≤ 10 entries).  
   * Replace each occurrence with a unique high‑entropy token (e.g., `▁P1`, `▁P2`).  
   * Append a deterministic mapping section at the end of the prompt so the model can reconstruct the original text if needed.

3. **Context preservation:**  
   * Ensure that compressed tokens are semantically neutral; avoid altering syntax or key terms that affect grounding.  
   * Test with a few “sanity checks” (e.g., ask the model to expand the mapping) to confirm fidelity.

4. **Evaluation loop:**  
   * Measure output quality via BLEU/L1 loss against uncompressed prompts.  
   * Iterate dictionary size until marginal gains drop below 2 % while token savings exceed 10 %.

**Non‑obvious insight:**  
Compression is not just about fewer tokens; it also reduces the *attention load* on irrelevant parts of the prompt, effectively sharpening the model’s focus on high‑value content. This can improve reasoning depth even when the compressed prompt contains less raw text.

By framing compression as an entropy‑optimization problem and implementing lightweight dictionary coding, you can decide precisely when the trade‑off between token count and semantic fidelity is beneficial for your specific LLM use case.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
