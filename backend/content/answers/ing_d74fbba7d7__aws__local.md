---
qid: ing_d74fbba7d7__aws__local
question: 'Explain: Getting Started — GitHub - crewAIInc/crewAI: Framework for orchestrating
  role-playing, autonomous AI agents. By fostering collaborative intelligence, CrewAI
  empowers agents to work together seamlessly, tackling complex tasks. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 425
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:16-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked to prototype a system that could orchestrate multiple LLM‑based agents for complex customer support workflows. The goal was to cut ticket resolution time by 30 % while keeping costs below $0.10/interaction.

**Action – Technical Design**  
I chose **CrewAI’s framework** as the core orchestration engine because it exposes a declarative “role” model that maps cleanly onto AWS Step Functions.  
* **Step Functions + Lambda** – each agent runs in an isolated Lambda, invoked by the state machine.  
* **Amazon Bedrock** (or OpenAI via API Gateway) for LLM inference, with per‑agent prompt tuning stored in DynamoDB.  
* **SQS** buffers incoming tickets; **SNS** notifies agents of high‑priority items.  
* **CloudWatch & X-Ray** provide end‑to‑end tracing and performance metrics.

The design guarantees *high availability* (Step Functions retries), *scalability* (Lambda auto‑scale + provisioned concurrency for hot paths), and *cost control* (pay only per inference, spot instances for heavy compute).

**Result**  
Within two weeks of deployment we saw a **32 % reduction in average ticket turnaround time** and an **$0.085/interaction cost**, surpassing the target. The system also logged >15k interactions with 99.9 % uptime.

**Reflection (Bar‑raiser focus)**  
I owned the entire pipeline, *dove deep* into latency bottlenecks by instrumenting X-Ray traces, and iterated on prompt templates to reduce hallucinations—learning that small prompt tweaks can halve inference costs. This experience showcases **Ownership**, **Dive Deep**, and a data‑driven bias for action—all Amazon’s Leadership Principles in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
