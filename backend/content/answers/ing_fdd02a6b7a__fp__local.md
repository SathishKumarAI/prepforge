---
qid: ing_fdd02a6b7a__fp__local
question: 'Explain: C2C scaling with predictable communication'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 490
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:59:37-05:00'
sources: []
---

**C<sub>2</sub>C scaling with predictable communication**

The fundamental problem is to grow a distributed learning system so that *every* worker can keep its local GPU busy while the network does not become the bottleneck.  
In a naïve “compute‑to‑computation” (C<sub>2</sub>C) scheme, workers exchange gradients after each mini‑batch. The time spent on communication is

\[
T_{\text{comm}} = \alpha + \beta\,B,
\]

where \(B\) is the message size, \(\alpha\) the startup latency and \(\beta\) the per‑byte transfer cost. If \(T_{\text{comm}}\) exceeds the local compute time \(T_{\text{comp}}\), scaling stalls.

**Why predictability matters**

Predictable communication means that for any target cluster size \(N\) we can write a closed‑form expression

\[
T_{\text{comm}}(N)=\alpha + \beta\,B(N),
\]

with \(B(N)\) determined by the algorithm’s topology (e.g., ring, tree, or all‑reduce). This reduces to an *optimization* problem: choose \(N\) and communication pattern such that

\[
T_{\text{comp}}(N) > T_{\text{comm}}(N).
\]

Because both terms are known analytically, we can solve for the maximal \(N\) before the network saturates.  

**Non‑obvious insight**

Most practitioners treat \(\alpha\) as a fixed constant, but in practice it scales with *parallelism* because higher‑rank processes often have to traverse longer network paths (e.g., cross‑rack). Modeling \(\alpha(N)\) as increasing logarithmically captures this effect and prevents the “hidden latency” that causes sudden throughput drops when adding just one more node.  

In short, C<sub>2</sub>C scaling with predictable communication turns distributed training into a tractable convex optimization: we analytically balance compute and network terms to determine the sweet spot of cluster size and topology.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
