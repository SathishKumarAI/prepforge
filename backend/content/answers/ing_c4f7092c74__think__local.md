---
qid: ing_c4f7092c74__think__local
question: 'Explain: Low-level design: sketch the classes and interfaces for the tool-calling
  layer of an agent host, where tools can come from native code, an OpenAPI spec,
  or an MCP server.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 218
output_tokens: 497
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:58:36-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
   * Identify what “tool‑calling layer” means: a runtime that receives tool descriptors (native, OpenAPI, MCP) and executes them safely.  
   * Assume the host already has an agent core, we’re only designing the interface between agent and external tools.  
   * Decide on language agnosticism—interfaces should be serializable over HTTP/JSON or gRPC.

**2️⃣ Adopt a layered mental model**  
   * **ToolRegistry** – central catalog of available tools.  
   * **ToolAdapter** – per‑tool protocol wrapper (Native, OpenAPI, MCP).  
   * **ExecutionEngine** – orchestrates calls, handles auth, timeouts, retries.  
   * **ResultSerializer** – normalises diverse outputs into a common `ToolResponse` shape.

**3️⃣ Step‑by‑step reasoning**  

| Layer | Core Class/Interface | Key Methods |
|-------|---------------------|-------------|
| Registry | `IToolRegistry` | `register(tool: ToolDef)`, `lookup(name): ToolDef` |
| Adapter | `IToolAdapter` | `invoke(request: ToolRequest): ToolResponse` |
| Engine | `ExecutionEngine` | `call(toolName, args)` → uses registry + adapter |
| Serializer | `IResultSerializer` | `serialize(raw: any): ToolResponse` |

*Define `ToolDef` to contain metadata (type, endpoint, auth).  
*Adapters translate the generic `ToolRequest` into native calls or HTTP requests.  
*Engine applies policies (rate‑limit, sandbox) before delegating.

**4️⃣ Common traps to avoid**  

1. **Tight coupling** – don’t let adapters depend on concrete agent internals; use dependency injection.  
2. **Over‑abstraction** – too many interfaces can obscure the flow; keep the registry minimal.  
3. **Ignoring error propagation** – wrap all exceptions into a `ToolError` with context.

**5️⃣ Sanity‑check & communicate**  

*Run through a sample call*: Agent → Engine → Registry lookup → Adapter.invoke → ResultSerializer → back to agent.  
*Explain each step verbally, emphasising that the registry is the single source of truth and adapters isolate protocol details.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
