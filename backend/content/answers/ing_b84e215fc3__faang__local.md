---
qid: ing_b84e215fc3__faang__local
question: What is in-context learning, and how do you decide between it and fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 447
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:52:00-05:00'
sources: []
---

**Clarify**  
In‑context learning (ICL) lets a language model infer new behavior from a few examples embedded directly in the prompt, without updating weights. Fine‑tuning (FT) retrains the model on a task‑specific dataset, modifying its parameters. I’ll assume we’re comparing performance vs. cost for a production NLP service that needs rapid deployment and low latency.

**Approach**  
1. **Define constraints**: latency budget, compute budget, data volume, need for continual updates.  
2. **Benchmark**: run both methods on a held‑out validation set to measure accuracy, inference time, and cost per request.  
3. **Decision matrix**: weigh metrics against business KPIs.

**Depth**  
- *ICL*: Works well when the task is close to what the base model already knows (e.g., summarization). Overhead is just prompt construction; no extra GPU usage at inference time. Complexity is \(O(1)\) per request, but prompt size limits context window (~8k tokens).  
- *FT*: Requires a labeled corpus and GPU training; after training, inference cost drops to the base model’s latency. It scales better for long‑tail or highly specialized domains where ICL struggles. Training time is \(O(N \cdot d^2)\) with \(N\) examples, \(d\) dimensionality.

**Edge Cases**  
- **Limited data**: ICL shines; FT overfits.  
- **Real‑time updates**: ICL allows instantaneous changes via prompt edits.  
- **Regulatory constraints**: FT keeps data off the model’s weights; ICL exposes examples in prompts, which may be problematic.

**Optimize & Communicate**  
If latency is critical and the task is generic, start with ICL to avoid training costs. If accuracy plateaus or domain shifts occur, move to FT and monitor A/B tests. Explain that ICL trades off a bit of performance for agility, while FT offers stability at higher upfront cost—aligning choices with product velocity and budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
