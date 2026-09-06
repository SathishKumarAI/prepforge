---
qid: ing_5c67bf1cdb__fp__local
question: 'Explain: Estimate what one message costs us to serve, and tell me which
  lever moves it most.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 612
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:20:31-05:00'
sources: []
---

**Why a single AI reply has a “price”**

When we talk about the cost of serving a prompt, we are really asking for the *resource‑footprint* of turning a token stream into a new one.  
The fundamental equation is

\[
C_{\text{msg}} = \underbrace{\frac{E_{\text{inf}}\;p_E}{N_{\text{bat}}}}_{\text{energy per batch}} + 
\underbrace{\frac{T_{\text{cloud}}}{N_{\text{bat}}}}_{\text{fixed ops overhead}} +
\underbrace{B_{\text{net}}\;\times\;|t_{\text{msg}}|}_{\text{bandwidth}}
+ \underbrace{\frac{S_{\text{disk}}}{N_{\text{bat}}}}_{\text{storage amortisation}},
\]

where  
* \(E_{\text{inf}}\) is the joules consumed by a forward pass of the model,  
* \(p_E\) is the cloud’s energy‑price per joule (≈ $0.10/kWh in most regions),  
* \(N_{\text{bat}}\) is the batch size used at inference time,  
* \(T_{\text{cloud}}\) captures server‑idle and management costs,  
* \(B_{\text{net}}\) is the per‑byte network price (≈ $0.05/GB in many data centers), and  
* \(|t_{\text{msg}}|\) is the message length.

**Which lever moves it most?**

The *batch size* dominates. Increasing \(N_{\text{bat}}\) linearly spreads fixed costs over more messages, while energy scales sub‑linearly because GPUs are highly parallel: a single GPU can process several tens of inferences simultaneously with only ~10 % extra power.  

**Non‑obvious insight**

A single message’s cost is **not** proportional to its length or the model size alone; it is largely dictated by how many other messages share the same hardware run. Consequently, optimizing for *throughput* (higher batch sizes) yields far larger savings than tweaking per‑token latency or model sparsity—unless latency constraints force us to keep batches tiny. This explains why large cloud providers price “per request” at a rate that is orders of magnitude lower than what a naïve token‑counting formula would suggest.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
