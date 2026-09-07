---
qid: ing_f8b9d271eb__faang__local
question: 'Explain: Scale the metrics that matter to your application'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 488
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:18:14-05:00'
sources: []
---

**Clarify**

You’re being asked how you would *scale* the performance indicators that are most relevant to a specific ML system (e.g., recommendation engine, fraud detector).  
Assumptions to confirm:  
- What “metrics that matter” means (accuracy, latency, throughput, cost, fairness, etc.).  
- The deployment environment (batch vs. online inference, edge vs. cloud).  
- Constraints on data volume, model size, and user base.

**Approach**

1. **Identify key metrics** for the business goal.  
2. **Instrument the pipeline** to capture these metrics in real time.  
3. **Model scaling strategies**: horizontal (sharding), vertical (GPU/TPU), algorithmic (distillation).  
4. **Continuous monitoring & alerting** with automated retraining triggers.  

**Depth**

- *Accuracy*: use stratified sampling and A/B tests; maintain an online evaluation loop that updates a rolling‑window metric to detect drift.  
- *Latency*: profile inference on target hardware, apply batch or pipelined execution; cache frequent predictions.  
- *Throughput*: scale out via Kubernetes pods with autoscaling based on queue depth; use model serving frameworks (TensorRT, ONNX Runtime).  
- *Cost*: implement spot‑instance scheduling and model compression to reduce GPU hours.  
Complexity: scaling inference is O(n) in requests but can be amortized with batching; retraining remains O(m·d) where m=training samples, d=model size.

**Edge Cases**

- Sudden traffic spikes → over‑provisioning leads to cost blow‑up.  
- Data drift causing metric degradation.  
- Model failure on rare edge cases (bias).  
Test by simulating load, injecting synthetic drift, and running fairness audits.

**Optimize & Communicate**

Iteratively refine the pipeline: start with a lightweight model, monitor metrics, then roll out more complex models only when latency/accuracy gains justify cost. Explain trade‑offs clearly to stakeholders—e.g., “We’ll add a second GPU node; this cuts inference time by 30 % but increases monthly spend by $1k.”  

This structured response demonstrates problem framing, systematic planning, technical depth, and clear communication—all key for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
