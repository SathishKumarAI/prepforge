---
qid: ing_e1deb6c207__think__local
question: Full fine-tuning vs. parameter-efficient fine-tuning - how do you choose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 417
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:54:49-05:00'
sources: []
---

**1️⃣ Clarify the goal & constraints**  
   * Ask: “What performance level do I need?”  
   * Note data size, compute budget, deployment latency, and regulatory limits (e.g., model size for on‑device use).  

**2️⃣ Pick a mental framework**  
   * Treat fine‑tuning as an optimization trade‑off between **model capacity** (full‑parameter updates) and **resource efficiency** (PEFT).  
   * Map each PEFT method (LoRA, prefix tuning, adapters, prompt tuning) onto this spectrum.  

**3️⃣ Reason step‑by‑step**  
   1. Estimate data volume: if < 10k examples → lean toward PEFT; > 100k → full fine‑tuning may be justified.  
   2. Compute cost: run a quick pilot with a small subset for each method to gauge GPU hours & memory usage.  
   3. Evaluate downstream tasks: if the target domain is very different (e.g., medical language) consider full fine‑tuning; if it’s a narrow style shift, PEFT suffices.  
   4. Check deployment constraints: on‑device inference → PEFT to keep model size minimal.  

**4️⃣ Avoid common traps**  
   * Don’t assume “more parameters = better.”  
   * Ignore overfitting risks of full fine‑tuning on small data.  
   * Overlook that some PEFTs still need a base model update (e.g., LoRA adds trainable matrices).  

**5️⃣ Sanity‑check & communicate**  
   * Summarize the trade‑offs in a table: data size, compute, latency, accuracy gain.  
   * Explain the chosen method as “given our limited data and on‑device constraints, PEFT (LoRA) gives the best cost–benefit ratio.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
