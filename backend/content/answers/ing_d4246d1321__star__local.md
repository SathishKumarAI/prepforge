---
qid: ing_d4246d1321__star__local
question: 'Explain: Every Decision Is a Tradeoff — Frugal Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 327
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:33:47-05:00'
sources: []
---

**Situation:**  
At my previous role at a fintech startup, we were building an ML‑driven fraud detection pipeline that had to process millions of transactions per day while staying under our $2 M cloud budget for the quarter.

**Task:**  
I was tasked with designing a frugal architecture that could keep latency below 200 ms and cost within budget, without sacrificing model accuracy.

**Action:**  
I first profiled the pipeline and identified that feature extraction (the heavy part) dominated compute time. I swapped the monolithic Spark job for an event‑driven Lambda workflow, using AWS Step Functions to orchestrate small, stateless containers. For the model inference step, I converted our 300 MB TensorFlow model into a quantized ONNX version and served it with NVIDIA Triton on spot instances. To cut storage costs, I moved raw logs from S3 to Glacier Deep Archive after 30 days, while keeping only the last week in S3 for real‑time analysis. I also introduced a cost‑aware auto‑scaling policy that throttled non‑critical jobs during peak hours.

**Result:**  
The new architecture reduced monthly cloud spend by 35 % ($280k saved) and maintained a false‑positive rate of 0.8 %, meeting the regulatory requirement. The exercise taught me that every design choice—compute, storage, scaling—has a cost/benefit curve, and balancing them is key to sustainable ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
