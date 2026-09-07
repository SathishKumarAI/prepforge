---
qid: ing_8bc9e9b77d__faang__local
question: 'Q: What is the "curriculum" in LLM pretraining?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 433
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:09:22-05:00'
sources: []
---

**Clarify**  
The interviewer asks what “curriculum” means for large‑language‑model (LLM) pretraining. I’ll confirm: *Do they mean a staged training schedule, a data selection strategy, or both?* Assume they refer to the progressive exposure of the model to increasingly complex text and tasks during unsupervised learning.

**Approach**  
Explain that curriculum design in LLMs is two‑fold: (1) **Data curriculum** – ordering corpora by linguistic difficulty or domain relevance; (2) **Task curriculum** – gradually shifting from simple language modeling losses to more structured objectives. Outline typical stages: raw tokenization → masked LM → next‑sentence prediction → instruction tuning.

**Depth**  
- *Data*: Start with high‑frequency, clean English text (e.g., Wikipedia), then layer in low‑resource languages, domain‑specific corpora, and finally noisy web data. Use curriculum weighting or sampling schedules to control exposure.
- *Task*: Begin with vanilla next‑token prediction; once the model attains a baseline perplexity, introduce denoising objectives (e.g., BERT’s masked LM), then incorporate sequence‑to‑sequence tasks or RL‑based instruction following. Each stage refines representations and stabilizes training.
- Complexity: Data shuffling is \(O(N)\); curriculum scheduling adds negligible overhead but can reduce total epochs by 10–20 %. Trade‑offs include potential bias if early data dominates.

**Edge Cases**  
If the dataset contains harmful or biased content, a poorly designed curriculum could amplify it. Also, abrupt shifts in difficulty may cause catastrophic forgetting; gradual mixing mitigates this.

**Optimize & Communicate**  
I’d iterate on sampling ratios based on validation perplexity, and deploy mixed‑precision training to keep compute costs low. In an interview I’d conclude: “Curriculum in LLM pretraining is a deliberate, staged exposure of data and objectives that guides the model from basic language understanding toward sophisticated reasoning while managing stability and bias.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
