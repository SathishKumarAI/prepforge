---
qid: ing_acb0252778__aws__local
question: 'Explain: Use .dockerignore — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 432
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:56:22-05:00'
sources: []
---

**Situation & Task**  
I was leading a new ML inference service for a recommendation engine that served 4 M requests/day. The team was shipping Docker images daily; build times ballooned to 12 min and the image size hit 2 GB, causing slow CI pipelines and high S3 storage costs.

**Action**  
- **Implemented `.dockerignore`**: excluded `*.pyc`, `__pycache__/`, local data sets, test directories, and large model checkpoints (>500 MB).  
- Added a **multi‑stage Dockerfile**: base stage with only runtime dependencies, build stage for compiling C++ extensions.  
- Configured **Amazon ECR lifecycle policies** to purge unused images after 30 days.  
- Integrated the build into **AWS CodeBuild** with caching of `pip` wheels and `conda` envs.

**Result**  
Image size dropped from 2 GB to 450 MB (77 % reduction). Build time fell from 12 min to 3 min, cutting CI cost by $0.20 per build (≈$240/month). Deployment latency decreased, allowing us to roll out a new recommendation model in under 4 h instead of 8 h.

**Reflection**  
*Ownership*: I owned the end‑to‑end pipeline and drove change without external approval.  
*Dive Deep*: By profiling build logs and layer sizes, I identified the root cause.  
*Customer Obsession*: Faster builds mean quicker feature delivery to our users.  
*Bias for Action*: Implemented changes in a single sprint.

**Bar‑raiser cue**: Look for evidence that you not only fixed a symptom but also quantified impact and learned from iteration—exactly what I did with `.dockerignore` and multi‑stage builds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
