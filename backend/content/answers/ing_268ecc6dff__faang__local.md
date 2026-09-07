---
qid: ing_268ecc6dff__faang__local
question: 'Explain: Creating a Multi-Agent System with Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 442
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:13:21-05:00'
sources: []
---

**Clarify**  
You want to build a *multi‑agent* architecture that leverages the **Haystack** NLP framework. The goal is to let independent agents (e.g., question‑answering, summarization, retrieval) collaborate on user queries while sharing knowledge and state. I’ll assume we’re using Python, Haystack 1.x, and a single‑node deployment for prototyping.

**Approach**  
1. **Define agent roles** – each inherits from `BaseAgent` with its own pipeline (`Retriever → Reader → PostProcessor`).  
2. **Central coordinator** – a lightweight orchestrator that receives user input, dispatches to agents, aggregates results, and resolves conflicts (e.g., voting or confidence weighting).  
3. **Shared state store** – Redis or in‑memory dict for caching embeddings, intermediate QA snippets, and context.  
4. **Communication protocol** – use simple JSON messages over HTTP/GRPC; each agent exposes a `/process` endpoint.

**Depth**  
- *Agent implementation*: build `RetrievalAgent`, `SummarizationAgent`, `ClarificationAgent`.  
- *Pipeline composition*: Haystack’s `Pipeline` object allows dynamic chaining.  
- *State sharing*: agents read/write to Redis keys (`agent:{id}:cache`).  
- *Coordinator logic*: sends the same query to all agents, collects responses, normalizes scores (`score = confidence * weight`), and returns top‑k. Complexity: each agent runs in parallel (O(n) per agent); overall latency ≈ max(agent_latency).

**Edge Cases**  
- Agent failure → fallback to default answer.  
- Divergent answers → trigger `ClarificationAgent`.  
- Duplicate documents across agents → deduplicate via hash.

**Optimize & Communicate**  
- Profile bottlenecks; cache embeddings to avoid re‑retrieval.  
- Use asynchronous HTTP calls (`aiohttp`) to reduce wait time.  
- Document the coordinator’s decision logic in a flowchart for interviewers, emphasizing modularity and testability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
