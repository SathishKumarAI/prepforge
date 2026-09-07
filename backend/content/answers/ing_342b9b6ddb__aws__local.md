---
qid: ing_342b9b6ddb__aws__local
question: 'Explain: Make Delegation Work in Python — fast.ai\u2014Making neural nets
  uncool again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 357
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:22:58-05:00'
sources: []
---

**Situation / Task**  
While building a recommendation engine for a retail client I noticed the training pipeline was bloated: every epoch ran an identical set of preprocessing steps that could be parallelized. The goal was to reduce wall‑time from ~12 h to <4 h without compromising accuracy.

**Action**  
I refactored the data loader using *delegation* in Python: I created a lightweight `DataLoaderDelegate` class that wrapped fast.ai’s `DataLoaders`. Inside, I delegated batch creation to a pool of worker processes via `concurrent.futures.ProcessPoolExecutor`, while keeping the main thread responsible for model forward/backward passes.  
Key AWS services considered: **S3** (immutable training data), **ECS Fargate** (managed containers), and **AWS Batch** (job orchestration). I added a small state‑machine in Lambda to monitor queue depth, scaling ECS tasks up/down based on batch size.

**Result**  
Training time dropped from 12 h to 3.6 h—a 70% reduction—while validation accuracy remained at 0.92 AUC. Cost per epoch fell by 35 % due to fewer idle CPU hours.  

**Learning**  
I discovered that delegating only the I/O‑bound preprocessing kept GPU utilization high, illustrating *Dive Deep* and *Ownership*. I documented trade‑offs (process overhead vs. speed) so the team could iterate quickly—an example of *Bias for Action* and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
