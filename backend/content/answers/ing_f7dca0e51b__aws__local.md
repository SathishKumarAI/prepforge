---
qid: ing_f7dca0e51b__aws__local
question: 'Explain: Q108: Design a real-time fraud detection system with a hard p99
  < 500ms latency requirement, using both ML rules and an LLM-RAG layer. Walk through
  the latency budget breakdown.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 435
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:39:06-05:00'
sources: []
---

**Customer Obsession | Ownership**

*Situation:* Our payment gateway was experiencing a 3 % fraud rate, costing $1M/month.  
*Task:* Build a real‑time detector that keeps p99 latency < 500 ms while combining rule‑based checks and an LLM‑RAG layer.  
*Action:*  

| Layer | Service | Avg. Latency | Cost Impact | Notes |
|-------|---------|--------------|-------------|-------|
| **Ingress** | API Gateway + Lambda@Edge (dedicated 2 µs buffer) | 10 ms | Minimal | Edge caching reduces egress latency. |
| **Rule Engine** | DynamoDB Global Table + Kinesis Data Streams | 80 ms | $0.02/1M req | Rules stored in TTL‑enabled tables; streaming to Lambda for instant evaluation. |
| **LLM‑RAG** | SageMaker Endpoint (multi‑model, 2 vCPU) + Bedrock Retrieval Service | 350 ms | $0.25/req | Retrieval via DynamoDB index, inference on on‑demand spot instances. |
| **Aggregation & Response** | Lambda (stateless) + SQS FIFO | 30 ms | Low | Consolidates rule+LLM scores, writes to DynamoDB and triggers alert if > threshold. |

*Result:* Deployed in 3 weeks; fraud rate dropped to 0.4 % (‑7×), latency p99 = 470 ms, cost per transaction ≈ $0.04 vs prior $0.10.  

**Dive Deep** – I profiled each component with CloudWatch traces, iterating on model size and DynamoDB provisioned capacity until the budget was met.  
**Learning:** Initial over‑provisioning of LLM instances caused spikes; switching to spot + scaling policies flattened costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
