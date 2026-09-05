---
qid: ing_38f1f29512__fp__local
question: Compare projector/adapter designs - MLP vs resampler vs cross-attention.
  How does the choice interact with the training recipe?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 823
total_tokens: 1008
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:05:55-05:00'
sources: []
---

### From a First‑Principles View

In any sequence model we wish to inject *side information* (e.g., style tokens, domain codes) without destroying the original feature manifold.  
The side vector \(z\in \mathbb{R}^d\) must be mapped into the hidden space of dimension \(h\).  
Three canonical ways to do this are:

| Design | Mapping | Theoretical Role |
|--------|---------|------------------|
| **MLP Adapter** | \(f(z)=W_2\sigma(W_1 z)\) | A low‑rank affine transform that *resets* the feature manifold; it is a bottleneck that forces the model to encode only what is necessary for the task. |
| **Resampler (Residual)** | \(h' = h + f(z)\) with skip connection | Keeps the original hidden vector intact while adding an *additive bias*. It preserves the base distribution and treats \(z\) as a small perturbation. |
| **Cross‑Attention** | \(\mathrm{Attn}(h,z)=\sum_q \alpha_{q} z\) | Learns *dynamic* interactions; the side vector becomes a key/value pair that can be selectively weighted per token, effectively re‑parameterizing the hidden space conditioned on \(z\). |

#### Why They Must Behave Differently

1. **Information Bottleneck**  
   The MLP forces a compression of \(z\), making it useful when \(z\) is high‑dimensional (e.g., style embeddings). If training uses *high entropy* side signals, the bottleneck regularises overfitting.

2. **Distribution Shift Control**  
   Residual resampling preserves the mean and variance of hidden activations. In a curriculum where the base model is pre‑trained on large corpora, this design ensures that fine‑tuning with small datasets does not destabilise learned representations.

3. **Conditional Expressivity**  
   Cross‑attention provides a *non‑linear*, token‑wise conditioning mechanism. It scales well when the side signal should influence specific positions (e.g., speaker diarisation) but can suffer from over‑parameterization if the training data is scarce.

#### Interaction with Training Recipe

- **Learning Rate Schedule**  
  MLP adapters are usually trained with a *lower* learning rate because they sit in a narrow bottleneck; otherwise, they dominate gradients. Residual resamplers tolerate higher rates due to their additive nature. Cross‑attention needs careful warm‑up to prevent attention collapse.

- **Regularisation & Dropout**  
  Dropout inside the MLP reduces overfitting but can hurt expressivity if too aggressive. In residual designs, dropout is typically applied only to the added branch. For cross‑attention, *drop‑out on keys/values* prevents spurious correlations.

- **Batch Size & Gradient Accumulation**  
  Cross‑attention’s quadratic complexity in sequence length makes it sensitive to batch size; using gradient accumulation mitigates memory constraints but may slow convergence unless coupled with mixed precision.

#### Non‑Obvious Insight

The *effective rank* of the side‑to‑hidden mapping is a hidden hyperparameter. In practice, an MLP adapter with a 4× bottleneck often matches a residual resampler with a 2× width when trained on the same data. This equivalence suggests that **compressing the side signal can be traded for a wider additive branch**, allowing practitioners to pick a design based on memory vs compute constraints rather than expressivity alone.

---

*In short, the choice of projector/adapter is not just an architectural nicety—it directly dictates how the training recipe must be tuned to balance stability, generalisation, and computational feasibility.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
