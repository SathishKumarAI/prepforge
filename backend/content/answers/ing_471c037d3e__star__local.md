---
qid: ing_471c037d3e__star__local
question: 'Explain: Use environment variables — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 308
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:50:52-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with containerizing a new recommendation engine that needed to read API keys and database URLs from different environments (dev, staging, prod). The team had been hard‑coding values in the Dockerfile, which caused accidental leaks when pushing images to the public registry.

**Task:**  
I had to redesign the deployment pipeline so that sensitive configuration was never baked into the image, while still keeping builds reproducible and automated through CI/CD.

**Action:**  
I introduced a `.env` file for local testing and used Docker Compose to load it. For production I switched to Swarm secrets and Helm values in Kubernetes, injecting them via `--env-file` or `-e`. I also added a runtime script that validated required variables before the app started, logging a clear error if any were missing. The Dockerfile was trimmed to only copy the application code, leaving no trace of credentials. Finally, I updated our CI scripts to pass environment variables through encrypted GitHub Actions secrets.

**Result:**  
The new workflow cut deployment errors from 7% to 0%, and we avoided accidental credential exposure in over 30 public images. The team also saved ~15 minutes per release cycle by eliminating manual secret management steps, and I documented the process so that new hires could onboard within a day.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
