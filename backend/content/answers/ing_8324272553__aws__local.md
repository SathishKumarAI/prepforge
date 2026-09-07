---
qid: ing_8324272553__aws__local
question: 'Explain: Pattern 3: Server-Side Composition — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 469
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:21:20-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a project to replace a monolithic recommendation engine that was slow and hard to maintain. The goal was to build an *AI‑powered tool agent* that could compose responses on the server side, reducing latency by 70 % while keeping the user experience consistent.

**Action**  
I adopted **Pattern 3: Server‑Side Composition**—a decoupled microservice that receives a request, orchestrates calls to multiple LLM agents (e.g., summarizer, sentiment analyzer), and stitches their outputs into a single response.  
- **AWS services:**  
  - *Amazon API Gateway* + *Lambda* for the composition endpoint (scales to 10 k RPS).  
  - *Step Functions* orchestrates agent calls with retry logic.  
  - *SageMaker endpoints* host lightweight models; *Bedrock* handles heavy inference.  
- **Design choices:** stateless Lambda functions → cost‑effective, cold‑start mitigated by provisioned concurrency (0.5 $ per hour). Caching partial results in *ElastiCache* reduces repeated calls by 40 %.  
- **Scalability & Availability:** Each agent runs in its own ECS cluster with auto‑scaling; we hit a 99.9 % SLA after a month of load testing.

**Result**  
Latency dropped from 1.2 s to 0.35 s (71 % improvement). Cost fell by 30 % due to reduced inference time and efficient resource allocation. User satisfaction scores rose from 4.3/5 to 4.7/5, and the team adopted the pattern for two additional services.

**Reflection**  
I owned the migration end‑to‑end, diving deep into error patterns (e.g., agent timeout). The trade‑off of added orchestration complexity was outweighed by measurable performance gains. This experience reinforced my belief in *Customer Obsession* and *Ownership*, and I now mentor peers on designing composable AI agents that balance speed, cost, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
