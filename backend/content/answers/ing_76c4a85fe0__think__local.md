---
qid: ing_76c4a85fe0__think__local
question: You have one on-device base model but a dozen features - summarization,
  rewriting, reply suggestions, tone adjustment. How do you specialise without shipping
  a dozen models?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 378
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:51:09-05:00'
sources: []
---

**1️⃣ Clarify the constraints and assumptions**  
- *What is fixed?* One on‑device base model that must stay lightweight.  
- *What can change?* The way we query it (prompts, post‑processing).  
- *Assume*: All features are text‑centric, share similar vocabularies, and run on the same hardware.

**2️⃣ Adopt a “prompt‑engineering + lightweight adapters” framework**  
Treat the base model as a black box that can be steered. Build tiny feature‑specific modules (token filters, rule sets, or small weight vectors) that sit *outside* the core network.

**3️⃣ Step‑by‑step reasoning**  
1. Identify common sub‑tasks across features (e.g., sentence segmentation).  
2. Create a minimal “feature layer” that injects task‑specific prompts and post‑processing rules.  
3. Use parameter‑efficient fine‑tuning (LoRA, adapters) on the base model for each feature—only a few hundred kilobytes per task.  
4. Bundle these lightweight modules as separate deployable units; they can be swapped in/out without retraining the heavy core.

**4️⃣ Avoid common traps**  
- Don’t over‑parameterize adapters; they defeat the “no dozen models” goal.  
- Beware of prompt leakage: a generic prompt may cause feature bleed‑over.  
- Skip heavy fine‑tuning that would require separate model checkpoints.

**5️⃣ Sanity check & communicate**  
Run a quick unit test: feed identical input to two features and verify distinct outputs. Explain the pipeline as “a single shared engine + tiny, task‑specific knobs,” emphasizing size savings and modularity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
