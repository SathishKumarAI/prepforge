---
qid: ing_4a149b0bef__fp__local
question: 'Explain: 10.8.5. Exercises ¶ — 10.8. Beam Search \u2014 Dive into Deep
  Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 545
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:42:39-05:00'
sources: []
---

**Why beam search?**  
When decoding a sequence from a probabilistic model (e.g., an RNN language model), we want the *most probable* output \(y^*\) given input \(x\):
\[
y^{*}=\arg\max_{y}\;p(y|x).
\]
A naive search would enumerate all possible sequences, but their number grows exponentially with length. Beam search replaces exhaustive enumeration by a *pruned breadth‑first search*: at each time step we keep only the top \(B\) partial hypotheses (the “beam”).  

**From first principles**  
Let \(\mathcal{Y}_t\) be all prefixes of length \(t\). The optimal prefix extension satisfies
\[
y_{1:t}^{*}=\arg\max_{y_{1:t}\in\mathcal{Y}_t}
p(y_{1:t}|x)
= y_{1:t-1}^{*}\!\cdot \!\arg\max_{a}\;p(a|y_{1:t-1},x).
\]
The recursion is exact but intractable because each prefix may branch into many successors. Beam search approximates this by
\[
\mathcal{B}_t=\operatorname{top}_{B}\bigl\{
\text{all } y_{1:t}=y_{1:t-1}\!\cdot a \mid y_{1:t-1}\in\mathcal{B}_{t-1},\,a\in\Sigma\bigr\},
\]
where \(\operatorname{top}_B\) keeps the \(B\) highest‑probability prefixes.  
Thus beam search is an *optimization* over a combinatorial space constrained by a budget; it trades optimality for tractable inference.

**Non‑obvious insight**  
Beam width \(B\) influences *search diversity*, not just accuracy. A very small \(B\) (e.g., 1, greedy decoding) can get trapped in a locally high‑probability but globally suboptimal branch. Conversely, a huge \(B\) may keep many almost identical prefixes because they share the same prefix probability; pruning by *diversity* (e.g., adding a penalty for similarity or using “diverse beam search”) can yield better final sequences. Thus, effective beam search is not just about keeping more hypotheses—it’s about maintaining *qualitative diversity* among them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
