---
qid: ing_b4b3182ecc__aws__local
question: 'Explain: distance from the rider consider the rider'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 514
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:13:05-05:00'
sources: []
---

**Situation & Task**  
While leading a real‑time ride‑hailing service, we needed an ML feature that could estimate *the distance a rider is willing to walk* before accepting a nearby driver. The business goal was to reduce “no‑show” rates and improve first‑mile pickup efficiency.

**Action (Technical)**  
1. **Data & Feature Engineering** – Collected historical trip data: rider’s location, time of day, weather, fare type, past walk distances, and demographic proxies. Created a target variable *WalkDistance* as the actual distance walked before pickup.  
2. **Model Choice** – Trained an XGBoost regression model (≈ 1 M rows) to predict WalkDistance. Used SHAP to interpret feature importance; “time‑of‑day” and “weather” emerged as top drivers.  
3. **AWS Architecture** –  
   * **SageMaker Endpoint** for real‑time inference (latency < 50 ms).  
   * **Glue** for nightly ETL, storing processed data in **Redshift**.  
   * **Step Functions** orchestrated the training pipeline, auto‑scaling with **EC2 Spot Instances** to keep costs below $0.05/hr per job.  
4. **Deployment & Monitoring** – Deployed the model behind an API Gateway; used CloudWatch metrics and SageMaker Model Monitor for drift detection.

**Result (Data‑Driven)**  
- Reduced rider “no‑show” rates by **12 %**, translating to a $1.8 M annual revenue lift.  
- Cut average first‑mile pickup time from 4.2 min to 3.6 min, improving driver utilization by 7 %.  

**Reflection (Leadership)**  
*Ownership*: I owned the end‑to‑end pipeline and drove cross‑team buy‑in.  
*Dive Deep*: By inspecting SHAP values, we discovered a hidden bias against evening riders, prompting an immediate feature tweak that further improved accuracy.  
*Learned from Failure*: Initial models over‑estimated walk distance during inclement weather; after adding a weather confidence score, the model’s MAE dropped 18 %.  

**AWS Leadership Principles Highlighted** – **Customer Obsession**, **Ownership**, and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
