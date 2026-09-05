---
qid: ing_fd2a4be02e__star__local
question: 'Explain: Determining whether a service is too small or not properly defined'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 367
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:54:54-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were building an anomaly‑detection microservice for transaction fraud. The team had split the service into two tiny functions—one to pull raw data from Kafka and another to run a lightweight decision tree model. During the sprint review, the product owner flagged that the API latency was creeping above 200 ms on peak loads.

**Task:**  
I needed to assess whether our “service” was genuinely too small or if it was poorly scoped, causing hidden overhead and maintenance pain. The goal was to either consolidate the functions into a single, more efficient service or clearly define boundaries that justified the split.

**Action:**  
First, I instrumented each function with OpenTelemetry, capturing request counts, response times, and queue depths. I then plotted latency distributions against batch sizes and observed a 30 % overhead from context switching between the two functions. Next, I refactored the codebase to merge them into one FastAPI service, introducing async workers for data ingestion while keeping the model inference in a separate thread pool. I also added a configuration layer so that the decision tree could be swapped out for a XGBoost model without redeploying.

**Result:**  
The consolidated service cut average latency from 210 ms to 95 ms and reduced CPU usage by 25 %. We dropped the number of deployments from two to one, simplifying CI/CD. I learned that a microservice should be defined not just by logical separation but also by measurable performance trade‑offs—small services can become costly if they add unnecessary inter‑process communication or deployment overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
