---
qid: ing_b22c638cb0__aws__local
question: When do you fine-tune a VLM instead of prompting it, and what exactly do
  you unfreeze?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 504
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:07:42-05:00'
sources: []
---

**Situation / Task**  
I was tasked with launching a product‑grade Visual Language Model (VLM) for a retail client that needed near‑real‑time image captioning and product recommendation. The baseline model achieved 78 % BLEU on the internal test set, but we required >90 % precision to meet SLA.

**Action**  
I evaluated two paths:

1. **Prompting** – simple zero/few‑shot prompts are cheap, fast, and preserve the base model’s generalization, but they can’t incorporate domain‑specific jargon or handle rare product categories.
2. **Fine‑tuning** – we chose this route because our downstream metric was heavily biased toward brand‑specific terms. I froze all *pre‑training* layers (embedding + encoder) and unwrapped only the last transformer block + classification head, a 3 % parameter slice (~5 M params). This reduced overfitting risk while still adapting to domain nuance.

I used **SageMaker Training** on an `ml.p4d.24xlarge` cluster, training for 12 h (≈200k steps) with early‑stopping on a held‑out validation set. The fine‑tuned model hit 92 % BLEU and reduced hallucination rate from 18 % to 3 %.

**Result**  
Deployment via **ECS + Lambda** served 10K requests/sec with <150 ms latency, costing $0.02 per inference (vs $0.05 if we had used a larger prompt‑only architecture). We achieved the SLA and cut manual review costs by 35 %.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – delivered higher quality captions that directly improved conversion rates.  
- **Ownership / Dive Deep** – I dissected layer‑wise contributions, chose minimal fine‑tuning to balance performance & cost, and iterated on the training pipeline based on concrete metrics.

*Bar‑raiser cue:* Look for ownership of trade‑offs, depth in understanding when to freeze vs unfreeze, quantified impact, and lessons from failed prompts (e.g., hallucinations).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
