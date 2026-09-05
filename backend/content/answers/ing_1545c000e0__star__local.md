---
qid: ing_1545c000e0__star__local
question: 'Explain: Technical Stacks for Full-Stack Development'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 366
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:10:45-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our data science team was building a real‑time fraud detection model that needed to be deployed as a web service and integrated with the existing customer portal. The product owner demanded low latency (<50 ms) predictions for every transaction while keeping costs under $5k/month.

**Task:**  
I had to design an end‑to‑end stack: ingest data, train models, expose inference via API, and build a lightweight UI that visualized risk scores—all within two months.

**Action:**  
- **Data layer:** Set up Kafka for streaming transaction logs; used Spark Structured Streaming on EMR to preprocess and feed into the training pipeline.  
- **Modeling:** Trained XGBoost models in Python, packaged them with ONNX for faster inference.  
- **Inference service:** Deployed a FastAPI app behind an Nginx reverse proxy on ECS Fargate; used Docker containers with GPU‑enabled instances only for batch scoring during nightly retraining.  
- **Front end:** Built a React dashboard (TypeScript, Redux) that consumed the API via WebSockets to show live risk scores and historical trends.  
- **Monitoring:** Integrated Prometheus/Grafana for latency metrics and Sentry for error tracking; automated alerts if inference lag exceeded 30 ms.

**Result:**  
The system handled 10k transactions per second with average inference time of 32 ms, keeping monthly cloud spend at $4.2k. The dashboard reduced investigation turnaround by 35%. I learned how to balance model performance, cost, and developer experience in a full‑stack ML deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
