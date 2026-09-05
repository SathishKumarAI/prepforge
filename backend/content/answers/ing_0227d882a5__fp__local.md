---
qid: ing_0227d882a5__fp__local
question: What is RAGAS? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 472
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:09:43-05:00'
sources: []
---

**RAGAS (Retrieval‑Augmented Generation Assessment System)**  
At its core, RAGAS tackles the *evaluation gap* that arises when a language model (LM) is given an external knowledge source to consult—think of a search engine or a document repository. Traditional perplexity or BLEU scores ignore whether the LM actually used the retrieved content; they merely measure fluency. Conversely, manual QA inspection is costly and non‑scalable.

1. **Problem framing**:  
   - *Input*: prompt + retrieved passages (retriever output).  
   - *Desired behavior*: The generated answer must be accurate, grounded in the evidence, and concise.  
   - *Metric requirement*: Quantify how well the LM adheres to these constraints automatically.

2. **Why it works**:  
   RAGAS decomposes evaluation into three orthogonal sub‑tasks inspired by information retrieval theory:  
   - **Relevance (R)** – does the answer cite passages that actually contain the needed facts?  
   - **Coverage (C)** – are all relevant facts present in the retrieved set?  
   - **Accuracy (A)** – is every factual claim consistent with evidence and external knowledge?  
   The *Groundedness* score then aggregates these via a weighted harmonic mean, mirroring precision‑recall trade‑offs.

3. **Deeper principle**:  
   RAGAS embodies the *information bottleneck* concept—forcing the LM to compress all necessary knowledge into its output while retaining only what is provable from the evidence. This aligns with Bayesian inference: posterior beliefs (the answer) are conditioned on observed data (retrieved passages).

4. **Non‑obvious insight**:  
   The metric’s *coverage* term actually penalizes over‑retrieval: retrieving too many irrelevant documents dilutes relevance, reducing overall score. Thus RAGAS indirectly rewards efficient retrieval strategies—a subtle coupling rarely captured in standalone metrics.

> **Takeaway**: RAGAS is not merely a grading rubric; it formalises the interplay between retrieval quality and generation fidelity, turning an inherently probabilistic dialogue into a disciplined optimisation problem grounded in information theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
