---
qid: ing_8850192891__faang__local
question: 'Explain: Comparison — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 620
total_tokens: 849
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:01:08-05:00'
sources: []
---

**Clarify**  
We’re asked to compare attention mechanisms—specifically *self‑attention* vs. *cross‑attention*, and their typical variants (scaled dot‑product, additive, multi‑head). Assumptions: we focus on transformer‑style models used in NLP/NLP‑vision tasks, ignore hardware specifics.

**Approach**  
1. Define the mathematical form of each attention type.  
2. Highlight key properties: locality vs. globality, parameter sharing, computational cost.  
3. Summarize empirical behavior (e.g., expressiveness, training stability).  
4. Conclude with when to choose one over another.

**Depth**  

| Mechanism | Formula | Key Traits | Typical Use |
|-----------|---------|------------|-------------|
| **Self‑Attention** | \( \alpha_{ij} = \text{softmax}_j(\frac{Q_iK_j^T}{\sqrt{d_k}}) \) | Global context, learns pairwise relations; O(n²) memory. | Language modeling, image patches (ViT). |
| **Cross‑Attention** | \( \alpha_{ij} = \text{softmax}_j(\frac{Q_iK_j^T}{\sqrt{d_k}}) \) with Q from target, K,V from source | Enables encoder‑decoder interaction; asymmetric. | Machine translation, multimodal fusion. |
| **Scaled Dot‑Product vs Additive** | Dot: \(QK^T\); Additive: \(v^T\tanh(W_qQ + W_kK)\) | Scaled dot‑product is cheaper (matrix ops). Additive can capture non‑linear interactions but slower. | Transformers favor dot‑product; RNN‑based attention sometimes uses additive. |
| **Multi‑Head** | Split Q,K,V into h heads, apply attention per head, concatenate. | Parallel subspaces increase representational power; linear overhead O(h·n²). | Standard in BERT/ViT; improves expressiveness. |

**Edge Cases**  
- Extremely long sequences: quadratic cost blows up → sparse or local attention needed.  
- Noisy inputs: cross‑attention can over‑focus on irrelevant source tokens unless regularized.  
- Limited GPU memory: additive or single‑head variants reduce footprint.

**Optimize & Communicate**  
To scale, replace full self‑attention with *linear* or *sparse* attention (e.g., Performer, Longformer). For multimodal tasks, fuse cross‑attention with gating to control source influence. In interviews, I’d narrate: “Self‑attention gives a global view but costs O(n²); cross‑attention introduces asymmetry useful for encoder–decoder pipelines; multi‑head splits the space to capture diverse relations.” This structured walk‑through demonstrates clarity, depth, and trade‑off awareness expected by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
