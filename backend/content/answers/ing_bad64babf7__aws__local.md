---
qid: ing_bad64babf7__aws__local
question: 'Explain: The Problem — Recommendation Engine'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 398
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:07-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a data‑science team tasked with launching an AI‑driven recommendation engine for our e‑commerce catalog, which had ~3 M SKUs and ~10 M daily active users. The goal was to increase add‑to‑cart rate by 15% while keeping latency <200 ms.

**Action**  
1. **Ownership & Bias for Action** – I scoped a two‑phase architecture:  
   *Phase 1*: Real‑time inference on Amazon SageMaker endpoints (using AutoML models) served via Amazon CloudFront + Lambda@Edge to keep edge latency low.  
   *Phase 2*: Batch feature enrichment nightly on Amazon EMR, storing results in DynamoDB Global Tables for high read throughput and multi‑region availability.  
2. **Dive Deep** – I wrote an A/B test harness that compared the new engine against the legacy rule‑based system, using Click‑through & conversion metrics as primary KPIs.  
3. **Invent & Simplify** – Replaced our monolithic recommendation microservice with a stateless Lambda function triggered by Amazon EventBridge events, dramatically reducing operational overhead.

**Result**  
- Add‑to‑cart rate rose 18% (target exceeded).  
- Cost per inference dropped 32% compared to the legacy system.  
- Latency averaged 120 ms across all regions.  
The success prompted us to roll the architecture company‑wide, saving ~\$1.2M annually.

**Learning & Bar‑raiser Signals**  
I documented trade‑offs (SageMaker vs. Lambda cold starts) and built a continuous monitoring dashboard in Amazon CloudWatch, ensuring we could iterate faster—demonstrating true ownership and a data‑driven mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
