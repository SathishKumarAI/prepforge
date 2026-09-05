---
qid: ing_f47d41ce9d__star__local
question: 'Explain: Integrate Google AI models with an API key'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 320
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:37:21-05:00'
sources: []
---

**Situation** – In Q2 2025 I was leading the migration of our legacy chatbot from an in‑house NLP stack to Google’s Vertex AI. The product team needed real‑time intent detection for a high‑traffic customer support portal that handled ~15k requests per day.

**Task** – My goal was to integrate the Vertex AI endpoint securely using an API key, expose it through our existing REST gateway, and ensure latency stayed under 200 ms while keeping cost below $2k/month.

**Action** – I first created a Cloud Endpoints service with OpenAPI spec that wrapped the Vertex AI model. Using Google Cloud’s IAM, I generated a restricted API key tied to the endpoint and added an authentication layer in our Node.js Express middleware. To optimize latency, I cached common intent responses in Redis and employed batch inference for bursts of requests. I also set up Cloud Monitoring alerts for any spike above 250 ms and used Cloud Billing reports to track usage per endpoint.

**Result** – The new integration cut average response time from 350 ms to 180 ms, boosted user satisfaction scores by 12%, and kept monthly spend at $1.8k. I learned the importance of tightly coupling IAM policies with API keys for security, and how caching can dramatically improve perceived performance without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
