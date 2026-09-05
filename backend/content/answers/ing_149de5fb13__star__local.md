---
qid: ing_149de5fb13__star__local
question: 'Q: When would you use Self-Consistency vs Best-of-N?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 347
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:09:26-05:00'
sources: []
---

**Situation:**  
During a recent project to auto‑generate product descriptions for an e‑commerce platform, our LLM was producing inconsistent outputs—sometimes the tone was too formal, other times it slipped into slang. The client needed reliable, brand‑consistent language across 10,000 items with a turnaround of two weeks.

**Task:**  
I had to decide how to sample from the model so that each description met strict style guidelines while keeping inference time within budget.

**Action:**  
I compared Self‑Consistency and Best‑of‑N sampling. For Best‑of‑N I generated 10 completions per prompt, then picked the highest‑scoring one by log‑probability. This was fast but still yielded occasional off‑brand phrases because a single high‑score sample could diverge from the overall style trend.  
I switched to Self‑Consistency: I ran 20 forward passes for each prompt, collected all token probabilities, and aggregated them into a consensus distribution before decoding. This effectively averaged out erratic tokens, reinforcing the model’s most probable style across runs. I implemented this with PyTorch’s `torch.distributions.Categorical` to compute weighted averages efficiently.

**Result:**  
The Self‑Consistency approach cut the rate of off‑brand descriptions from 12% (Best‑of‑N) to <2%, while keeping latency only 15% higher—well within our SLA. I learned that when consistency matters more than raw likelihood, aggregating multiple stochastic passes can dramatically improve quality without a prohibitive cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
