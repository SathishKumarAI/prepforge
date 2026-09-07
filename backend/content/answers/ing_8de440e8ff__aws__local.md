---
qid: ing_8de440e8ff__aws__local
question: 'Explain: Swarms and P2P — Autogen Crewai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 477
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:46:44-05:00'
sources: []
---

**Situation** – At my previous role I was tasked to build a *self‑organising AI crew* that could generate and execute complex tasks (e.g., content creation, data labeling) without central orchestration, while keeping latency < 200 ms for real‑time clients.

**Task** – Design a swarm + P2P model (“Autogen Crew”) that scales to thousands of autonomous agents, preserves privacy, and reduces cloud spend by >30 %.

**Action**  
1. **Swarm Layer (AWS ECS + Fargate)** – Each agent runs in a lightweight container with an internal message bus (Amazon SQS FIFO). Agents discover peers via a DynamoDB “Peer Registry” and exchange state over *short‑lived* TLS‑encrypted channels, satisfying the *Customer Obsession* principle by keeping data local.  
2. **P2P Coordination** – Implemented a gossip protocol (based on Amazon Kinesis Data Streams for broadcast) so that agents propagate task status without a single point of failure—demonstrating *Ownership*.  
3. **Auto‑Generation Engine** – Leveraged Amazon Bedrock to spin up GPT‑4 models on demand; model weights are cached in S3, and inference is run on spot GPU instances (p3.2xlarge) with Spot Fleet to cut costs by 45 %.  
4. **Observability & Scaling** – CloudWatch metrics trigger Lambda functions that auto‑scale the swarm size based on queue depth (target 10 % queue occupancy), ensuring *Deliver Results*.

**Result** – The system handled 12,000 concurrent task requests with 95 % under 200 ms latency, while reducing AWS spend from $120k/month to $75k/month. Post‑deployment monitoring showed a 15 % drop in error rate due to peer redundancy. Learned that early integration of *Dive Deep* diagnostics (e.g., tracing with X-Ray) uncovered hidden bottlenecks in the gossip layer—prompting a refactor to use Kinesis Data Firehose, which cut message latency by 20 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
