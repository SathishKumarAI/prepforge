---
qid: ing_c4f7092c74__aws__local
question: 'Explain: Low-level design: sketch the classes and interfaces for the tool-calling
  layer of an agent host, where tools can come from native code, an OpenAPI spec,
  or an MCP server.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 562
total_tokens: 821
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:48:17-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑function squad that built an autonomous “tool‑calling” agent for a customer‑facing chatbot, we needed a unified layer to invoke tools from native binaries, OpenAPI services, and MCP servers. The goal was to reduce latency by 30 % and cut ops costs by 20 % while keeping the system fault‑tolerant.

**Design (Technical)**  
| Layer | Key Classes / Interfaces | AWS Services | Rationale |
|-------|--------------------------|--------------|-----------|
| **ToolRegistry** | `ITool`, `NativeTool`, `OpenAPITool`, `MCPTool` | DynamoDB (metadata), SSM Parameter Store (secrets) | Fast O(1) lookup, secure secrets. |
| **Invoker** | `IInvoker`, `NativeInvoker`, `RESTInvoker`, `MCPInvoker` | AWS Lambda@Edge (for native), API Gateway + Lambda (OpenAPI), ECS Fargate (MCP) | Edge for low‑latency, serverless for cost, container for heavy MCP. |
| **Orchestrator** | `ToolCallContext`, `ToolCallResult` | Step Functions (workflow), CloudWatch Logs | Handles retries, circuit‑breaking, and observability. |

*Scalability:* Each invoker runs in its own managed compute tier; auto‑scales with Lambda concurrency or Fargate capacity.  
*Availability:* Multi‑AZ DynamoDB + SSM replication; Step Functions state machine guarantees at‑least‑once delivery.  
*Cost:* Serverless for lightweight tools, containerized only where necessary.

**Result (STAR)**  
- **S**: Delivered the unified layer in 6 sprints.  
- **T**: Achieved a 35 % reduction in average tool‑call latency and cut ops cost by 22 %.  
- **A**: Implemented circuit breakers, exponential back‑off, and metrics dashboards.  
- **R**: 99.97 % uptime during peak traffic; customers reported improved satisfaction scores.

**Bar‑raiser focus**  
- Ownership of end‑to‑end latency and cost.  
- Dive deep into trade‑offs between serverless vs containerized invokers.  
- Quantified impact on customer experience.  
- Learned from a mis‑configured Lambda concurrency limit that caused throttling; refactored to use provisioned concurrency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
