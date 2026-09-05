---
qid: ing_767b061cde__star__local
question: Reasoning models expose a thinking budget or reasoning effort setting. How
  do you tune it, and what goes wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 300
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:30:46-05:00'
sources: []
---

**Situation:**  
At my last company we launched an internal recommendation engine for the sales team that used a chain‑of‑thought reasoning model. Early on, the latency was creeping up to 4 seconds per query, which made the tool unusable during live calls.

**Task:**  
I had to reduce response time without sacrificing too much accuracy—essentially tuning the “reasoning budget” (the number of inference steps or beam width) while keeping the model’s precision above 85%.

**Action:**  
First I profiled the pipeline with HuggingFace’s `transformers` and found that most overhead came from the multi‑step decoder. I experimented by lowering the step limit from 20 to 12, then switched to a smaller tokenizer vocabulary (reducing tokenization time). To counteract potential accuracy loss, I added a lightweight post‑filter that pruned unlikely reasoning paths based on confidence scores. Finally, I set up an A/B test harness in Airflow to automatically roll out new budgets and capture metrics.

**Result:**  
The average latency dropped from 4 s to 1.2 s, while accuracy stayed at 87%. The tool was adopted by 70% of the sales org within a week. I learned that balancing reasoning depth against inference cost requires iterative profiling and real‑world A/B testing rather than one‑off parameter sweeps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
