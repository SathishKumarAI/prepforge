---
qid: ing_bed4b3bfc5__star__local
question: 'Explain: Run Locally — GitHub - Arize-ai/phoenix: AI Observability & Evaluation
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 410
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:52:37-05:00'
sources: []
---

**Situation**  
In my last role as a machine‑learning engineer at a fintech startup, we had an in‑house fraud detection model that was drifting after a sudden spike in new transaction types. Our production monitoring was limited to raw metrics, so I needed a quick way to introspect the model locally and validate its predictions against fresh data.

**Task**  
I set out to spin up Arize.ai’s Phoenix framework on my laptop, integrate it with our existing PyTorch pipeline, and generate an observability dashboard that would let us compare feature distributions, loss curves, and prediction confidence in real time—all without pushing code to the cloud.

**Action**  
First, I cloned the `phoenix` repo from GitHub and installed its dependencies via `pip install -e .[dev]`. I then created a lightweight Docker container that mounted our local dataset and exposed a FastAPI endpoint. Using Phoenix’s SDK, I wired the model’s inference hook to push prediction logs into Arize’s `EventStore`. The framework automatically ingested the data, computed drift metrics (KS‑score, Wasserstein distance), and rendered a static HTML report with interactive plots. I tweaked the feature extraction logic to match our custom preprocessing pipeline, then reran the last 24 hours of transactions.

**Result**  
Within two hours, Phoenix highlighted a 12% increase in the mean absolute error for the “merchant category” feature, pinpointing a data shift that had gone unnoticed by our previous alerts. By correcting the preprocessing step and retraining the model with updated samples, we reduced false positives by 18 % on live traffic. The exercise also taught me how to bootstrap an observability stack locally, saving us $1.2k in cloud costs per month and giving the data‑science team a repeatable debugging workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
