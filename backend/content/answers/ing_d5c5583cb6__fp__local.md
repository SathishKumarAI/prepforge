---
qid: ing_d5c5583cb6__fp__local
question: You join as a staff engineer. The team ships prompt changes on vibes, has
  no evals, and as far as they can tell is shipping fine. What do you do in your first
  90 days?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 461
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:34:47-05:00'
sources: []
---

**First‑90‑Day Plan for a Prompt‑Engineering Team**

1. **Diagnose the Problem Space**  
   *Model the pipeline as an online learning loop:* input → prompt → LLM → output → user feedback.  
   The team ships “vibes” changes without evaluation, so we lack a performance signal.  
   Without a loss function, the system can drift arbitrarily—this is a classic *exploration‑exploitation* dilemma.

2. **Establish Minimal Viable Evaluation (MVE)**  
   - Define a small set of *semantic metrics* (e.g., BLEU for style, ROUGE for content overlap).  
   - Deploy an automated A/B tester that logs prompt‑output pairs and user interactions.  
   - Treat the evaluator as a *black‑box oracle*: its output is not perfect but provides a direction.

3. **Create a Prompt‑Version Repository**  
   Use a lightweight Git‑like store where each commit = prompt version + evaluation score.  
   This turns ad‑hoc changes into reproducible experiments, enabling *counterfactual reasoning* about why a change helped or hurt.

4. **Iterative Optimization Loop**  
   - Run nightly “gradient‑free” search (e.g., Bayesian optimization) over prompt hyperparameters.  
   - Constrain changes to a *low‑dimensional manifold* (token weight, prefix length), reducing variance and making the loss landscape smoother.

5. **Non‑Obvious Insight: Leverage User Feedback as an Implicit Reward**  
   Most teams ignore subtle signals like click‑through or dwell time. Treat these as a *bandit reward*; even noisy, they guide the system toward user‑centric objectives without needing explicit labels.

6. **Communicate & Iterate**  
   Share dashboards weekly. If metrics plateau, revisit the loss definition—perhaps we need to incorporate diversity or safety constraints.

By turning unstructured prompt tweaks into a principled evaluation–optimization cycle, you align engineering practice with information‑theoretic guarantees: every change reduces uncertainty about user preferences, and the system converges toward measurable quality improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
