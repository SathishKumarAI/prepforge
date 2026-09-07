---
qid: ing_96260dbfed__faang__local
question: 'Explain: How do you evaluate a code-editing model before shipping it? Design
  the offline and online eval story for tab or agent edits.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 498
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:33:10-05:00'
sources: []
---

**Clarify**  
We need to assess a *code‑editing* model (e.g., Tab AI or an editor agent) before release.  
Key questions:  

1. What are the target user personas?  
2. Which programming languages & IDEs will it support?  
3. How do we define “good” edits – correctness, safety, style, performance?  
4. Are there regulatory or privacy constraints on logged code?

**Approach**  
*Offline*:  
- Curate a multi‑language dataset of real commits, pull‑request diffs, and StackOverflow snippets.  
- Split into train/val/test with no leakage (e.g., by project).  
- Define metrics: *Edit Accuracy* (did the model produce the ground‑truth diff?), *Functional Pass Rate* (unit tests run), *Style Compliance* (linters), and *Runtime Impact* (compile time, memory).

*Online*:  
- A/B test in a sandboxed IDE extension.  
- Capture user interaction logs: acceptance rate, edit length, undo frequency.  
- Run safety checks: static analysis for introduced vulnerabilities, license‑compliance scans.

**Depth**  
Offline evaluation uses *BLEU/ROUGE* for diff similarity, but we prioritize *Functional Pass Rate*: run the edited code against a hidden test suite; 95 %+ pass → “good”.  
We also compute *Latent Semantic Distance* to detect hallucinations.  
Complexity: O(n) per file for static checks; unit tests add O(m·t).  

Online, we measure *Conversion Rate*: proportion of suggested edits accepted vs rejected.  
We use a Bayesian A/B framework to estimate confidence intervals quickly.

**Edge Cases**  
- Non‑deterministic code (e.g., random seeds) can make test passes flaky.  
- Privacy: ensure no user source is stored beyond hashed IDs.  
- Edge language features (meta‑programming, macros) may break static analysis.

**Optimize & Communicate**  
Post‑release, continuously monitor *Edit Success Ratio* and rollback if it dips below 90 %.  
Explain to stakeholders that offline metrics capture correctness, while online signals capture usability and safety.  
Iterate on the model by retraining with failure cases flagged in production logs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
