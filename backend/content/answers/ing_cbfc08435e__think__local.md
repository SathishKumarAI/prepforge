---
qid: ing_cbfc08435e__think__local
question: 'Explain: Implementation — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 417
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:24:24-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Identify what “On‑Policy Distillation” means in this context (student‑teacher training where the teacher’s policy is updated on the fly).  
- Assume the reader knows basic RL terminology but not the specific lab implementation details.  
- Decide whether to explain theory first or dive straight into code – lean toward a quick overview then a concrete snippet.

**2️⃣ Adopt a “policy→data→model” mental model**  
1. Policy (teacher) generates trajectories.  
2. On‑policy: data comes from the *current* teacher policy, not a fixed dataset.  
3. Distillation loss trains a student to mimic the teacher’s action distribution.  

**3️⃣ Step‑by‑step reasoning toward an answer**  
- Outline why on‑policy is needed (non‑stationary environments).  
- Describe how the lab loops: sample batch → compute Q or policy logits → update teacher → feed same batch into student loss.  
- Highlight key code blocks: `collect_experience()`, `update_teacher()`, `distill_loss = KL(student_logits, teacher_logits)`.  
- Mention hyper‑parameters (temperature, learning rates).

**4️⃣ Avoid common traps**  
- Don’t conflate off‑policy replay buffers with on‑policy sampling.  
- Don’t assume the student always lags behind; in some labs they’re updated concurrently.  
- Beware of over‑fitting to a single teacher trajectory; mention regularization.

**5️⃣ Sanity‑check & verbalize**  
- Verify that each step preserves causality: data → teacher update → student update.  
- Explain intuitively why the student benefits (smooths exploration, reduces variance).  
- Conclude with practical tips: monitor KL divergence, adjust temperature if student collapses to a single action.

Follow this scaffold next time you need to explain a lab‑specific RL technique.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
