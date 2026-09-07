---
qid: ing_3776d2560c__aws__local
question: Your platform must support multiple LLM providers, including deployments
  in restricted environments where only some models are available. How do you architect
  model selection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 462
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:29:54-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of an AI‑as‑a‑service platform that had to support *hundreds* of LLMs from OpenAI, Anthropic, and in‑house models, while also running on edge devices where only a subset of models could be loaded. The goal was to deliver a single API for clients with zero downtime during provider switches.

**Action**  
I introduced a **model registry microservice** (AWS Lambda + DynamoDB) that stores metadata: provider, model name, version, capabilities, and deployment constraints. A *policy engine* (Step Functions + AWS AppConfig) evaluates the client’s environment tags against the registry to produce an optimal candidate list. For inference I built a **dispatch layer** using API Gateway + Lambda@Edge that routes requests to the nearest SageMaker endpoint or on‑prem GPU via ECS Fargate, with a fallback queue (SQS) for restricted environments.

The architecture scales horizontally: each Lambda runs in 128 MiB memory, cost < $0.0000167 per invocation; DynamoDB tables auto‑scale with provisioned throughput of 1 kWCU, keeping latency < 5 ms. Availability is achieved via multi‑AZ deployment and Circuit Breaker patterns.

**Result**  
After rollout we saw a **35% reduction in inference latency** for edge clients and **0.7 × cost savings** by avoiding over‑provisioned GPU clusters. The platform now supports 12 providers with < 99.9% uptime, meeting SLA targets.

**Reflection**  
I owned the end‑to‑end flow, dove deep into provider APIs, and iterated quickly—demonstrating *Customer Obsession*, *Ownership*, and *Bias for Action*. Bar‑raisers noted my clear metric focus, trade‑off analysis, and post‑mortem learning from a failed edge rollout that taught us to cache model signatures locally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
