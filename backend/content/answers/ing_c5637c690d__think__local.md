---
qid: ing_c5637c690d__think__local
question: 'Explain: Your LLM pretraining loss just spiked. Talk me through training
  stability: gradient clipping, mixed precision, and your debugging playbook.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 490
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:00:02-05:00'
sources: []
---

**1️⃣ Clarify the scenario & assumptions**  
   - *What does “loss spiked” mean?* (e.g., sudden jump from 2.0→5.0 in one step).  
   - *Which model & setup?* (Transformer, batch size, learning rate schedule).  
   - *Assume standard pre‑training pipeline:* AdamW, cosine LR decay, no curriculum yet.

**2️⃣ Mental model: training dynamics as a “feedback loop”**  
   - **Forward pass → loss → gradient → optimizer update → new parameters.**  
   - Instabilities arise when gradients explode or the numerical precision corrupts them.

**3️⃣ Step‑by‑step debugging flow**  
   1. *Check gradient norms* (hook into `torch.autograd`); if > 1e5, you’re in an explosion zone.  
   2. *Apply gradient clipping* (`torch.nn.utils.clip_grad_norm_`) at a sane threshold (e.g., 1.0–5.0).  
   3. *Enable mixed‑precision* with `torch.cuda.amp` to keep large tensors in FP32, small ones in FP16; this reduces loss of significance and memory pressure.  
   4. *Inspect optimizer state*—AdamW’s moments can blow up if LR too high or weight decay mis‑tuned.  
   5. *Look at the data pipeline* (shuffling, tokenization bugs) that might inject outliers.

**4️⃣ Common traps to avoid**  
   - Over‑clipping: kills signal and slows convergence.  
   - Mixing FP16 without a `GradScaler` → NaNs.  
   - Ignoring batch‑size dependence of clipping thresholds.  
   - Assuming “stable” loss on one epoch guarantees global stability.

**5️⃣ Sanity checks & verbalizing the plan**  
   - Plot per‑batch gradient norms over time; sudden spikes should disappear after clipping.  
   - Verify that loss decreases monotonically post‑fix.  
   - Communicate: “I first profiled gradients, clipped them to 2.0, enabled AMP with a scaler, and observed the spike vanish while training speed improved.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
