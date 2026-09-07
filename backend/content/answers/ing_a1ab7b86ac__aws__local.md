---
qid: ing_a1ab7b86ac__aws__local
question: Why Separate Planner and Coder Agents? — Autonomous Coding Agent
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 383
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:30:42-05:00'
sources: []
---

**Why split the planner from the coder agent?**

**Situation / Task**  
At my last role I led a project to build an autonomous coding assistant that could generate production‑ready code for new microservices. The initial monolithic model often produced buggy or insecure snippets, and debugging time doubled.

**Action**  
I re‑architected the system into two decoupled agents:

1. **Planner (LLM + business‑rules engine)** – receives a high‑level spec, decomposes it into tasks, writes detailed prompts for each sub‑task, and schedules them.  
2. **Coder (LLM fine‑tuned on repo history)** – executes only the code generation prompt, returning a commit‑ready diff.

Key AWS services:  
- *Amazon Bedrock* for both agents with separate models to enforce separation of concerns.  
- *AWS Step Functions* orchestrates task flow and retries.  
- *Amazon CodeCommit* stores intermediate diffs; *CodeBuild* runs unit tests on each commit.  

**Result**  
Unit‑test pass rate rose from **68 % → 93 %** in the first sprint, while average debugging time dropped by **42 %**. The cost per request fell 15 % because the coder agent is invoked only for the narrow code‑generation prompt.

**Reflection (Bar‑raiser)**  
I owned the trade‑off between model complexity and reliability, dove deep into failure logs to pinpoint why monolithic prompts caused hallucinations, and iterated quickly—biasing for action while keeping a clear metric. The split also makes it easier to swap out or upgrade one agent without impacting the other, exemplifying true ownership and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
