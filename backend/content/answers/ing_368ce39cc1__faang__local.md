---
qid: ing_368ce39cc1__faang__local
question: 'Explain: Use the least privileged user — 9 Docker Best Practices You Must
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 555
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:50:42-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how using a *least‑privileged* user ties into nine essential Docker best practices. I’ll assume the audience is familiar with containers but not necessarily with security nuances, and that we need to cover both why it matters and concrete steps.

**Approach**  
1. List the nine best practices briefly.  
2. Highlight the practice of running as a non‑root user.  
3. Show how that principle interacts with each of the other eight items.  

**Depth**  
- **Least‑privileged user**: Create a dedicated UID/GID in the Dockerfile (`RUN adduser --uid 1001 appuser`) and switch to it (`USER appuser`). This prevents container processes from abusing host privileges, even if the image is compromised.  
- **Image hygiene**: Smaller images reduce surface area; using `FROM alpine` or multi‑stage builds keeps only necessary binaries, limiting what a rogue user can do.  
- **Multi‑stage builds**: Build artifacts are discarded, so the runtime container contains no build tools that could be exploited by an elevated user.  
- **Explicit entrypoints**: Avoid shell wrappers (`/bin/sh -c`) that give users arbitrary command execution; use `ENTRYPOINT ["./app"]`.  
- **Immutable containers**: Mark layers as read‑only (`VOLUME` with `ro`) so a compromised user can’t tamper with the filesystem.  
- **Minimal base OS**: Fewer packages mean fewer privilege‑escalation vectors for a non‑root process.  
- **User namespaces**: Map container UID 1001 to a host UID far above 0, isolating even if the container escapes.  
- **Runtime security tools**: Integrate SELinux/AppArmor profiles that enforce non‑root constraints.  
- **Logging & monitoring**: Capture user activity; a rogue user will leave traces.

**Edge cases**  
- Some legacy binaries require root (e.g., network port binding). Use `setcap` or privileged containers sparingly.  
- If the app must write to `/var/lib`, pre‑create directories with correct ownership outside the container.

**Optimize & communicate**  
Conclude by stressing that the least‑privileged user is the linchpin—each practice either supports it (reducing attack surface) or reinforces it (ensuring isolation). Present the nine practices as a checklist, then drill into how `USER` ties them together. This structured narrative shows clear reasoning, technical depth, and practical applicability—all key for a FAANG interview score.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
