---
qid: ing_f47d41ce9d__aws__local
question: 'Explain: Integrate Google AI models with an API key'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 441
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:29:43-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to expose a Google Cloud Natural Language API to our internal product suite while keeping cost and latency under control. The goal: deliver a “one‑click” sentiment analysis feature for 200,000 daily users, with <300 ms response time and ≤$0.01 per request.

**Action (Technical Design)**  
I built an **API Gateway + Lambda** layer that authenticates requests, validates payloads, and forwards them to Google’s endpoint using the service account key stored in **AWS Secrets Manager**. The Lambda function runs on a 1‑vCPU, 2 GB runtime, auto‑scales with *Provisioned Concurrency* (5) to guarantee cold‑start latency <200 ms. I added **DynamoDB** for caching popular texts (TTL 12 h) and **CloudWatch Alarms** to trigger alerts if latency >300 ms or error rate >2%.  

I chose **Amazon API Gateway** for throttling (5,000 RPS), **Lambda** for cost‑efficiency ($0.20 per million invocations), and **DynamoDB** for single‑digit millisecond reads, keeping the total cost < $50/month.

**Result**  
The feature launched in 3 weeks; user adoption hit 120k/day within a month. Latency averaged 180 ms, error rate <0.5%, and monthly spend was 30% below budget.  

**Leadership Principles Reflected**  
- **Customer Obsession** – delivered low‑latency, reliable service that users love.  
- **Ownership & Dive Deep** – I managed the full stack, monitored metrics, and iterated on the design based on real data.  

*Bar‑raiser take‑away:* Show ownership of end‑to‑end delivery, quantify impact, and demonstrate a deep technical understanding while learning from early latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
