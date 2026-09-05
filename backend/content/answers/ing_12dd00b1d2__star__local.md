---
qid: ing_12dd00b1d2__star__local
question: 'Explain: so that''s one problem another problem is'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 354
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:06:16-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with improving the fraud‑detection pipeline for a payment platform that processed over 10 million transactions per month. Our model’s precision dropped from 92 % to 85 % after a sudden spike in new merchant categories, and latency had climbed past the 200 ms threshold required by our real‑time gateway.

**Task**  
I needed to (1) identify why the model performance degraded with the new categories and (2) bring inference time back below 150 ms without sacrificing accuracy.

**Action**  
First I ran a feature importance sweep on the latest data, uncovering that the “merchant industry code” field was sparsely represented for new merchants, causing over‑fitting. I engineered an embedding layer that compressed categorical IDs into a 32‑dimensional vector, then retrained using LightGBM with early stopping. For latency, I profiled the pipeline in PyTorch, found the bottleneck in the dense matrix multiplication of the final fully connected layer, and replaced it with a batch‑norm + ReLU followed by a quantized version of the model using ONNX Runtime, reducing inference time from 210 ms to 120 ms.

**Result**  
Precision rebounded to 91.5 %, recall improved to 88 %, and the latency target was met. I learned that proactive feature monitoring and lightweight quantization can turn a seemingly intractable performance problem into a manageable engineering task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
