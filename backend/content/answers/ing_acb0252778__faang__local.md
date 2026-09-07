---
qid: ing_acb0252778__faang__local
question: 'Explain: Use .dockerignore — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 627
total_tokens: 865
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:25:21-05:00'
sources: []
---

## Clarify  
You’re asking how **`.dockerignore`** fits into the nine core Docker best practices and why it matters for ML pipelines (data‑heavy images, reproducibility). I’ll assume you want a concise, interview‑ready explanation that shows both the technical benefit and the operational impact.

## Approach  
1. List the 9 Docker best practices briefly.  
2. Highlight **`.dockerignore`** as practice #3 (“Avoid unnecessary files”).  
3. Explain its role in ML contexts (large datasets, Jupyter notebooks, model artifacts).  
4. Quantify the gains: build time, image size, CI/CD throughput.  
5. End with a quick sanity‑check checklist.

## Depth  

| Practice | Why it matters for ML |
|----------|-----------------------|
| 1️⃣ Minimal base images | Keeps attack surface small; use `python:3.11-slim`. |
| 2️⃣ Single‑layer installs | One `RUN pip install …` to reduce layers and cache hits. |
| **3️⃣ `.dockerignore`** | Excludes data folders, notebooks, `__pycache__`, large raw datasets, or model checkpoints that aren’t needed at runtime. This shrinks the context sent to Docker daemon (often >10 GB) and cuts build time by 50–80 %. |
| 4️⃣ Use multi‑stage builds | Compile dependencies once, copy only artifacts. |
| 5️⃣ Pin exact versions | Guarantees reproducibility of models. |
| 6️⃣ Leverage caching | Order Dockerfile to maximize cache reuse. |
| 7️⃣ Keep secrets out | Use build args or external secret managers. |
| 8️⃣ Health‑check & liveness probes | Detect model server failures early. |
| 9️⃣ Regular image scanning | Scan for CVEs in ML libraries. |

### `.dockerignore` in Action  
```text
# Exclude everything but code and requirements
*
!src/
!requirements.txt
```
When building, Docker sends only the `src/` directory and dependencies, ignoring large datasets (`data/`) that are mounted at runtime or fetched via a data pipeline.

## Edge Cases  
- **Missing `.dockerignore`** → build times balloon; CI pipelines fail due to timeout.  
- **Over‑aggressive ignores** → accidentally omit required config files, causing runtime errors.  
- **Dynamic data paths** → remember to add placeholders if the structure changes.

## Optimize & Communicate  
Explain that a well‑crafted `.dockerignore` is the *first line of defense* against bloated images and flaky builds—critical when scaling ML workloads across clusters or deploying to serverless containers. In an interview, I’d conclude: “By keeping the build context lean, we save bandwidth, reduce attack surface, and speed up CI/CD, all of which directly translate to faster model iteration cycles.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
