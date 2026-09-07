---
qid: ing_b0063374b3__aws__local
question: 'Explain: Understanding the Architectural Styles in APIs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 516
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:32-05:00'
sources: []
---

**Situation – Task**

While redesigning a recommendation engine for a global e‑commerce platform, I had to decide which API style would expose model predictions to front‑end teams. The goal was to reduce latency by > 30 % while keeping operational costs under 20 % of the current spend.

**Action – Design & Execution**

I compared **REST**, **GraphQL**, and **gRPC**:

| Style | AWS fit | Latency | Scalability | Cost |
|-------|---------|---------|-------------|------|
| REST (API Gateway + Lambda) | Simple, pay‑per‑call | 120 ms avg | Auto‑scales via Lambda concurrency | $0.20/million calls |
| GraphQL (AppSync) | Strong typing, single endpoint | 90 ms avg | Fine‑grained query resolution | $0.25/million queries |
| gRPC (Lambda + ALB) | Binary payload, low overhead | 45 ms avg | Threaded Lambda, HTTP/2 multiplexing | $0.15/million calls |

I chose **gRPC** for the prediction API because its binary framing cut serialization time by 50 %. I deployed it behind an **Application Load Balancer**, used **AWS Lambda** with provisioned concurrency to avoid cold starts, and stored model metadata in **DynamoDB**.

**Result – Impact**

- Latency dropped from 120 ms to 45 ms (≈ 63 % improvement).  
- Predictive traffic grew 4× during a flash‑sale without throttling.  
- Operational cost fell 18 %, saving $12K/month.

**Leadership Principles Anchored**

*Customer Obsession*: Delivered faster, more reliable predictions for shoppers.  
*Ownership & Dive Deep*: I evaluated all styles, benchmarked real workloads, and chose the optimal trade‑off.  

**Bar‑raiser Takeaway**

- **Quantified impact** (latency, cost).  
- **Depth of analysis** (service comparison, scalability reasoning).  
- **Learning from failure**: earlier REST prototype hit throttling limits; switching to gRPC mitigated that risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
