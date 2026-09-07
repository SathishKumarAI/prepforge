---
qid: ing_9aa08b44fc__aws__local
question: Compare INT8, FP8, and FP4 for serving. What breaks, and how do you validate
  that a quantized endpoint is "good enough"?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 459
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:14:55-05:00'
sources: []
---

**Situation / Task** – While migrating a production recommendation model to the new **AWS Inferentia** cluster, I had to decide between INT8, FP8, and the experimental FP4 precision for inference endpoints. The goal was to reduce latency by 30 % without exceeding a 1 % drop in AUC.

**Action** –  
- *Dive Deep*: I benchmarked each format on a representative dataset (50k samples) using **Amazon SageMaker Neo** and **AWS Lambda** warm‑starts, measuring latency, CPU/Memory usage, and inference throughput.  
- *Ownership & Bias for Action*: For FP4, I built a custom calibration routine that ran over the full validation set to minimize quantization error, then deployed the model on an **Inference Accelerator** with 8 GB of memory.  
- *Invent & Simplify*: I automated the quality gate in CI/CD: if the AUC fell below 0.99 of FP32 or latency exceeded 20 ms per request, the build failed.

**Result** –  
| Precision | Latency (ms) | Throughput (req/s) | AUC drop |
|-----------|--------------|--------------------|----------|
| INT8      | **12**       | 15 k               | +0.2 %   |
| FP8       | 10           | 18 k               | +0.1 %   |
| FP4 (calibrated) | 9   | 20 k               | –0.5 %   |

FP4 met the latency target but degraded AUC by 0.5 %, which was unacceptable for the business KPI of user click‑through rate. I therefore rolled back to FP8, achieving the desired balance.

**Learning** – Quantization trade‑offs are not just about arithmetic precision; they ripple through cache locality, memory bandwidth, and model calibration. A rigorous validation pipeline (latency + metric drift) is essential before exposing a quantized endpoint to users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
