---
qid: ing_eeac9c5ec0__faang__local
question: 'Explain: We''ll scope the problem to handle only the following use cases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 456
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:54:56-05:00'
sources: []
---

**Clarify**  
You want an ML solution that only supports three specific use cases (e.g., *image classification*, *sentiment analysis*, *time‑series forecasting*). I’d first confirm:  
• Which data modalities are available for each case?  
• What performance metrics matter (accuracy, latency, F1, etc.)?  
• Are the models reusable across cases or must they be isolated?

**Approach**  
1. **Define a unified API contract** that accepts raw input and returns predictions.  
2. **Build separate pipelines** for each use case, keeping feature engineering, model training, and inference logic decoupled.  
3. Use a shared infrastructure layer (e.g., containerized services, batch schedulers) to orchestrate the three models.

**Depth**  
*Image classification*: CNN backbone (ResNet‑50), fine‑tuned on domain data; use TorchScript for deployment.  
*Sentiment analysis*: Transformer encoder (DistilBERT) with a lightweight classifier head; quantized for low‑latency inference.  
*Time‑series forecasting*: Temporal Fusion Transformer or Prophet, trained on lagged features; batch‑processed nightly.  

All models are versioned in MLflow, served via FastAPI endpoints behind an API gateway. Training pipelines use Airflow DAGs, with CI/CD that runs unit tests and a sanity check on the metric thresholds.

**Edge Cases**  
• Missing or corrupted inputs → graceful fallback to “unknown” prediction.  
• Imbalanced classes → apply class‑weighting or focal loss.  
• Data drift → scheduled re‑training triggers based on performance decay.

**Optimize & Communicate**  
To improve latency, I’d distill the CNN and BERT models; for throughput, deploy with Kubernetes autoscaling. I would present this plan in a slide deck: problem statement → high‑level architecture diagram → detailed pipeline steps + complexity (O(n) inference, O(d log d) training). This shows clear structure, technical depth, and readiness to iterate on edge cases—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
