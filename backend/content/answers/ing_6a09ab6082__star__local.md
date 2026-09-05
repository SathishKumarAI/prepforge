---
qid: ing_6a09ab6082__star__local
question: Design the output representation for a behaviour prediction model. What
  metrics would you gate it on?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 407
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:59:37-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching an autonomous delivery robot that needed to predict pedestrian behavior in crowded urban settings. The existing rule‑based system misidentified jaywalkers, causing unnecessary stops and a 12 % drop in on‑time deliveries.

**Task:**  
Design a robust output representation for the behaviour prediction model and decide which performance metrics would best gate its deployment so we could guarantee safety while maintaining throughput.

**Action:**  
I chose a probabilistic tensor output: for each time step, the model emits a 3×3 matrix giving joint probabilities over {stop, proceed, yield} × {left, straight, right}. This captures both action intent and direction. I implemented it in PyTorch with a multi‑head attention backbone that fuses LiDAR, camera, and social‑force features. For gating I set up a composite metric:  
1) **Safety‑Precision** – probability of correctly flagging a stop when the ground truth is “stop” (target ≥ 0.95).  
2) **Throughput‑Recall** – recall for “proceed” predictions to keep deliveries fast (target ≥ 0.90).  
3) **Calibration Error** – Expected Calibration Error ≤ 5 % to ensure confidence scores are trustworthy.  

I ran a 10‑fold cross‑validation on the city dataset, tuning thresholds until all three metrics met their targets.

**Result:**  
The new representation improved safety precision from 0.82 to 0.97 and increased delivery throughput by 18 %, while calibration error dropped to 3.2 %. The team adopted the model for production, and we logged a 30 % reduction in near‑miss incidents over three months. I learned that embedding directionality into probabilistic outputs can dramatically improve interpretability and that composite gating metrics are essential when safety and efficiency trade off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
