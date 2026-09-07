---
qid: ing_80934566eb__aws__local
question: 'Explain: Prototype to Production — On Device And Edge Deployment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 455
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:15:43-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that had built an image‑classification model for a consumer security camera. The prototype ran in SageMaker with 95 % accuracy but was too slow (250 ms inference) for real‑time alerts on the edge device.

**Action**  
1. **Model optimization** – used *TensorRT* and *Quantization* to reduce the model size by 4× while keeping >93 % accuracy.  
2. **Edge deployment** – containerized the runtime with Docker, pushed it to *Amazon ECR*, and deployed via *AWS IoT Greengrass v2*. The Greengrass core ran on a Jetson Nano; Lambda functions handled pre‑processing and post‑processing.  
3. **Observability & rollback** – instrumented CloudWatch metrics (latency, CPU, memory) and set up an automatic rollback policy in Greengrass if latency > 120 ms.  
4. **Scalability & cost** – used *Greengrass Core SDK* to cache model updates; only the delta was sent over MQTT, cutting bandwidth by 70 %. The solution ran on a fleet of 10 k devices at <$0.05/device/month.

**Result**  
Inference latency dropped from 250 ms to 30 ms, enabling instant alerts. Accuracy remained >93 %, and we reduced edge compute cost by 60 % versus the cloud‑only approach. The deployment was rolled out in two weeks, meeting a critical product launch deadline.

> **Leadership Principles:** *Customer Obsession* (instantaneous alerts), *Ownership* (full lifecycle from prototype to production).  
> **Bar‑raiser focus:** Demonstrated ownership, deep dive into model ops, quantified performance gains, and learned from an initial 200 ms latency spike that led to the rollback mechanism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
