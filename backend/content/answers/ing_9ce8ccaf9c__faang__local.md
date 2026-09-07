---
qid: ing_9ce8ccaf9c__faang__local
question: 'Explain: Estimate the annual serving cost of adding an LLM summary feature
  for 100 million weekly active users, and how you''d cut it by 10x.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 546
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:48:51-05:00'
sources: []
---

**Clarify**  
We need to estimate yearly server cost for generating a Large Language Model (LLM) summary per user each week for 100 M weekly active users, and then propose a 10× reduction. Key assumptions:  
* One summary request per user per week → 100 M requests/week ≈ 5.2 B requests/year.  
* Average prompt size ~200 tokens, average completion ~150 tokens (≈350 tokens total).  
* Cost model: $0.0004 per 1K tokens (typical GPT‑3.5‑turbo rate).  
* Compute and storage overhead negligible compared to API cost.

**Approach**  
1. Compute token cost → annual token volume × unit price.  
2. Add a conservative margin for bandwidth/latency.  
3. Identify levers: reduce tokens, batch requests, use cheaper models or inference infrastructure, cache, pre‑compute summaries offline, and architectural optimizations.

**Depth**  
Tokens per year = 5.2 B × 350 ≈ **1.82 T tokens**.  
Cost = 1.82 T / 1K × $0.0004 ≈ **$728k/year** (API‑only).  
Including network/compute (~20%) → ~\$880k.

To cut 10×:  
* **Token reduction** – compress prompts, use distilled models → halve tokens → 50% cost drop.  
* **Model choice** – switch to a cheaper model (e.g., GPT‑3.5‑turbo‑16k) or deploy an open‑source LLM on‑prem → another ~50%.  
* **Batching & caching** – group requests, cache common summaries, and serve cached content 70% of the time → additional ~30–40%.  
Combined, these yield ≈ 10× savings.

**Edge cases**  
* Sudden spikes in usage (e.g., viral event).  
* Model drift causing longer completions.  
* Legal/regulatory limits on data sent to external APIs.  
Test with load‑testing, token‑usage monitoring, and A/B for caching strategies.

**Optimize & communicate**  
Present the cost model in a slide: baseline → token‑based estimate → savings levers with expected % reduction. Emphasize trade‑offs: cheaper models may reduce quality; caching risks stale content. Conclude that layered optimization (token pruning, cheaper inference, intelligent caching) can reliably achieve a 10× cut while maintaining user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
