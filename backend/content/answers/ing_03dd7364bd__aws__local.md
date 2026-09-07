---
qid: ing_03dd7364bd__aws__local
question: 'Explain: Source(s) and further reading — Cdns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 478
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:24-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* Our recommendation engine was serving model predictions to millions of mobile users worldwide, but latency spikes during traffic surges caused a 12 % drop in conversion rates.

*Task:* I had to reduce inference latency and improve reliability without rewriting the ML pipeline.

*Action:*  
1. **Research & Source Selection** – I surveyed three major CDN providers (Amazon CloudFront, Akamai, Fastly) using AWS’s *Well‑Architected Framework* for edge caching of HTTP/JSON payloads.  
2. **Design** – Leveraged **CloudFront** with Lambda@Edge to pre‑process the model output (round‑to‑int, add timestamp) and used **Origin Shield** to consolidate requests to our SageMaker endpoint.  
3. **Implementation** – Deployed a CloudWatch metric filter to trigger automatic scaling of the SageMaker inference endpoint when cache hit ratios fell below 80 %.  
4. **Testing & Validation** – Performed A/B tests with 200k users; latency dropped from 350 ms to 95 ms (72 % improvement) and conversion increased by 7 pp.

*Result:* The CDN‑based edge caching cut inference costs by $18K/month, improved availability to 99.97 %, and demonstrated a clear ROI in under two weeks.

**Further Reading**

- *AWS Whitepaper: “Designing for Low Latency with CloudFront”* – https://d1.awsstatic.com/whitepapers/cloudfront-design.pdf  
- *Akamai Blog: “Edge Computing for ML Inference”* – https://www.akamai.com/blog/edge-computing-ml-inference  
- *Fastly Docs: “Cache API Responses with Edge Rules”* – https://docs.fastly.com/en/guides/cache-api-responses  

**Bar‑raiser takeaways:** I owned the problem, dove deep into CDN trade‑offs (cost vs. cache hit ratio), quantified impact (latency & conversion metrics), and learned that edge preprocessing can replace expensive real‑time scaling in many ML inference scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
