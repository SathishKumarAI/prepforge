---
qid: ing_ae320c1496__aws__local
question: 'Explain: Contact Me — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 432
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:59:22-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
When our AI‑evals team launched the “Contact Me” feature to let users request model performance feedback, usage spiked 4× in the first week, yet latency averaged 2 s—unacceptable for a real‑time help desk. I was tasked to redesign the evaluation pipeline so it could handle 10k concurrent requests while keeping cost < $0.02 per eval.

**Action (Dive Deep / Bias for Action)**  
1. **Requirements & Design** – Stateless microservice on **AWS Lambda** (Python 3.11) triggered by API Gateway, receiving a model ID and user query.  
2. **Evaluation Engine** – Off‑loaded to **Amazon SageMaker Endpoint** hosting the eval model; invoked via async batch transform for high throughput.  
3. **Caching & Queueing** – Implemented **DynamoDB Global Secondary Index** for recent results (TTL = 24 h) and **SQS FIFO** for back‑pressure, ensuring no loss during traffic spikes.  
4. **Observability** – CloudWatch metrics + X-Ray tracing; auto‑scaling via Lambda provisioned concurrency set to 200.

**Result (Deliver Results)**  
- Latency dropped from 2 s to < 300 ms for 95 % of requests.  
- Cost fell by 37 % ($0.019 per eval vs $0.030).  
- Incident rate decreased from 1.8/1000 to 0.3/1000.

**Reflection (Invent & Simplify / Learn)**  
I learned that moving heavy inference to SageMaker and leveraging serverless for orchestration can dramatically cut latency and cost. Future iterations will add **Step Functions** for multi‑model evaluation pipelines, keeping the system fully reusable across teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
