---
qid: ing_c93be74d3c__aws__local
question: How do you present an agent's tool calls and multi-step progress in the
  UI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 488
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:56:37-05:00'
sources: []
---

**Situation** – While leading a cross‑functional team building an AI‑powered recommendation agent, I was asked to expose the agent’s internal tool calls and its multi‑step reasoning in the user dashboard so that product managers could audit decisions.

**Task** – Deliver a real‑time UI that shows each tool invocation (e.g., “QueryCatalog”, “ComputeScore”) along with intermediate outputs, while keeping latency < 200 ms for 10k concurrent users.

**Action**  
1. **Architecture** – I designed an event‑driven pipeline: the agent writes a JSON record to *DynamoDB* (`AgentState` table) after every tool call; a Lambda streams updates via *Amazon Kinesis Data Streams* to a WebSocket API (API Gateway).  
2. **UI** – A React SPA consumes the WebSocket, rendering a collapsible “Steps” panel. Each step shows the tool name, input, and output with timestamps.  
3. **Observability** – All logs go to *Amazon CloudWatch Logs*; metrics (`ToolCallCount`, `AvgLatency`) feed into *CloudWatch Alarms* that trigger an SNS alert if latency > 200 ms.  
4. **Cost & Scale** – DynamoDB’s on‑demand mode keeps costs predictable (~$0.25 per million writes). Kinesis shards (5) support >50k events/s, and the WebSocket API scales automatically.

**Result** – The dashboard reduced manual audit time by 70 % (from 30 min to 9 min), and the latency stayed <180 ms for 95 % of users. Feedback from PMs highlighted that the transparency increased trust in the AI, enabling a 12 % lift in feature adoption.

**Reflection** – I owned the end‑to‑end solution, dove deep into AWS pricing models to keep costs low, and iterated on user feedback—key Amazon principles: **Ownership**, **Dive Deep**, **Bias for Action**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
