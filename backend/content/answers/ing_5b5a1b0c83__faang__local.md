---
qid: ing_5b5a1b0c83__faang__local
question: 'Explain: Whiteboard Exercises for AI System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 521
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:15:33-05:00'
sources: []
---

**Whiteboard Exercises for AI System Design**  
*FAANG‑style interview answer (≈200 words)*  

---

### 1️⃣ Clarify  
> *Problem:* Interviewers ask you to design an end‑to‑end AI system on the whiteboard—e.g., a real‑time image classification service.  
> *Assumptions to confirm:*  
> - Scale: e.g., 10k req/s, 1 ms latency target.  
> - Data: labeled images, storage type (S3, GCS).  
> - Deployment: cloud provider, autoscaling policy.  
> - Constraints: cost budget, regulatory compliance.

### 2️⃣ Approach  
Outline a **pipeline**:  
1. **Data ingestion & preprocessing** → streaming or batch ETL.  
2. **Model training** → feature extraction + fine‑tuning, using GPU clusters.  
3. **Model serving** → containerized microservice behind load balancer.  
4. **Monitoring & feedback loop** → metrics (latency, accuracy), A/B testing for new weights.

### 3️⃣ Depth  
- **Storage:** Object store for raw data + Parquet in data lake; DB for metadata.  
- **Training:** Use distributed training (Horovod/PyTorch‑Lightning) on Spot VMs to control cost.  
- **Serving:** TensorFlow‑Serving or TorchServe; cache hot predictions with Redis.  
- **Latency:** Keep model < 200 ms; use quantization or ONNX runtime for speed.  
- **Cost:** Autoscale based on queue depth, spot instances, pay‑as‑you‑go compute.  

### 4️⃣ Edge Cases  
- Sudden spike in traffic → over‑provisioning, fallback to a lower‑accuracy model.  
- Model drift → continuous evaluation with labeled validation set.  
- Data privacy breach → encrypt at rest and in transit; audit logs.

### 5️⃣ Optimize & Communicate  
Explain trade‑offs: larger batch size reduces GPU utilization but increases latency. Highlight how you’d iterate—start simple, add caching, then move to model distillation if needed. Wrap up by summarizing the end‑to‑end flow, key metrics, and next steps (e.g., prototype in Colab).  

This structured response demonstrates clear thinking, depth, and communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
