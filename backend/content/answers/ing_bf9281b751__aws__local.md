---
qid: ing_bf9281b751__aws__local
question: 'Explain: Budget Model Comparison — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 436
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:37:30-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional AI team at my previous company, we needed to choose the most cost‑effective model for a new recommendation engine that would run 24/7 in production. The decision had to balance inference latency, monthly spend, and model accuracy.

**Action (Dive Deep + Ownership)**  
1. **Requirements & Metrics** – We defined success as ≤ 20 ms per request, < $0.10 per 1,000 predictions, and ≥ 87 % precision@5.  
2. **Model Set** – ResNet‑50, EfficientNet‑B3, and a distilled MobileNetV2.  
3. **AWS Architecture** – Trained on SageMaker Pipelines (Spot instances for cost). For inference we compared:  
   * **SageMaker Real‑Time Endpoint** (GPU/CPU)  
   * **Lambda + API Gateway** with batch pre‑warming (cost‑effective for low traffic)  
   * **Edge TPU via Greengrass** for IoT devices.  
4. **Cost Simulation** – Used the AWS Pricing Calculator and a custom cost‑model script that factored in ECR storage, SageMaker training hours, and Lambda invocation charges.  
5. **Results** – MobileNetV2 achieved 89 % precision@5 with an inference latency of 15 ms on CPU endpoints, costing $0.08/1,000 predictions—**25 % cheaper** than the other two models while meeting all SLA’s.

**Result (Deliver Results)**  
Implemented MobileNetV2 across production, reducing monthly spend by **$18k** and improving user engagement by 4 %. Learned that early cost modeling can surface hidden trade‑offs; we now standardize this budget‑model comparison workflow for every new AI project.  

*Leadership Principles:* Customer Obsession, Ownership, Dive Deep, Deliver Results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
