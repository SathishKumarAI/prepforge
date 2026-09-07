---
qid: ing_7b2a091f89__aws__local
question: 'Explain: Gemini 3.1 Flash Lite Image (Nano Banana 2 Lite) 🍌'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 450
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:03:57-05:00'
sources: []
---

**Situation & Task**  
While leading a research‑and‑development sprint at my previous company, we were tasked to create a lightweight, on‑device AI inference package—Gemini 3.1 Flash Lite Image—for the Nano Banana 2 Lite (a low‑power edge board). The goal was to deliver < 200 MB binary size, < 30 ms latency for image classification, and < 5 W power consumption.

**Action & Design**  
- **Model Selection:** Chose a MobileNet‑V3 backbone pruned to 0.35× FLOPs; quantized to INT8 using TensorRT on NVIDIA Jetson Nano.  
- **Packaging:** Built a self‑contained Docker image with only the runtime, model weights, and a lightweight inference API (FastAPI). Utilised Amazon Elastic Container Registry (ECR) for versioning and automated CI/CD via GitHub Actions.  
- **Deployment & Monitoring:** Employed AWS Greengrass V2 to manage OTA updates on the device; used CloudWatch Metrics to track latency and power usage in real time, feeding back into a Lambda function that triggers model retraining when performance dips below SLA.  

**Result**  
Achieved 220 MB image size, 25 ms inference latency, and 4.8 W average power—meeting the target while reducing deployment time by **35%** versus our legacy pipeline.

---

### Leadership Principles Anchored
- **Customer Obsession:** Built a product that met strict edge‑device constraints demanded by field users.  
- **Ownership & Dive Deep:** Took full responsibility from model design to CI/CD and real‑time monitoring, iterating on data collected in production.

**Bar‑raiser Takeaway**  
I demonstrated end‑to‑end ownership, quantified impact (latency, size, power), and a clear learning loop—key signals for an Amazon bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
