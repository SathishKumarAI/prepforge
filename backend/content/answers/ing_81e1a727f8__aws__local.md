---
qid: ing_81e1a727f8__aws__local
question: 'Explain: Caching and Conditional Requests — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 441
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:18:28-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role I led the redesign of our product‑recommendation API that served 12 M daily requests. The latency had ballooned to 350 ms, driving a 4 % drop in conversion rate.

**Action (A)**  
I introduced **edge caching** with Amazon CloudFront and implemented **conditional GETs** using ETag/Last‑Modified headers.  

*Design*:  
- **Origin**: API Gateway → Lambda@Edge for dynamic personalization; results persisted in DynamoDB Global Tables.  
- **Cache Layer**: CloudFront caches 90 % of the most‑frequent responses (TTL = 300 s).  
- **Conditional Requests**: Clients send `If-None-Match`; if data unchanged, CloudFront returns 304, cutting downstream traffic by ~70%.  

*Scalability*: Serverless layers auto‑scale; DynamoDB Global Tables ensure low latency across regions.  
*Availability*: CloudFront’s edge network guarantees < 50 ms at the edge; API Gateway provides 99.9% SLA.  
*Cost*: Reduced Lambda invocations by 60 %, saving ~\$12k/month.

**Result (R)**  
Latency dropped to 80 ms on average, boosting conversion by **3.2 %** and reducing AWS spend by **18 %** in the first quarter post‑deployment.  

---

### Leadership Principles Highlighted
- **Customer Obsession**: Directly improved user experience & revenue.  
- **Ownership / Dive Deep**: I architected end‑to‑end flow, quantified impact, and iterated on cache policies based on real metrics.

**Bar‑raiser cues**: Demonstrated ownership of the entire pipeline, deep dive into caching mechanisms, clear data‑driven outcomes, and continuous learning from A/B tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
