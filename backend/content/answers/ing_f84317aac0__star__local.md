---
qid: ing_f84317aac0__star__local
question: 'Explain: Divide and Conquer — Frugal Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 345
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:45:09-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech startup we had an incoming stream of transactional data that needed real‑time fraud detection. Our model pipeline was monolithic, running in a single Docker container on a cloud VM; latency spiked during peak hours and the cost hit $12k/month.

**Task:**  
Redesign the architecture to cut costs by 50 % while keeping prediction latency under 200 ms for 95 % of requests.

**Action:**  
I applied Neo Kim’s “Divide and Conquer – Frugal Architecture” principle. First, I split the pipeline into micro‑services: a lightweight feature extractor, a scoring service, and an anomaly aggregator. Each service was containerized with minimal dependencies (Python + FastAPI) and deployed to AWS Fargate spot instances. I introduced event‑driven communication via Amazon SQS, allowing idle services to sleep during low traffic. For the scoring model, I distilled the heavy XGBoost ensemble into a single decision tree using SHAP‑guided pruning, reducing CPU usage by 70 %. Finally, I set up auto‑scaling based on queue depth and added a simple cache layer with Redis for repeated predictions.

**Result:**  
The new architecture cut infrastructure spend to $5k/month (58 % savings). Latency improved: 97 % of requests were under 150 ms. I learned that true frugality comes from isolating components, scaling them independently, and aggressively pruning model complexity without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
