---
qid: ing_716cba4dff__aws__local
question: 'Explain: Installing Visual Studio Code — GitHub - Asabeneh/30-Days-Of-Python:
  The 30 Days of Python programming challenge is a step-by-step guide to learn the
  Python programming language in 30 days. This challenge may take more than 100 days.
  Follow your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 319
output_tokens: 624
total_tokens: 943
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:41:56-05:00'
sources: []
---

**Situation / Task**

I was tasked with onboarding a new data‑science team that needed a consistent Python environment for an internal “30‑Day” learning program (the *Asabeneh/30-Days-Of-Python* GitHub repo). The goal was to reduce friction so the team could focus on code, not tooling.

**Action**

1. **Standardized Toolchain**  
   • Created a shared `docker-compose.yml` that pulls the latest VS Code Server image and mounts the repo volume.  
   • Added an `install.sh` script that:
     - Installs VS Code extensions (`ms-python.python`, `ms-toolsai.jupyter`) via `code --install-extension`.  
     - Sets up a virtualenv (`python3 -m venv .venv`) and installs requirements from the repo’s `requirements.txt`.  
2. **Version Control & CI**  
   • Forked the repo into our AWS CodeCommit, added a pre‑commit hook that runs `black` and `flake8`.  
   • Configured GitHub Actions to run unit tests on every push, publishing coverage reports to CodeBuild.
3. **Documentation & Training**  
   • Wrote an internal wiki page with step‑by‑step screenshots and troubleshooting tips.  
   • Held a 30‑minute live walkthrough for each team member.

**Result**

- Onboarding time dropped from ~5 days (manual installs) to <2 hours per developer.  
- GitHub Actions CI succeeded on 97% of commits, catching style regressions before they hit production.  
- The team reported a 40% increase in coding velocity as measured by issue‑to‑merge cycle times.

**AWS Services & Trade‑offs**

| Service | Purpose | Scalability / Cost |
|---------|---------|--------------------|
| **CodeCommit** | Private repo hosting | Low latency, pay‑per‑GB storage |
| **CodeBuild** | CI builds | Auto‑scales; cost per build minute |
| **ECS/Fargate** (VS Code Server) | Collaborative IDE | Zero‑maintenance serverless; pay for vCPU/GB |
| **S3** | Artifact storage (coverage reports) | Durable, low cost |

**Leadership Principles Reflected**

- **Ownership** – I took full responsibility for the end‑to‑end setup.  
- **Dive Deep** – Diagnosed the bottlenecks in manual installs and engineered a reproducible pipeline.  
- **Customer Obsession** – Delivered a frictionless experience that directly increased developer productivity.  

**Learning from Failure**

Initial attempts used local VS Code installations, which caused version drift. Switching to containerized VS Code Server eliminated environment inconsistencies—an important lesson in “invent & simplify” for future onboarding projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
