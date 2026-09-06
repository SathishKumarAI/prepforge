---
qid: ing_dd15af2748__think__local
question: 'Explain: Your pretraining loss suddenly diverges at step 300k of a long
  run. Diagnose and fix it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 496
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:32:57-05:00'
sources: []
---

**1️⃣ Clarify the scenario & set assumptions**  
   - What “diverges” means (loss shoots up, NaNs, huge gradient norms).  
   - The model architecture, optimizer, learning rate schedule, batch size, and data pipeline.  
   - Whether step 300k coincides with a scheduler change or a checkpoint load.

**2️⃣ Adopt a diagnostic framework**  
   1. *Check numerical stability*: gradients, activations, weights.  
   2. *Inspect training dynamics*: loss curve, gradient norms, learning rate.  
   3. *Validate data integrity*: corrupted batches, shuffling issues.  
   4. *Review code changes*: recent commits, environment differences.

**3️⃣ Step‑by‑step reasoning**  
   - **Step 1**: Reproduce the divergence locally; log all metrics around step 300k.  
   - **Step 2**: Examine gradient norms—if exploding, identify the layer or operation causing it.  
   - **Step 3**: Verify that the learning rate schedule is still correct (e.g., no accidental reset).  
   - **Step 4**: Check for NaNs in weights/activations; if found, trace back to the offending op.  
   - **Step 5**: Inspect data loader: ensure batch shuffling isn’t producing a pathological mini‑batch.

**4️⃣ Common traps to avoid**  
   - Assuming the issue is only with the optimizer; ignore potential data corruption.  
   - Overlooking that a scheduler step might have been mis‑calculated (e.g., dividing by zero).  
   - Forgetting to reset or reinitialize the model after a crash, leading to stale weights.

**5️⃣ Sanity‑check & communicate**  
   - Run a small sanity test: forward a single batch through the suspect layer; confirm numeric ranges.  
   - Summarize findings concisely: “Loss diverges due to exploding gradients in Layer X at step 300k, triggered by an incorrect learning‑rate warm‑up schedule.”  
   - Propose fixes (gradient clipping, correcting LR schedule, data shuffling fix) and validate on a short run before resuming the full training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
