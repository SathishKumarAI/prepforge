---
qid: ing_510557f31d__aws__local
question: 'Explain: Multi-agent and subagents — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 414
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:28:03-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the redesign of an enterprise recommendation engine that had to scale from 10 k to 1 M users while reducing inference latency by 40%. The team was split between a *multi‑agent* orchestrator and several *sub‑agents* (image, text, user‑profile).  

**Action**  
I introduced the **Customer Obsession** principle: each sub‑agent was built as an autonomous “tool” that could be swapped out without affecting others. Using AWS Step Functions I wired a **State Machine** where the orchestrator dynamically invoked Lambda containers or SageMaker endpoints based on request context—achieving true *tool use*. For state persistence and event logging I used DynamoDB (low‑latency writes) and CloudWatch Logs for audit trails.  

I also applied **Dive Deep**: instrumented each sub‑agent with AWS X-Ray, identified a 15 ms bottleneck in the text‑analysis Lambda, and migrated it to an Fargate task with GPU acceleration—cutting that path’s latency from 120 ms to 20 ms.  

**Result**  
- Latency dropped from 350 ms to 210 ms (40% reduction).  
- Cost per inference fell by 22 % thanks to the serverless‑to‑container shift.  
- The modular design allowed us to add a new “video‑analysis” sub‑agent in just two sprints, keeping delivery on schedule.

**Bar‑raiser focus**  
I demonstrated ownership (architected end‑to‑end), deep technical dive (profiling & tuning), quantified impact (latency & cost metrics), and learned from the initial over‑provisioning by adopting a pay‑per‑use model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
