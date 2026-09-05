---
qid: ing_fce7d443e5__star__local
question: 'Explain: Week 2: Code-Based Evals — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 326
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:54:24-05:00'
sources: []
---

**Situation:**  
At my last role, the ML ops team was tasked with validating a new NLP model that promised 20% higher F1 on sentiment tasks. Our QA process relied on hand‑crafted unit tests, but we needed a scalable way to assess thousands of inference samples quickly.

**Task:**  
I had to design and implement a code‑based evaluation pipeline that could automatically run the model against a curated benchmark set, compute metrics, flag regressions, and integrate with CI/CD.

**Action:**  
Using Python 3.10, I built a lightweight framework around `pytest` and `pandas`. Each test case was a JSON line containing input text, expected label, and an allowed tolerance. The runner parsed the file, batched inputs to the model via FastAPI, captured predictions, and computed precision, recall, F1, and latency with `scikit‑learn` and `timeit`. I added a coverage step that compared current results against a baseline stored in S3; any drop >2% triggered an alert. The whole suite runs in 4 minutes on our CI runner.

**Result:**  
The pipeline cut evaluation time from ~2 hours to under 5 minutes per release, enabling daily model checks. We caught two critical regressions before production rollouts, saving roughly $30k in potential downtime costs. I learned how to marry rigorous statistical testing with DevOps practices for robust AI delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
