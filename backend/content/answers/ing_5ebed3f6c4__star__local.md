---
qid: ing_5ebed3f6c4__star__local
question: 'Explain: So numbers between 0 and 127 you — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 335
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:34-05:00'
sources: []
---

**Situation**  
When I joined the recommendation team at a mid‑size streaming startup, we had to ship a new model that ran on edge devices with strict latency limits. The training data were millions of user interaction logs, but the inference engine only accepted 8‑bit integer inputs (values 0–127).  

**Task**  
I needed to convert our continuous feature set into this discrete range without losing predictive power, and prove it met a 10 ms per request latency target on ARM CPUs.  

**Action**  
First, I plotted each feature’s distribution and identified skewed columns that would collapse under naive min‑max scaling. I applied a log transform to heavy‑tailed features, then used quantile‑based binning to map values into 0–127 while preserving relative ordering. To keep the model lightweight, I replaced the dense layers with depthwise separable convolutions and quantized weights using TensorFlow Lite’s post‑training quantization API. During profiling, I iterated on batch size and thread affinity, ultimately reducing per‑inference time from 18 ms to 7 ms.  

**Result**  
The new pipeline produced a 3.2% lift in click‑through rate compared to the previous model while staying within the latency budget. I learned that careful feature engineering—especially when constrained by integer ranges—can be as impactful as architectural changes, and that end‑to‑end profiling is essential for meeting real‑world performance goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
