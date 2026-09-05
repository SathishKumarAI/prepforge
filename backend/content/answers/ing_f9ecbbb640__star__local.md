---
qid: ing_f9ecbbb640__star__local
question: 'Explain: Non-Functional Requirements (What Are the Constraints?)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 343
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:48:16-05:00'
sources: []
---

**Situation:**  
In late 2023 I was leading a fraud‑detection model for a fintech startup that had just hit $50 M in annual revenue. The new system needed to run on the existing edge devices in ATMs while keeping latency below 200 ms and staying within a 10 % CPU budget.

**Task:**  
I had to design a pipeline that met strict performance, security, and compliance constraints: low inference latency, high accuracy (≥ 99.5 % precision), minimal memory footprint (< 200 MB), GDPR‑compliant data handling, and 99.9 % uptime for the monitoring service.

**Action:**  
I chose TensorFlow Lite for model deployment, quantized weights to INT8, and pruned the network to reduce ops by 35 %. I implemented a micro‑batching scheduler that aligned inference with ATM idle cycles. For security, all training data were anonymized and encrypted at rest; I used differential privacy noise during feature extraction. To guarantee uptime, I built a lightweight Prometheus exporter on each device and set up automatic failover to the cloud when latency exceeded 180 ms.

**Result:**  
The final system achieved an average inference time of 145 ms, maintained 99.7 % precision, used only 180 MB RAM, and hit 99.92 % uptime over a three‑month pilot. I learned that balancing ML accuracy with edge constraints often requires iterative quantization and close collaboration with hardware teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
