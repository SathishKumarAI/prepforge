---
qid: ing_b2fabfbee7__fp__local
question: 'Explain: Part 2 - Register a Query — How GraphQL Works at LinkedIn'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 443
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:24:30-05:00'
sources: []
---

**Part 2 – “Register a Query” in LinkedIn’s GraphQL Pipeline**

At its core, a *query* is a request for data that must be satisfied by one or more backend services. The pipeline first turns the client‑side GraphQL document into an **execution plan**: a tree of resolver calls with explicit dependencies. Registering the query means *authorizing* this plan and allocating the resources it will consume.

1. **Dependency graph construction**  
   Each field maps to a service; edges encode “must finish before” constraints. The planner turns this into a DAG that guarantees minimal fan‑in: if two fields share the same subfield, they are merged early to avoid duplicate RPCs.

2. **Cost estimation & caching**  
   The planner annotates every node with an *estimated cost* (latency × resource use). LinkedIn’s *Query Registry* aggregates these estimates across historical runs to predict SLA violations. If the sum exceeds a threshold, the request is throttled or split into micro‑queries.

3. **Optimistic batching**  
   The registry keeps track of which services have already been contacted in the same client session. It can therefore batch identical sub‑requests (e.g., profile picture + headline) into one round‑trip, leveraging *batching* as a lower‑bound optimization from communication theory.

4. **Non‑obvious insight**  
   Most GraphQL implementations treat each field as an independent microservice call. LinkedIn’s registry instead *registers* the entire query graph, enabling it to pre‑compute *caching keys* that capture inter‑field correlations (e.g., if a user’s connection list changes, only queries touching that list need invalidation). This subtle global view dramatically reduces cache churn and improves throughput.

By formalizing the query as an executable DAG with cost‑aware registration, LinkedIn balances latency guarantees against resource limits—an elegant application of *resource‑bounded optimization* in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
