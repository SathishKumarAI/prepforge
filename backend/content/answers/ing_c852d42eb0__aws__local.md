---
qid: ing_c852d42eb0__aws__local
question: 'Q11: What is the difference between an agent and a workflow?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 554
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:55:07-05:00'
sources: []
---

**Answer (Amazon Style)**  

When I first joined the AI platform team, we were asked to explain *agent vs. workflow* for a new product launch. I framed it with **Customer Obsession** and **Dive Deep** because customers need clear value propositions and internal teams need technical clarity.

|  | Agent | Workflow |
|---|-------|----------|
| Definition | A reactive, stateful component that listens to events (e.g., user query) and decides *what* action to take. It contains policy logic, ML inference, and can maintain context across sessions. | An orchestrated sequence of discrete steps (tasks) that produce a final output. Workflows are declarative, often defined in JSON/YAML, and can be composed of multiple agents or services. |
| Typical AWS Services | **Amazon SageMaker** for model hosting + **AWS Lambda** for inference logic; state stored in **DynamoDB**. | **AWS Step Functions** to coordinate tasks; each task may invoke Lambda, ECS, or SageMaker endpoints. |
| Scalability | Auto‑scales via Lambda concurrency limits; can shard context across DynamoDB partitions. | Parallel branches handled by Step Functions’ *Map* state; each branch scales independently. |
| Availability | Uses Lambda’s built‑in fault tolerance and can be backed up with an S3 snapshot of the model. | State machine guarantees idempotency; retries are configurable per step, reducing failure impact. |
| Cost | Pay‑per‑invocation; minimal storage cost for state. | Additional Step Functions execution costs (~$0.025/100 k steps) but reduces developer effort and operational overhead. |

**STAR Example**  
*Situation*: Our client needed a 30% faster response time for AI chat.  
*Task*: Refactor the monolithic inference service into agents.  
*Action*: Decomposed logic into three SageMaker agents (intent, slot‑filling, response generation) and wired them via Step Functions. Added DynamoDB TTL to purge stale context.  
*Result*: Reduced latency from 1.2 s to 0.8 s (33% improvement), cut Lambda invocations by 40%, saving ~$12k/month.  

**Bar‑raiser notes**: Demonstrated ownership (owning the end‑to‑end pipeline), deep dive into AWS service trade‑offs, quantified impact, and learned from a failed attempt where we over‑sharded DynamoDB causing hot partitions—fixed by adding a hash key.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
