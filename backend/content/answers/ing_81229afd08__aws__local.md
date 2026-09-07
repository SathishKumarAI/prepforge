---
qid: ing_81229afd08__aws__local
question: 'Explain: Pattern 3: Local Code Execution — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 427
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:58-05:00'
sources: []
---

**Pattern 3 – Local Code Execution (LCE)**  
*Leadership Principles:* **Ownership**, **Dive Deep**

> **Situation:** Our team needed to run custom ML inference on edge devices for a real‑time safety system in autonomous forklifts, but the cloud latency would exceed the 50 ms response window.  
> **Task:** Design an architecture that keeps model weights and code on-device while still leveraging AWS for training, monitoring, and OTA updates.  
> **Action:**  
> * **Local Runtime** – Bundled the TensorFlow Lite runtime with a containerized inference service (Docker) shipped via Amazon ECR.  
> * **Model Management** – Used **S3** + **AWS IoT Device Shadow** to version models; an **SQS** queue triggers OTA pushes when new weights are uploaded to S3.  
> * **Observability** – Ingested inference logs to **CloudWatch Logs** and metrics to **Amazon CloudWatch Metrics**, then forwarded anomalies to a Lambda function that updates the device shadow.  
> * **Security & Cost** – Leveraged **AWS IoT Device Defender** for credential rotation; kept on-device storage <5 GB, keeping egress costs negligible (<$0.02/GB).  
> **Result:** Latency dropped from 120 ms (cloud) to 35 ms (local), throughput increased by 3×, and model update time fell below 2 s for 99th percentile devices—reducing incident tickets by 42 %.  

**Bar‑raiser notes:** Look for clear ownership of edge constraints, deep dive into trade‑offs between local vs. cloud resources, quantifiable latency gains, and lessons from initial pilot failures (e.g., handling model drift).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
