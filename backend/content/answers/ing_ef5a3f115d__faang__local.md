---
qid: ing_ef5a3f115d__faang__local
question: 'Explain: Company context — Figure Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 458
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:56:01-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise, data‑driven explanation of how an organization can build and deploy an AI solution that delivers business value (“Figure AI”). I’ll assume the company is mid‑sized, has structured data (sales, inventory) and wants to improve forecasting. Key assumptions: existing data pipeline, modest compute budget, regulatory constraints.

**Approach**  
1. **Problem framing** – define KPI (e.g., forecast accuracy, inventory turnover).  
2. **Data audit** – quality, volume, missingness.  
3. **Model selection** – time‑series methods vs. deep nets; start with Prophet or LSTM for baseline.  
4. **Infrastructure** – containerize with Docker, orchestrate via Kubernetes, store models in S3/MLflow.  
5. **Deployment pipeline** – CI/CD with GitHub Actions → model registry → inference API (FastAPI).  
6. **Monitoring** – drift detection, latency, SLA dashboards.

**Depth**  
- Use a 70/15/15 split; cross‑validate with walk‑forward validation.  
- Feature engineering: lag features, holiday flags, categorical embeddings.  
- Loss: MAE + L1 regularization to avoid overfitting.  
- Deploy via GPU‑enabled nodes for inference latency <50 ms.  
- Complexity: training O(n·t) per epoch; inference O(1) per request.

**Edge Cases**  
- Sudden demand spikes (black‑Friday): fallback rule‑based buffer.  
- Data gaps: impute with last‑known value or use a Kalman filter.  
- Model decay: schedule retraining weekly, trigger alerts on MAE >10%.

**Optimize & Communicate**  
Explain trade‑offs: heavier models → better accuracy but higher cost; simpler linear models cheaper to maintain. Emphasize that the architecture is modular—each component can be swapped (e.g., switch from LSTM to Transformer). Conclude with a KPI dashboard showing projected ROI: 15% reduction in stockouts, $2M annual savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
