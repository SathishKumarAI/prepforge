---
qid: ing_b81399de0f__star__local
question: 'Explain: Real World Back of the Envelope Calculations'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 385
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:37-05:00'
sources: []
---

**Situation:**  
During a sprint at my previous company we were building an image‑classification model for a medical device that had to process scans on the edge with less than 50 ms latency and 1 GB RAM.

**Task:**  
I needed to estimate whether our chosen architecture (a MobileNetV2 fine‑tuned on 200k images) would meet those constraints before we started GPU training.

**Action:**  
I performed a quick back‑of‑the‑envelope calculation:  
- FLOPs per inference ≈ 3.5 G × 0.8 s = 28 GFLOPs (using the MobileNet flop count formula).  
- A modern edge TPU runs at ~200 MFLOPs, so 28 GFLOPs / 200 MFLOP/s ≈ 140 s – clearly infeasible.  
I then tried a depth‑wise separable reduction by 4× and re‑calculated: new FLOPs ≈ 7 GFLOPs → 35 s still too high.  
Finally, I realized we could batch‑process in parallel on two TPUs; the math showed 2 × 140 ms = 280 ms, which is acceptable given our 50 ms target if we split the workload into three streams.  

**Result:**  
We re‑architected to a lightweight model with an extra pruning step, reduced FLOPs to 1.5 GFLOPs, and achieved < 30 ms latency on the edge device, cutting inference cost by 70%. I learned that quick arithmetic not only saves time but also guides architecture decisions before costly experiments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
