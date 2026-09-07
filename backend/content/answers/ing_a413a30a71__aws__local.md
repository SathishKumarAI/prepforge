---
qid: ing_a413a30a71__aws__local
question: 'Explain: Order matters for caching — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 450
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:38:32-05:00'
sources: []
---

**Situation / Task**  
While leading a migration of our recommendation engine to ECS‑Fargate, I discovered that the order of `COPY` and `RUN` statements in our Dockerfile was causing cache thrashing. The build time ballooned from 5 min to over 30 min, pushing us past SLA windows for nightly batch jobs.

**Action**  
I applied the *“Order matters for caching”* best practice:  

1. **Group immutable layers first** – copy `requirements.txt` and install Python deps before copying source code.  
2. **Leverage Docker’s cache** by keeping the most frequently unchanged files at the top.  
3. Added a **build argument** to skip heavy linting in CI builds, preserving cache for downstream stages.  

Implemented this via an ECS task definition that used **Amazon ECR** for image storage and **AWS CodeBuild** with *cache* enabled (`/root/.cache/pip`). I also introduced a **GitHub Actions pipeline** to push only when the `requirements.txt` checksum changed, reducing unnecessary rebuilds.

**Result**  
Build time dropped 83 % (5 min → 0.9 min). CI pipeline throughput increased from 12 builds/hr to 45 builds/hr, cutting $1.2k/month in build costs on CodeBuild. The change also reduced the chance of stale dependencies, improving deployment reliability by 15 % (fewer rollback incidents).

**Learnings**  
- *Ownership*: I owned the entire CI/CD stack and documented the new pattern for all teams.  
- *Dive Deep*: Profiling Docker layers uncovered hidden cache invalidations.  
- *Bias for Action*: Implemented changes in a single sprint, validated with metrics.  

This demonstrates how small architectural decisions—here, layer ordering—can have outsized impacts on scalability, cost, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
