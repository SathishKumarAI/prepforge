---
qid: ing_7255e7187d__aws__local
question: 'Explain: Back of the Envelope Calculation in System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 534
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:43:54-05:00'
sources: []
---

**Back‑of‑the‑Envelope Calculation – A Quick, Quantitative Checkpoint**

*Leadership Principles:* **Customer Obsession** (understand the user’s limits) & **Dive Deep** (quickly surface hidden costs).

---

### Situation  
During a design interview for an ML inference service, my interviewer asked me to estimate the daily cost of serving 1 M predictions per day with a latency requirement of <10 ms.

### Task  
Provide a rough budget that captures compute, storage, and network overhead—enough to show I can “see the whole system” before digging into details.

### Action  
I broke it down in minutes:

| Component | Assumption | Unit Cost (USD) | Daily Qty | Daily Cost |
|-----------|------------|-----------------|-----------|------------|
| **Inference GPU** | 1 p2.8xlarge (≈4 vCPU, 16 GB RAM, 1 GPU) | $0.90/hr → $21.60/day | 3 (to hit latency) | $64.80 |
| **EBS SSD** | 100 GiB per instance | $0.10/GB‑mo ≈ $0.03/GB‑day | 300 GiB | $9 |
| **Data transfer** | 1 MB per prediction → 1 TB/day | $0.09/GB | 1024 GB | $92 |
| **SageMaker endpoint overhead** | 30 % buffer | – | – | $20 |

> **Total ≈ $186/day**

I highlighted that this is a *back‑of‑the‑envelope* figure—real numbers would refine with model size, batch inference, and spot pricing.

### Result  
The interviewer approved my approach; we moved to a deeper design where I later proved the estimate was within 12 % of the actual cost after a pilot.  

**What the bar‑raiser looks for:**  
- **Ownership:** Taking initiative to quantify impact before diving deep.  
- **Dive Deep:** Demonstrating how a quick calculation surfaces hidden trade‑offs (e.g., network vs. compute).  
- **Quantified Impact:** Delivering a concrete, data‑driven estimate that guides architecture decisions.  
- **Learning from Failure:** I later revisited the assumptions when scaling to 10 M predictions and adjusted for spot instances, showing iterative learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
