---
qid: ing_b67a634ff7__think__local
question: You are exposing retrieval as a tool to an agent, over MCP. How does designing
  a tool interface differ from designing a retrieval API?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 606
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:59:17-05:00'
sources: []
---

**1️⃣ Clarify the context and assumptions**  
- *What is “exposing retrieval as a tool”?* – The agent receives a callable that performs search/lookup on some corpus.  
- *MCP (Multi‑Channel Protocol)* – The transport layer; we’ll assume it’s just an RPC style channel, not the core of the design.  
- *Goal*: Compare this to building a “retrieval API” that clients call directly.

**2️⃣ Mental model / framework**  
Treat both as interfaces but with different consumer roles:  
| Aspect | Tool interface (agent) | Retrieval API (client) |
|--------|------------------------|-----------------------|
| **Abstraction level** | High‑level, task‑oriented | Low‑level, data‑oriented |
| **Statefulness** | Stateless or minimal state; agent decides when to call | Often stateless but may expose session/filters |
| **Error handling** | Agent can retry / fallback on tool failures | Client must handle errors itself |
| **Security & access control** | Implicit in tool invocation (agent policy) | Explicit authentication/authorization |

**3️⃣ Step‑by‑step reasoning**  
1. **Define the contract** – For a tool, specify *what* it returns (e.g., list of snippets + confidence). The API might return raw documents or scores.  
2. **Encapsulate context** – The agent may need to pass a query and optional constraints; the tool should expose those as simple arguments rather than complex request objects.  
3. **Error semantics** – In a tool, “failure” often means “return empty list”; in an API you might raise exceptions or return error codes.  
4. **Observability** – Tools should log usage for training the agent; APIs usually expose metrics at the server side.  
5. **Extensibility** – A tool interface is versioned by the agent’s skill set; an API may evolve independently (semantic versioning).  

**4️⃣ Common traps to avoid**  
- *Assuming identical payloads*: Agents often need only a few fields, not full HTTP JSON.  
- *Over‑exposing internals*: The tool should hide implementation details (e.g., which index or LLM is used).  
- *Neglecting retry logic*: Agents may expect the tool to be idempotent; APIs might require explicit retries.

**5️⃣ Sanity‑check & verbalize**  
Ask: “If I were a developer writing a new agent, what minimal information would I need from the retrieval tool?” If the answer is just *query → list of top‑k snippets*, the design is correct. Then confirm that the same data could be served by an API but with additional fields (metadata, raw source, pagination). This check ensures the interface truly serves the agent’s needs without unnecessary complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
