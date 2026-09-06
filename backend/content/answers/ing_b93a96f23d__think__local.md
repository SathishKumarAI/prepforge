---
qid: ing_b93a96f23d__think__local
question: What is WER, and why is it a misleading metric for a voice product?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 423
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:10:48-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
   - *What is WER?* Word Error Rate: (Substitutions + Deletions + Insertions) ÷ Reference Words.  
   - *Why a voice product?* The metric will be used to judge ASR quality for an app or service.  
   - Assume we care about user experience, not just raw transcription accuracy.

**2️⃣ Choose a mental model**  
   - Treat WER as a **global error statistic**—it aggregates many kinds of mistakes into one number.  
   - Think in terms of *user impact*: which errors hurt the product most?

**3️⃣ Step‑by‑step reasoning**  
   1. Break down WER components: substitutions, deletions, insertions.  
   2. Map each component to real‑world effects (e.g., a deletion might skip a command).  
   3. Consider *frequency of utterances*: rare words inflate error counts but may be inconsequential.  
   4. Evaluate *contextual importance*: some misrecognitions are benign, others catastrophic.  
   5. Compare WER with alternative metrics (e.g., task success rate, confidence thresholds).

**4️⃣ Common traps to avoid**  
   - Treating a low WER as “perfect” without examining error types.  
   - Ignoring the distribution of errors across user segments or accents.  
   - Over‑relying on WER for multimodal or interactive systems where timing matters.

**5️⃣ Sanity‑check & communicate**  
   - Ask: “Does this metric actually reflect how users perceive quality?”  
   - Present a short example: 10% WER can still mean many critical commands fail.  
   - Conclude that WER is useful for benchmarking but misleading if taken as the sole UX indicator.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
