---
qid: ing_196b650a82__faang__local
question: How many examples? — Few Shot And Icl
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 593
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:44:14-05:00'
sources: []
---

**Clarify**

You’re asking how many labeled examples are required for *few‑shot* learning and *in‑context learning (ICL)* in an LLM setting.  
Key assumptions to confirm:  

- The task is a supervised classification or generation problem.  
- We use a transformer‑based LLM (e.g., GPT‑4) without fine‑tuning.  
- “Examples” means prompt‑level demonstrations, not dataset size for training.

**Approach**

1. Define *few‑shot* vs. *ICL*.  
2. Review empirical evidence from literature and benchmarks.  
3. Translate findings into practical guidelines (minimum shots, diminishing returns).  

**Depth**

| Scenario | Typical Shot Count | Rationale |
|----------|-------------------|-----------|
| **Classification** | 1–5 examples | Even a single demonstration gives the model task framing; 3–4 solidify label semantics. |
| **Generation (e.g., summarization)** | 2–10 examples | More context needed to capture style/length constraints. |
| **ICL with chain‑of‑thought** | 1–6 reasoning steps | Adds explanatory power; 4–5 often optimal before overfitting the prompt structure. |

Empirical studies (Brown et al., 2020; Liu et al., 2022) show performance improves sharply up to ~5 shots, then plateaus or degrades due to token budget and prompt noise. Token limits (~8k–32k) constrain how many examples we can fit while still leaving space for the query.

**Edge Cases**

- **Very small models** (<1B params): may need 10+ shots; performance saturates early.  
- **Highly specialized domains** (medical, legal): more shots (>10) or fine‑tuning may be required.  
- **Noisy labels**: fewer shots preferable to avoid propagating errors.  

Test by varying shot count from 0 to 20 and measuring accuracy/F1; plot learning curve to identify elbow point.

**Optimize & Communicate**

1. **Prompt engineering:** Use concise, consistent formatting (e.g., “Input: … → Output: …”) to maximize token efficiency.  
2. **Dynamic shot selection:** Cache the top‑performing few examples per user or task and rotate them to avoid prompt drift.  
3. **Hybrid strategy:** Combine a small fine‑tune (few hundred steps) with ICL for tasks that never hit the 5‑shot sweet spot.

Explain to stakeholders: “We can achieve near‑state‑of‑the‑art results on most classification problems with just 3–4 examples, keeping token usage low and latency minimal. For niche domains we’ll either add more shots or fine‑tune a lightweight head.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
