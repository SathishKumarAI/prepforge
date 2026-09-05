---
qid: ing_3e22f183ae__fp__local
question: 'Q60: How would you evaluate whether an LLM is hallucinating?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 507
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:16:50-05:00'
sources: []
---

### Evaluating “Hallucination” in a Large Language Model

The core problem is **whether the model’s output reflects a true factual state** rather than a coherent but fabricated narrative.  
At a first‑principles level this is a **probability estimation task**: we want to estimate \(P(\text{fact} \mid \mathbf{x})\) for each claim \(\mathbf{x}\). The model supplies a distribution over tokens, so we can compute the likelihood of a claim being true by integrating evidence from multiple sources.

#### 1. **Ground‑Truth Anchoring**  
- **Reference corpus**: Index a curated knowledge base (e.g., Wikipedia, scholarly databases).  
- **Semantic similarity**: For each sentence in the LLM output, retrieve top‑k passages and compute cosine similarity over contextual embeddings.  
- **Precision‑weighted score**: \(S = \frac{1}{n}\sum_{i=1}^{n} \text{match}(c_i)\), where \(c_i\) is a claim and \(\text{match}\) is 1 if the retrieved passage contains the same factual content, else 0.  
A low \(S\) signals hallucination.

#### 2. **Confidence‑Based Thresholding**  
- The model’s *self‑confidence* (average token probability or temperature‑scaled entropy) correlates with factuality.  
- Empirically calibrate a threshold \(\tau\): claims below \(\tau\) are flagged for external verification.  

#### 3. **Cross‑Modal Consistency**  
- Generate the same claim in multiple modalities (text, structured facts). If they diverge, treat as hallucinated.  
- This taps into *information geometry*: consistent points lie on a low‑dimensional manifold; outliers are likely spurious.

#### Non‑Obvious Insight  
Most evaluations focus on **surface‑level correctness**. The hidden dimension is the **semantic alignment of internal representations**: by probing intermediate transformer layers with probes trained to predict factuality, we can detect hallucination *before* the final token generation. This early warning reduces downstream error propagation and aligns evaluation with the model’s own inductive biases.

In practice, combine these signals—ground‑truth similarity, confidence thresholds, cross‑modal consistency, and internal probe scores—to obtain a robust, principled hallucination detector.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
