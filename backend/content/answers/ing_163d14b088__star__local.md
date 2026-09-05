---
qid: ing_163d14b088__star__local
question: 'Explain: Projects — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 358
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:13:06-05:00'
sources: []
---

**Situation:**  
During my sophomore year I was part of the CS324 machine‑learning class, where we had to build a predictive model from scratch. At the same time, my personal side project was a smart‑home energy‑monitoring app that collected real‑time sensor data (temperature, humidity, power usage) over Wi‑Fi.

**Task:**  
In CS324 I needed to create a model that could predict next‑hour electricity consumption with at least 85 % accuracy. For the home app, I had to integrate that prediction into a dashboard so homeowners could see upcoming spikes and adjust thermostats automatically.

**Action:**  
I first cleaned both datasets using Pandas, then engineered lag features (e.g., 1‑hour, 3‑hour averages) and one‑hot encoded weather conditions. Using Scikit‑Learn’s XGBoost regressor, I performed a grid search over depth and learning rate, achieving an R² of 0.87 on the validation split. I wrapped the model in a Flask API that streamed predictions every minute, and used MQTT to push alerts to the home app’s React front end. To keep latency low, I deployed the model on a Raspberry Pi with ONNX runtime.

**Result:**  
The final system reduced predicted peak consumption errors from 15 % (baseline linear regression) to under 8 %, translating into an estimated $200/month savings for a typical household. The project taught me how to blend academic rigor with edge‑device constraints, and the importance of end‑to‑end pipelines in ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
