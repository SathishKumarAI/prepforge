---
qid: ing_b3430e3e37__faang__local
question: 'Explain: Characteristic #3: It’s thoughtfully stateful or stateless'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 462
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:40:42-05:00'
sources: []
---

**Clarify**  
The interviewer is asking about the third design characteristic of a machine‑learning system: whether it is *stateful* (keeps internal memory) or *stateless* (restarts cleanly). I’ll assume they mean “how to decide between a stateful vs. stateless architecture for an ML service” and that we’re focusing on production deployments.

**Approach**  
1. List trade‑offs of each mode.  
2. Map common use‑cases to the appropriate choice.  
3. Discuss implementation patterns (e.g., cache, session store).  
4. Summarize when to switch or hybridize.

**Depth**  
- **Stateless**: Every request is independent; easier horizontal scaling, zero-downtime deployments, perfect for batch inference pipelines and micro‑services that can load the model from disk or a shared registry on each start. Complexity lies in reloading large models, leading to higher latency at cold starts.  
- **Stateful**: Keeps embeddings, user context, or incremental updates in memory (e.g., online learning). Reduces per‑request compute but introduces state consistency problems—need distributed locks, checkpointing, and careful handling of restarts. Useful for recommendation engines where user history is part of the inference graph.  
- **Hybrid**: Load‑heavy parts stay stateless; lightweight session data kept in a fast KV store (Redis) or in‑process cache. This gives low latency while keeping scaling simple.

**Edge Cases**  
- *Cold start*: Large models may need pre‑warm containers.  
- *Data drift*: Stateful systems must checkpoint periodically to avoid stale models.  
- *Compliance*: Statelessness eases audit trails; stateful requires careful logging of changes.

**Optimize & Communicate**  
I’d suggest starting stateless for rapid iteration, adding a state layer only when measurable latency or personalization gains justify the added operational cost. I would narrate this as: “We’ll keep the core inference stateless to preserve scalability and observability; we’ll inject a lightweight cache for user‑specific features to hit the sweet spot between speed and complexity.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
