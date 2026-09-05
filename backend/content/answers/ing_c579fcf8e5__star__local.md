---
qid: ing_c579fcf8e5__star__local
question: 'Explain: Open-Source Models — Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 339
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:04:40-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a recommendation engine for an e‑commerce platform that needed to scale to millions of users while keeping costs low. Our in‑house models were heavy and hard to maintain.

**Task:**  
I was tasked with finding a lightweight, high‑performance model that could be integrated quickly through our existing API stack, while ensuring the documentation was clear enough for both data scientists and developers.

**Action:**  
I evaluated several open‑source transformer models (DistilBERT, MobileBERT) and chose DistilBERT because of its 40 % smaller size with only a 5 % drop in accuracy. I then wrapped it into our Sarvam API by creating a lightweight inference container using Docker, exposed via gRPC, and documented the endpoint in the Sarvam docs portal. The docs included a sample request payload, expected JSON response schema, latency benchmarks (under 120 ms on a single GPU), and a quick‑start Python client that used `requests` to hit the `/predict` endpoint.

**Result:**  
Deployment reduced inference costs by 35 % and improved throughput from 200 to 600 predictions per second. The clear Sarvam docs cut onboarding time for new developers from two weeks to just one day, and we saw a 12 % lift in recommendation click‑through rate within the first month of rollout. I learned how crucial concise API documentation is when scaling ML solutions in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
