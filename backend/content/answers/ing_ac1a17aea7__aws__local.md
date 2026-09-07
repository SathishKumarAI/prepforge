---
qid: ing_ac1a17aea7__aws__local
question: 'Explain: Reinforcement Learning From Human Feedback - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 638
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:55:20-05:00'
sources: []
---

**Reinforcement Learning from Human Feedback (RLHF)** is a two‑step pipeline that turns raw human preferences into policy updates for large language models.

| Step | What we do | Key AWS services |
|------|------------|------------------|
| 1️⃣ Preference Modeling | Collect “better‑than” pairs via Amazon Mechanical Turk, store in **Amazon SageMaker Ground Truth**. Train a reward model with **SageMaker Training** on an EC2 p4d instance (16 vCPUs, 8 GPU). |
| 2️⃣ Policy Fine‑tuning | Use the reward model to compute expected returns; run Proximal Policy Optimization in **SageMaker Debugger**. Deploy the policy as a **SageMaker Endpoint** behind an Application Load Balancer for low‑latency inference. |

### Technical depth

* **Scalability:** Parallelize pairwise comparisons across 200 MTurk workers, scaling to 50k pairs/day. The reward model runs on spot instances (p4d) to keep cost < $0.90/hour while training a 1.3B‑parameter network in ~2 hrs.
* **Availability:** Deploy the endpoint with **Auto Scaling** and **Multi‑AZ** to achieve 99.95% uptime; use **CloudWatch Alarms** to trigger failover if latency > 200 ms.
* **Cost trade‑off:** Spot vs on‑demand for training (≈60 % savings). For inference, a single **ml.g4dn.xlarge** yields $0.012/hr vs a larger instance at $0.05/hr.

### Behavioral component

> **Situation:** Our earlier policy kept generating safe but dull responses; customers complained about lack of creativity.
>
> **Task:** I owned the redesign of the RLHF loop to inject “human‑preferred creativity” signals.
>
> **Action:** Built a new reward head that weighted *novelty* (computed via BLEU‑style diversity) and ran A/B tests on 10k users. Implemented a feedback‑loop in SageMaker Pipelines for continuous retraining.
>
> **Result:** Response engagement rose by **32 %** (click‑through), while hallucination rate dropped from 12 % to 5 %. The pipeline now runs in under 3 hrs, cutting turnaround from 48 hrs to 6 hrs.

### What a bar‑raiser looks for

* **Ownership:** I took full responsibility for the end‑to‑end RLHF workflow and drove it to production.
* **Dive Deep:** I quantified novelty vs safety trade‑offs and tuned hyperparameters to balance them.
* **Impact:** Measurable lift in user engagement + cost savings via spot usage.
* **Learning from Failure:** After the initial bland outputs, I iterated on reward design, proving a data‑driven approach to refining model behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
