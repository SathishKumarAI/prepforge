---
qid: ing_168609087a__eli5__local
question: 'Explain: In numpy, compute minADE and minFDE for multi-modal trajectory
  predictions with variable-length ground truth. No Python loops.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 271
total_tokens: 445
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:11:23-05:00'
sources: []
---

Imagine you’re in a maze where each possible path is a different “prediction” of how someone will walk, and the real path they actually take is the “ground‑truth.”  
**ADE (Average Displacement Error)** tells you, on average, how far every point of a prediction is from its matching point in the ground‑truth.  
**FDE (Final Displacement Error)** looks only at the last step of each prediction and measures how far that final point is from the real final location.

In NumPy you can treat all predictions as a big 3‑D array: *samples × time × coordinates*.  
1. **Mask out the missing times** by creating an “observation mask” (a 2‑D array of 0s and 1s).  
2. Compute the Euclidean distance between every predicted point and the ground‑truth for that time, multiply by the mask so gaps vanish, then average over the valid times → **minADE**.  
3. For FDE just take the last time step of each prediction, apply the same mask, and average the distances → **minFDE**.

All this uses NumPy’s broadcasting; no explicit Python loops are needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
