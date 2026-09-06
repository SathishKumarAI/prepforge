---
qid: ing_ee7dcb37bc__fp__local
question: 'Explain: TL;DR — Abridge'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 347
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:26:11-05:00'
sources: []
---

### TL;DR (Too Long; Didn’t Read) – Why It Exists

When information arrives as a long, densely‑packed text, human attention behaves like a finite capacity buffer. Cognitive load theory tells us that beyond ~7±2 chunks of new data, comprehension drops sharply. The *information bottleneck* principle formalizes this: we must compress a source (the full article) into a concise representation \(Z\) such that the mutual information \(I(Z;X)\) is high while \(I(Z;Y)\) (relevance to the target task) remains low.

A TL;DR is essentially an *optimal encoder* of this form. It extracts salient cues—key facts, arguments, and conclusions—by maximizing relevance while minimizing redundancy. Machine‑learning models (transformers trained on summarization corpora) learn this trade‑off implicitly: they weight tokens that increase the probability of correctly predicting the next token in a short “summary” sequence.

**Non‑obvious insight:** A TL;DR is not merely a shorter version; it’s a *semantic projection* onto the subspace most predictive of user intent. Because users often skim to decide whether the full text merits attention, the TL;DR must surface the *decision‑critical features*, not just the first sentences. Thus, effective TL;DRs are tailored to the downstream action (e.g., deciding whether to read further), a nuance that simple truncation ignores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
