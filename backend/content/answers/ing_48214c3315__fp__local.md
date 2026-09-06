---
qid: ing_48214c3315__fp__local
question: 'Explain: 10.8.4. Summary ¶ — 10.8. Beam Search \u2014 Dive into Deep Learning
  1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 404
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:38:50-05:00'
sources: []
---

**Beam Search in deep‑learning decoding**

The core problem: given a model that assigns a probability \(P(y_{1:T}\mid x)\) to every possible output sequence \(y_{1:T}\), we want the most likely sequence but exhaustive enumeration is impossible because the search space grows exponentially. Beam search tackles this by *optimizing locally* while keeping a bounded number of candidates.

At each decoding step \(t\) it keeps the top‑\(B\) partial hypotheses \(\{y_{1:t}^{(b)}\}_{b=1}^B\). For every hypothesis it expands all possible next tokens, scores them with the model’s log‑probability, and re‑orders the resulting \(B\times V\) candidates. The top‑\(B\) survive to the next step. This greedy pruning is justified by the *principle of optimality*: any globally optimal sequence must contain a prefix that is itself locally optimal among all prefixes of its length. By discarding low‑probability prefixes early we avoid combinatorial explosion while still preserving the chance of recovering the best full sequence.

A subtle but powerful insight: beam search implicitly trades off *entropy* and *length normalization*. Because probabilities multiply, longer sequences get penalized; many implementations add a length‑normalization term or use *coverage penalties* to counteract this. This connection to information theory explains why simply maximizing likelihood can yield overly short outputs—beam search’s pruning structure reveals the need for explicit entropy control.

In practice, beam width \(B\) controls the exploration–exploitation balance: small \(B\) is fast but may miss good hypotheses; large \(B\) increases computation but improves recall. The method’s elegance lies in its simplicity and deep grounding in dynamic programming, making it a staple of neural sequence generation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
