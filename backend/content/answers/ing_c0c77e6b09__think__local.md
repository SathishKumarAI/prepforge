---
qid: ing_c0c77e6b09__think__local
question: What are the root causes of hallucination, and what actually mitigates it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 723
total_tokens: 917
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:40:47-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- *Hallucination* here means a language model producing factually incorrect or invented content.  
- Assume we’re talking about large‑scale transformer models (GPT‑4, LLaMA, etc.) and not hallucinations in human perception.  
- We’ll focus on **root causes** (why it happens) and **mitigation strategies** (what actually reduces it).

**2️⃣ Adopt a mental model: “Model‑Data–Task” triangle**  
- *Model*: architecture, training objective, capacity.  
- *Data*: quality, coverage, noise, distribution shift.  
- *Task*: prompting style, inference regime, evaluation criteria.  
This framework lets us trace hallucinations back to one or more vertices.

**3️⃣ Step‑by‑step reasoning**  

| Root Cause | Explanation | Typical Manifestation |
|------------|-------------|-----------------------|
| **Training objective mismatch** | Cross‑entropy maximises next‑token probability, not factuality. | Model “hallucinates” plausible but wrong details. |
| **Limited supervision on facts** | Supervised fine‑tuning rarely includes fact‑checking signals. | No penalty for inventing new entities. |
| **Dataset noise & bias** | Web data contains misinformation; model learns spurious correlations. | Repeats common myths or outdated facts. |
| **Distribution shift at inference** | Prompt content diverges from training distribution (e.g., niche queries). | Model resorts to generic, invented answers. |
| **Token‑level independence** | Each token chosen locally; long‑range coherence is weak. | Contradictions within a single answer. |
| **Decoding strategy (temperature, beam)** | High temperature or large beams explore improbable tokens. | More creative but less factual outputs. |

**Mitigation tactics**  

1. **External knowledge retrieval**  
   - Retrieval‑augmented generation (RAG) fetches real documents to condition the model.  
2. **Fact‑checking modules**  
   - Post‑generation verifier that flags inconsistencies or low‑confidence facts.  
3. **Fine‑tuning with factuality objectives**  
   - Reinforcement learning from human feedback (RLHF) that rewards truthfulness.  
4. **Controlled decoding**  
   - Temperature < 0.7, nucleus sampling, and length penalties to reduce over‑creative token choices.  
5. **Dataset curation & filtering**  
   - Remove low‑quality or contradictory sources; use curated knowledge bases.  
6. **Prompt engineering**  
   - Explicitly ask for citations or limit the scope of the answer.  

**4️⃣ Common traps to avoid**  
- Assuming hallucination is purely a data problem – it’s also architectural and objective.  
- Over‑relying on temperature tweaks; they don’t address factual errors, just style.  
- Treating retrieval as a silver bullet—retrieval quality matters.

**5️⃣ Sanity‑check & communicate**  
- Verify that each mitigation step actually reduces hallucination rates in benchmark tests (e.g., TruthfulQA).  
- Explain to stakeholders: “We’re tightening the objective and adding an external knowledge check, so the model is less likely to invent facts.”  

By systematically mapping causes to the Model‑Data–Task triangle and pairing them with concrete mitigation tactics, you can both diagnose hallucinations and design robust countermeasures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
