---
qid: ing_56b93bf43e__fp__local
question: 'Explain: Structured output and small models — GitHub - getzep/graphiti:
  Build Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 464
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:09:11-05:00'
sources: []
---

**Why “structured output” is indispensable for tiny ML models**

At its core, a learning system must map an input \(x\) to a prediction \(\hat{y}\).  
When the target is *unstructured* (a scalar or flat vector), a single linear layer can approximate it: \(\hat{y}=Wx+b\).  
But many real‑world tasks require **interdependent outputs**—nodes linked by relations, hierarchies, or constraints.  In such cases, naïvely predicting each element independently incurs *combinatorial explosion*: the model must learn not only feature–output mappings but also every mutual dependency, which quickly overwhelms a small parameter budget.

The solution is to **explicitly encode output structure** in the computation graph.  
In Graphiti, knowledge‑graph construction turns the prediction problem into a *structured inference* over a directed acyclic graph (DAG).  Each node’s value is conditioned on its parents via learned transition kernels \(p(v_i \mid v_{\text{parents}(i)})\), and the joint distribution factorises as  
\[
P(\mathbf{v}\mid x)=\prod_{i} p(v_i\mid v_{\text{parents}(i)},x).
\]
This factorisation reduces the effective dimensionality: a single small module (e.g., a 4‑layer MLP) can be reused across all nodes, sharing parameters and inductive bias.  
Moreover, inference becomes *exact* or *efficiently approximate* by dynamic programming on the DAG, eliminating the need for millions of independent heads.

**Non‑obvious insight:**  
When outputs are structured, **parameter sharing is not just a memory trick—it is an optimization principle**.  The graph’s topology dictates which features must be jointly modeled; enforcing this through shared kernels aligns learning with the *geometry* of the output space, yielding higher effective capacity per parameter than any flat architecture could achieve.

Thus, Graphiti demonstrates that tiny models can compete with large ones by harnessing structure rather than sheer size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
