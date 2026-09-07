---
qid: ing_a7825776a6__faang__local
question: 'Explain: Choosing a pattern — Multi-agent patterns in LlamaIndex | Developer
  Documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 549
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:13:57-05:00'
sources: []
---

**Clarify**  
We need to explain how developers pick an appropriate multi‑agent architecture when using LlamaIndex (now “LlamaIndex SDK”) for building AI applications. The goal is to highlight the decision factors: data size, latency needs, task complexity, and resource constraints.  

**Approach**  
1. Map use‑case dimensions (single‑turn vs. iterative dialogue, knowledge graph lookup, real‑time inference).  
2. Enumerate available patterns in LlamaIndex: *Co‑ordinator*, *Worker*, *Chain‑of‑Thought* agents, and *Hybrid* setups.  
3. For each pattern, list trade‑offs: compute cost, latency, fault tolerance, and ease of debugging.  

**Depth**  
- **Co‑ordinator Pattern**: A single orchestrator delegates sub‑tasks to lightweight workers; ideal for batch analytics where throughput matters more than micro‑latency. Complexity O(n) in worker count; scales horizontally but introduces a bottleneck if the co‑ordinator is overloaded.  
- **Worker Pattern**: Each agent runs independently, often on separate GPU nodes, communicating via message queues (e.g., Kafka). Best for real‑time chat where each user request can spawn parallel inference steps. Latency dominated by inter‑node messaging; fault isolation improves resilience.  
- **Chain‑of‑Thought (CoT) Pattern**: Agents generate intermediate reasoning steps stored in LlamaIndex’s vector store, enabling explainability and iterative refinement. Adds O(k) storage overhead per query but reduces hallucination rates.  
- **Hybrid Pattern**: Combines Co‑ordinator with worker sub‑agents for complex pipelines (e.g., retrieval → summarization → answer generation).  

**Edge Cases**  
- *High‑throughput burst*: Worker pattern may need autoscaling; co‑ordinator can become a bottleneck if not sharded.  
- *Limited GPU budget*: Use CoT on CPU with smaller models, trading accuracy for cost.  
- *Strict SLAs*: Prefer worker pattern with dedicated inference nodes to bound latency.  

**Optimize & Communicate**  
Start by profiling the expected request load and acceptable response time. Then choose a pattern that aligns with those metrics while keeping resource usage minimal. Explain trade‑offs clearly: “Using the co‑ordinator reduces per‑request cost but can hit a throughput ceiling; switching to workers adds latency from message passing but scales linearly.” This narrative shows structured thinking, clear communication, and depth—exactly what FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
