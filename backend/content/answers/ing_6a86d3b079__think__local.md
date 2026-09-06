---
qid: ing_6a86d3b079__think__local
question: When do you fine-tune versus prompt-engineer versus use RAG?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 477
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:04:08-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- Define *fine‑tuning*, *prompt engineering*, and *retrieval‑augmented generation (RAG)*.  
- Assume you have a base LLM, limited compute, and a specific downstream task (e.g., question answering).  

**2️⃣ Mental model: trade‑off triangle**  
| Factor | Fine‑tune | Prompt‑engineer | RAG |
|--------|-----------|-----------------|-----|
| **Data size** | Large, curated corpora | Small or zero new data | Uses external docs at inference |
| **Compute cost** | High (training) | Low (just craft prompts) | Moderate (index + query overhead) |
| **Performance control** | Highest fidelity to domain | Medium (depends on prompt skill) | High recall, but generation quality varies |

Use this triangle to decide which axis dominates your constraints.

**3️⃣ Step‑by‑step reasoning**  
1. *Identify the bottleneck*: Is lack of knowledge or style the issue?  
2. *Check data availability*: Do you have a labeled corpus? If yes → fine‑tune.  
3. *Consider latency & resources*: Need real‑time inference? Prompt engineering keeps inference cheap; RAG adds retrieval time.  
4. *Assess domain specificity*: For niche terminology, fine‑tuning or RAG (with a curated index) is better than generic prompting.  
5. *Prototype quickly*: Try prompt tweaks first; if performance stalls, move to RAG; finally, fine‑tune for ultimate control.

**4️⃣ Common traps to avoid**  
- Assuming “more data = better” → fine‑tuning can overfit small datasets.  
- Ignoring retrieval latency in RAG setups.  
- Over‑engineering prompts that look good but don’t generalize.  

**5️⃣ Sanity‑check & communicate**  
- Verify your decision against the trade‑off triangle.  
- Explain: “We chose prompt engineering because we only need a quick prototype with minimal compute; if accuracy drops below X, we’ll add RAG.”  
- Keep explanations concise and tied to measurable constraints (time, cost, data).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
