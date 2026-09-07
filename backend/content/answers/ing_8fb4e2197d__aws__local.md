---
qid: ing_8fb4e2197d__aws__local
question: 'Explain: troubleshooting — GitHub - karpathy/nanoGPT: The simplest, fastest
  repository for training/finetuning medium-sized GPTs. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 412
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:51:00-05:00'
sources: []
---

**Situation / Task**  
While sprint‑testing our internal fine‑tuning pipeline on the **karpathy/nanoGPT** repo, a sudden spike in GPU utilization (≈ 95 %) caused a 40 % slowdown and intermittent OOM errors during training of a 125M‑parameter model.  

**Action**  
1. *Dive Deep* – profiled with `torch.profiler` and CloudWatch metrics; discovered that the data loader was pulling **8× larger batches** than configured due to an uninitialized environment variable.  
2. *Bias for Action* – patched the loader, added a guard clause (`batch_size = min(batch_size, 32)`) and automated the check in CI.  
3. *Ownership* – migrated the training script to **Amazon SageMaker Neo** for on‑device inference, replacing manual Docker builds.  
4. *Invent & Simplify* – replaced the custom checkpointing with **S3 Lifecycle Policies**, reducing storage costs by 25 % and speeding up resume times (from 12 min to < 2 min).  

**Result**  
- GPU utilization dropped to ~70 %, cutting training time from **3.5 hrs → 1.8 hrs** for the same dataset.  
- Cost per epoch fell by **$0.45**, enabling us to run 4× more experiments in the same budget.  
- The automated guard prevented future regressions, giving a 99.9 % success rate on subsequent runs.

---

### Bar‑raiser notes
*Ownership*: Immediate fix and long‑term automation.  
*Dive Deep*: Root cause via profiling and metrics.  
*Quantified Impact*: Time, cost, and reliability gains.  
*Learning*: Implemented guard clauses to catch env‑related bugs early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
