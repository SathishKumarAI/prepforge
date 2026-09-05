---
qid: ing_12f8d0f753__fp__local
question: 'Explain: Draw Data Flow — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 376
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:46:11-05:00'
sources: []
---

**Draw Data Flow – the “why” of a design interview**

The core problem is *turning raw observations into actionable predictions* while satisfying latency, scale, and reliability constraints.  
A data‑flow diagram (DFD) makes that transformation explicit:

1. **Inputs → Feature Extractors → Model → Output**  
   Every arrow encodes a *computational budget*. If the model must serve 10 k requests/sec, the extractor’s CPU/GPU cost per request becomes a hard constraint.  

2. **Data Ingestion → Pre‑processing → Storage → Training**  
   The same data stream can feed both online inference and offline learning. By drawing separate pipelines for *real‑time* vs *batch* stages you expose trade‑offs: caching raw logs in S3 (cheap, durable) versus streaming to Kafka for low‑latency feature recomputation.

3. **Feedback Loop → Retraining Scheduler**  
   In production the model’s predictions influence future inputs (e.g., recommendation systems). The DFD must therefore include a *feedback* edge that triggers periodic retraining once drift metrics exceed a threshold—otherwise the system will silently degrade.

**Non‑obvious insight:**  
A single arrow often hides *information bottlenecks*. If you label the bandwidth and entropy of each channel, you can prove that compressing features (e.g., using PCA) is not just a space saver but an optimization problem: reduce mutual information with input while preserving predictive power. This perspective lets interviewers see you think about *information theory* as much as engineering.

By sketching these flows first, you demonstrate a principled view of the system—exactly what interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
