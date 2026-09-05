---
qid: ing_368ce39cc1__think__local
question: 'Explain: Use the least privileged user — 9 Docker Best Practices You Must
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 395
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:34:20-05:00'
sources: []
---

**1. Clarify & Assumptions**  
   - Identify what “least‑privileged user” means in a Docker context (non‑root UID).  
   - Assume the audience knows basic Dockerfile syntax but not security nuances.  

**2. Mental Model / Framework**  
   - Treat the Docker image as a sandboxed application.  
   - Apply *Defense‑in‑Depth*: least privilege → reduce attack surface.  
   - Map Docker concepts (USER, ENTRYPOINT, CMD) to OS permissions.

**3. Step‑by‑Step Reasoning**  
   1. Start with base image choice (e.g., Alpine vs Ubuntu).  
   2. Create a dedicated non‑root user in the Dockerfile (`RUN adduser --uid 1000 app`).  
   3. Switch to that user before installing runtime packages.  
   4. Verify file ownership/permissions for application code.  
   5. Consider fallback: `USER root` only when absolutely needed (e.g., apt‑get).  

**4. Common Traps to Avoid**  
   - Leaving `RUN apt-get install … && rm -rf /var/lib/apt/lists/*` as root before user switch.  
   - Forgetting to set correct group permissions on shared volumes.  
   - Assuming the base image is already minimal; it may still run as root.

**5. Sanity‑Check & Communicate Out Loud**  
   - Run `docker run --rm -it <image> id` to confirm UID/GID.  
   - Explain that even if container crashes, the host kernel enforces the non‑root UID, preventing privilege escalation.  

This structured approach ensures you cover why, how, and what to watch for when enforcing least‑privileged users in Docker best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
