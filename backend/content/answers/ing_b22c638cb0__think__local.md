---
qid: ing_b22c638cb0__think__local
question: When do you fine-tune a VLM instead of prompting it, and what exactly do
  you unfreeze?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 512
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:45:26-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
   - *What is “fine‑tune” vs “prompt”?* Fine‑tuning adapts model weights; prompting only changes input text.  
   - *Which VLMs are we talking about?* Assume large multimodal models (e.g., CLIP, BLIP, LLaVA) that have frozen backbones and a trainable head.  
   - *Goal of the user:* Decide when to modify weights vs just prompting, and which parts to unfreeze.

**2️⃣ Mental model / framework**  
   - **Task complexity & data volume:** Low‑resource, simple retrieval → prompt; high‑complexity or domain shift → fine‑tune.  
   - **Model architecture:** Many VLMs separate a frozen vision encoder + a trainable language head.  
   - **Training cost & risk:** Fine‑tuning is expensive and can overfit; prompting is cheap but limited.

**3️⃣ Step‑by‑step reasoning**  
   1. *Assess task:* Does it require new visual concepts or linguistic patterns?  
   2. *Check data:* Is there enough labeled pairs to fine‑tune safely (>1k examples)?  
   3. *Identify bottleneck:* If the vision encoder is already strong, only the language head may need adaptation.  
   4. *Unfreeze strategy:*  
      - Freeze all layers except the last few transformer blocks of the vision backbone and the output projection; or  
      - Keep the entire backbone frozen and train a lightweight adapter (e.g., LoRA).  

**4️⃣ Common traps to avoid**  
   - Unfreezing the entire vision encoder without enough data → catastrophic forgetting.  
   - Assuming “prompting” always suffices for domain shifts; sometimes few‑shot prompts still underperform.  
   - Forgetting to adjust learning rates: frozen layers should have zero lr, unfrozen ones need a small lr.

**5️⃣ Sanity‑check & communicate**  
   - Verify that the chosen unfrozen modules are those most correlated with task performance (e.g., visual embeddings).  
   - Explain to stakeholders: “We’ll fine‑tune only the last vision blocks and the language head because the rest of the model already captures generic visual semantics, saving compute while adapting to our domain.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
