---
qid: ing_dd15af2748__star__local
question: 'Explain: Your pretraining loss suddenly diverges at step 300k of a long
  run. Diagnose and fix it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 387
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:50:07-05:00'
sources: []
---

**Situation**  
During a large‑scale language model pretraining run on the 2 TB Common Crawl dataset, the training loop hit step 300k and the loss stopped decreasing smoothly— instead it jumped from ~4.1 to >10 and then kept exploding for several hundred steps.

**Task**  
Identify why the loss diverged and bring the training back on track so that we could finish the 500k‑step run without losing progress or corrupting checkpoints.

**Action**  
I first inspected the gradient norms across all modules; they were spiking to >10 000 in the transformer encoder layers. I checked the optimizer state—AdamW’s `beta2` had drifted due to a corrupted checkpoint, causing runaway momentum. I rolled back to the last clean checkpoint (step 295k), reset AdamW’s state, and added gradient clipping at 1.0 to prevent future spikes. Then I introduced a learning‑rate warm‑up schedule that ramped from 2e-5 to 3e-4 over the first 10k steps, followed by cosine decay. Finally, I enabled mixed‑precision training with loss scaling to avoid underflow in the FP16 pipeline.

**Result**  
The loss stabilized within two dozen steps and resumed a steady decrease, reaching 1.8 at step 500k— a 60% improvement over the pre‑intervention plateau. The model’s perplexity on the validation set dropped from 43 to 29, and training completed in under 48 hours instead of the projected 72 hours. I learned that checkpoint integrity, optimizer state management, and proper learning‑rate scheduling are critical guardrails for long runs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
