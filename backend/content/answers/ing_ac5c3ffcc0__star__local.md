---
qid: ing_ac5c3ffcc0__star__local
question: 'Explain: Tesla — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 316
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:16-05:00'
sources: []
---

**Situation**  
At my previous role I was part of the autonomous driving team at a large EV manufacturer, where we were tasked with reducing the false‑positive rate in our lane‑keeping model from 4.2 % to below 2.5 % for highway scenarios.

**Task**  
I had to improve the perception pipeline’s classification accuracy without increasing inference latency beyond 15 ms per frame, so that real‑time safety decisions could still be made on the vehicle’s edge GPU.

**Action**  
First I profiled the existing TensorRT graph and found a bottleneck in the region‑proposal network (RPN) that used a single‑scale feature map. I re‑engineered the RPN to use multi‑scale feature pyramids, then applied knowledge distillation from a larger teacher model trained on 10× more annotated data. To keep latency low, I quantized the distilled student to INT8 and pruned redundant channels with L1 regularization. Finally, I integrated a small online calibration module that adjusted confidence thresholds based on current road‑speed.

**Result**  
The updated pipeline cut false positives from 4.2 % to 1.9 %, a 55 % relative improvement, while maintaining an average inference time of 13 ms per frame. The success also demonstrated how careful architectural tweaks and distillation can balance accuracy and speed in safety‑critical ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
