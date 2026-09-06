---
qid: ing_b9b0a35e3d__think__local
question: 'Explain: Multi-Stage builds — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 547
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:12:13-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
*Assume the reader knows what a Dockerfile is and why image size matters.*  
*Assume they’re familiar with “multi‑stage builds” as a technique, but not the 9 specific best practices.*

**2️⃣ Adopt a mental model: “Build → Test → Deploy”**  
Think of each stage in the Dockerfile as a step in a pipeline: first compile or install dependencies, then test, finally package only what’s needed for runtime. This keeps images lean and secure.

**3️⃣ Reason through the 9 practices one by one**  

| # | Practice | Why it matters | How to implement |
|---|----------|----------------|------------------|
| 1 | Use a minimal base image (e.g., `alpine`, `scratch`) | Fewer layers, smaller footprint | `FROM alpine` or `FROM scratch` |
| 2 | Separate build and runtime stages | Avoids leaking dev tools | `FROM <builder> AS builder … FROM <runtime>` |
| 3 | Copy only required artifacts | Less surface area | `COPY --from=builder /app/dist ./` |
| 4 | Leverage caching wisely | Faster builds, no stale dependencies | Order `RUN apt-get update && install ...` before copying source |
| 5 | Remove build‑time caches & temp files | Cuts image size | `rm -rf /var/lib/apt/lists/*` in same layer |
| 6 | Pin dependency versions | Reproducible builds | Use lockfiles (`requirements.txt`, `package-lock.json`) |
| 7 | Run as non‑root user | Security best practice | `USER appuser` after creating the user |
| 8 | Minimize number of layers | Improves download & startup speed | Combine commands with `&&` |
| 9 | Document each stage clearly | Easier maintenance | Comment each `FROM … AS …` block |

**4️⃣ Avoid common traps**  
- *Copying entire repo* → pulls unnecessary files.  
- *Leaving caches in the final image* → bloated size.  
- *Forgetting to delete temp build tools* → security risk.

**5️⃣ Sanity‑check & verbalise**  
Walk through a sample Dockerfile, explain each `FROM … AS` block, and highlight how artifacts flow from builder to runtime. Conclude by summarizing the impact: smaller images, faster builds, safer deployments. This step‑by‑step walkthrough helps readers internalize the pattern for any project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
