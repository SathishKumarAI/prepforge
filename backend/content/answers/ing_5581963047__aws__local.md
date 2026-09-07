---
qid: ing_5581963047__aws__local
question: 'Explain: Latency budget (p95, the table interviewers want to see)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 444
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:39:21-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation*: In a last‑quarter launch of our AI recommendation service, the product manager demanded that 95 % of inference requests finish in ≤ 120 ms or we would lose a projected $5 M in monthly revenue.

*Task*: Define and enforce a latency budget that guarantees this P95 target while keeping cost under $0.02 per request.

*Action*:  
1. **Profile the stack** – ran 10‑minute synthetic traffic with CloudWatch traces; found ~70 % of the tail was due to model warm‑up on GPU nodes.  
2. **Design a two‑tier inference architecture**:  
   * *Edge tier (AWS Lambda + SageMaker Edge)* for cold‑start requests, capped at 5 ms per request.  
   * *Compute tier (ECS Fargate + Spot GPUs)* for bulk traffic, with auto‑scaling based on CloudWatch metrics.  
3. **Implement a latency budget table** in the CI pipeline: each microservice declares its P95 goal; any build that exceeds 5 % of that margin fails automatically.  
4. **Continuous monitoring** – set up an SNS alert if P95 > 120 ms for more than 10 consecutive minutes.

*Result*: Post‑deployment, we hit a P95 latency of **117 ms** on average and kept cost at $0.018/request, exceeding the revenue target by $1.2 M per month. The table became a standard artifact in all AI releases.

> **Bar‑raiser note:**  
> • Demonstrated ownership: owned the entire end‑to‑end latency pipeline.  
> • Dive deep: quantified tail contributors and engineered a tiered solution.  
> • Quantified impact: directly tied latency to revenue.  
> • Learned from failure: the first rollout hit 140 ms; we iterated on GPU warm‑up, saving 20 % in cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
