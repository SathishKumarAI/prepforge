---
qid: ing_12aa7ae1d4__fp__local
question: 'Explain: Build the full GPU memory budget for a serving deployment, and
  show how it determines maximum batch size and concurrency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 561
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:45:18-05:00'
sources: []
---

**From first principles**

A GPU‑based serving system must keep *all* tensors that participate in a forward pass resident in device memory.  
Let  

\[
M_{\text{model}} = \sum_{l} C_l
\]

be the static cost of storing each layer’s parameters \(C_l\).  
During inference, every input token (or pixel) generates an *activation* that must be held until the backward‑free operation completes. If a batch contains \(B\) samples and each sample requires \(A_{\text{sample}}\) bytes of activations, then

\[
M_{\text{act}}(B)= B \times A_{\text{sample}} .
\]

The *peak* memory for one request is therefore

\[
M_{\text{peak}}(B)= M_{\text{model}} + M_{\text{act}}(B)+M_{\text{overhead}},
\]

where \(M_{\text{overhead}}\) covers CUDA kernels, workspace buffers, and the hidden “tensor‑core” scratch.  

**Determining batch size**

Given a GPU with total memory \(M_{\text{GPU}}\), the maximum feasible batch satisfies

\[
B_{\max} = \left\lfloor\frac{M_{\text{GPU}}-M_{\text{model}}-M_{\text{overhead}}}{A_{\text{sample}}}\right\rfloor .
\]

This bound is *tight* because any larger \(B\) would exceed capacity during the forward pass, causing an OOM error.

**Concurrency**

If we run \(C\) concurrent requests, each consuming \(M_{\text{peak}}(B)\), then

\[
C \le \left\lfloor\frac{M_{\text{GPU}}}{M_{\text{peak}}(B)}\right\rfloor .
\]

Thus the product \(B\times C\) is constrained by GPU memory and cannot be arbitrarily increased.  

**Non‑obvious insight**

Many deployments assume that “larger batch → higher throughput” holds indefinitely, but the *activation cost per sample* grows non‑linearly with sequence length or model depth. Consequently, a modest increase in \(B\) can cause a disproportionate jump in \(M_{\text{act}}\), collapsing concurrency to zero. Accurately profiling \(A_{\text{sample}}\) for each workload is therefore essential before scaling batch size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
