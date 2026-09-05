---
qid: vq_340f96342f__star__local
question: What is PYTHONPATH?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 365
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:54:41-05:00'
sources: []
---

**Situation** – In my last role I was building a micro‑service that integrated with an internal analytics library stored in a shared repository on the corporate network. The CI pipeline would clone the repo, but when we ran unit tests locally on different machines the import failed: `ModuleNotFoundError: No module named 'analytics'`.  

**Task** – I had to get the service to load the shared library reliably across dev, staging and production without hard‑coding paths in every script.  

**Action** – I first inspected `sys.path` during a failing run; it only contained the project root and standard libs. I then set up an environment variable `PYTHONPATH` pointing to the shared repo’s absolute path (`/opt/internal/analytics`). In our Dockerfile we added `ENV PYTHONPATH=/opt/internal/analytics`. On local machines, I updated `.bashrc` with `export PYTHONPATH=$PYTHONPATH:/opt/internal/analytics` and verified that `python -c "import analytics; print(analytics.__file__)"` returned the correct file. Finally, I added a pre‑commit hook to warn if `PYTHONPATH` was missing.  

**Result** – Import errors dropped from 30% of test runs to zero. The service now boots in under 200 ms on all environments, and we documented the `PYTHONPATH` setup in our onboarding guide, reducing future onboarding time by ~15 minutes per new dev. I learned that a well‑documented environment variable can replace fragile hard‑coded paths and keep deployments consistent across heterogeneous systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
