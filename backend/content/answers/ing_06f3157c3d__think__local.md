---
qid: ing_06f3157c3d__think__local
question: 'Explain: Scan images — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 551
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:10:46-05:00'
sources: []
---

**1. Clarify Scope & Audience**  
   - Identify whether the explanation is for beginners, intermediate ML engineers, or DevOps‑savvy data scientists.  
   - Decide if you’ll focus on *why* each Docker best practice matters in an ML pipeline (image size, reproducibility, security) or simply list the practices.

**2. Adopt a Mental Model**  
   - Think of a Docker image as a “snapshot” of the runtime environment.  
   - In ML, this snapshot must include: data‑science libraries, GPU drivers, model artifacts, and sometimes orchestration tools.  
   - Use the *Build → Deploy → Operate* triad to map each best practice (e.g., minimal base image for build, deterministic layers for deploy, automated scanning for operation).

**3. Step‑by‑Step Reasoning**  
   1. **Choose a slim base image** – reduces size and surface area.  
   2. **Pin dependencies** – ensures reproducibility across runs.  
   3. **Leverage multi‑stage builds** – compile heavy deps in one stage, copy only artifacts to the final image.  
   4. **Use COPY instead of ADD** – avoid implicit extraction or URL fetching.  
   5. **Set non‑root user** – mitigate privilege escalation.  
   6. **Layer ordering for cache efficiency** – put rarely changing layers first.  
   7. **Add health checks** – detect model runtime failures early.  
   8. **Scan for vulnerabilities** – integrate tools like Trivy or Clair in CI.  
   9. **Tag with semantic versioning + hash** – trace back to source code.

**4. Avoid Common Pitfalls**  
   - Don’t bundle unnecessary binaries (e.g., compilers) into the final image.  
   - Forgetting to clean apt caches inflates size.  
   - Using `latest` tags hinders reproducibility.  
   - Skipping health checks makes debugging in production harder.

**5. Sanity‑Check & Communicate**  
   - Verify each practice by running a quick build and measuring image size, startup time, and vulnerability scan results.  
   - When explaining, start with the *problem* (e.g., “Large images slow down deployment”), then show how the best practice *solves* it.  
   - Use concrete examples or screenshots to illustrate multi‑stage Dockerfiles and health‑check commands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
