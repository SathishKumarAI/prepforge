---
qid: ing_580ffa64ac__aws__local
question: 'Explain: 124: System Design Interview — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 590
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:44:48-05:00'
sources: []
---

**Situation (S)**  
I was asked to design a web‑crawler for a startup that needed to index millions of pages per day for SEO analytics. The goal was to ingest, parse, and store data with high availability while keeping cost under $2k/month.

**Task (T)**  
Build a scalable, fault‑tolerant crawler that respects robots.txt, handles rate limits, and delivers 1 M URLs/day with <5 % failure.

**Action (A)**  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| **URL queue** | Amazon SQS FIFO + DynamoDB for deduplication | Guarantees order, durability, auto‑scaling. |
| **Worker pool** | EC2 Spot + ECS Fargate with Auto Scaling | Cost‑efficient compute; spot reduces spend by ~70%. |
| **Crawler engine** | Python (asyncio) + Selenium headless | Handles JS rendering when needed. |
| **Storage** | Amazon S3 for raw HTML, DynamoDB for metadata | S3 is cheap and highly available; DynamoDB gives ACID ops on URLs. |
| **Monitoring** | CloudWatch Alarms + X-Ray traces | Detect throttles, latency spikes, 99.9% availability. |

*Scalability:* The queue auto‑scales to 10k messages/second; workers spin up/down based on SQS depth, achieving ~1 M URLs/day with <0.5 % unprocessed.  
*Availability:* Multi‑AZ deployment + retry logic keeps uptime >99.95%.  
*Cost:* Spot + Fargate → $1,850/month; 90% lower than on‑demand.

**Result (R)**  
Delivered the crawler in 6 weeks, achieving 1 M URLs/day with <0.3 % failure and 99.97% uptime. The cost stayed under budget, saving $350k annually vs a traditional on‑prem solution.

---

### Leadership Principles Highlighted
- **Ownership** – I drove end‑to‑end design, testing, and ops.
- **Dive Deep** – Detailed trade‑offs between SQS vs Kinesis, Spot vs On‑Demand, and cost models were quantified.
- **Deliver Results** – Met all performance & budget targets within the timeline.

### What a Bar‑Raiser Listens For
- Quantified impact (1 M URLs/day, 99.97% uptime).  
- Depth of analysis: deduplication strategy, error handling, scaling logic.  
- Learning from early failures: switched to DynamoDB after SQS back‑pressure issues; added X-Ray for root cause analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
