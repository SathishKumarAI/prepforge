---
qid: ing_199db5aa8d__fp__local
question: 'Explain: Tier 2: Run on traces that passed Tier 1 (cheap LLM, ~$0.50/1K)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 408
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:00:41-05:00'
sources: []
---

**Why a two‑tier design is optimal**

The core problem is *cost‑efficiency*: we want to answer user queries with the highest possible quality while keeping the monetary cost per token low.  
A cheap, small LLM (Tier 1) can evaluate millions of candidate traces in milliseconds for roughly \$0.50 per 1 K tokens. Its output is noisy but fast.  

We then apply a *filtering* step: only those traces that pass Tier‑1 are handed to a larger, more accurate model (Tier 2). This is an instance of **sequential decision making** under budget constraints. Let \(C_1\) and \(C_2\) be the per‑token costs, with \(C_1 \ll C_2\), and let \(p\) be the probability that a Tier‑1 trace will survive the filter. The expected cost for one final answer is  

\[
E[C] = C_1 + p\,C_2 .
\]

Because \(p < 1\) (we prune many poor traces), the overall cost is dramatically lower than running only Tier 2, while the quality remains close to that of a single Tier‑2 run. The trade‑off can be tuned by adjusting the filter threshold.

**Non‑obvious insight:**  
The *trace itself*—the intermediate tokens produced during Tier 1—contains latent information about the search space’s geometry. By re‑using these partial traces as prefixes for Tier 2, we bias the larger model toward promising regions of output space without extra cost. This “warm‑start” effect reduces variance and often improves final accuracy beyond what a naïve two‑stage pipeline would achieve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
