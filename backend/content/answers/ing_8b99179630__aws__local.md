---
qid: ing_8b99179630__aws__local
question: 'Q63: How do you handle version control for prompts in production?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 479
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:41:36-05:00'
sources: []
---

**Situation** – In my last role I built a production‑grade prompt‑engineering pipeline for an NLP SaaS that served 10 k daily users. Every new prompt version had to be tracked, rolled back, and auditable without impacting latency.

**Task** – Design a version‑control system that guarantees *Customer Obsession* (fast, accurate responses) while maintaining *Ownership* over data integrity.

**Action** –  
1. **Repository & metadata**: Store prompts in an AWS CodeCommit repo; each commit is tagged with a semantic version and a JSON sidecar in S3 (`prompt/{version}/metadata.json`) that records author, change‑reason, and checksum.  
2. **Runtime lookup**: A lightweight Lambda (≤50 ms) reads the current version from DynamoDB (`PromptConfig` table) and fetches the prompt text from S3, caching it in ElastiCache Redis for 5 s to meet SLAs.  
3. **Audit & rollback**: CloudTrail logs every commit; CI/CD triggers a CloudWatch Event that updates `PromptConfig`. If a user reports degraded performance, we can instantly roll back by pointing the table entry to the previous version and re‑deployed Lambda with no downtime.  
4. **Metrics** – After implementation, prompt‑latency dropped from 180 ms to 75 ms (55% improvement) and rollback time fell from 30 min to <5 min.

**Result** – The system achieved 99.9 % uptime for prompts, reduced support tickets by 40 %, and enabled the team to iterate on prompts 3× faster while keeping full audit trails—exactly what a bar‑raiser expects: deep ownership, measurable impact, and lessons learned from earlier ad‑hoc versioning that caused data drift.

**Bar‑raiser focus** – Demonstrated ownership (full CI/CD pipeline), dive deep (latency analysis, cache strategy), quantified impact (metrics), and learning (transition from manual Git tags to automated rollback).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
