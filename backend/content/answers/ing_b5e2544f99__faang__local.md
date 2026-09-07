---
qid: ing_b5e2544f99__faang__local
question: 'Q16: How do you handle long-running agent tasks?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 432
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:46:13-05:00'
sources: []
---

**Clarify**  
The question asks how to keep an AI‑driven agent (e.g., a chatbot or automation bot) running for extended periods without hitting timeouts, resource limits, or losing state. I’d confirm: *Is the agent deployed in a cloud function with strict execution windows?* *Do we need deterministic guarantees of completion?* *What persistence layer is available?*  

**Approach**  
1. Break the task into idempotent sub‑steps.  
2. Persist progress after each step (e.g., to DynamoDB, Cloud SQL).  
3. Use a background worker queue (SQS/SNS, Pub/Sub) to trigger the next step.  
4. If using serverless runtimes, chain invocations via a “step function” or orchestrator.  

**Depth**  
- **State persistence**: Store a lightweight checkpoint (`task_id`, `current_step`, `metadata`) so retries resume correctly.  
- **Idempotency**: Design each step to be safe on re‑execution (e.g., use unique request IDs).  
- **Orchestration**: AWS Step Functions or Google Cloud Workflows can enforce ordering and error handling.  
- **Resource cleanup**: After completion, delete temporary data to avoid storage bloat.  
- **Complexity**: O(1) per step for persistence; overall time linear in number of steps.  

**Edge Cases**  
- *Failure mid‑step*: retry with exponential backoff.  
- *State corruption*: implement checksums or versioning.  
- *Infinite loops*: enforce a max attempt counter.  

**Optimize & Communicate**  
I’d suggest caching intermediate results to reduce I/O, and using async patterns (e.g., WebSockets) for real‑time feedback. In an interview, I’d explain the trade‑off between granularity of steps (more persistence overhead vs. finer control). This shows a clear, scalable solution that aligns with FAANG production practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
