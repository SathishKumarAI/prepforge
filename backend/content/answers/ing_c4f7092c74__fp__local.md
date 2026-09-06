---
qid: ing_c4f7092c74__fp__local
question: 'Explain: Low-level design: sketch the classes and interfaces for the tool-calling
  layer of an agent host, where tools can come from native code, an OpenAPI spec,
  or an MCP server.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 581
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:00:37-05:00'
sources: []
---

**Why a unified tool‑calling layer is necessary**

An agent must *interact* with external systems regardless of their implementation.  
The only thing that matters for the LLM is a **declarative contract**: what inputs it can supply and what outputs it will receive.  Therefore we model every tool as an opaque function whose signature is known at compile time, not as a raw API call or binary wrapper.

---

### Core abstraction

```text
interface Tool {
    // unique name that the agent refers to
    String name();

    // JSON schema of input parameters (validated before invocation)
    JsonSchema inputSchema();

    // JSON schema of output (used for post‑processing)
    JsonSchema outputSchema();

    // Execute and return raw result
    JsonNode invoke(JsonNode args) throws ToolError;
}
```

*Why `JsonSchema`?*  
It gives a single, language‑agnostic description that can be generated from OpenAPI, validated against native code signatures, or negotiated with an MCP server.  The LLM can reason about the shape of data without knowing the underlying protocol.

---

### Concrete implementations

| Source | Implementation | Key methods |
|--------|----------------|-------------|
| **Native** | `NativeTool` | Loads a shared library via JNI/JNA; maps C/Go types to JSON schema. |
| **OpenAPI** | `OpenApiTool` | Parses an OpenAPI spec, extracts operationId and request/response schemas. |
| **MCP** | `McpsTool` | Uses the MCP discovery protocol to obtain a *tool descriptor* (name, input/output schemas) and a GRPC endpoint. |

All three classes share the same `invoke` contract; only the plumbing differs.

---

### Factory & registry

```text
class ToolRegistry {
    Map<String,Tool> tools = new ConcurrentHashMap<>();

    void register(Tool t){ tools.put(t.name(),t); }
    Tool get(String name) throws UnknownTool;
}
```

The agent host calls `registry.get(name).invoke(args)`; the LLM merely passes a JSON blob.

---

### One non‑obvious insight

**Treat schema validation as *runtime inference* rather than compile‑time safety.**  
Because tools arrive dynamically (e.g., an MCP server may publish new capabilities while the agent is running), we cannot rely on static typing.  By validating `args` against `inputSchema()` at call time, we preserve safety without sacrificing flexibility, and the LLM can be trained to generate schema‑conforming JSON directly.

This design lets a single agent host orchestrate heterogeneous tools with minimal friction, grounded in the principle that *function contracts* are the true lingua franca of AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
