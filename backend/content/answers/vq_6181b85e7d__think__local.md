---
qid: vq_6181b85e7d__think__local
question: What are the limitations of Generative AI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 439
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:40:13-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
   - Define “generative AI” (text, image, audio models).  
   - Assume recent large‑scale LLMs/vision transformers; ignore tiny rule‑based systems.  
   - Focus on *practical* limits: data bias, hallucination, compute cost, legal & ethical constraints.

**2️⃣ Adopt a layered mental model**  
   1. **Technical** (model capacity, training data, inference latency).  
   2. **Operational** (deployment, energy use, maintainability).  
   3. **Socio‑legal** (bias, privacy, misuse potential).  
   - Map each limitation to one of these layers for clarity.

**3️⃣ Step‑by‑step reasoning**  
   a. List known technical constraints: finite context window, tokenization gaps, over‑fitting to training data.  
   b. Translate to operational impacts: slow inference on edge devices, high GPU/TPU costs, need for continual fine‑tuning.  
   c. Enumerate socio‑legal pitfalls: hallucinated facts, copyrighted content leakage, amplification of stereotypes, regulatory scrutiny (GDPR, AI Act).  
   d. For each, note typical mitigation (e.g., grounding, prompt engineering, differential privacy).

**4️⃣ Avoid common traps**  
   - Don’t conflate *accuracy* with *truthfulness*.  
   - Beware of over‑generalizing from one model type to all generative systems.  
   - Remember that “limitations” evolve quickly; present them as *current* rather than absolute.

**5️⃣ Sanity‑check & verbalize**  
   - Cross‑verify each layer against recent literature (e.g., OpenAI safety papers).  
   - Ask: “Does this limitation manifest in real deployments?”  
   - Communicate concisely: start with a one‑sentence summary, then bullet the layers, ending with a note on mitigation paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
