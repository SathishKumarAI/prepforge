---
qid: ing_a5142324b7__aws__local
question: 'Explain: Implementing Reward-to-Go Policy Gradient ¶'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 547
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:40:27-05:00'
sources: []
---

**Situation (S)**  
I was tasked to accelerate our recommendation engine’s exploration‑exploitation balance for the “New Arrivals” feed. The model was stuck in a local optimum and new users saw stale content—customers were leaving within 30 s of arrival.

**Task (T)**  
Implement a Reward‑to‑Go (RTG) policy gradient that learns to trade off short‑term engagement against long‑term retention, delivering a measurable lift in *time on page* (TOP).

**Action (A)**  
1. **Data pipeline** – Built an event stream with Kinesis Data Streams → Lambda → DynamoDB for per‑session logs.  
2. **RTG computation** – Ingested 10 M sessions nightly into SageMaker Feature Store; calculated discounted cumulative rewards using a λ‑discount factor (γ=0.9).  
3. **Policy network** – Trained an actor‑critic model in SageMaker Neo, deploying to Lambda@Edge for sub‑50 ms inference across all CDN edge locations.  
4. **A/B test** – Rolled out to 5 % traffic; monitored TOP and click‑through rate (CTR) via CloudWatch dashboards.

**Result (R)**  
Within two weeks:  
- *Time on page* rose from 45 s to **63 s** (+40%).  
- CTR increased by **12 %**.  
- Model latency stayed below **45 ms**, keeping the CDN SLA intact.  
Cost savings of **$18k/month** were realized by eliminating the older batch‑training pipeline.

---

### Leadership Principles

| Principle | How it surfaced |
|-----------|-----------------|
| **Customer Obsession** | Directly measured TOP and CTR—key customer metrics. |
| **Ownership** | Took full ownership from data ingestion to model deployment, reducing handoffs. |
| **Dive Deep** | Tuned γ, λ, and network hyper‑parameters; iterated on feature importance. |
| **Bias for Action** | Deployed Lambda@Edge within 48 h of prototype. |

### Bar‑raiser signals

- Demonstrated *ownership* by owning the end‑to‑end ML workflow.  
- Showed *depth* through λ‑discount tuning and latency optimization.  
- Quantified impact (TOP +40%, CTR +12%).  
- Learned from initial rollout where latency spiked; applied edge caching to fix it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
