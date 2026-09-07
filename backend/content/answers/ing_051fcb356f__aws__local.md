---
qid: ing_051fcb356f__aws__local
question: 'Q: How do MCP and A2A work together in a production multi-agent system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 489
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:37:27-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a production‑grade multi‑agent system for a recommendation engine that needed to run 10 000 concurrent agents while keeping latency < 200 ms and cost per inference <$0.001. The challenge was to orchestrate *MCP* (Model Coordination Plane) and *A2A* (Agent‑to‑Agent communication) so the agents could share state, avoid duplicate work, and adapt in real time.

**Action**  
I designed a two‑layered architecture:  

1. **MCP Layer –** A stateless Lambda function that receives agent requests, normalizes them, and publishes to an Amazon SQS FIFO queue. The queue guarantees order and idempotence; we set `visibility_timeout` to 30 s so agents can retry safely.  
2. **A2A Layer –** Each agent runs in a Fargate task connected to an Amazon Elasticache Redis cluster (cluster mode). Agents pull the latest policy from MCP, publish local updates to a Redis stream (`agent_updates`). A background “sync” Lambda consumes the stream and writes back to S3 for persistence.

We enabled *Amazon EventBridge* to trigger the sync Lambda on every `agent_update` event. To keep costs low we used *Spot Instances* for Fargate tasks, and *AWS Cost Explorer* dashboards to monitor spend per agent cluster.

**Result**  
After deployment:  

- Latency dropped from 350 ms to **190 ms** (30% improvement).  
- Cost per inference fell from $0.003 to **$0.0008** (73% savings).  
- We handled a 4× spike in concurrent agents with zero SLA violations.

**Reflection**  
This exercise reinforced *Customer Obsession* (delivering fast, cheap recommendations) and *Dive Deep* (profiling Lambda cold starts and Redis latency). The biggest learning was that an overly complex sync protocol broke during traffic spikes; simplifying to a single Redis stream resolved the issue. I now routinely audit architecture for hidden bottlenecks before scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
