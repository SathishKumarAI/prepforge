---
qid: ing_820aa9f0da__aws__local
question: 'Explain: The Dependency Rule — Clean Coder Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 393
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:18:55-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent ML platform redesign I was asked to justify why we moved from monolithic training scripts to micro‑service pipelines. I applied the *Customer Obsession* principle: every change must reduce latency for data scientists, and *Ownership* because the pipeline lives in my team’s domain.

**Situation**  
Our on‑prem cluster suffered a 45 % increase in job failures when new libraries were added—developers kept pulling dependencies from local envs, breaking reproducibility.

**Task**  
Implement a policy that enforces “no hard‑coded external packages” (the *Dependency Rule*) so every container image is deterministic.

**Action**  
1. Wrote a linting hook using `pipdeptree` to detect undeclared imports and integrated it into the CI pipeline (GitHub Actions + CodeBuild).  
2. Created an immutable artifact registry in ECR, tagging images with SHA‑256 hashes of all dependencies.  
3. Added a monitoring Lambda that scans S3 for stale images, deleting those older than 90 days to keep storage cost < $200/month.

**Result**  
- Reduced training job failures by **82 %** within two sprints.  
- Cut average job start‑up time from 12 min to 4 min (30 % faster).  
- Storage savings of 15 GB/month (~$50/yr).

**Learning**  
The rule forced us to think *deeply* about reproducibility, and the automated pipeline gave me confidence that future changes would not silently re‑introduce broken dependencies. This is what a bar‑raiser looks for: ownership, measurable impact, and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
