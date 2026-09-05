---
qid: ing_ffc666da8f__star__local
question: 'Explain: 👮‍♀️ Security + Compliance — GitHub - langwatch/langwatch: The
  platform for LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 336
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:59:58-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech, we were integrating an open‑source LLM evaluation tool (the langwatch platform) into our compliance pipeline. The company had strict data‑protection mandates: no customer data could leave the EU and all logs had to be immutable for audit.

**Task:**  
I was tasked with hardening the GitHub repo and deployment process so that every commit, pull request, and artifact met GDPR, ISO 27001, and SOC 2 requirements without stalling our rapid iteration cycle.

**Action:**  
First, I added a `.github/workflows/security.yml` workflow that automatically scans PRs with Dependabot for vulnerable dependencies and triggers CodeQL to surface security flaws. Next, I introduced a GitHub Actions matrix that builds the Docker image in an isolated build environment, signs it with Sigstore, and pushes only signed images to our registry. For compliance, I set up a “Compliance Check” job that runs Open Policy Agent (OPA) policies against all Terraform manifests, ensuring no public IPs or privileged roles are exposed. Finally, I configured GitHub’s branch protection rules: required status checks, signed commits, and enforced code reviews from a dedicated security team.

**Result:**  
The repo now passes quarterly external audits with zero non‑conformities. Deployment time dropped by 15 % because automated scans run in parallel with CI. I learned that integrating policy as code and leveraging GitHub’s native tooling can achieve rigorous compliance while keeping developers productive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
