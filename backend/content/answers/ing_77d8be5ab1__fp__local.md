---
qid: ing_77d8be5ab1__fp__local
question: Which modules do you target with LoRA, how do you pick the rank, and what
  are the actual memory savings?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 832
total_tokens: 1015
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:19:38-05:00'
sources: []
---

### Why LoRA targets specific layers

The core problem LoRA solves is *parameter‑efficiency* in fine‑tuning large transformers.  
In a standard transformer each self‑attention and MLP block contains two weight matrices \(W_{\text{q}}, W_{\text{k}}, W_{\text{v}}\) (for attention) and \(W_{\text{ff1}}, W_{\text{ff2}}\) (for the feed‑forward). During fine‑tuning we add a full update \(\Delta W\) to each of these, which blows up memory and slows inference.

LoRA observes that the *optimal* direction for adaptation lies in a low‑dimensional subspace. By replacing \(\Delta W = A B^\top\) with two small matrices \(A,B\in \mathbb{R}^{d\times r}\), we constrain updates to an \(r\)-rank manifold. Thus only \(2dr\) parameters are learned per weight, instead of \(d^2\). This is a direct application of *matrix factorisation* from linear algebra: any rank‑\(r\) perturbation can be written as such a product.

### Which modules to target

Empirically, the largest gains come from:

| Module | Reason |
|--------|--------|
| **Attention projections** \(W_{\text{q}}, W_{\text{k}}, W_{\text{v}}\) | They are the most parameter‑heavy and most sensitive to task‑specific re‑weighting. |
| **Feed‑forward weights** \(W_{\text{ff1}}, W_{\text{ff2}}\) | Their large dimensionality (\(d \times 4d\)) offers high compression ratios. |
| **LayerNorm parameters** | Optional; they are small but sometimes fine‑tuned for better calibration. |

Other modules (e.g., embedding matrices, output heads) can be left unchanged or LoRA’d if memory permits.

### Choosing the rank \(r\)

*Start with a heuristic:*  
- For attention: \(r = 8–16\).  
- For FFN: \(r = 32–64\).  

The reasoning is that the effective dimensionality of task‑specific signals in these subspaces rarely exceeds a few dozen. One can perform a quick *SVD* on a held‑out gradient snapshot to estimate the singular values; pick \(r\) so that cumulative energy > 95 %. A more principled approach uses *cross‑validation*: train with several ranks and pick the smallest that meets a performance threshold.

### Memory savings

Let the original weight dimension be \(d \times d'\).  
- **Original parameters:** \(dd'\).  
- **LoRA parameters:** \(2dr\) (since we learn \(A\in \mathbb{R}^{d\times r}\), \(B\in \mathbb{R}^{d'\times r}\)).  

The ratio saved is \(\frac{dd' - 2dr}{dd'} = 1 - \frac{2r}{d'}\).  
For a typical transformer with \(d'=768\) and \(r=16\), the saving per weight matrix is ≈ \(99.5\%\). Across all attention and FFN layers, total trainable parameters drop from ~ 340M to ~ 1–2M—a 170× reduction—while inference cost stays unchanged because the LoRA update is applied on‑the‑fly.

**Non‑obvious insight:**  
Because the LoRA update is *additive* in the forward pass, it can be fused into the existing weight matrix at runtime. Thus fine‑tuned models need no extra memory for activations; only the small \(A,B\) matrices are stored, making LoRA ideal for edge deployment where RAM is scarce.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
