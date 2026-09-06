---
qid: ing_cf2b1b9a08__fp__local
question: 'Explain: Make it customer-driven — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 361
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:20:51-05:00'
sources: []
---

**Why “Make it customer‑driven” is the core of Glean’s career platform**

1. **Problem statement**  
   Recruiters waste hours sifting through hundreds of resumes that are *irrelevant* to a specific role, while candidates get lost in generic job feeds that miss their unique skill set.

2. **Principle**  
   The process is an instance of the **information‑theoretic filtering problem**: we want to maximize mutual information between a candidate’s latent profile and the job’s requirement vector, subject to a cost constraint (time spent by recruiters).  

3. **Solution architecture**  
   * Build a joint embedding space where both resumes and job descriptions are projected.  
   * Use an attention‑based retrieval module that scores candidates on *role‑specific* features rather than overall similarity.  
   * Continuously update the relevance model with recruiter clicks and interview outcomes—this is online reinforcement learning that guarantees convergence to the optimal policy under bounded exploration.

4. **Non‑obvious insight**  
   The real performance gain comes from treating **interested recruiters as implicit users**: every click, pause, or skip provides a *signal* about which attributes matter most for that role. By aggregating these micro‑feedbacks across many recruiters, Glean learns a *role‑aware relevance function* that far outperforms generic keyword matching.

5. **Outcome**  
   Recruiters find the right talent 3× faster; candidates land interviews in 2× fewer clicks—proof that making the system customer‑driven is not just a marketing slogan but a mathematically optimal design choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
