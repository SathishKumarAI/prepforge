---
qid: ing_90bdb03e7f__aws__local
question: 'Explain: Derive the KV cache memory formula and compute it for a concrete
  model.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 771
total_tokens: 1007
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:53:33-05:00'
sources: []
---

**Context (S)**  
While leading a research‑to‑production team for an LLM service on AWS, I was asked to justify the cost of KV cache memory in our inference pipeline.

**Task (T)**  
Derive the KV cache size formula, compute it for a concrete model, and explain how we would deploy this on AWS while balancing scalability, availability, and cost.

**Action (A)**  

1. **Derivation**  
   * For each transformer layer:  
     - Key/value vectors per head = `seq_len × head_dim`.  
     - `head_dim = hidden_size / num_heads`.  
   * Total KV memory per token for one layer:  
     \[
     M_{\text{layer}} = 2 \times \frac{\text{hidden\_size}}{\text{num\_heads}} \times \text{seq\_len}
     \]
   * Across all layers:  
     \[
     M_{\text{total}} = L \times M_{\text{layer}}
     \]

2. **Concrete calculation** – GPT‑3 125M (L=12, hidden_size=768, num_heads=12, seq_len=1024):  
   * `head_dim = 64`.  
   * `M_layer = 2 × 64 × 1024 ≈ 131 072 bytes (128 KB)`.  
   * `M_total ≈ 12 × 128 KB ≈ 1.5 MB` per request token.

3. **AWS deployment**  
   * Use **Amazon SageMaker Neo** to compile the model for **Inf2 GPU instances**, which support fast KV cache access via NVLink.  
   * Store cache in **in‑memory (EFA) shared memory** to avoid EBS I/O latency.  
   * Scale horizontally with **AWS Auto Scaling** on SageMaker endpoints; each instance can handle ~200 concurrent requests, keeping 95 % utilization.  
   * Cost: $0.90/hr per Inf2.xlarge (~$0.15/GB‑hour). For a 1.5 MB cache, the incremental cost is negligible (<$0.001 per request).

**Result (R)**  
Implemented the above design; we reduced average latency from 350 ms to 210 ms while keeping GPU memory usage under 4 GB, and achieved a **25 % cost saving** on inference spend within two weeks.

---

### Leadership Principles Highlighted
- **Ownership** – I took end‑to‑end responsibility for the KV cache optimization.  
- **Dive Deep** – Derived formulas from transformer internals, quantified memory, and benchmarked AWS services.  
- **Deliver Results** – Measurable latency & cost improvements were delivered under tight deadlines.

---

### What a Bar‑Raiser Listens For
- **Quantified Impact**: Specific numbers (1.5 MB cache, 25 % cost savings).  
- **Depth of Understanding**: Clear derivation and AWS service reasoning.  
- **Learning from Failure**: We initially over‑provisioned GPU memory; the redesign cut waste without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
