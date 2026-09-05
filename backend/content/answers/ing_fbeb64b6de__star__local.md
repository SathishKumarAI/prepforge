---
qid: ing_fbeb64b6de__star__local
question: 'Explain: Synchronous execution — How AWS Lambda Works Behind the Scenes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 326
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:52:26-05:00'
sources: []
---

**Situation:**  
At my previous company we had a real‑time recommendation service that processed user clicks and updated a model every minute. The on‑prem cluster was hitting its CPU ceiling, and latency kept creeping above 300 ms.

**Task:**  
I needed to move the inference step to a serverless environment so that each click could be handled in under 200 ms without overprovisioning resources.

**Action:**  
I chose AWS Lambda with synchronous invocation. Inside the function I used the Python runtime, loaded the pre‑trained model from an EFS mount, and ran inference with PyTorch. To keep the cold start low, I kept the container image small (<300 MB) and leveraged Lambda’s provisioned concurrency to maintain a warm pool of 10 instances. The invocation payload was JSON; Lambda returned the prediction in a single response via API Gateway. I instrumented CloudWatch metrics (Duration, Throttles, Errors) and set up a step‑function fallback for rare timeouts.

**Result:**  
Latency dropped from ~350 ms to <180 ms on average, while CPU utilization fell by 60%. The cost per inference decreased from $0.00075 to $0.0003. I learned that synchronous Lambda works as a request/response bridge: the runtime boots (or stays warm), executes your code, and immediately serializes the return value back through API Gateway, all within the same invocation context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
