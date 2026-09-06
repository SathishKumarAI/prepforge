---
qid: ing_60409f36cf__fp__local
question: 'Explain: Faithfulness Evaluation — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 480
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:30:05-05:00'
sources: []
---

**Faithfulness Evaluation in LLMs – a principled view**

At its core, an LLM is a stochastic mapping  
\(f: \text{prompt} \to \text{text}\) that maximizes likelihood over a training corpus.  
When we ask it to *explain* or *summarize*, the model’s output must preserve the *semantic content* of the source—otherwise the answer is *unfaithful*.  

The fundamental problem is **information preservation**: the distribution \(P_{\text{out}}\) induced by \(f\) should be a *projection* of the true joint distribution \(P_{\text{in,out}}\).  
Formally, we require that for any source sentence \(x\) and its faithful paraphrase \(y\),

\[
D_{\mathrm{KL}}(P(y|x)\,\|\,P_{\hat y|\hat x}) \approx 0,
\]

where \(\hat y\) is the model’s output.  
This inequality follows from the data‑processing inequality: any deterministic transformation can only *reduce* mutual information \(I(X;Y)\). Thus, a faithful model must preserve as much of \(I(X;Y)\) as possible.

**Why it matters**  
- **Safety**: Unfaithful hallucinations can mislead users.  
- **Explainability**: A faithful explanation reflects the underlying reasoning.  

**Non‑obvious insight**  
Most evaluations treat faithfulness as a binary “does the answer contain the fact?” test, ignoring *contextual relevance*. The deeper principle is that fidelity is a *conditional* property: a statement can be factually correct yet still be unfaithful if it omits crucial context. Hence, metrics must penalize both *spurious inclusion* and *critical omission*, which requires joint modeling of content overlap and dependency structure—something standard ROUGE or BLEU miss entirely.

In short, faithfulness is the empirical enforcement of the data‑processing inequality for language models: we evaluate whether the model’s output retains the informational essence of its input.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
