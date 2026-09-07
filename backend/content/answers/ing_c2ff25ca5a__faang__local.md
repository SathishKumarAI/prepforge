---
qid: ing_c2ff25ca5a__faang__local
question: When do reflection / self-critique loops actually help, and what do they
  cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 512
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:14:23-05:00'
sources: []
---

**Clarify**  
You’re asking *when* a model’s internal “reflection” (e.g., a self‑critique step that re‑evaluates its own output) actually improves performance, and *what the cost* of adding such a loop is. Key assumptions to confirm:  

- The reflection module is deterministic or has bounded stochasticity.  
- You have enough compute budget for an extra forward pass per inference.  
- Evaluation metrics (accuracy, BLEU, F1, etc.) are sensitive to post‑hoc corrections.

**Approach**  
1. **Define benefit criteria** – e.g., reduction in error rate on a held‑out set or higher human‑judged quality scores.  
2. **Measure cost** – additional latency, GPU hours, and potential overfitting from “self‑reinforcing” errors.  
3. **Run controlled experiments** with/without reflection across tasks (QA, summarization, code generation).  

**Depth**  
Reflection is most useful when:  
- The base model’s confidence is miscalibrated; a critique can flag low‑confidence outputs and trigger re‑generation.  
- There are systematic, correctable mistakes (e.g., factual hallucinations) that the model can detect via internal consistency checks.  

Costs:  
- **Compute**: ≈ 2× FLOPs per inference, leading to higher latency (~50–200 ms on GPUs).  
- **Training data bias**: If the critique is trained on the same signals as the base, it may amplify existing errors (“garbage‑in, garbage‑out”).  
- **Complexity**: Debugging a two‑stage pipeline is harder; error attribution becomes murky.

**Edge Cases**  
- Tasks with tight latency constraints (real‑time translation) where extra pass breaks SLAs.  
- Domains with sparse training signals where the critique learns to “hallucinate” corrections.  

**Optimize & Communicate**  
- Use *early stopping* in the critique if confidence is already high, saving compute.  
- Cache intermediate activations so the second pass re‑uses them.  
- Present results as a trade‑off curve: “Reflection yields +3 % accuracy for an extra 80 ms latency on average.”  

This structured view lets interviewers see your analytical reasoning and practical awareness of real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
