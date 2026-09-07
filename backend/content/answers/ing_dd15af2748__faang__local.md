---
qid: ing_dd15af2748__faang__local
question: 'Explain: Your pretraining loss suddenly diverges at step 300k of a long
  run. Diagnose and fix it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 458
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:12:30-05:00'
sources: []
---

**Clarify**  
We’re training an autoregressive model; the loss was stable until ~300 k steps, then blows up. Key assumptions to confirm: (1) is this a single GPU/DP case or distributed? (2) Are learning‑rate schedules and warm‑ups still active? (3) Have any hyper‑parameters changed recently (batch size, optimizer state)?  

**Approach**  
1. Inspect training logs for spikes in gradient norms, weight statistics, and LR at 300 k.  
2. Reproduce the divergence with a minimal checkpoint (the one before step 300 k).  
3. Run diagnostics: gradient clipping, mixed‑precision scaling, optimizer state integrity.  

**Depth**  
- **Gradient explosion**: if norm > threshold → enable/raise clip (e.g., `clip_norm=1.0`).  
- **Optimizer drift**: Adam’s moment estimates can overflow; reset moments or switch to AMSGrad.  
- **Numerical instability in mixed precision**: ensure loss scaling is correct; use dynamic loss scaling (`torch.cuda.amp.autocast` + scaler).  
- **LR schedule bug**: verify that the LR scheduler isn’t stepping to an extreme value at 300 k (e.g., due to a mis‑indexed step counter).  
- **Data issue**: check for corrupted shards introduced around that point; validate token distributions.  

If after these checks loss remains volatile, try a short “warm‑up” run from the checkpoint with a reduced LR (1/10) and gradually resume.

**Edge Cases**  
- Overflow in float32 if using high batch sizes.  
- Distributed training: all‑reduce mis‑sync can corrupt optimizer state.  
- Checkpoint corruption: verify checksum before loading.  

**Optimize & Communicate**  
Once the root cause is fixed, add sanity checks: log gradient norms, weight std, and LR at each checkpoint; enforce a guard that halts if loss > 10× previous avg. Explain to stakeholders that we’re adding these diagnostics to catch future divergences early, ensuring training stability while keeping compute overhead minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
