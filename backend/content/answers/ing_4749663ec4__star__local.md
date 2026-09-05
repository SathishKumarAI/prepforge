---
qid: ing_4749663ec4__star__local
question: 'Explain: Files in This Folder — Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 352
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:51:14-05:00'
sources: []
---

**Situation**  
During my senior capstone I was tasked with building an AI‑driven personal assistant that could autonomously schedule meetings, manage emails, and learn user preferences from a corporate data lake. The project repository had a folder called *Files in This Folder* where all the agentic components lived.

**Task**  
I needed to design the architecture so each file became a self‑contained “agent” with its own perception, planning, and action modules, while ensuring they could communicate securely over gRPC without leaking sensitive data.

**Action**  
First I mapped the folder hierarchy: `perception.py`, `planner.py`, `executor.py`, and `memory/`. In *perception* I implemented a lightweight transformer that parsed email headers into intent embeddings. The *planner* used a finite‑state machine to generate a sequence of actions, constrained by an access‑control list in `policy.yaml`. For *execution*, I wrapped system calls in async coroutines, adding retry logic and circuit breakers. Finally, I wrote integration tests with `pytest` that simulated 50 concurrent users, measuring latency and success rate.

**Result**  
The assistant achieved a 92 % success rate on scheduling tasks within the first week of deployment, cutting manual scheduling time by 35 %. I learned that treating each file as an agentic module simplifies debugging and enables independent scaling—an approach I now apply to all AI product pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
