---
qid: ing_8324272553__faang__local
question: 'Explain: Pattern 3: Server-Side Composition — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 478
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:49:41-05:00'
sources: []
---

**Pattern 3 – Server‑Side Composition (Tool‑Agent Architecture)**  

| Step | What to do |
|------|------------|
| **Clarify** | *Problem*: We need a system that can orchestrate multiple LLM‑based tools (e.g., search, code exec, database) without exposing heavy logic on the client. *Assumptions*: 1️⃣ The server has sufficient compute; 2️⃣ Latency is acceptable for async tool calls; 3️⃣ Each tool exposes a REST/GraphQL interface. |
| **Approach** | 1️⃣ Build an “Agent” layer that receives a user intent, parses it into subtasks, and maps each to the appropriate tool. 2️⃣ Use a lightweight orchestrator (e.g., OpenAI’s function calling or custom JSON schema) to invoke tools in sequence. 3️⃣ Aggregate results and feed back to the LLM for final output. |
| **Depth** | • **Agent Design**: stateless micro‑services, each tool wrapped with an adapter exposing a unified `invoke(params)` API. <br>• **Orchestration**: implement a state machine (e.g., AWS Step Functions) that tracks progress and retries on failure. <br>• **Complexity**: Each tool call is O(1); overall latency = Σ tool‑latency + orchestration overhead; cost scales with number of calls. |
| **Edge Cases** | • Tool timeout → fallback to cached response. <br>• Conflicting tool outputs → conflict resolution policy (e.g., priority or voting). <br>• Security: sanitize inputs before passing to external services. |
| **Optimize & Communicate** | • Cache frequent queries; use vector‑search for context retrieval. <br>• Batch tool calls where possible. <br>Explain trade‑offs: server‑side reduces client load but increases round‑trip latency; proper monitoring (e.g., Prometheus) is essential to keep SLAs. |

*Result*: A robust, modular architecture that lets a single LLM orchestrate diverse capabilities while keeping the heavy lifting on secure, scalable servers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
