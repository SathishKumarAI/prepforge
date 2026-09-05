---
qid: ing_168609087a__fp__local
question: 'Explain: In numpy, compute minADE and minFDE for multi-modal trajectory
  predictions with variable-length ground truth. No Python loops.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 591
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:53:37-05:00'
sources: []
---

**Why we need a *minimum* error metric**

In multi‑modal trajectory forecasting we predict \(M\) possible futures \(\{\hat y^{(m)}_{t}\}_{m=1}^M\).  
For each time step \(t\) the ground truth is a single point \(y_t\).  
The natural loss for a *single* prediction would be the average displacement error (ADE) or final‑step error (FDE).  
With many modes we only care that **at least one** hypothesis is close to reality; otherwise all are penalised equally.  
Hence we minimise over modes:

\[
\text{minADE} = \frac1T \sum_{t=1}^{T}\min_m \|\,\hat y^{(m)}_t-y_t\,\|, \qquad
\text{minFDE}= \min_m \|\hat y^{(m)}_T-y_T\|.
\]

This is a *point‑wise* min operation—an instance of the “argmin” in optimisation that selects the best hypothesis.

**Vectorised NumPy implementation**

1. **Stack predictions**:  
   ```python
   preds = np.stack(preds_list, axis=0)  # shape (M, T, D)
   gt    = gt[np.newaxis, :, :]          # shape (1, T, D)
   ```
2. **Compute Euclidean distances**:  
   ```python
   diff = preds - gt                       # (M,T,D)
   dists = np.linalg.norm(diff, axis=2)     # (M,T)
   ```
3. **Take per‑time min over modes**:  
   ```python
   min_dists_per_t = dists.min(axis=0)      # (T,)
   ```
4. **Average for ADE**:  
   ```python
   minADE = min_dists_per_t.mean()
   ```
5. **Final‑step min for FDE**:  
   ```python
   minFDE = dists[:, -1].min()              # scalar
   ```

All operations are tensor broadcasts; no explicit Python loops are required.

**Non‑obvious insight**

The *per‑time* minimisation (step 3) is equivalent to computing the **Hausdorff distance** between the set of predicted trajectories and the ground truth path.  
Thus minADE/minFDE are not just ad‑hoc metrics; they quantify how close the *best* hypothesis gets to the true trajectory, aligning with optimal transport principles where we seek the cheapest mapping from predictions to reality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
