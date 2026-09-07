---
qid: ing_b9b0a35e3d__faang__local
question: 'Explain: Multi-Stage builds — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 527
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:54:39-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how *multi‑stage builds* fit into the nine Docker best practices for ML projects, and why they matter when packaging models or inference services.

**Approach**  
1. Define multi‑stage builds in plain terms.  
2. Map each of the nine best practices to a concrete example that uses stages (e.g., base image → build stage → runtime stage).  
3. Highlight benefits: smaller images, isolated dependencies, reproducibility, security.  

**Depth**  
- **Stage 1 – Base & Build**: Start from an official Python/conda image, install build‑time packages (`pip`, `build-essential`), clone the repo, run `python setup.py sdist`.  
- **Stage 2 – Runtime**: Use a minimal `python:slim` or `scratch` + `glibc`. Copy only the wheel and runtime dependencies. Install `torch==...`, `numpy`.  
- **Best Practices Alignment**  
  1. *Use official images* → base stage starts from `python:3.11-slim`.  
  2. *Pin versions* → `requirements.txt` locked, copied in build stage.  
  3. *Leverage caching* → separate layers for pip install vs code copy.  
  4. *Minimize layers* → combine RUN commands in each stage.  
  5. *Keep images small* → final image contains only the wheel and runtime deps.  
  6. *Avoid secrets* → no credentials in any layer.  
  7. *Use COPY not ADD* → explicit file paths.  
  8. *Document Dockerfile* → comments per stage.  
  9. *Test images locally* → run `docker build` with `--no-cache` to validate.

**Edge Cases**  
- Large binaries that break layer size limits; split into multiple intermediate stages.  
- Conditional dependencies (GPU vs CPU); use ARGs to switch base image.  
- Cache busting on code changes; ensure build context excludes temporary files.

**Optimize & Communicate**  
Explain trade‑offs: more stages = longer build time but much smaller runtime image and fewer attack surfaces. Present a concise diagram in the interview, then walk through each stage’s purpose, tying back to the nine practices. This shows structured thinking, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
