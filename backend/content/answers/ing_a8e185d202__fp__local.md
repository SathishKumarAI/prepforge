---
qid: ing_a8e185d202__fp__local
question: On a GPU you batch to amortise weight reads. What is the batching calculus
  on an SRAM-only machine, and how should that change how we price?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 547
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:04:36-05:00'
sources: []
---

**Batching calculus on a pure‑SRAM GPU**

When the weight matrix \(W\in \mathbb{R}^{M\times N}\) is resident in *on‑chip* SRAM, each neuron’s dot product can be computed with zero off‑chip traffic.  
Let a batch of size \(B\) be processed: we read each row of \(W\) once and reuse it for all \(B\) inputs. The cost per output is

\[
C_{\text{SRAM}}(B)=
\underbrace{\frac{|W|}{B}\cdot c_{\text{read}}}_{\text{weight reuse}}
+
\underbrace{|x|\cdot c_{\text{comp}}}_{\text{input multiply‑accumulate}},
\]

where \(c_{\text{read}}\) is the energy to fetch a word from SRAM and \(c_{\text{comp}}\) the cost of one MAC.  
Unlike DRAM, there is no latency penalty for large \(B\); the only diminishing return is that the *effective* memory bandwidth grows linearly with \(B\). Hence the optimal batch size is dictated by the *compute‑to‑memory ratio*:

\[
B^\ast = \frac{c_{\text{read}}}{c_{\text{comp}}\cdot N}.
\]

If \(c_{\text{read}}\gg c_{\text{comp}}\), a very small batch (even \(B=1\)) suffices; if the weight matrix is tiny compared to compute, we can batch up to the SRAM capacity.

**Implications for pricing**

In a market where GPU price scales with *peak memory bandwidth* (the usual DRAM‑centric model), an SRAM‑only device underestimates value. The correct cost function should be

\[
P \propto \frac{C_{\text{SRAM}}(B^\ast)}{T},
\]

where \(T\) is the target throughput. Since \(C_{\text{SRAM}}\) grows sublinearly with \(B\), a modest increase in SRAM (e.g., 10 %) can yield >30 % performance gains, justifying a premium.

**Non‑obvious insight**

Because weight reuse eliminates off‑chip traffic, *memory hierarchy depth* becomes irrelevant; only the *energy per read* matters. Thus, price should be tied to **read energy density**, not bandwidth—an angle often overlooked in GPU market analyses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
