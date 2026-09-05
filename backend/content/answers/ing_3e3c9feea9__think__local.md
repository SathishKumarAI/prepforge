---
qid: ing_3e3c9feea9__think__local
question: 'Explain: Open Source Embedding Models — Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 429
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:52:04-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
Ask what “model taxonomy” means here (e.g., categories, use‑cases, architectures). Assume the audience knows basic NLP but not the specific embedding ecosystem.  

**2️⃣ Adopt a mental model**  
Treat embeddings like a multi‑dimensional space:  
- **Input modality** (text, image, multimodal)  
- **Model type** (transformer, sentence‑piece, contrastive)  
- **Training objective** (next‑token, masked, contrastive)  
- **Availability & licensing** (open‑source vs. proprietary).  

Map each dimension onto a taxonomy tree.

**3️⃣ Step‑by‑step reasoning**  
1. List major families: BERT/Roberta (self‑attn), GPT‑style (causal), sentence‑transformers, CLIP/ViT (vision‑language).  
2. For each family, note open‑source variants and their licenses.  
3. Group by downstream task: semantic search, clustering, classification, generation.  
4. Highlight cross‑cutting features: multilinguality, domain adaptation, size/compute trade‑offs.

**4️⃣ Common traps to avoid**  
- Confusing *model architecture* with *training objective*.  
- Overlooking licensing nuances (Apache 2.0 vs MIT).  
- Assuming “open source” means “free to use in any context”; some require attribution or non‑commercial clauses.

**5️⃣ Sanity‑check & communicate**  
Re‑explain the taxonomy verbally: “We first split by modality, then by architecture, and finally by license.”  
Check that each node has at least one well‑known example (e.g., BERT‑Base, Sentence‑BERT, CLIP‑ViT).  
If a branch feels thin, add a footnote or alternative example.  

By following this scaffold you can build a clear, reusable taxonomy for open‑source embedding models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
