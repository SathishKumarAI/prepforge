---
qid: ing_290cca5aa1__fp__local
question: 'Explain: ​ Evaluator inputs — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 386
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:32:27-05:00'
sources: []
---

### Why “Evaluator Inputs” are Essential

When we ask a language model (LLM) to produce an answer, the **only** thing that guarantees quality is *feedback*.  
A formal evaluator turns raw text into a numerical or categorical signal by applying a set of **evaluation concepts**—metrics such as factuality, coherence, safety, or style.  
These concepts are not arbitrary; they arise from the fundamental problem of **information fidelity**: we want the generated content to convey the intended knowledge while respecting constraints (e.g., no hallucinations).  

#### Derivation

1. **Define the target distribution** \(P_{\text{true}}\) over correct responses.  
2. **Measure divergence** between the LLM’s output distribution \(Q\) and \(P_{\text{true}}\).  
3. Each *concept* (e.g., factuality) corresponds to a specific divergence or distance function, often expressed as a scoring rule.  
4. The evaluator aggregates these scores into a single objective that can be optimized via reinforcement learning or fine‑tuning.

#### Non‑obvious Insight

Most people treat each metric independently, but **cross‑metric interactions** are critical: improving factuality can degrade style if the model is penalized too harshly for literal phrasing.  
LangChain’s evaluator inputs expose these trade‑offs by allowing *joint* constraints—e.g., a weighted sum with learned coefficients—so that the LLM learns to balance competing goals automatically.

Thus, evaluator inputs are not merely plug‑in metrics; they encode an optimization landscape rooted in information theory and enable principled, multi‑objective learning for safe, reliable AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
