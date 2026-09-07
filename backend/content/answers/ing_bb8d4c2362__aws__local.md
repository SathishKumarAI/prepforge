---
qid: ing_bb8d4c2362__aws__local
question: 'Explain: Common Patterns to Know — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 440
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:53-05:00'
sources: []
---

**Whiteboard Exercise – “Common AI Design Patterns”**

*Situation*: A hiring manager asks me to sketch the architecture of a recommendation system that must scale to 10 M active users and deliver personalized results in <200 ms.

*Task*: Outline reusable patterns, justify AWS services, and quantify expected impact.

*Action*  
1. **Feature Store** – Persist pre‑computed embeddings (Amazon SageMaker Feature Store) for fast lookups, reducing inference latency by ~70 %.  
2. **Model Serving with Auto Scaling** – Deploy the model on Amazon SageMaker Endpoint (Multi‑model endpoint) behind an Application Load Balancer; use target tracking scaling to keep 95 % of requests under 200 ms, cutting costs by 30 % versus fixed instances.  
3. **Asynchronous Batch Re‑ranking** – Use Amazon Kinesis Data Streams + Lambda to enqueue user interactions and update embeddings in DynamoDB on a rolling basis (≤5 min latency), keeping real‑time relevance without overloading the endpoint.  
4. **A/B Testing & Canary Releases** – Integrate with AWS CodePipeline and SageMaker Experiments; roll out 10 % of traffic to new models, monitoring lift in CTR.  

*Result*: Prototype achieved a 12 % increase in click‑through rate while keeping inference cost $0.02 per request, compared to the baseline $0.04.  
*Learning*: Early profiling revealed that embedding size was the bottleneck; switching from dense vectors (512) to compressed sparse ones cut memory usage by 40 %.  

**Leadership Principles Highlighted**

- **Customer Obsession** – Deliver low‑latency, highly relevant recommendations.  
- **Dive Deep** – Profiling and compression tuned for cost/latency trade‑offs.  

Bar‑raisers listen for ownership of every component, depth in performance analysis, clear metrics, and a candid note on what was learned from early missteps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
