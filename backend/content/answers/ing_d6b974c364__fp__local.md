---
qid: ing_d6b974c364__fp__local
question: 'Explain: Title: BrowseComp-Plus: A More Fair and Transparent Evaluation
  Benchmark of Deep-Research Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 366
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:36:43-05:00'
sources: []
---

**Title: “BrowseComp‑Plus: A More Fair and Transparent Evaluation Benchmark of Deep‑Research Agents”**

*Why we need it.*  
Deep‑research agents (DRAs) ingest vast corpora, retrieve evidence, synthesize reasoning, and generate answers. Existing benchmarks reward raw accuracy on a handful of question types, but this conflates *retrieval quality*, *reasoning depth*, and *hallucination risk*. The fundamental problem is that evaluation must capture the *information‑theoretic value* of each component: how much uncertainty a DRA reduces about a query given its evidence.

*Why “BrowseComp‑Plus” works.*  
1. **Browse** – explicitly measures browsing (retrieval) performance by scoring coverage and precision of cited sources, aligning with Shannon’s mutual information between query and retrieved documents.  
2. **Comp** – evaluates *compositional reasoning* through structured sub‑tasks (e.g., multi‑step deduction), ensuring that the benchmark tests algorithmic depth rather than memorized patterns.  
3. **Plus** – introduces a *transparency layer*: each answer must be accompanied by an evidence map and confidence interval, derived from Bayesian posterior over source reliability. This turns evaluation into a convex optimization problem where the score is the maximum likelihood of the explanation given the evidence.

*Non‑obvious insight.*  
Most benchmarks treat answers as black boxes; “BrowseComp‑Plus” forces agents to expose their inference graph. The resulting *explanatory trace* can be used to compute an *evidence entropy* metric, revealing whether high scores stem from genuine understanding or clever source manipulation—something hidden in traditional accuracy measures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
