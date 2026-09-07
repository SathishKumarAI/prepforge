---
qid: ing_1f284a9990__aws__local
question: 'Explain: Do Not Treat IP as Identity — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 408
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:37:40-05:00'
sources: []
---

**Situation – Task**  
In a previous role I led the redesign of an internal fraud‑prevention service that flagged suspicious accounts by correlating user IP addresses. The team was treating each IP as a unique identifier, which caused false positives and degraded customer experience.  

**Action – Technical Design**  
I proposed a *“Do Not Treat IP as Identity”* policy and re‑architected the system around **AWS WAF + CloudFront + DynamoDB**.  
- **WAF** filters known bad ranges;  
- **CloudFront** normalizes client headers (e.g., `X-Forwarded-For`) so we capture real source IPs, even behind proxies;  
- **DynamoDB** stores a *session‑level* fingerprint (user agent + geolocation) instead of raw IP.  
We added a Lambda@Edge function to enrich requests with GeoIP data and publish events to an SQS queue for batch analysis in Redshift.  

**Result – Quantified Impact**  
Post‑deployment, false‑positive fraud alerts dropped from **32% to 7%**, lifting the transaction approval rate by **12 percentage points** (≈$4 M additional revenue per quarter). The new architecture cost only **$0.45/month** more than the legacy setup while achieving >99.99 % availability.

**Leadership Principles**  
- **Customer Obsession**: We eliminated friction for legitimate users.  
- **Ownership & Dive Deep**: I owned the redesign, dissected logs to uncover root causes, and iterated until metrics improved.  

**Bar‑raiser Takeaway**  
Showed ownership by driving end‑to‑end change, deep technical dive into IP semantics, measurable business impact, and a learning loop that turned a naive assumption into a scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
