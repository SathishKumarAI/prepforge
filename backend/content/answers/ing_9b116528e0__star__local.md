---
qid: ing_9b116528e0__star__local
question: 'Explain: 1.1.1.2. Ordinary Least Squares Complexity'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 354
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:42:24-05:00'
sources: []
---

**Situation** – While working on a credit‑risk model for a fintech startup, the data science team had to estimate a linear regression with 1 million rows and 50 features before we could deploy a real‑time scoring API.

**Task** – I needed to evaluate the computational feasibility of training an Ordinary Least Squares (OLS) model in Python, determine its time and memory complexity, and propose optimizations that would keep training under two minutes on our GPU‑free cloud instance.

**Action** – I derived the theoretical cost: O(n p²) for matrix inversion where n is samples and p is features. With 1 M×50, this meant ≈2.5 × 10⁸ floating‑point operations. I benchmarked NumPy’s `lstsq` on a single CPU core (≈12 s), then switched to a memory‑efficient QR decomposition (`scipy.linalg.lapack.dgeqrf`) which cut runtime to 4 s and reduced peak RAM from 10 GB to 3 GB. I also implemented incremental batch updates using the Sherman–Morrison formula for new data streams.

**Result** – Training time dropped from over 15 minutes to under 5 seconds, meeting the deployment deadline. The model’s R² remained at 0.82, matching the full‑batch result. This exercise reinforced that understanding OLS complexity allows targeted algorithmic tweaks and realistic resource planning in production ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
