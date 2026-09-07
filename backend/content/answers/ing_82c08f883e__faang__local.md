---
qid: ing_82c08f883e__faang__local
question: 'Explain: Panel of LLM Judges (PoLL) — Ensemble Methods'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 444
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:48:49-05:00'
sources: []
---

**Panel of LLM Judges (PoLL)** – an ensemble framework that treats multiple large language models as *judges* in a decision‑making process.

---

### 1️⃣ Clarify  
We want to combine several LLMs so each “judge” votes on an answer, and the final output is chosen by majority or weighted aggregation.  
Assumptions:  
- All models can ingest the same prompt.  
- We have a scoring function (e.g., log‑probability) to rank outputs.  
- There is a central orchestrator that aggregates responses.

### 2️⃣ Approach  
1. **Prompt & parallel inference** – send identical prompts to all judges.  
2. **Collect logits/outputs** – store each model’s raw probability distribution.  
3. **Voting rule** – majority vote, weighted by confidence or historical accuracy.  
4. **Conflict resolution** – if tie, fallback to a meta‑model or random pick.

### 3️⃣ Depth  
- **Aggregation**: `score_i = log_prob(output | model_i)` → normalize across models, then sum for each candidate answer.  
- **Complexity**: O(N·T) where N is number of judges and T is token count; inference dominates.  
- **Trade‑offs**: More judges ≈ higher accuracy but latency & cost increase linearly.

### 4️⃣ Edge Cases  
- *Model drift*: a judge consistently misbehaves → weight it to zero.  
- *Divergent outputs*: no clear majority → trigger a “re‑prompt” with clarification.  
- *Resource limits*: throttle batch size or use smaller checkpoints.

### 5️⃣ Optimize & Communicate  
- **Caching**: reuse embeddings across judges to cut GPU usage.  
- **Dynamic weighting**: update weights online based on recent performance.  
- **Explainability**: expose each judge’s vote and confidence in the UI for auditability.  

*Result*: PoLL yields robust, consensus‑driven answers while keeping inference cost manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
