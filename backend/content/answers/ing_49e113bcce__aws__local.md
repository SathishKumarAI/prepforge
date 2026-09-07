---
qid: ing_49e113bcce__aws__local
question: What's the difference between batch, mini-batch, and stochastic gradient
  descent? What does batch size actually change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 415
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:12:24-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role as a Machine‑Learning Engineer on the *Personalization* team, I redesigned our training pipeline to cut model convergence time by **32 %** while keeping inference latency unchanged.

> **S**ituation: Our nightly jobs trained recommendation models using pure stochastic gradient descent (SGD). Training took 48 h on an on‑prem cluster.  
> **T**ask: Reduce training time without sacrificing accuracy or increasing cost.  
> **A**ction: I implemented a hybrid optimizer that switched between *batch*, *mini‑batch*, and *stochastic* regimes based on data size and GPU memory.  
> - **Batch GD** (full dataset) gives the most accurate gradient but is infeasible for >10M samples.  
> - **Mini‑batch GD** (size 256–1024) balances variance and parallelism; we leveraged **SageMaker Training Jobs** with *Elastic Inference* to auto‑scale GPU nodes.  
> - **Stochastic GD** (size = 1) is fastest per step but noisy; we used it only for the final fine‑tuning epoch.  
> I added a dynamic scheduler that monitors validation loss and automatically adjusts batch size, reducing overfitting risk.

> **R**esult: Training time dropped from 48 h to 32 h (≈ 32 % faster), cost per training job fell by $1,200, and AUC improved from 0.812 to 0.823.  

**Leadership Principles:** *Ownership* – I took full responsibility for the pipeline; *Dive Deep* – I profiled gradients and GPU utilization; *Deliver Results* – measurable speed‑up and accuracy gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
