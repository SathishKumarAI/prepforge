---
qid: ing_98575a9b60__star__local
question: 'Explain: Build the task-lifecycle core of an annotation platform. Start
  simple; I''ll add requirements: consensus of k annotators, then priority re-review,
  then annotator cooldowns.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 377
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:37:15-05:00'
sources: []
---

**Situation**  
At my previous company we launched a new image‑labeling service for medical imaging. The initial prototype only pushed raw tasks to annotators and collected single labels, but our quality metrics were dropping because no mechanism existed to enforce consensus or manage workload.

**Task**  
I was tasked with designing the core task‑lifecycle that would (1) gather labels from *k* annotators before marking a task complete, (2) re‑review low‑confidence tasks first, and (3) implement cooldown periods so heavy users didn’t over‑work or bias results.

**Action**  
I built a state machine in Go using the Temporal workflow engine. Each task spawns *k* parallel subtasks that write to a PostgreSQL table with a “status” column. A trigger aggregates votes, computes a confidence score (majority vote + variance), and if below threshold the task is re‑queued into a high‑priority queue. For cooldowns I added a Redis sorted set keyed by annotator ID; after each annotation I add a timestamp and enforce a 30‑minute wait before they can receive another task. The workflow logs all state transitions for auditability.

**Result**  
Within two weeks the platform achieved an 88 % consensus accuracy, up from 72 %. Re‑reviewed tasks were flagged 3× faster, cutting turnaround time from 12 to 8 hours. Cooldown logic reduced annotator fatigue complaints by 60 %, and overall annotation throughput grew by 25 %. I learned that coupling a lightweight state machine with real‑time analytics yields both quality control and user experience improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
