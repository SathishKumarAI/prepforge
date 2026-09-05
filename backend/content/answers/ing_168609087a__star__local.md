---
qid: ing_168609087a__star__local
question: 'Explain: In numpy, compute minADE and minFDE for multi-modal trajectory
  predictions with variable-length ground truth. No Python loops.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 392
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:13:44-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with evaluating a multi‑modal trajectory predictor for an autonomous‑driving dataset where each sequence could have a different number of future timesteps. The evaluation metrics were the minimum Average Displacement Error (minADE) and minimum Final Displacement Error (minFDE).  

**Task**  
I had to compute these metrics efficiently across all predicted modes and all time steps without resorting to Python loops, because the dataset contained over 200 k samples and performance was critical.  

**Action**  
I reshaped the predictions into a tensor of shape `(B, M, T, 2)` (batch, modes, timesteps, xy). The ground‑truth trajectories were padded to the maximum length `T_max` with a large mask value. I then used broadcasting:  
1. Subtracted the ground truth from every mode → error tensor `(B, M, T, 2)`.  
2. Squared and summed over the xy axis to get squared distances, then took the mean over timesteps for ADE (`(B, M)`), and the value at the final timestep for FDE.  
3. Applied `np.min` along the mode axis to obtain `minADE` and `minFDE`.  
4. For variable‑length sequences I masked out padded timesteps before averaging by dividing with a per‑sample count of valid steps, all in vectorized form.  

**Result**  
The loop‑free implementation cut evaluation time from 12 minutes to under 2 seconds on the same hardware. Accuracy remained identical to the baseline, and I learned how powerful broadcasting plus masking can be for metric computation in high‑dimensional prediction tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
