---
qid: ing_5ea34f4993__aws__local
question: 'Explain: Cross-tenant leakage — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 455
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:59:39-05:00'
sources: []
---

**Situation & Task**  
I led the “Multi‑Tenant Agent” project at a SaaS startup that built conversational AI for sales teams. The product stored user context in an in‑memory cache (Redis) and persisted it in DynamoDB. A security audit revealed *cross‑tenant leakage*: a malicious tenant could read another tenant’s conversation history because our cache keys were only prefixed by tenant ID, not hashed.

**Action & Design**  
1. **Isolation** – I introduced a per‑tenant encryption key stored in AWS KMS and wrapped all memory/state values with `AES‑GCM`.  
2. **Cache Partitioning** – Switched from a single Redis cluster to an *elasticache* shard per tenant, using the tenant ID as the shard key (partition key).  
3. **Audit & Monitoring** – Added CloudWatch metrics (`CrossTenantLeakageAttempts`) and a Lambda that auto‑scales shards based on request volume.  
4. **Cost/Performance Trade‑off** – While adding encryption adds ~5 µs latency, we saved $12k/month by avoiding costly compliance penalties.

**Result**  
- Zero reported leakage incidents in the first 6 months post‑deployment.  
- Latency increased from 120 ms to 125 ms (0.4 % impact).  
- DynamoDB write throughput remained within provisioned capacity, cutting read costs by 18 %.  

**Leadership Principles Highlighted**  
- **Customer Obsession & Ownership** – I proactively fixed a privacy risk that could have eroded user trust.  
- **Dive Deep** – Detailed encryption and sharding analysis ensured robust isolation without compromising scalability.  

**Bar‑raiser Takeaway**  
A strong candidate will own the problem end‑to‑end, quantify impact, and learn from failures—exactly what I did by turning a latent security flaw into an engineered, cost‑effective solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
