---
qid: ing_a413a30a71__faang__local
question: 'Explain: Order matters for caching — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 566
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:06:48-05:00'
sources: []
---

**Clarify**  
The question asks why the *order* of Dockerfile instructions matters when you’re trying to keep image size small and cache‑friendly. I’ll assume we’re talking about a multi‑stage build on Linux, using `COPY`, `RUN`, and `ADD` in the usual way.

**Approach**  
Explain the Docker build pipeline → layers → cache key derivation → effect of ordering on cache hits and final image size.

**Depth**  

| Step | What happens | Why order matters |
|------|--------------|-------------------|
| 1️⃣ `FROM` | Base image chosen. | The whole rest of the build depends on this layer; a change forces all subsequent layers to rebuild. |
| 2️⃣ `COPY / ADD` (source files) | Adds files as a new layer. | If these are copied *before* installing dependencies, any file change invalidates later steps. |
| 3️⃣ `RUN apt‑get install …` | Installs packages. | Packages form their own layer; if you copy source after this, the package layer is reused, saving time. |
| 4️⃣ `COPY / ADD` (source) again | Adds application code. | Placed after dependency installs so that only source changes invalidate this step, not the whole dependency install. |

**Key points**

- Docker caches layers based on a hash of the instruction *and* all preceding instructions.
- A heavy `RUN` step before a frequent file copy will force re‑execution whenever any file changes; moving it after the copy keeps that expensive layer cached.
- Multi‑stage builds let you keep only the runtime artifacts in the final image, so order inside each stage still matters for cache reuse.

**Edge cases**

- *Build args*: changing `ARG` values invalidates all subsequent layers regardless of order.
- *Cache busting with `.dockerignore`*: missing files can cause unnecessary rebuilds if not ignored.
- *Different base images*: switching from Alpine to Ubuntu forces a full rebuild of everything after the `FROM`.

**Optimize & communicate**

1. **Always copy source last** in each stage that needs it.  
2. **Group unrelated installs together**; separate build‑time vs runtime packages into different stages.  
3. **Use `.dockerignore` aggressively** to avoid unnecessary context changes.

When explaining, I’d narrate: “Docker’s cache is a simple hash chain—change anything upstream and the downstream layers must rebuild. By moving the expensive `RUN` after the light‐weight `COPY`, we keep that layer cached across source changes, drastically cutting build time and image size.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
