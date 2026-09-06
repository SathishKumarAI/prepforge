---
qid: ing_a7d6da062b__think__local
question: 'Q25: How do you optimize LLM inference costs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 456
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:07:58-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - *What* is meant by “optimization” (latency, monetary cost, energy)?  
   - *Which LLMs* are in scope—open‑source vs. hosted APIs?  
   - *Deployment context*: on‑prem GPU cluster, cloud VMs, edge devices?  

**2️⃣ Mental model / framework**  
   - **Cost components**: compute time × unit price, storage I/O, network bandwidth.  
   - **Optimization levers**: model size/architecture, quantization, pruning, batching, caching, hardware selection, platform pricing tiers.  

**3️⃣ Step‑by‑step reasoning**  
   1. Profile a baseline inference run (CPU/GPU usage, memory).  
   2. Identify the highest cost driver (e.g., GPU hours).  
   3. Explore model‑level tweaks: switch to a smaller variant or apply dynamic sparsity.  
   4. Quantize (FP16 → INT8) and evaluate accuracy loss.  
   5. Batch multiple requests when possible; consider request aggregation.  
   6. Cache frequent prompts/embeddings.  
   7. Choose the cheapest hardware that meets latency SLA (e.g., spot instances, A100 vs. V100).  
   8. Re‑profile and iterate until diminishing returns.  

**4️⃣ Common traps to avoid**  
   - Optimizing only for latency while ignoring accuracy drop.  
   - Assuming cheaper compute always yields lower cost (e.g., large batch on a powerful GPU may still be expensive).  
   - Neglecting data transfer costs in cloud‑based inference.  

**5️⃣ Sanity‑check & communicate**  
   - Verify that each tweak actually reduces the *total* bill, not just per‑second compute.  
   - Present a cost‑benefit chart (e.g., “10 % latency reduction → 12 % cost saving”).  
   - Highlight trade‑offs so stakeholders can decide acceptable accuracy loss for savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
