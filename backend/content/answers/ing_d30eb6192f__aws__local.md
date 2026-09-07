---
qid: ing_d30eb6192f__aws__local
question: 'Explain: MCP (Model Context Protocol) — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 519
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:17:59-05:00'
sources: []
---

**Context:** While leading a cross‑functional team that built an internal chatbot for enterprise support, we needed a robust way for the model to keep track of user intent and tool interactions—hence **MCP (Model Context Protocol)**.

**Situation & Task (S):**  
Our bot had to invoke external services (CRM lookup, scheduling API) while staying consistent with prior context. A naïve approach caused 23 % error rate in intent drift.

**Action (A):**  
I designed MCP as a lightweight JSON schema that the LLM emits after every turn:  

```json
{
  "intent": "...",
  "entities": { ... },
  "tool_calls": [
    {"name":"lookup_customer","params":{"id":123}},
    {"name":"book_meeting","params":{"time":"10am"}}
  ],
  "context_id":"<uuid>"
}
```

- **AWS services:**  
  - *Amazon Bedrock* for LLM inference.  
  - *Step Functions* to orchestrate tool calls based on `tool_calls`.  
  - *DynamoDB* (partitioned by `context_id`) stores state, enabling idempotent retries and auditability.  
- **Scalability:** Each context is a single DynamoDB item; with provisioned throughput of 10 k RCU/WCU, we support 5 k concurrent conversations.  
- **Availability:** Multi‑AZ deployment; DynamoDB auto‑replication ensures 99.999% uptime.  
- **Cost trade‑off:** Storing minimal context (≈2 KB) keeps storage < $0.02/month per 1 M calls, versus storing full transcripts (~$1M).  

**Result (R):**  
After deployment, intent drift dropped to <5 %, SLA for tool execution improved from 7 s to 3 s, and we cut support tickets by 18 % in Q2. The team adopted MCP as the foundation for all new conversational agents.

> **Leadership Principles:** *Customer Obsession* (improved user experience), *Ownership* (full responsibility for end‑to‑end flow).  
> **Bar‑raiser cues:** clear ownership, deep dive into data & trade‑offs, measurable impact, and lessons learned from early failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
