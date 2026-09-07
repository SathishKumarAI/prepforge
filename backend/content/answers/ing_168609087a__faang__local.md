---
qid: ing_168609087a__faang__local
question: 'Explain: In numpy, compute minADE and minFDE for multi-modal trajectory
  predictions with variable-length ground truth. No Python loops.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 665
total_tokens: 914
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:36:55-05:00'
sources: []
---

**Clarify**

You have a batch of *N* predictions per time step:  
`preds[N, M, T, 2]` (M modalities, T future steps).  
Ground‑truth is a ragged array `gt[N, L_i, 2]` where each sample has its own length `L_i ≤ T`.  
Goal: compute **minADE** (average displacement error over the best modality) and **minFDE** (final‑displacement error of that same modality), *without* explicit Python loops.

**Approach**

1. Pad ground truth to a common shape `(N, T, 2)` with a large mask value (`np.nan` or `-inf`).  
2. Broadcast predictions against this padded GT: compute squared errors per time step.  
3. Mask out padded positions so they do not influence sums/means.  
4. For each sample, sum over valid timesteps → total ADE per modality.  
5. Take the minimum across modalities (axis=1) to get `minADE`.  
6. Similarly, compute FDE by taking the last timestep error of each modality and then min across modalities.

**Depth**

```python
import numpy as np

# preds: [N,M,T,2], gt: list of arrays of shape [Li,2]
maxT = max(len(g) for g in gt)
gt_pad  = np.full((N,maxT,2), np.nan)
mask    = np.zeros((N,maxT), dtype=bool)

for i,g in enumerate(gt):
    L=len(g); gt_pad[i,:L]=g; mask[i,:L]=True

# error tensor
err_sq = (preds - gt_pad[:,None,:,:])**2          # [N,M,T,2]
err_sq = err_sq.sum(-1)                           # [N,M,T]

# apply mask
mask_expanded = mask[:,:,None]                    # [N,T,1]
err_sq *= mask_expanded                          # zero out padded steps

ade_per_mod = err_sq.sum(-1)/mask.sum(1,None)     # [N,M]
min_ade     = ade_per_mod.min(axis=1)

fde_per_mod = err_sq[:,-1]                        # last timestep error
min_fde     = fde_per_mod.min(axis=1)
```

Complexity: **O(N·M·T)** operations, memory O(N·M·T). No Python loops; all vectorized.

**Edge Cases**

- All predictions miss the true GT (mask sum zero) → divide‑by‑zero; handle with `np.where`.
- Variable lengths shorter than T: padding must not influence ADE/FDE.
- Numerical stability: use `np.nan_to_num` if using NaNs.

**Optimize & Communicate**

If memory is tight, compute per‑sample minima in a single pass by iterating over modalities inside the GPU kernel (e.g., with PyTorch).  
Explain to interviewers that broadcasting and masking eliminate loops, preserving FAANG expectations for vectorized, scalable solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
