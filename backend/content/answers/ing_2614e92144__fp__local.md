---
qid: ing_2614e92144__fp__local
question: 'Explain: We don''t really care what are... what — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 395
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:26:11-05:00'
sources: []
---

In a system‑design interview for something as complex as **Google Maps**, the interviewer’s first question is often, *“What does the system do?”*  
From a **first‑principles** standpoint we’re not interested in whether you’ll use Redis or Cassandra; we want to know which **optimization problem** the service solves.  

The core problem is: *Given a user’s location and desired destination, compute the optimal route (shortest time, least cost, etc.) for millions of concurrent queries while continuously ingesting traffic, map updates, and user feedback.*  
This boils down to a dynamic graph‑search problem under uncertainty—edges (roads) have stochastic weights (traffic), vertices (intersections) change over time. The system must therefore:  

1. **Represent** the road network as a scalable graph.  
2. **Update** edge weights in real‑time from sensor streams.  
3. **Answer queries** with sub‑second latency using pre‑computed indexes or incremental search.  

The interviewee’s job is to outline how you would decompose this into components (data ingestion, storage, routing engine, caching) and why each choice satisfies the constraints of *scale*, *latency*, and *accuracy*.  
A non‑obvious insight: the **routing engine** need not compute a full shortest path from scratch for every request; instead, it can use a *hierarchical* graph (e.g., supernodes for city blocks) to prune search space dramatically. This subtle geometry trick is what separates an elegant design from a naïve one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
