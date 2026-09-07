---
qid: ing_126fd838fa__aws__local
question: 'Explain: Deep dive links — Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 453
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:07:16-05:00'
sources: []
---

**Situation / Task**  
I was asked to build a “Deep‑Dive Links” feature for our internal analytics portal that lets users click on any chart point and drill into the raw data behind it. The user base grew from 5 k to 70 k active analysts in two years, so latency had to stay <200 ms per request while serving petabytes of logs.

**Action**  
*Ownership & Dive Deep*: I scoped the end‑to‑end flow—querying DynamoDB for metadata, fetching S3 data shards, and rendering results in the browser.  
1. **Data layer**: Partitioned log files by day/region into *S3 object prefixes*. Created an *Athena* catalog with *Glue* to query only relevant partitions.  
2. **Compute layer**: Deployed a *Lambda@Edge* function that, on click, runs a small *Athena* query and streams the JSON back via API Gateway.  
3. **Caching**: Added *DynamoDB Accelerator (DAX)* for the most‑frequent drill‑downs; TTL of 5 min to keep freshness.  
4. **Scalability**: Leveraged Athena’s serverless scaling, S3’s request‑level concurrency, and Lambda’s burst capacity.  
5. **Cost control**: Enabled *Athena workgroup* with query result size limits (10 MB) and used S3 lifecycle rules to archive cold data.

**Result**  
- Latency dropped from 1.2 s to 120 ms for 95th percentile requests.  
- Monthly cost fell from $12k to $4.5k while handling a 14× traffic increase.  
- User satisfaction (internal survey) rose from 68 % to 92 %.  

**Reflection**  
The first prototype mis‑estimated partition granularity, causing >500 ms spikes. I learned to *measure* partition performance and iterate quickly—an example of Bias for Action and Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
