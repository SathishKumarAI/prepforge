---
qid: ing_d42f3552d1__faang__local
question: 'Explain: F5: Base-model upgrade breaks legacy adapters'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 491
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:53:40-05:00'
sources: []
---

**Clarify**  
We’re asked why upgrading a base‑model (e.g., GPT‑4 → GPT‑4o) can break *legacy adapters*—custom fine‑tuned modules that wrap the original model’s API or internal tokenization. The key assumptions:  
1️⃣ Adapters modify low‑level behavior (token IDs, hidden states).  
2️⃣ A base upgrade changes the architecture/embedding size/vocab.  

**Approach**  
1. Identify what each adapter touches (weights, token mapping, prompt schema).  
2. Map those touchpoints to changes in the new model.  
3. Decide whether a lightweight patch or full retraining is needed.

**Depth**  
- **Tokenization drift**: New models often expand vocabularies; old token IDs shift, so adapters that rely on specific IDs (e.g., “<mask>” → 50256) mis‑interpret inputs.  
- **Dimensionality mismatch**: Hidden layers may grow from 12k to 16k dims. Adapters built for the former size will receive tensors of incompatible shape, causing runtime errors or garbage outputs.  
- **API signature changes**: Some upgrades expose new inference knobs (e.g., `temperature` now defaults to 0.7). Legacy adapters that hard‑code old defaults may produce unintended sampling behavior.  
- **Weight re‑initialization**: If the base weights are re‑initialized or pruned, adapters fine‑tuned on those weights become misaligned and degrade performance.

**Edge Cases**  
- Partial upgrades (e.g., only tokenizer) can still break adapters that hard‑code old token IDs.  
- Backward compatibility flags in the new model might hide the issue until a certain API version is used.

**Optimize & Communicate**  
Propose an *adapter migration framework*: a lightweight shim that maps legacy token IDs to new ones, checks tensor shapes at runtime, and optionally triggers a “quick‑retrain” hook. Communicate this as a safety net: “We’ll surface any mismatch early, so developers can decide between patching or full retraining.”  

This structured response shows problem framing, technical depth, edge‑case awareness, and a clear mitigation path—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
