---
qid: ing_887491250e__fp__local
question: 'Explain: Sources — Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 329
total_tokens: 494
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:54:53-05:00'
sources: []
---

**Anthropic’s “Sources” – why and how it works**

At its core, a language model must learn *patterns* in text; the only way to do that is by observing examples.  
Anthropic’s source‑selection strategy is therefore an optimization problem: choose a finite set of documents that maximises downstream task performance while minimising bias and hallucination risk.

1. **Information density** – Text that contains many high‑utility tokens per byte (e.g., scientific papers, encyclopedic entries) yields richer gradients than low‑density prose.  
2. **Coverage & diversity** – The model must see every “world state” it will later be asked about; hence the corpus is stratified by domain, style, and demographic representation.  
3. **Quality control** – Each candidate source is scored on a *trust* metric (citation count, peer review status) because noisy data corrupts gradients more than it helps.

The deeper principle is **information bottleneck**: we compress the world into a tractable dataset that preserves the mutual information needed for the target tasks.  
A non‑obvious insight: *over‑sampling highly cited sources* can unintentionally amplify systemic bias, because citation counts correlate with popularity rather than truthfulness. Thus Anthropic deliberately caps per‑source weight to avoid echo chambers while still leveraging high‑value knowledge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
