---
qid: ing_a3b1bd282c__star__local
question: 'Explain: Consumer API — Consumerapi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 327
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:35-05:00'
sources: []
---

**Situation:**  
At my last role, we had a machine‑learning model that predicted customer churn for an e‑commerce platform. The product team needed real‑time churn scores so they could trigger retention offers on the same day as a user’s interaction.

**Task:**  
I was tasked with designing and exposing a lightweight “Consumer API” so front‑end services could fetch the latest churn probability without pulling raw data or re‑running the model every request.

**Action:**  
I built a RESTful endpoint using FastAPI, backed by Redis cache for 10‑second TTL. The API accepted a user ID, looked up the pre‑computed score from our nightly batch job stored in PostgreSQL, and returned JSON `{ "user_id": "...", "churn_score": 0.27 }`. I added HMAC authentication and rate limiting (100 req/s) to protect against abuse, and instrumented Prometheus metrics for latency and error rates. To keep the API fast, I used uvicorn with Gunicorn workers tuned to our traffic profile.

**Result:**  
The new Consumer API cut churn‑score latency from 2 seconds (batch query + inference) to under 30 ms per request, enabling real‑time offers that increased retention by 3.5% over three months. I learned how caching and a well‑defined contract between ML and dev teams can turn heavy models into low‑latency services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
