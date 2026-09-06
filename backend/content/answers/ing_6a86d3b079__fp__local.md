---
qid: ing_6a86d3b079__fp__local
question: When do you fine-tune versus prompt-engineer versus use RAG?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 479
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:51:26-05:00'
sources: []
---

When deciding between **fine‑tuning, prompting, or Retrieval‑Augmented Generation (RAG)**, start from the *information bottleneck* that your task imposes.

| Stage | Bottleneck addressed | Why it works |
|-------|----------------------|--------------|
| **Fine‑tune** | Model parameters → domain knowledge | The model learns a new posterior \(p_\theta(y|x)\) that best fits the annotated distribution. It is optimal when you have *sufficient, high‑quality labeled data* and the target distribution diverges significantly from the base LM’s prior. |
| **Prompt‑engineer** | Prompt–response mapping → task semantics | The prompt acts as a *soft conditioning vector*. If your dataset is scarce but you can craft examples that encode the rule set (e.g., few‑shot), the LM’s pre‑trained knowledge fills the gap without parameter changes. |
| **RAG** | Retrieval index → up‑to‑date facts | Retrieval supplies a *contextual prior* \(p_{\text{retr}}(y|x, r)\). It is essential when factual accuracy or dynamic content matters and you lack labeled data to retrain on those facts. |

**Non‑obvious insight:**  
Fine‑tuning *compresses* new knowledge into the same parameter space that already encodes billions of tokens; this can cause catastrophic forgetting if not regularized. Prompting, by contrast, keeps the base weights untouched and relies on *contextual cueing*. RAG sidesteps both problems by treating retrieval as an external memory—essentially a separate probability distribution that is only queried at inference time.

**Rule of thumb**

1. **If you have >10k labeled examples** → fine‑tune (or regularized fine‑tune).  
2. **If data are <1000 but the task is rule‑based** → prompt with carefully crafted few‑shot demos.  
3. **If facts change frequently or coverage is limited** → RAG, possibly combined with a lightweight fine‑tune for domain style.  

Always validate by measuring *entropy* of the output distribution: low entropy after prompting often signals over‑confidence and hidden biases that fine‑tuning or retrieval can mitigate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
