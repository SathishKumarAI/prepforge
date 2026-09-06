---
qid: ing_8fea299f20__fp__local
question: What is Multi-head Latent Attention, and how is it actually different from
  GQA?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 617
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:11:15-05:00'
sources: []
---

### Multi‑Head Latent Attention (MHLA)

**Problem it solves**  
When a model processes a long sequence—text, video, or multimodal data—it must decide *which* tokens to focus on at each step. A single attention head can only capture one “view” of the sequence: a soft‑max over all positions weighted by a learned query vector. This is insufficient for tasks that require simultaneously attending to several complementary aspects (e.g., syntax vs. semantics, foreground vs. background).  

**Why a latent, multi‑head design works**  
1. **Latent queries** – Instead of feeding a fixed query (the current hidden state), MHLA learns *latent* query vectors \(q_1,\dots,q_H\) that are independent of the input token. These queries encode *prior knowledge* about useful patterns (e.g., “look for entities”, “search for relational cues”).  
2. **Parallel heads** – Each head computes its own attention distribution \(a_h = \text{softmax}(q_h K^\top / \sqrt{d})\). Parallelism preserves the full representation dimension while allowing each head to specialise.  
3. **Reconstruction objective** – The model is trained not only on downstream loss but also to reconstruct a *latent summary* of the input (e.g., a compressed bag‑of‑words vector). This forces heads to capture distinct, non‑redundant information, akin to independent components in ICA.

**Deep principle**  
MHLA embodies *information bottleneck* theory: each head is a minimal sufficient statistic for a different latent factor. By decoupling queries from the token itself, the network learns *conditional independence* between heads, reducing over‑fitting and improving interpretability.

---

### Difference from GQA (Generalised Query Attention)

| Aspect | MHLA | GQA |
|--------|------|-----|
| **Query source** | Latent, learned once per head | Dynamic: query derived from current token or context |
| **Head independence** | Explicitly encouraged via reconstruction loss | Implicit; heads may collapse to similar patterns |
| **Objective** | Multi‑objective (downstream + latent reconstruction) | Single downstream objective |
| **Interpretability** | Each head maps to a distinct latent factor | Harder to disentangle, often entangled with token semantics |

**Non‑obvious insight:**  
While GQA can capture multiple attention patterns by virtue of its multi‑head design, it still ties each head’s query to the *current* token, so all heads are biased toward the same local context. MHLA decouples queries from tokens; thus a head can attend globally or focus on a distant pattern that a single token cannot express. This subtle shift turns attention into a *latent variable model*, enabling richer representation learning and better generalisation to unseen patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
