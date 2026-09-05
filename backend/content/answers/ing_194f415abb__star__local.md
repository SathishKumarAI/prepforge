---
qid: ing_194f415abb__star__local
question: 'Explain: When to use: — Load Balancing Algorithms Explained with Code (and
  Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 373
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:19:56-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were deploying an online fraud‑detection model that processed thousands of transaction requests per second. Our initial single‑server setup started choking during peak hours, with latency spiking from 50 ms to over 400 ms and the error rate creeping up to 3%.

**Task** – I had to design a scalable infrastructure that kept inference latency below 100 ms while maintaining high availability, without rewriting the model code.

**Action** – I evaluated round‑robin, least‑connections, and weighted‑response‑time algorithms. Using Nginx as a reverse proxy, I implemented a weighted‑least‑connections strategy because our backend GPU nodes had different compute capacities. The configuration looked like this:

```nginx
upstream fraud_service {
    server 10.0.1.10 weight=3;
    server 10.0.1.11 weight=2;
    server 10.0.1.12 weight=5;
}
server {
    location /predict {
        proxy_pass http://fraud_service;
    }
}
```

I also added a health‑check endpoint and used Prometheus to monitor queue lengths, adjusting weights dynamically via an automation script.

**Result** – Latency dropped to 70 ms on average during peak load, the error rate fell below 0.1%, and we achieved 99.9% uptime across three regions. I learned that choosing the right balancing algorithm depends on backend heterogeneity and real‑time metrics; a simple round‑robin can be suboptimal when nodes differ in performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
