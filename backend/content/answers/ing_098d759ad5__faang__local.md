---
qid: ing_098d759ad5__faang__local
question: 'Explain: Model strategy — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 486
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:06:31-05:00'
sources: []
---

**Model Strategy – AI System Design**

| Stage | What to do | Why it matters |
|-------|------------|----------------|
| **Clarify** | • Restate the problem: “Design a production‑ready AI system that balances accuracy, latency, and cost.” <br>• Confirm assumptions: data volume, user traffic, SLAs, deployment constraints (cloud vs edge), regulatory needs. | Sets scope and avoids misinterpretation; ensures all stakeholders agree on key metrics. |
| **Approach** | 1️⃣ *Problem Decomposition*: Data ingestion → Pre‑processing → Model inference → Post‑processing → Monitoring.<br>2️⃣ *Technology Stack*: Choose frameworks (PyTorch/TensorFlow), serving platform (TensorRT, Triton), orchestration (K8s).<br>3️⃣ *Iterative Build*: Prototype → Benchmark → Optimize. | Provides a roadmap; keeps focus on end‑to‑end flow and trade‑offs at each layer. |
| **Depth** | • **Data Pipeline**: Use Apache Kafka + Spark for real‑time ETL, schema validation, and feature stores.<br>• **Model Layer**: Start with an ensemble of lightweight models (e.g., distilled BERT) to meet latency; add a heavier model behind a queue for batch scoring. <br>• **Serving**: Deploy via Triton with GPU autoscaling; use ONNX Runtime on CPU for cost‑sensitive nodes.<br>• **Monitoring**: Drift detection, A/B test metrics, and automated retraining triggers. | Demonstrates concrete choices, complexity (e.g., inference latency ~50 ms), and scalability considerations. |
| **Edge Cases** | • Data skew → fallback to rule‑based logic.<br>• Model failure → circuit breaker with default safe output.<br>• Regulatory audit logs → immutable storage. | Highlights robustness; shows awareness of production pitfalls. |
| **Optimize & Communicate** | • Profile bottlenecks, apply quantization or pruning where latency gains outweigh accuracy loss.<br>• Document SLAs and cost dashboards; present trade‑off matrix to stakeholders. | Ends with actionable next steps and clear communication plan, aligning with FAANG interview expectations. |

*Word count: 208*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
