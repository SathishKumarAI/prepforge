---
qid: ing_c4f7092c74__star__local
question: 'Explain: Low-level design: sketch the classes and interfaces for the tool-calling
  layer of an agent host, where tools can come from native code, an OpenAPI spec,
  or an MCP server.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 396
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:03:50-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with adding a “tool‑calling” layer to our agent host so it could invoke external services written in native C++, exposed via OpenAPI, or running on an MCP (Microservice Control Plane) server. The existing architecture only supported HTTP calls, so we needed a unified interface that would hide the underlying transport.

**Task**  
Design low‑level classes and interfaces that let the host register any tool type, discover its capabilities, and invoke it with minimal boilerplate, while ensuring type safety and extensibility for future plug‑ins.

**Action**  
I started by defining an abstract `ITool` interface exposing `invoke(context)` and `describe()` methods. For native code I built a `NativeToolAdapter` that loads shared libraries via `dlopen`/`LoadLibrary`, resolves symbols, and marshals JSON to C structs. The OpenAPI tools are handled by `OpenAPIToolAdapter`, which parses the spec at startup, generates a client stub with `swagger-codegen`, and caches HTTP clients per host. MCP services get an `MCPToolAdapter` that talks over gRPC, using Protocol Buffers generated from `.proto` files. A central `ToolRegistry` keeps a map of tool names to adapters, and the host resolves calls through it. I added a lightweight `ToolContext` struct for passing request data and a `ToolResult` wrapper for unified error handling.

**Result**  
The new layer let us register 12 tools—4 native, 3 OpenAPI, 5 MCP—in under two days of development. Invocation latency dropped by ~25 % compared to the old ad‑hoc approach, and we eliminated duplicate code paths across tool types. I learned how adapter patterns can cleanly separate transport concerns while keeping a single entry point for heterogeneous services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
