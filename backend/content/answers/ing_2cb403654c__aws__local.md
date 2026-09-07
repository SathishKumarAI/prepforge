---
qid: ing_2cb403654c__aws__local
question: 'Explain: String — Topleetcodeproblems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 478
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:06:01-05:00'
sources: []
---

**Situation (S)**  
I was asked to build an internal “String‑to‑TopLeetcodeProblems” microservice for the ML Ops team. The goal was to expose a REST API that, given any string of characters, returned the most relevant LeetCode problem IDs ranked by semantic similarity.

**Task (T)**  
Deliver a production‑grade solution that scales to 10 k requests/second, guarantees <200 ms latency, and stays within the $0.5/day budget while providing 99.9 % availability.

**Action (A)**  
*Customer Obsession & Ownership*: I first mapped user pain points—slow search, poor relevance, and high cost of manual labeling.  
*Dive Deep*: I benchmarked several embeddings (Sentence‑BERT vs. Universal Sentence Encoder) on a local GPU cluster; the former achieved 0.82 cosine‑similarity AUC with 1 GB vectors.  
*Design*:  
- **AWS Lambda** + **Amazon API Gateway** for stateless request handling.  
- **Amazon SageMaker Endpoint** hosting the inference model (real‑time, autoscaled).  
- **DynamoDB Global Secondary Index** stores problem titles and pre‑computed embeddings; queries use a range scan with cosine similarity filtering via AWS’s PartiQL.  
- **Cache layer**: **ElastiCache for Redis** holds top‑10 candidate IDs per query to reduce latency.  

*Bias for Action*: I deployed the stack using CDK, ran A/B tests against the legacy system, and observed 35 % faster responses (120 ms vs. 200 ms) and a 42 % drop in cost ($0.47/day).  
*Deliver Results*: Post‑deployment, search accuracy improved from 0.78 to 0.82 AUC, and user satisfaction scores rose by 27 %.  

**Result (R)**  
The service now processes 12 k RPS with <180 ms latency, costs <$0.5/day, and supports continuous model updates via SageMaker Pipelines—demonstrating ownership, depth, and measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
