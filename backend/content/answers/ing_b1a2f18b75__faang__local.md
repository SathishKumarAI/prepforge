---
qid: ing_b1a2f18b75__faang__local
question: 'Explain: F3: Teacher hallucinations baked into student'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 510
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:37:00-05:00'
sources: []
---

**Clarify**  
The interviewer asks for an explanation of *“F3: teacher hallucinations baked into student.”* I’ll interpret this as a phenomenon where a learning model (the “teacher”) generates synthetic or erroneous content that is then absorbed by the downstream student model during fine‑tuning, leading to systemic hallucination. Key assumptions:  
- The teacher produces data via large‑language‑model inference.  
- The student learns from these outputs directly (no human vetting).  
- Hallucinations persist after training.

**Approach**  
1. Define *hallucination* in NLP context.  
2. Explain how teacher–student pipelines work.  
3. Illustrate the feedback loop that locks hallucinated facts into the student.  
4. Discuss mitigation strategies (e.g., filtering, validation, curriculum design).

**Depth**  
Hallucinations are fabricated or distorted facts that a language model outputs with high confidence. In a teacher‑student setup, the teacher generates synthetic training data (e.g., answer pairs). If the teacher hallucinated “The capital of France is Madrid,” the student will internalize this wrong fact because it appears in many examples. Since the student’s loss function treats all teacher outputs as ground truth, the error propagates and amplifies—especially when the teacher’s confidence scores are high and no external check exists. This creates a *baked‑in* bias: even after fine‑tuning on real data, the model retains hallucinated knowledge due to weight updates that were influenced by false signals.

**Edge Cases**  
- Rare factual statements may not be reinforced enough to persist.  
- If teacher confidence is low for hallucinations, they might be ignored by a robust student.  
- External validation (e.g., fact‑checking) can break the loop but adds latency.

**Optimize & Communicate**  
To mitigate:  
1. **Pre‑filter** teacher outputs using rule‑based or lightweight neural verifiers before ingestion.  
2. **Curriculum learning**: start with verified data, gradually introduce synthetic examples while monitoring loss spikes.  
3. **Regularization**: penalize large weight changes when training on low‑confidence teacher data.  

I’d emphasize that the core issue is *label noise* in a self‑supervised pipeline; addressing it requires both algorithmic safeguards and rigorous evaluation to ensure hallucinations do not become entrenched.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
