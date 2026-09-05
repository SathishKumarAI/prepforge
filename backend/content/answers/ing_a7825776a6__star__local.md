---
qid: ing_a7825776a6__star__local
question: 'Explain: Choosing a pattern — Multi-agent patterns in LlamaIndex | Developer
  Documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 370
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:07:44-05:00'
sources: []
---

**Situation:**  
When my team was building an AI‑powered customer support chatbot for a fintech startup, we needed to handle real‑time fraud alerts, user queries, and data aggregation from multiple APIs. The existing single‑agent LlamaIndex setup struggled with latency and couldn’t scale as new services were added.

**Task:**  
I had to design an architecture that would allow independent agents to collaborate on complex tasks—routing user requests, fetching external data, and updating the knowledge base—while keeping response time under 300 ms per query.

**Action:**  
I evaluated LlamaIndex’s multi‑agent patterns: *Orchestrator*, *Co‑ordinator*, and *Distributed* agents. I chose the *Distributed Agent* pattern because it lets each agent run in its own process, reducing contention. Using Python’s `asyncio` and Ray for distributed execution, I wired three agents: (1) a Retrieval Agent that queries LlamaIndex with vector similarity, (2) an API‑Agent that fetches live fraud scores from our internal service, and (3) a Compose Agent that merges results into a single natural‑language response. I added a lightweight message broker (Redis Streams) to queue tasks and implemented a retry policy for flaky APIs.

**Result:**  
The new multi‑agent system cut average latency from 1.2 s to 220 ms, handled a 4× increase in concurrent users without additional hardware, and reduced the error rate on fraud alerts by 35%. I learned that choosing the right agent pattern hinges on workload isolation and communication overhead—something I now apply whenever scaling complex LLM workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
