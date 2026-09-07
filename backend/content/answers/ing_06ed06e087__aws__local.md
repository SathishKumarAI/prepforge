---
qid: ing_06ed06e087__aws__local
question: 'Explain: Read vs Writes - URL Shortening is a read-heavy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 458
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:41:40-05:00'
sources: []
---

**Situation / Task**  
I was asked to redesign an internal URL‑shortener that served 10 M requests/day but only 1 % were write operations (new short links). The existing monolithic app was slow during traffic spikes and cost over $200/month in RDS.

**Action**  
- **Customer Obsession & Ownership**: I first mapped the user journey—every click must resolve instantly.  
- **Dive Deep**: Measured latency: 350 ms on peak, 80 % of traffic from read requests.  
- **Design**:  
  1. Store key‑value pairs (shortID → longURL) in a *DynamoDB* table with `shortID` as the primary key.  
  2. Enable *Global Secondary Indexes* for analytics (userID, timestamp).  
  3. Cache hot keys in *Amazon ElastiCache – Redis* with TTL = 24 h to absorb bursts; fallback to DynamoDB on miss.  
  4. Use *AWS Lambda* behind an *API Gateway* for write operations—idempotent, auto‑scales, costs < $0.03/day.  
- **Scalability**: DynamoDB handles >10⁶ writes/second with low latency; Redis scales horizontally via clustering.  
- **Availability**: Multi‑AZ deployment of both services ensures 99.999 % uptime.  
- **Cost**: Cut spend from $200 to <$30/month, a 85 % reduction.

**Result**  
- Latency dropped from 350 ms to <20 ms for 90 % of reads.  
- Throughput doubled during peak hours without additional infrastructure.  
- Customer satisfaction (NPS) rose from 68 to 84 within two weeks.

**Bar‑raiser Takeaway**  
I demonstrated *ownership* by driving a cross‑team migration, *dive deep* into metrics to justify AWS choices, and quantified impact with real numbers—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
