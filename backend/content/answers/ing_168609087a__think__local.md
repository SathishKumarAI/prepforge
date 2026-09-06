---
qid: ing_168609087a__think__local
question: 'Explain: In numpy, compute minADE and minFDE for multi-modal trajectory
  predictions with variable-length ground truth. No Python loops.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 623
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:14:34-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   * What “multi‑modal” means: each time step we have several predicted trajectories (m modes).  
   * Ground truth is a single trajectory but may end early – thus we need to mask out “future” points beyond its length.  
   * ADE = average Euclidean distance over all future timesteps; FDE = distance at the final timestep.  
   * No explicit Python loops → rely on broadcasting and `np.where`/masking.

**2️⃣ Mental model / framework**  
   * Think of data shapes:  
     - `preds`: (B, M, T, 2) – batch × modes × timesteps × xy.  
     - `gt`:    (B, T_gt, 2).  
     - Mask: (B, T_gt) with 1 for valid points, 0 otherwise.  
   * Distances are computed per element then aggregated across the correct dimensions.

**3️⃣ Step‑by‑step reasoning**  
   1. Expand `gt` to match `preds`: `gt_exp = gt[:, None, :T_pred, :]`.  
   2. Compute Euclidean errors: `err = np.linalg.norm(preds - gt_exp, axis=-1)` → (B,M,T).  
   3. Apply mask on the last dimension: `mask = np.arange(T) < T_gt[:,None]` → broadcast to (B,M,T).  
   4. For ADE: `ade = (err * mask).sum(axis=2) / mask.sum(axis=2)` → (B,M).  
   5. For FDE: pick the last valid timestep per sample: `fde = err[:, :, -1] * mask[..., -1][:, None]` then divide by mask at that point if needed.  
   6. Finally take the minimum over modes: `minADE = ade.min(axis=1)` and similarly for FDE.

**4️⃣ Common traps to avoid**  
   * Forgetting to broadcast the mask correctly; mismatched shapes lead to NaNs or wrong sums.  
   * Using `.mean()` directly on masked entries – it will include zeros from invalid timesteps.  
   * Assuming `T_pred` equals `T_gt`; always slice `gt_exp` to `T_pred`.  

**5️⃣ Sanity‑check & verbal communication**  
   * Verify that when the mask is all ones (full trajectory) the formulas reduce to standard ADE/FDE.  
   * Check a small toy example by hand and compare NumPy outputs.  
   * Explain the logic as: “We align predictions with ground truth, compute pointwise distances, zero‑out future points using a broadcast mask, average over valid steps for ADE, pick the last valid step for FDE, then take the best mode.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
