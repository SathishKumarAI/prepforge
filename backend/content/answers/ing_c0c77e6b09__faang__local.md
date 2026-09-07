---
qid: ing_c0c77e6b09__faang__local
question: What are the root causes of hallucination, and what actually mitigates it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 580
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:10:00-05:00'
sources: []
---

**Clarify**  
The interviewer asks about *hallucinations* in large language models—outputs that are factually incorrect or fabricated. I’ll confirm whether they mean hallucinations of facts, code, or images, and ask if we should discuss mitigation at the model‑training level, inference strategies, or user‑side safeguards.

---

**Approach**  
1. Identify root causes (data noise, objective mismatch, over‑confidence).  
2. Enumerate mitigations (pre‑training curriculum, fine‑tuning with factuality loss, retrieval augmentation, post‑hoc filtering).  
3. Touch on evaluation metrics and trade‑offs.

---

**Depth**  

| Root Cause | Why it happens |
|------------|----------------|
| **Noisy or biased corpora** | Models learn hallucinations from contradictory or low‑quality sources. |
| **Maximum‑likelihood objective** | Encourages high‑probability token sequences, not factuality; no penalty for invented facts. |
| **Limited context window** | LLMs can’t keep long‑term dependencies, leading to “short‑memory” inconsistencies. |
| **Over‑parameterization & calibration gaps** | Models over‑estimate confidence on wrong answers. |

Mitigations:

1. **Curriculum & filtering** – curate high‑quality, fact‑checked data; remove duplicates and noisy passages.  
2. **Factuality loss / RLHF** – fine‑tune with human judgments that penalize hallucinations (e.g., “answer must be supported by evidence”).  
3. **Retrieval‑augmented generation (RAG)** – fetch relevant documents during inference, grounding output in real text.  
4. **Post‑hoc verification** – run a secondary model or rule‑based checker on generated content before delivery.  
5. **Calibration & temperature control** – adjust sampling to reduce over‑confidence.

---

**Edge Cases**  

* Hallucinations persist when evidence is genuinely scarce (rare facts).  
* Retrieval may introduce its own noise if the index is corrupted.  
* Over‑penalizing can hurt creativity or suppress novel, correct inferences.

Testing: benchmark on factual QA datasets (e.g., TruthfulQA), measure hallucination rate pre/post mitigation, and run adversarial prompts that probe consistency.

---

**Optimize & Communicate**  

I’d highlight a layered defense—clean data → objective alignment → retrieval grounding → post‑hoc check. Emphasize that each layer adds latency but reduces hallucination exponentially. Conclude by noting that the best practice is an *end‑to‑end* pipeline, not a single fix, and that continuous monitoring with human-in-the-loop feedback remains essential.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
