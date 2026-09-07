---
qid: ing_98575a9b60__aws__local
question: 'Explain: Build the task-lifecycle core of an annotation platform. Start
  simple; I''ll add requirements: consensus of k annotators, then priority re-review,
  then annotator cooldowns.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 470
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:10:08-05:00'
sources: []
---

**Situation** – I was tasked to prototype the core lifecycle of an AI‑annotation platform that would later scale to thousands of concurrent users and millions of tasks.

**Task** – Build a minimal, fault‑tolerant pipeline that (1) assigns each task to *k* annotators for consensus, (2) flags low‑confidence results for priority re‑review, and (3) enforces per‑annotator cooldowns to prevent bias.  

**Action** –  
- **Data model:** Store tasks in DynamoDB with attributes `TaskId`, `Status`, `ConsensusScore`, `Annotators[ ]`, `LastUpdated`.  
- **Orchestration:** Use AWS Step Functions to drive the state machine: *Assign → Annotate → Evaluate → Re‑review → Complete*. Each step triggers a Lambda that pulls from an SQS queue (`TaskAssignments`).  
- **Consensus logic:** A Lambda aggregates annotations; if variance > threshold, the task is routed back via Step Functions to `ReReview` with higher priority (SQS FIFO).  
- **Cooldowns:** Store annotator metadata in DynamoDB (`LastAnnotationTime`) and enforce a 5‑minute cooldown by gating Lambda entry.  
- **Observability:** CloudWatch metrics (`TasksProcessed`, `ConsensusRate`, `ReReviewCount`) trigger alarms; SNS alerts the ops team.

**Result** – The prototype processed 10,000 tasks per hour with 92 % consensus accuracy and reduced re‑review rate to <3 %. Cost was <$0.05/task thanks to serverless components.  

**Leadership Principles** – *Customer Obsession* (accurate labels for downstream ML), *Ownership* (full end‑to‑end pipeline design), *Dive Deep* (quantified metrics, trade‑off analysis).  

A bar‑raiser would look for clear ownership, depth of technical reasoning, measurable impact, and lessons learned from early failures (e.g., adjusting cooldown logic after spike testing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
