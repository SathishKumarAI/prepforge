---
qid: ing_1ea0b084ff__aws__local
question: 'Explain: Conversation History Management — Context vs. Memory Engineering
  in Agentic AI Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 513
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:36:43-05:00'
sources: []
---

**Situation & Task**  
In my last role as Lead AI Engineer at a fintech startup, we built an agentic chatbot that handled high‑volume customer queries (≈ 10 k/day). The challenge was to keep conversations coherent without over‑loading the model with stale context—essentially deciding *when* to treat information as **context** versus **memory**.

**Action**  
I architected a hybrid storage layer:

| Layer | Role | AWS Services | Rationale |
|-------|------|--------------|-----------|
| **Context** | Short‑term, per‑turn data | In‑memory Redis (Elasticache) + Lambda | Low latency (< 5 ms), auto‑scales with traffic. |
| **Memory** | Long‑term facts & user history | DynamoDB + S3 for archival logs | Durable, ACID‑like writes; cost‑effective storage of 100 GB/month. |

During a conversation, the Lambda function pulls only the last 5 turns from Redis (context) and merges them with user attributes fetched in real time from DynamoDB (memory). I added a **policy engine** that scores each memory item on relevance using cosine similarity against the current intent; items below a threshold are pruned to keep payloads < 2 KB.

I also introduced a **Step Functions** orchestrator to retry failed writes, ensuring *high availability* (>99.9%) while keeping costs down (≈$0.02 per 1 k calls).

**Result**  
Post‑deployment, we observed:

- **30 % reduction** in average response latency.
- **15 % increase** in NPS due to more accurate replies.
- **$3K/month savings** from targeted memory pruning.

**Reflection (Bar‑raiser)**  
I took full ownership of the end‑to‑end pipeline, diving deep into Redis eviction policies and DynamoDB throughput. The biggest learning was that over‑aggressive context caching can actually hurt model performance; a lightweight relevance filter solved it. This iteration taught me to balance *customer obsession* with *bias for action*, delivering measurable results while staying scalable and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
