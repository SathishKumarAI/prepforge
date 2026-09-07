---
qid: ing_99498a4b02__aws__local
question: 'Explain: Score within context — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 392
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:12:14-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to build a continuous‑delivery pipeline for evaluating LLM outputs in real‑time. The goal: *Score within context*—i.e., assign relevance scores that account for the preceding conversation, not just isolated messages. We needed a system that could ingest millions of queries per day and provide instant feedback to our product team.

**Action**  
I led a cross‑functional squad and chose **Langwatch + Langfuse** as the core evaluation framework.  
- **Langwatch** was used for live monitoring, automatically tagging logs with context vectors.  
- **Langfuse** handled experiment orchestration, storing prompts, responses, and contextual metadata in **Amazon DynamoDB** (partitioned by session ID) and generating composite scores via a Lambda‑driven aggregation layer that called the OpenAI API for semantic similarity scoring.

The architecture ran on **AWS Fargate** for stateless inference containers, with an autoscaling policy triggered by CloudWatch metrics (CPU > 70% → +1 task). Cost was kept under $0.03 per evaluation through spot instances and caching of common context embeddings in **ElastiCache for Redis**.

**Result**  
Within two weeks we reduced latency from 3 s to <200 ms, increased evaluation throughput by 4×, and cut operational cost by 35%. The product team reported a 12% improvement in model tuning turnaround time.  

**Reflection**  
I own the failure when the first Lambda rollout hit throttling; I dug into CloudWatch logs (Dive Deep) and re‑architected the batch size logic—an example of Bias for Action and Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
