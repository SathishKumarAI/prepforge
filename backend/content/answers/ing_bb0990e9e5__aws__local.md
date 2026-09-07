---
qid: ing_bb0990e9e5__aws__local
question: 'Explain: LLM-as-Judge for Step Quality — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 600
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:25-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a project to replace manual code‑review checks in our AI‑driven recommendation engine. The goal was to let an LLM act as a “judge” that scores the quality of each step a policy agent takes, so we could automatically flag sub‑optimal or unsafe actions before they reached users.  

**Action (Design & Architecture)**  
* *Requirements*: 1) Real‑time scoring with <50 ms latency; 2) Cost per request <$0.01; 3) 99.9 % availability during peak traffic (~10k requests/s).  
* *Solution*:  
  1. **LLM-as-Judge** – Deployed a fine‑tuned `anthropic/claude-3-opus` via AWS Bedrock, wrapped in a Lambda layer that ingests the agent’s current state and action history.  
  2. **Scoring API** – Exposed through Amazon API Gateway + Lambda@Edge for sub‑100 ms cold starts; cached recent judgments in Amazon ElastiCache (Redis) to amortize inference cost.  
  3. **Observability** – Traced every judgment with AWS X-Ray, logged scores and confidence to CloudWatch Logs; alerts on drift (>10% change from baseline).  
* *Scalability & Cost*: Using Bedrock’s pay‑as‑you‑go model kept spend at ~$0.006 per inference. Auto‑scaling Lambda handled traffic spikes; cache hit rate reached 78 %, cutting Bedrock calls by ~3×.  

**Result (Data‑Driven Impact)**  
Within three months:  
* **Accuracy** – Judgment precision improved from 72 % to 91 % on a held‑out audit set, reducing unsafe agent actions by **38 %**.  
* **Cost** – Total inference spend fell from $12k/month to $4.5k/month.  
* **Latency** – Median end‑to‑end latency dropped from 120 ms to 42 ms.  

**Reflection & Learning**  
I initially underestimated the cold‑start penalty of Lambda, which caused a spike in latency during traffic surges. By adding an always‑warm provisioned concurrency and shifting some logic to AWS Fargate for longer inference jobs, we eliminated that issue. This taught me to **bias for action early** but also to **dive deep into performance metrics** before scaling.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Delivering safer, faster recommendations directly benefits end‑users.  
- **Ownership & Dive Deep** – I owned the entire pipeline, from model fine‑tuning to cost monitoring, and dug into telemetry to iterate quickly.  

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
