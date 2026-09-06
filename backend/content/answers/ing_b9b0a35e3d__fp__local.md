---
qid: ing_b9b0a35e3d__fp__local
question: 'Explain: Multi-Stage builds — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 365
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:38:40-05:00'
sources: []
---

**Why the trick works**

A Docker image is just a layered filesystem. Each `RUN`, `COPY` or `ADD` adds a layer that stays forever. In a naïve build you often copy all your source, compile it, then delete compiler tools and intermediate files. Those deletions *do not* shrink the layers—they remain inside them, bloating the final image.

A **multi‑stage build** solves this by letting you *discard* entire intermediate stages. You start with a “builder” stage that contains compilers, dependencies, source code, and any temporary artifacts. After building your binary or package, you copy only the artefacts you need into a clean second stage (often a minimal base like `scratch` or `alpine`). The first stage never becomes part of the final image; its layers are garbage‑collected by Docker.

**Why this matters**

1. **Size = bandwidth + cost** – Smaller images download faster and consume less storage on registries and hosts.
2. **Security surface** – Removing build tools eliminates potential attack vectors (e.g., unused compiler binaries).
3. **Reproducibility** – Each stage can be pinned to a specific base image, ensuring deterministic builds.

**A non‑obvious insight**

Many think multi‑stage only matters for compiled languages; however, the same pattern applies to *any* build that produces transient artifacts: minify JS/CSS, compile Sass, or even run tests. By treating each step as its own stage, you guarantee that *only* the final deliverables survive, turning Dockerfiles into precise build pipelines rather than monolithic images.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
