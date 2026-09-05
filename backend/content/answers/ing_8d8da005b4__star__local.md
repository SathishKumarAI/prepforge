---
qid: ing_8d8da005b4__star__local
question: 'Explain: Design the backend for a customer-facing chatbot. Walk me through
  the request path.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 343
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:15:42-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a product‑support chatbot for our SaaS platform. The team needed a scalable backend that could handle 20k concurrent users while keeping response latency under 200 ms.

**Task:**  
I was tasked with designing the request path from user input to AI inference, ensuring data privacy, low cost, and rapid iteration of new intents.

**Action:**  
1. I built an API gateway (NGINX + AWS Lambda@Edge) that accepted HTTPS POSTs containing the user’s message and session ID.  
2. The gateway routed requests to a stateless FastAPI service on ECS Fargate; it first fetched conversation context from DynamoDB, then sent the payload to an Amazon Bedrock LLM endpoint via boto3.  
3. I added a caching layer (Redis‑Elasticache) for repeated intents, and implemented request throttling with token buckets to protect the LLM API quota.  
4. All logs were streamed to CloudWatch and metrics exposed through Prometheus for real‑time monitoring.

**Result:**  
The new architecture cut average latency from 1.2 s to 150 ms and reduced AWS spend by 35% due to efficient caching. We handled peak traffic of 25k users without outages, and the team could roll out new intent models in under an hour thanks to the stateless design. I learned how careful request routing and caching can turn a costly LLM integration into a production‑ready service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
