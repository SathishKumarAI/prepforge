---
qid: ing_2cc229d6d5__faang__local
question: 'Explain: A customer asks: "Should we fine-tune, use RAG, or just prompt
  better?" Give me your decision framework.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 500
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:27:08-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re deciding between (a) *fine‑tuning* a base LLM, (b) *Retrieval‑Augmented Generation* (RAG), or (c) simply crafting better prompts.  
Key assumptions to confirm:  

- **Data volume & quality** – how many domain‑specific examples?  
- **Latency & cost constraints** – real‑time inference vs batch fine‑tuning?  
- **Security / compliance** – can you store user data for training or retrieval?  
- **Model updates** – do you want to stay on the latest base model?  

**2️⃣ Approach**  
1. Quantify performance gaps: baseline accuracy/fluency with vanilla prompts.  
2. Map those gaps to solution strengths: fine‑tuning excels at *deep domain knowledge*, RAG at *fact recall*, prompting for *style & intent*.  
3. Build a cost–benefit matrix (latency, compute, maintenance).  

**3️⃣ Depth**  
| Solution | When it shines | Typical cost/latency | Trade‑offs |
|----------|----------------|----------------------|------------|
| Fine‑tune | High domain specificity; consistent style | Training 1‑2 hrs GPU, inference ~50 ms | Model size ↑, updates hard |
| RAG | Fact‑heavy queries needing up‑to‑date data | Retrieval + generation ≈100–200 ms | Index maintenance, potential hallucination |
| Prompting | Quick tweaks for intent or tone | Zero training cost, latency same as base | Limited expressiveness; brittle to phrasing |

**4️⃣ Edge Cases**  
- *Cold start*: no fine‑tuning data → prompt + RAG.  
- *Regulatory limits*: cannot store data → avoid RAG, rely on prompts.  
- *Rapidly changing knowledge*: RAG preferred; fine‑tune only for core logic.

**5️⃣ Optimize & Communicate**  
Start with a **prompt‑first** prototype to set a baseline. If gaps persist, layer **RAG** (cheap, no model change). Reserve **fine‑tuning** for when you need a consistent, high‑precision voice or can afford the compute overhead. Present this decision tree in a slide deck, highlighting trade‑offs and next steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
