---
qid: ing_a7ead376ac__star__local
question: 'Explain: Types of APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 335
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:51-05:00'
sources: []
---

**Situation**  
During my internship at a fintech startup we had to expose our recommendation engine to the mobile app team. The existing monolith made it hard for front‑end developers to query models without pulling in the whole service stack, and each new feature added a lot of coupling.

**Task**  
I was tasked with designing a lightweight API layer that would let the app call the model, handle authentication, and return predictions in under 200 ms while keeping the back‑end scalable.

**Action**  
First I clarified what an API is: a set of endpoints—usually REST or gRPC—that define how external clients interact with services. I chose FastAPI for its async support and automatic OpenAPI docs. I built three routes: `/predict` (POST JSON payload → model inference), `/health` (GET to check service status), and `/metrics` (Prometheus scrape). For authentication, I added JWT middleware so each request carries a signed token. To keep latency low, I pre‑loaded the PyTorch model into memory at startup and used thread‑pooling for CPU inference. I also instrumented latency with `prometheus_client`, exposing it on `/metrics`.

**Result**  
The new API lowered the average response time from 650 ms to 145 ms, reduced the mobile team’s code by 35 %, and cut the number of failed requests during load tests by 80 %. I learned that a well‑defined API is not just an interface; it’s a contract that balances performance, security, and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
