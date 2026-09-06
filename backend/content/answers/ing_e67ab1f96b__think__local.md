---
qid: ing_e67ab1f96b__think__local
question: 'Explain: 3.2 New Knowledge, Not Just Scale — Rethinking On-Policy Distillation
  of Large Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 456
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:12:50-05:00'
sources: []
---

**1️⃣ Clarify & Scope**  
   - Ask: *What exactly is “New Knowledge” vs. mere scaling?*  
   - Define “on‑policy distillation” and its role in LLM training.  
   - State assumptions: readers know basic RL‑HF, teacher–student paradigms, and phenomenology.

**2️⃣ Mental Model / Framework**  
   - Use a **tripartite lens**: (a) *Phenomenology* – what we observe (teacher outputs, student behaviors).  
   - (b) *Mechanism* – the underlying RL dynamics (policy gradients, value estimates).  
   - (c) *Recipe* – concrete algorithmic steps (loss functions, sampling strategies).

**3️⃣ Step‑by‑Step Reasoning**  
   1. Describe how scaling alone increases capacity but not necessarily novel behaviors.  
   2. Explain that on‑policy distillation forces the student to *match the teacher’s policy distribution*, preserving nuanced knowledge.  
   3. Detail the loss: KL divergence + reward shaping, highlighting how it injects new information beyond parameters.  
   4. Illustrate with a toy example (e.g., dialogue task) showing emergent strategies.

**4️⃣ Common Traps to Avoid**  
   - Confusing *knowledge transfer* with *parameter copying*.  
   - Over‑emphasizing scaling metrics (params, FLOPs).  
   - Ignoring the *policy mismatch* that can arise if student diverges from teacher distribution.  

**5️⃣ Sanity‑Check & Communicate**  
   - Re‑state: “New knowledge” emerges when the student learns **policy nuances** the teacher encodes, not just weight magnitudes.  
   - Use a concise bullet list to recap Phenomenology → Mechanism → Recipe.  
   - End with a quick sanity question: *Does the student exhibit behaviors unseen in the raw data?* If yes, new knowledge is captured.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
