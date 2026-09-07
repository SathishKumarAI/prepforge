---
qid: ing_192f998bce__faang__local
question: Walk me through how you'd take an AI feature from idea to production in
  two weeks. What does v1 actually look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 531
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:43:37-05:00'
sources: []
---

**Clarify**

> *Goal:* Build a minimal viable AI feature (e.g., “smart reply” for chat) in 2 weeks.  
> **Assumptions I’d confirm:**  
> • Target platform & tech stack (React + Node, iOS Swift, etc.)  
> • Data availability: labeled conversation logs or open‑source corpora  
> • Deployment target (cloud provider, CI/CD pipeline)  
> • Success metrics (latency < 200 ms, accuracy > 80 % F1)

**Approach**

| Phase | Deliverable |
|-------|-------------|
| **Week 1 – Design & Data** | • Sketch API contract and UI wireframe. <br>• Crawl / ingest 10k labeled messages; clean & split train/val/test. |
| **Week 2 – Prototype & Deploy** | • Fine‑tune a distilled transformer (e.g., DistilBERT) on the data, export to ONNX. <br>• Wrap inference in a lightweight FastAPI service; containerize with Docker. <br>• CI pipeline: unit tests + model validation; CD pushes to staging. |

**Depth**

*Model:* DistilBERT‑base (≈ 66M params) → ~200 ms latency on an A2 GPU; fine‑tune for 3 epochs, early‑stop on validation loss.  
*API:* `/predict` POST with `{"message":"..."}` returns top‑k suggestions.  
*Infrastructure:* ECS/Fargate + ECR; autoscale by request count.  
*Monitoring:* Prometheus metrics (latency, error rate) + SageMaker Model Monitor for drift.

**Edge Cases**

| Scenario | Mitigation |
|----------|------------|
| Empty or malformed input | Return “I’m sorry, I didn’t understand.” |
| Extremely long messages | Truncate to 512 tokens; log warning. |
| Data imbalance | Oversample minority intents; use focal loss. |

**Optimize & Communicate**

*Optimizations:* Quantize weights (INT8) to cut inference time by ~30 %. Cache frequent responses with Redis.  
*Narrative:* “We’re delivering a production‑ready smart reply in two weeks by reusing an existing distilled transformer, containerizing it for rapid deployment, and wiring up automated monitoring. This gives us a clean slate for iterative improvement while meeting latency and accuracy targets.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
