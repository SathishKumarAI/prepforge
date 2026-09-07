---
qid: ing_b7c933e5b3__aws__local
question: 'Explain: Then we also did some normalization to — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 580
total_tokens: 821
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:39-05:00'
sources: []
---

**S**ituation – In 2024 I led the migration of our fraud‑prevention pipeline from on‑prem to AWS for a fintech client with > 5 M daily transactions.  
**T**ask – We needed real‑time anomaly detection while keeping latency < 200 ms and cost < $0.01 per transaction.

**A**ction –  
1. **Normalization**: I introduced min–max scaling on the raw feature vectors in a step‑function Lambda (Python) that writes normalized payloads to S3 for batch training.  
2. **Algorithms**: For streaming, I deployed an Isolation Forest model via SageMaker Endpoint and added an LSTM autoencoder for temporal patterns.  
3. **Explainability**: We wrapped the models with AWS SageMaker Clarify to output SHAP values per alert, stored in DynamoDB for audit.  
4. **Observability**: CloudWatch metrics (prediction latency, anomaly rate) trigger Lambda alerts; a Step Functions workflow retries failed predictions.

**R**esult – The new pipeline reduced false positives by 35 % and increased detection accuracy from 92 % to 97 %. Latency dropped to 120 ms average. Operational cost fell 28 % (from $18k/month to $13k/month) due to serverless scaling and spot instances.

---

### Leadership Principles  
- **Customer Obsession**: Delivered a lower‑cost, higher‑accuracy fraud system that protected users’ funds.  
- **Ownership & Dive Deep**: Took end‑to‑end responsibility, debugged latency spikes by profiling Lambda memory usage, and tuned Isolation Forest depth to balance speed vs. accuracy.

### Technical Design Takeaways  
| AWS Service | Purpose | Trade‑offs |
|-------------|---------|------------|
| SageMaker Endpoint (Inference) | Low‑latency model serving | Higher per‑hour cost than EC2 but auto‑scales |
| Lambda + S3 | Feature normalization & batch training | Stateless, limited CPU – fine for lightweight transforms |
| DynamoDB | Explainability store | Single‑region writes only; latency acceptable for audit |

**Bar‑raiser cues:**  
- Clear ownership of the full ML lifecycle.  
- Quantified impact (35 % FP reduction, 28 % cost savings).  
- Deep dive into algorithm selection and observability.  
- Learning from early false‑positive spikes led to hybrid model adoption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
