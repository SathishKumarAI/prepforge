---
qid: ing_10744a402a__faang__local
question: You have 10 hours of demonstrations for a new task and budget for 50 more.
  How do you decide what to collect, and what return do you expect?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 462
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:21:33-05:00'
sources: []
---

**Clarify**  
You’re building an AI model for a *new* task with only 10 hrs of demo data, plus a budget that allows 50 hrs more. The goal: maximize downstream performance while staying within cost constraints. I’d first confirm the target metric (accuracy, F1, latency), the acceptable error budget, and whether the demos are labeled or unlabeled.

**Approach**  
1. **Exploratory Analysis** – run a quick bootstrap on the 10 hrs to estimate variance in performance across small subsets.  
2. **Active Learning Loop** – iteratively pick the most informative samples from the remaining pool (uncertainty sampling, query‑by‑committee).  
3. **Cost–Benefit Model** – for each batch, estimate marginal gain vs. cost using a learning curve extrapolation. Stop when the expected improvement falls below a threshold.

**Depth**  
- *Active Learning*: select points where model entropy > τ; label them (human or semi‑automated).  
- *Learning Curve*: fit a power law \(E(n) = a n^{-b} + c\); predict performance at n = 10+50.  
- Complexity: each iteration is O(m·d) for m samples, d features; overall O(batches·m·d), negligible vs labeling cost.

**Edge Cases**  
- **Label Noise**: introduce a consistency check or redundancy.  
- **Concept Drift**: monitor validation loss; if it spikes, trigger re‑sampling.  
- **Budget Overrun**: cap batches at 10 hrs each and reassess after every batch.

**Optimize & Communicate**  
Explain that the active loop focuses labeling effort where the model is uncertain, yielding a higher ROI than random sampling. Show expected performance curve: with 60 hrs total we anticipate ~15–20 % improvement over the baseline from 10 hrs alone. Highlight trade‑offs: more batches → lower variance but higher coordination cost; fewer batches → faster turnaround but risk of suboptimal coverage. Conclude that this strategy balances data quality, budget, and measurable returns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
