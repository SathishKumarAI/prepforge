---
qid: ing_7da2bf124e__aws__local
question: 'Explain: Writes (URL Shortening) — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 429
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:09:27-05:00'
sources: []
---

**Situation / Task** – I was asked to design a global URL‑shortening service (think bit.ly) that must handle millions of requests per second, guarantee 99.999% uptime, and keep cost under $0.01/shorten.

**Action – Architecture**  
1. **API Gateway + Lambda (or Fargate)** for the front‑end: scales automatically, gives me 10 k RPS in <2 ms latency.  
2. **DynamoDB** as a key‑value store (hash=shortID → longURL). I use *Provisioned Capacity* with auto‑scaling and enable *DAX* for reads to keep <1 ms.  
3. **S3 + CloudFront** for static landing pages when the short URL points to an image or landing page; this offloads traffic from DynamoDB.  
4. **SNS + SQS** for asynchronous analytics (click counts, abuse detection).  
5. **GuardDuty & WAF** protect against DDoS and malicious scripts.

**Result** – In a 3‑month prototype I handled 2 M writes/sec with <0.8 ms latency, cost <$5k/month, and achieved 99.999% availability in the EU‑West region. The click‑through rate for test URLs was 12%, validating our routing logic.

**Reflection (Bar‑raiser)** – I took ownership of every layer: chose DynamoDB because it gives linear scalability and built a retry policy to avoid write loss. I dove deep into latency traces, identified CloudFront edge caching as the bottleneck, and iterated until we hit sub‑1 ms reads. From failure, I learned that over‑provisioning for cold starts was wasteful; now we use Lambda *Provisioned Concurrency* only during traffic spikes. This approach balances cost, performance, and reliability—exactly what Amazon expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
