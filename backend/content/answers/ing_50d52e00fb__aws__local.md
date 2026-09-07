---
qid: ing_50d52e00fb__aws__local
question: 'Explain: Best Practices — Why are Content Delivery Networks (CDN) so Popular?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 378
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:27:40-05:00'
sources: []
---

**Answer – Amazon Way**

**Leadership Principles:** *Customer Obsession* & *Ownership*

> **Situation / Task**  
> In my last role I was tasked to launch a new ML‑driven recommendation engine that would serve personalized content to 3 M daily users across North America. Latency had to stay below 150 ms, and the system needed to be cost‑effective.

> **Action**  
> I drove the decision to expose the model’s predictions via an API fronted by Amazon CloudFront (a CDN). The edge cache held the top 10k most requested recommendations for each region. I also leveraged AWS Lambda@Edge to personalize payloads on the fly and DynamoDB Global Tables for low‑latency lookups of user segments.  
> • **Scalability:** Edge locations automatically handle traffic spikes; auto‑scaling in the origin layer kept compute costs predictable.  
> • **Availability:** CloudFront’s 99.999% SLA and multi‑AZ origins eliminated single points of failure.  
> • **Cost:** By serving 70 % of requests from edge caches we reduced origin bandwidth by 60 %, saving ~$120K/month.

> **Result**  
> Post‑launch, page load time dropped from 320 ms to 110 ms (−65 %) and user engagement increased by 12 %. We also achieved a 25 % reduction in infrastructure spend while maintaining the same prediction latency.  

> **Learnings** – I validated that CDNs are not just caching; they offload compute, provide geographic resilience, and give fine‑grained control over cost vs performance trade‑offs—critical for any ML product at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
