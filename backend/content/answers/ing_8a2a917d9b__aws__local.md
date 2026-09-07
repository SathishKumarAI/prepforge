---
qid: ing_8a2a917d9b__aws__local
question: What is the difference between feature engineering and representation learning?
  Where does hand-engineering still earn its keep in 2026?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 425
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:38:16-05:00'
sources: []
---

**Answer (Amazon Style)**  

During a recent *AI‑ops* sprint I led a team that rebuilt the product recommendation engine for a global marketplace.  
- **Situation:** Our legacy model relied on hand‑crafted features (click‑through rates, time‑on‑page) and underperformed by 12 % in conversion.  
- **Task:** Demonstrate how representation learning can replace feature engineering while still leveraging domain knowledge where it matters most.  
- **Action:** I introduced a *Self‑Supervised Contrastive* encoder on top of raw user‑interaction logs (click, scroll, dwell). The model was deployed to an **Amazon SageMaker** endpoint with auto‑scaling; we stored embeddings in **Amazon DynamoDB** for low‑latency lookup. For high‑impact signals—e.g., fraud alerts and compliance flags—I kept a small set of hand‑crafted rules (thresholds on transaction amount, velocity) because they are deterministic, auditable, and cost‑effective to maintain.  
- **Result:** Conversion rose 18 % (≈$5 M incremental revenue per quarter), inference latency dropped from 200 ms to 30 ms, and storage costs fell by 35 %.  

**Why hand‑engineering still matters in 2026:**  
1. *Regulatory & auditability*—rule‑based logic is easier to explain to regulators.  
2. *Edge constraints*—simple Boolean flags run on microcontrollers where GPU inference is infeasible.  

**Leadership Principles Highlighted:**  
- **Customer Obsession**: Delivered tangible revenue lift.  
- **Ownership**: Took full responsibility for the end‑to‑end pipeline and post‑deployment monitoring.  
- **Dive Deep**: Analyzed feature importance, embedding quality, and latency profiles to justify trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
