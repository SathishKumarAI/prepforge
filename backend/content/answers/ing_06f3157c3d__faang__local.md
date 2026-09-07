---
qid: ing_06f3157c3d__faang__local
question: 'Explain: Scan images — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 621
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:00:35-05:00'
sources: []
---

**Clarify**  
We need to explain how to *scan images* in a Docker workflow and list **nine best practices** that are essential for security, reliability, and maintainability of containerized ML workloads.

---

### Approach
1. Define “image scan” (static analysis of layers, vulnerabilities, misconfigurations).  
2. List nine vetted practices.  
3. For each practice, give a concise rationale and typical tooling or command snippets.  

---

### Depth

| # | Practice | Why it matters | Typical Tool / Command |
|---|----------|----------------|------------------------|
| 1 | **Use an official base image** | Minimizes attack surface & unneeded binaries. | `FROM python:3.11-slim` |
| 2 | **Pin all dependencies** (hashes or tags) | Prevents supply‑chain drift. | `requirements.txt` + `pip install --no-deps -r requirements.txt` |
| 3 | **Run scans in CI/CD** | Early detection of CVEs before deployment. | GitHub Actions: `trivy image mymlapp:latest` |
| 4 | **Exclude unnecessary build‑time tools** | Reduces size & surface area. | Multi‑stage builds – `RUN apt-get purge -y ...` |
| 5 | **Leverage minimal runtime user** | Limits privileges if container is compromised. | `USER appuser` |
| 6 | **Enable image signing (Docker Content Trust)** | Verifies authenticity of pulled images. | `DOCKER_CONTENT_TRUST=1 docker pull mymlapp:latest` |
| 7 | **Use a registry with vulnerability scanning** | Offloads heavy analysis to registry service. | GitLab Container Registry, Quay.io |
| 8 | **Maintain an internal image policy** (max size, allowed OS versions) | Keeps environment consistent across teams. | Policy-as-code via OPA/Conftest |
| 9 | **Regularly update base images & rebuild** | Mitigates new CVEs in downstream layers. | Scheduled cron job + `docker build --pull` |

---

### Edge Cases
- *Custom OS distributions* – may lack vendor‑managed security patches; require manual patching.  
- *Third‑party ML frameworks* (e.g., TensorFlow) often ship pre‑compiled binaries—ensure they’re signed.  
- *Large data volumes* – scanning can be slow; use layer caching or parallel scans.

---

### Optimize & Communicate
- **Parallelize scans** across CI runners to cut build time.  
- **Report metrics** (Vuln count, image size) in dashboards for continuous visibility.  
- When presenting, start with the business risk of unscanned images, then walk through each practice as a mitigation layer—this shows structured thinking and deep technical grasp, aligning with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
