---
qid: ing_cea66ed342__aws__local
question: 'Explain: Agents as Tools — Llamaindex'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 370
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:08:12-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** My team was building a self‑service analytics portal for a SaaS client that wanted instant insights from their internal LlamaIndex data store.  
> **Task:** I had to expose LlamaIndex agents as reusable “tools” so developers could invoke them via API without re‑implementing the prompt logic.  
> **Action:**  
> * Designed an AWS Lambda layer that packages the LlamaIndex Python SDK and custom tool wrappers (e.g., `SearchTool`, `SummarizeTool`).  
> * Created a RESTful endpoint on Amazon API Gateway that accepts a JSON payload (`{"tool":"search","query":"sales Q1"}`) and dispatches to the correct Lambda function.  
> * Integrated AWS Secrets Manager for secure API keys, CloudWatch Logs for observability, and DynamoDB to cache tool outputs (TTL 12 h).  
> * Added a simple rate‑limit policy (5 req/s per client) via API Gateway throttling to protect downstream LLM calls.  
> **Result:** The portal’s average latency dropped from 4.2 s to 1.3 s, and user satisfaction scores increased by 27 % in the first month. Cost savings were 35 % due to caching and serverless scaling.  

**Bar‑raiser focus:** I demonstrated ownership by delivering a fully production‑ready service, dove deep into AWS best practices for cost and latency, quantified the impact with real metrics, and learned that early cache warm‑ups further cut cold start times—an insight we iterated on in subsequent releases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
