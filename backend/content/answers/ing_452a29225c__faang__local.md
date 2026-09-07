---
qid: ing_452a29225c__faang__local
question: 'Explain: Pattern 1: Function/Tool Calling — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 552
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:25:04-05:00'
sources: []
---

**Pattern 1 – Function / Tool Calling (Architectural Pattern)**  

| Section | Content |
|---------|---------|
| **Clarify** | The question asks for a high‑level architectural view of how an LLM can invoke external code or APIs (“functions”) to perform tasks it cannot solve purely by generation. Confirm that we’re discussing *runtime* function calls, not static bindings, and that the system must handle authentication, data serialization, and error handling. |
| **Approach** | 1️⃣ Define a **function schema** (name, description, JSON‑typed parameters). <br>2️⃣ The LLM receives the user intent, selects the most relevant function via prompting or an external classifier. <br>3️⃣ It calls the function through a *tool invocation interface* (e.g., OpenAI’s `functions` API). <br>4️⃣ Capture the tool’s JSON response, feed it back to the model for final natural‑language completion. |
| **Depth** | • **Schema Registry**: central store of available functions; versioned for backward compatibility. <br>• **Dispatcher Layer**: validates input against schema, handles auth (OAuth/OIDC), retries, and timeouts. <br>• **Execution Engine**: sandboxed container or serverless function that runs the code. <br>• **Response Normalizer**: maps raw output to the expected JSON format; logs failures for observability. Complexity is O(1) per call but latency depends on external service. Trade‑offs: tighter validation → lower risk of injection attacks, higher overhead; looser validation → faster but riskier. |
| **Edge Cases** | • Function not found or schema mismatch → fall back to pure generation. <br>• External API rate limits / timeouts → exponential backoff and user notification. <br>• Security: sandboxing must prevent privileged access; sanitize all inputs. <br>• Non‑JSON output from tool → error handling path that asks the LLM to re‑invoke or abort. |
| **Optimize & Communicate** | • Cache frequent function results (e.g., geocoding) to reduce latency. <br>• Use a *prompt template* that includes example calls for better grounding. <br>• In conversation, explain to interviewers how the pattern keeps the LLM stateless while delegating stateful operations to tools, aligning with micro‑service principles. Highlight observability: metrics per tool call, success rates, and cost monitoring. This showcases architectural rigor, security awareness, and scalability—key signals for FAANG interviews. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
