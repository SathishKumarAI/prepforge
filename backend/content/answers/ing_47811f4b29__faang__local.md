---
qid: ing_47811f4b29__faang__local
question: 'Q: What are the limitations of LLM-as-judge?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 425
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:30:31-05:00'
sources: []
---

**Clarify**  
We’re asked to critique *LLM‑as‑Judge*: a large language model that evaluates user responses (e.g., grading essays or code). Key assumptions: the judge sees only the text prompt + submission; it has no external verification of facts; it runs locally without real‑time human oversight.  

**Approach**  
1. List core failure modes (hallucinations, bias, lack of context).  
2. Map each to concrete examples.  
3. Quantify impact on trust and fairness.  
4. Suggest mitigations or hybrid designs.  

**Depth**  
- **Hallucination & Fact‑Checking**: LLMs can confidently assert false facts; a judge may award points for invented data, inflating scores.  
- **Bias Amplification**: Training data biases (gender, race) surface in grading patterns, disadvantaging certain groups.  
- **Context Loss**: Without access to the original prompt or external resources, subtle nuances of a question are lost, leading to mis‑scoring.  
- **Scalability vs. Accuracy Trade‑off**: Fast inference is cheap but sacrifices precision; adding human oversight restores accuracy at higher cost.  

**Edge Cases**  
- Non‑standard formats (e.g., code with syntax errors) cause the model to misinterpret intent.  
- Ambiguous prompts can lead to divergent interpretations across models, breaking consistency.  

**Optimize & Communicate**  
- **Hybrid Pipeline**: Pre‑validate facts via a lightweight retrieval engine; flag contentious passages for human review.  
- **Calibration Layer**: Use ensemble scoring or temperature tuning to reduce overconfidence.  
- **Explainability Hooks**: Request the model to output rationales, enabling audit trails and bias detection.  

By acknowledging hallucination, bias, context loss, and proposing a hybrid, explainable framework, we balance speed with fairness—an approach that satisfies FAANG interviewers’ emphasis on structured reasoning and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
