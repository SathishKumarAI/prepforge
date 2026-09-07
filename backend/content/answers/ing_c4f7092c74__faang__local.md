---
qid: ing_c4f7092c74__faang__local
question: 'Explain: Low-level design: sketch the classes and interfaces for the tool-calling
  layer of an agent host, where tools can come from native code, an OpenAPI spec,
  or an MCP server.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 581
total_tokens: 843
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:18:50-05:00'
sources: []
---

**Clarify**

We need a *tool‑calling* layer that lets an agent host invoke three kinds of tooling: (1) local/native binaries, (2) HTTP services defined by OpenAPI specs, and (3) remote MCP servers.  
Assumptions to confirm:  
- All tools expose a uniform “invoke” contract (input → output).  
- The agent can discover tools at runtime (e.g., via registry or config).  
- We need minimal latency for native calls but also robust error handling for HTTP/MCP.

**Approach**

1. Define a **`Tool` interface** (`invoke(params)`).  
2. Create concrete adapters: `NativeTool`, `OpenAPITool`, `McpTool`.  
3. Use a **factory/registry** to instantiate the right adapter given a tool descriptor.  
4. Add a **`ToolExecutor`** that validates inputs, serializes/deserializes JSON, and handles retries/timeouts.

**Depth**

```java
interface Tool {
    // params is a generic Map<String,Object> or typed DTO
    Result invoke(Map<String,Object> params) throws ToolException;
}

class NativeTool implements Tool {
    private final String execPath;  // e.g., /usr/bin/foo
    public Result invoke(...) { /* ProcessBuilder, capture stdout/stderr */ }
}

class OpenAPITool implements Tool {
    private final OpenAPI openapiSpec;
    private final HttpClient client;
    public Result invoke(...) { /* Validate against spec, call REST endpoint */ }
}

class McpTool implements Tool {
    private final String serverUrl;
    private final GrpcChannel channel; // or HTTP
    public Result invoke(...) { /* Serialize request, send via MCP protocol */ }
}
```

`ToolRegistry` maps names to descriptors (type + config).  
`ToolExecutor.invoke(toolName, params)` fetches the tool from registry and delegates.

**Edge Cases**

- Unsupported input types → `ValidationException`.  
- Network failures on OpenAPI/MCP → retry logic with exponential back‑off.  
- Native process hangs → enforce a timeout.  
- Spec mismatch (e.g., missing required field) → descriptive error.

**Optimize & Communicate**

- Cache parsed OpenAPI specs for reuse.  
- Parallelize native calls when multiple agents need them.  
- Expose metrics per tool type (latency, success rate).  

Explain the design by walking through a call: the agent asks `ToolExecutor.invoke("image‑resize", {...})`; registry returns an `OpenAPITool`, executor validates inputs against the spec, makes the HTTP request, and parses the JSON result. This keeps the host agnostic to underlying implementation while offering uniform error handling and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
