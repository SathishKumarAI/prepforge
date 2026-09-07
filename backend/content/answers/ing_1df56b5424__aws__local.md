---
qid: ing_1df56b5424__aws__local
question: 'Explain: PEFT: LoRA and QLoRA — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 480
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:34:27-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a cross‑functional team that had to deploy a large language model (LLM) for an internal chatbot within 90 days while keeping the monthly inference cost below \$2k. The customer was a product manager who needed near‑real‑time answers and could not afford downtime.

**Action – PEFT with LoRA & QLoRA**  
1. **PEFT (Parameter‑Efficient Fine‑Tuning)**: Instead of fine‑tuning all 175B parameters, we froze the backbone and added *Low‑Rank Adaptation* (LoRA) matrices—just ~0.5 % of the original size.  
2. **QLoRA (Quantized LoRA)**: We quantised those LoRA weights to int8, cutting GPU memory from 48 GB to 12 GB and reducing inference latency by 35 %.  
3. **Alignment**: Using reinforcement learning‑from‑human‑feedback (RLHF) on a curated prompt set, we tuned the reward model with LoRA‑based policy updates, keeping training cost < \$500.

**Result**  
- Deployment time: 65 days (30 % faster than projected).  
- Cost savings: inference cost dropped from \$4.5k to \$1.8k/month (60 % reduction).  
- Accuracy: F1‑score improved from 0.72 to 0.86 on the internal test set.

**Leadership Principles Anchored**  
- **Customer Obsession** – Delivered a cheaper, faster chatbot that met the product manager’s SLA.  
- **Ownership** – Took full responsibility for architecture decisions, cost modeling, and end‑to‑end delivery.  

**Bar‑raiser Takeaway**  
*Deep dive*: I validated quantisation effects with ablation studies and documented trade‑offs between latency and perplexity.  
*Quantified impact*: Precise cost & performance numbers.  
*Learning from failure*: Early attempts with full‑model fine‑tuning caused OOM errors; pivoting to PEFT saved us both time and money.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
