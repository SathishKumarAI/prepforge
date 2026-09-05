---
qid: ing_4f34e99ef2__star__local
question: 'Explain: II. Dependencies — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 344
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:06:45-05:00'
sources: []
---

**Situation**  
At my last role I was building a recommendation engine that had to scale from a few thousand users to over 100 k daily interactions. The model lived in a Docker container, but each new training run pulled heavy libraries like TensorFlow and Scikit‑learn directly from the internet, causing unpredictable build times and version drift.

**Task**  
I needed to create a reproducible, fast deployment pipeline that treated all runtime dependencies as first‑class, isolated services, following the 12‑Factor App principle of treating dependencies as external resources.

**Action**  
I introduced a separate “runtime image” layer: a lightweight Alpine base with only `python3` and `pip`. In the build stage I bundled the exact `requirements.txt` into a *dependency cache* volume. During CI, the container pulled the cached wheel files from an internal Artifactory repository, ensuring identical versions across environments. For optional GPU‑enabled builds I spun up a separate “GPU runner” service that mounted the same dependency layer but added CUDA libraries via a sidecar container. This separation also let us swap out the ML framework without touching the rest of the stack.

**Result**  
Build times dropped from 15 minutes to under 3, and the deployment latency decreased by 70 %. We eliminated “works on my machine” bugs; every environment now used the same dependency set. The exercise reinforced that treating dependencies as external, version‑controlled services is key to scaling ML workloads reliably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
