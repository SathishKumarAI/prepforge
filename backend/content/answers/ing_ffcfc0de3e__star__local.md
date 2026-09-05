---
qid: ing_ffcfc0de3e__star__local
question: 'Explain: In each iteration, this variable will hold'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 303
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:00:13-05:00'
sources: []
---

**Situation**  
In my last role, I was tasked with speeding up the training of a recommendation system that used stochastic gradient descent (SGD). The training loop ran for millions of iterations and the log file kept growing unmanageably large because we printed the loss after every epoch.

**Task**  
I needed to reduce disk I/O while still monitoring convergence, so I decided to keep a running estimate of the loss in memory instead of logging it each iteration.

**Action**  
I introduced an exponential moving average variable called `running_loss`. In each iteration, after computing the batch loss, I updated it with  
`running_loss = 0.9 * running_loss + 0.1 * batch_loss`.  
This kept a smoothed estimate that reflected the recent trend without storing every value. I also added a checkpoint that flushed the average to disk every 10,000 iterations.

**Result**  
Disk writes dropped by 85 %, training time stayed unchanged, and the loss curve still alerted us to divergence within two epochs. I learned how lightweight state variables can drastically cut resource usage while preserving essential diagnostics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
