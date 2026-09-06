---
qid: ing_830810535e__fp__local
question: 'Explain: Streaming summarisation within token limits'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 401
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:43:49-05:00'
sources: []
---

**Streaming summarisation under token limits**

When an AI model can output only *N* tokens, any input longer than that must be compressed on‑the‑fly. The fundamental problem is **information bottlenecking**: we have a high‑dimensional source (the text stream) and a low‑dimensional target (the summary). From information theory, the best compression preserves the mutual information \(I(X;Y)\) between input \(X\) and output \(Y\).  

In practice, this translates to **dynamic relevance scoring**. As each token arrives, we maintain a sliding window of “salient” sub‑sentences whose cumulative importance score exceeds a threshold that guarantees the final length will not exceed *N*. The threshold is derived by solving

\[
\sum_{i=1}^{k} \ell_i \le N,\quad 
\max_{j}\; s_j = \arg\max_{s_j}\; I(s_j;X)
\]

where \(\ell_i\) is the token count of candidate snippet \(i\), and \(s_j\) its salience. This optimization is a greedy knapsack problem with an online constraint, solvable in linear time by maintaining a min‑heap of scores.

**Non‑obvious insight:**  
The *last* few tokens often carry disproportionate weight because they are the model’s last chance to influence output length. Therefore, streaming summarisers should **backtrack**: after reaching the token limit, scan backward for any high‑salience phrase that can replace a lower‑scoring one without breaking coherence. This “look‑ahead/back‑tracking” trick reduces truncation bias—something static summarisation pipelines miss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
