---
qid: ing_7f90882f3a__aws__local
question: 'Explain: Requirements & Assumptions — Spotify System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 490
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:13:33-05:00'
sources: []
---

**Situation / Task**  
I was asked to sketch a high‑level architecture for a *Spotify‑like* streaming service that must support millions of concurrent listeners worldwide while keeping latency under 200 ms and cost per stream below \$0.01.

**Action – Requirements & Assumptions**  
- **User base:** 100 M active users, 1 B monthly streams → ~10 k streams/sec peak.  
- **Latency:** < 200 ms from request to first byte (TCP + TLS).  
- **Availability:** 99.95% SLA; failover within 30 s.  
- **Content catalog:** 50 M tracks, each 5 min MP3/FLAC (~300 MB total storage).  
- **Personalization:** real‑time recommendation engine; model updates nightly.  
- **Compliance:** GDPR & regional data residency.

**Assumptions**  
1. Tracks are immutable once uploaded (writes are rare).  
2. Users play from a single country per session (simplifies caching).  
3. Bandwidth cost is the dominant variable; compute costs are secondary.

**Result**  
With these assumptions I propose:  

- **Storage:** S3 for object storage + Glacier for cold history.  
- **CDN:** CloudFront with edge caching, 1 Gbps per region → < 200 ms latency.  
- **Metadata & Search:** DynamoDB (partition key = track ID) + OpenSearch for full‑text queries.  
- **Recommendation:** SageMaker batch transform nightly; real‑time inference via Lambda@Edge.  
- **Scaling & Cost:** Auto‑scaling CloudFront + 5 TB/month S3 → ~\$15k/mo, < \$0.01 per stream.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Latency & availability tuned to user experience.  
- *Dive Deep*: Explicit assumptions drive concrete design choices and cost modeling.  

Bar‑raisers will note the ownership of end‑to‑end metrics, depth in trade‑off analysis, and clear learning from potential failure modes (e.g., CDN cache miss).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
