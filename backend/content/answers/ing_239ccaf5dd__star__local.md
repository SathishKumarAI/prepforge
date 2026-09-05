---
qid: ing_239ccaf5dd__star__local
question: 'Explain: Open Roles — Jobs at Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 340
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:58-05:00'
sources: []
---

**Situation**  
When I was finishing my master’s thesis on transformer fine‑tuning, a recruiter from Anthropic reached out about their “Machine Learning Engineer – Safety Research” opening. The team was building a new prompt‑optimization framework to reduce hallucinations in large language models.

**Task**  
I had to demonstrate not only my coding chops but also how I’d approach safety‑centric ML: designing metrics, conducting controlled experiments, and iterating on model checkpoints while keeping compute costs low.

**Action**  
I started by drafting a mini‑prototype that used an early‑access Anthropic API. I built a custom loss function that penalized factual errors, then ran a grid search over temperature and top‑p values. To keep GPU usage under 12 kWh per experiment, I leveraged mixed‑precision training with PyTorch’s `torch.cuda.amp` and batch‑sparse attention. I logged every run to Weights & Biases, plotted the hallucination rate versus perplexity, and presented a 10‑slide deck to the interview panel, highlighting trade‑offs between safety and generation quality.

**Result**  
The team hired me on day two of interviews. Within my first month, I reduced hallucinations by 27 % across the benchmark dataset while cutting inference latency by 18 %. This experience taught me that real‑world safety work is as much about careful engineering and clear communication as it is about raw model performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
