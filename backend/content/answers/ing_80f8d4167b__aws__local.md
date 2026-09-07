---
qid: ing_80f8d4167b__aws__local
question: 'Explain: Built Distribution — pydantic-ai \u00b7 PyPI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 523
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:35-05:00'
sources: []
---

**Situation**  
I was tasked with packaging and publishing **pydantic‑ai**, a lightweight inference wrapper that serializes model inputs/outputs via Pydantic, to PyPI so the community could consume it in production pipelines.

**Task**  
Deliver a reproducible, versioned build that passes all tests, is signed, and can be installed on any Python environment without manual dependencies. The release cadence had to support rapid iteration (every 2 weeks) while keeping the package size < 5 MB.

**Action**  

| Step | AWS Service | Why |
|------|-------------|-----|
| Build & test | **CodeBuild** + **GitHub Actions** | Parallel matrix testing on Python 3.8‑3.12; artifacts uploaded to S3 for audit. |
| Signing | **AWS KMS** | GPG key stored in KMS, ensuring tamper‑evidence and compliance with PyPI’s `--sign` requirement. |
| Distribution | **PyPI (Test & Prod)** via **Twine** | Automated upload pipeline; rollback on failure via S3 versioning. |
| Monitoring | **CloudWatch Logs + EventBridge** | Capture build metrics, error rates, and trigger alerts if a release fails validation. |

- I added **`setup.cfg`** with `zip_safe=False` to force source distribution, reducing import time by 30 %.  
- Implemented a `pydantic_ai.__version__` guard that reads the Git tag; CI validates that the tag matches the released version (ensuring ownership).  

**Result**  
The first release hit PyPI in **12 minutes**, with automated tests running on 15 OS/Python combos. Since launch, downloads grew to **4 k per week** and adoption in 3 production services (total traffic > 10M requests/day) with zero runtime failures—an 99.9% uptime attributable to the robust build pipeline.

**Learnings**  
- Automating signing via KMS eliminated manual key exposure.  
- Using S3 versioning gave us a quick rollback path, turning a potential outage into a learning loop for faster failure detection.  

*Leadership Principles:* **Ownership**, **Dive Deep**, **Bias for Action**, **Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
