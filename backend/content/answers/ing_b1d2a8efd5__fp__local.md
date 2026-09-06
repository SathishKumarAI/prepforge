---
qid: ing_b1d2a8efd5__fp__local
question: Does Mastra support MCP servers? — TypeScript AI Framework for Agents and
  Apps | Mastra
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 521
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:22:17-05:00'
sources: []
---

**Short answer:**  
No—Mastra does **not** ship a built‑in driver for “MCP” (the Microsoft Cloud Platform) servers, but you can talk to them with the generic HTTP connector.

---

### Why Mastra is designed this way

| Goal | Design choice | Reason |
|------|----------------|--------|
| **Keep the core light** | Only ship connectors that are widely used out of the box (OpenAI, Anthropic, Azure OpenAI). | Reduces maintenance overhead and keeps bundle size small. |
| **Maximise extensibility** | Expose a pluggable `Connector` interface that can be implemented in any language. | Allows teams to add new back‑ends without touching Mastra’s core. |
| **Maintain consistency** | All connectors expose the same `ChatCompletionRequest/Response` shape. | Guarantees predictable behaviour across providers. |

Because MCP is essentially a custom HTTP endpoint with its own authentication, Mastra treats it as any other REST API. The generic `HttpConnector` can be instantiated like:

```ts
import { HttpConnector } from '@mastra/core';

const mcp = new HttpConnector({
  url: 'https://api.mcp.microsoft.com/v1/chat/completions',
  headers: {
    Authorization: `Bearer ${process.env.MCP_TOKEN}`,
  },
});
```

Once wired, the rest of Mastra (prompts, agents, policies) works unchanged.

---

### Non‑obvious insight

> **You can reuse a single HTTP connector for *any* LLM service that exposes the OpenAI‑compatible schema.**  
> Even if MCP changes its response format slightly, you only need to tweak the adapter in one place; the rest of your agents stay untouched.

So while Mastra doesn’t “support MCP” out of the box, it gives you a minimal, type‑safe path to integrate any such server with negligible friction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
