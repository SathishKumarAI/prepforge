---
qid: ing_1f9c6cc013__aws__local
question: 'Explain: What they emphasise — Together Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 463
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:38:31-05:00'
sources: []
---

**Situation & Technical Challenge**  
I led a cross‑functional squad at AWS building *Together AI*, an internal recommendation engine that surfaces relevant training courses to engineers in real time. The goal was to reduce the “search‑and‑learn” latency from 4 min to under 1 s while keeping costs below $0.10 per inference.

**Task & Leadership Principles**  
- **Customer Obsession:** Engineers are our customers; their productivity is a direct metric of business success.  
- **Ownership + Dive Deep:** I owned the end‑to‑end pipeline and dove into every bottleneck.

**Action – Design & Implementation**  
1. **Data Layer:** Ingested 10M daily logs into Amazon Kinesis → processed by Lambda → stored in DynamoDB (partition key = userID).  
2. **Model Serving:** Trained a LightGBM model on SageMaker, deployed as an endpoint with *Amazon SageMaker Neo* to auto‑optimize for latency on AWS Inferentia.  
3. **Cache Layer:** Used ElastiCache‑Redis (sharded) to keep the top 100 recommendations per user in memory, TTL = 5 min.  
4. **Observability:** CloudWatch metrics + X-Ray tracing revealed a 30% CPU spike; I added an Auto Scaling policy that spun up additional inference instances during peak hours.

**Result**  
- Latency dropped from 4 s to 0.8 s (≈ 80 % improvement).  
- Cost per request fell from $0.25 to $0.07, saving ~$200K annually.  
- Adoption rate among engineers rose from 12 % to 68 %, directly boosting the internal knowledge‑share KPI.

**Bar‑raiser Takeaway**  
Showed true ownership by iterating on architecture until performance targets were met; used deep data analysis (Dive Deep) to identify scaling triggers; quantified impact in cost and user engagement, and learned that caching was a cheaper win than larger model ensembles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
