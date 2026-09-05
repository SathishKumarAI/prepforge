---
qid: ing_3c319d28a7__fp__local
question: 'Explain: TL;DR — Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 356
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:12:27-05:00'
sources: []
---

**TL;DR** is not a random acronym but a *compression operator* for human attention.  
At its core, it solves the **information‑bandwidth bottleneck**: we receive far more text than our working memory can hold. A TL;DR summarizes by selecting the *informationally salient* bits—those that change expectations or decisions—and discarding low‑impact noise.  

Why must it work this way?  
1. **Signal–to‑noise ratio**: Humans parse a stream of words as a noisy channel; the operator boosts signal (key facts) while suppressing redundancy.  
2. **Entropy minimization**: By collapsing 10 kB into ~50 B, we reduce entropy without losing the *mutual information* needed to reconstruct the gist.  
3. **Cognitive load theory**: Working memory can hold ~7±2 chunks; TL;DR converts a paragraph into a handful of chunks.  

A non‑obvious insight: *TL;DR is itself a form of lossy compression that respects the **semantic hierarchy***. The summarizer must recognize not only lexical frequency but also pragmatic weight (e.g., causal links, counterfactuals). Thus, an effective TL;DR is less about brevity and more about preserving the *decision‑critical* structure of the source text.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
