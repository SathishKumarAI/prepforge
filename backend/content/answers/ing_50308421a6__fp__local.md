---
qid: ing_50308421a6__fp__local
question: Edit rate is the obvious measure of clinician trust. What does it hide,
  and what would you instrument instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 544
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:55:51-05:00'
sources: []
---

**Why “edit rate” looks trustworthy yet is deceptive**

1. **Fundamental problem it tries to solve**  
   Clinicians edit AI‑suggested orders because they *believe* the system misjudges patient risk. The edit rate is thus an empirical proxy for *clinician trust*: fewer edits → higher trust.

2. **Why it fails**  
   - **Confounding by workflow constraints**: A clinician may edit out of habit or institutional policy, not because the suggestion was wrong.  
   - **Selective exposure**: Users who distrust the AI are more likely to skip it entirely; their “no‑edit” behavior is invisible.  
   - **Signal dilution**: Minor edits (e.g., rounding a dose) inflate the rate without reflecting substantive mistrust.

3. **Deeper principle—information gain vs. action cost**  
   Trust should be measured by *expected utility* gained from acting on the AI, not merely whether an action was altered. This aligns with Bayesian decision theory: we care about the posterior probability that a suggestion is correct given the clinician’s expertise and contextual cues.

4. **What to instrument instead**

| Metric | Rationale | How to capture |
|--------|-----------|----------------|
| **Decision‑confidence score** (self‑rated or inferred from keystroke latency) | Reflects *internal belief* in the AI’s correctness, not just an edit. | Prompt brief confidence rating post‑decision; model keystroke speed as proxy. |
| **Outcome‑aligned error rate** | Measures *actual harm prevented/caused*, the ultimate trust yardstick. | Track patient outcomes (e.g., adverse events) linked to AI‑generated orders vs. clinician‑edited ones. |
| **Contextual mismatch index** | Quantifies how often the AI’s assumptions conflict with situational data (lab trends, imaging). | Compare model inputs against real‑time clinical variables; flag high‑mismatch cases. |

**Non‑obvious insight:**  
A *low* edit rate can paradoxically indicate low trust if clinicians are over‑reliant on a well‑performing system and never question it. The true indicator is how often the AI’s recommendation aligns with *clinician‑derived uncertainty*, not just edits. By instrumenting confidence, outcome impact, and contextual mismatch, we capture the nuanced geometry of human–AI collaboration rather than a blunt edit count.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
