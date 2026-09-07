---
qid: ing_ebaff7f2d0__aws__local
question: 'Explain: Rules of the game — Coding Challenges'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 362
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:11:18-05:00'
sources: []
---

**Customer Obsession + Deliver Results**

*Situation*: My team was tasked to build an automated grading system for a large university’s AI coursework. The “rules of the game” were that every solution had to be reproducible, secure, and fair across all student submissions.

*Task*: I led the design of a stateless micro‑service pipeline that parsed code, ran it in isolated containers, and produced deterministic scores within 5 seconds per submission.

*Action*:  
- **Dive Deep**: I mapped every failure mode—dependency drift, nondeterministic imports, hidden I/O—and built unit tests that seeded the container runtime with exact package hashes.  
- **Bias for Action**: We chose AWS ECS Fargate + Lambda to avoid server maintenance; S3 stored artifacts and DynamoDB held metadata.  
- **Invent & Simplify**: A single “score” API accepted a tarball, triggered a container that logged stdout/stderr, and returned a JSON score.  
- **Ownership**: I set up CI/CD with CodePipeline, enforced code reviews, and added automated rollback on metric drift.

*Result*: The system handled 10 k concurrent submissions during finals, reduced grading time from 45 min to <5 s per student (≈95% cost savings), and the accuracy of scores matched instructor benchmarks at 99.8%.  

**Bar‑raiser check**: Demonstrated ownership by owning end‑to‑end reliability, deep dive into reproducibility, quantified impact on speed/cost, and learned from early container failures to harden the pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
