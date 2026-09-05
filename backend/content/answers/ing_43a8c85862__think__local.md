---
qid: ing_43a8c85862__think__local
question: 'Explain: Loss function: reverse KL — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 506
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:04:37-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   • Identify what “reverse KL” and “on‑policy distillation” mean in this context (e.g., teacher–student policy learning).  
   • Assume we’re dealing with probabilistic policies (softmax outputs) and that the student is updated on samples drawn from its own distribution.  

**2. Adopt a mental model**  
   • Think of KL divergence as an expectation over one distribution of the log‑ratio between two distributions.  
   • For “reverse” KL, flip the roles: \(D_{\text{KL}}(P\|Q) = \mathbb{E}_{P}[\log P/Q]\).  

**3. Step‑by‑step reasoning**  
   1. Write down the standard KL loss used in distillation: \(L = D_{\text{KL}}(\pi_{\text{teacher}}\|\pi_{\text{student}})\).  
   2. Reverse it to get \(L_{\text{rev}} = D_{\text{KL}}(\pi_{\text{student}}\|\pi_{\text{teacher}}) = \mathbb{E}_{\pi_{\text{student}}}[\log (\pi_{\text{student}}/\pi_{\text{teacher}})]\).  
   3. Explain why sampling from the student (on‑policy) is natural for this expectation.  
   4. Note how gradients flow only through the student’s logits, encouraging it to match the teacher where it already places probability mass.  

**4. Common pitfalls**  
   • Confusing “reverse KL” with “symmetrized KL”.  
   • Forgetting that on‑policy sampling means the expectation is taken over the student’s distribution, not the teacher’s.  
   • Assuming this loss will always improve exploration; in fact it can be mode‑seeking.

**5. Sanity check & verbalize**  
   • Verify dimensions: KL is scalar, gradients match policy parameters.  
   • Explain intuitively: by weighting errors according to where the student already thinks the action is likely, we encourage “safe” imitation rather than forcing rare teacher actions onto the student.  
   • Summarize the trade‑off: reverse KL + on‑policy distillation reduces variance but may miss diverse teacher behaviors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
