---
qid: ing_64cb55e6db__fp__local
question: 'Explain: Your eval suite is green, ship velocity is good, and users are
  complaining that quality got worse. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 417
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:39:13-05:00'
sources: []
---

**Why the paradox arises**

Your metrics (green tests, high throughput) measure *what* you’re doing—code passes and requests per second—but not *how well* it satisfies users. The underlying problem is that the evaluation suite was built on an **over‑simplified optimization objective**: maximize accuracy on a narrow validation set while ignoring distribution shift, latency variability, or user‑perceived quality.  

1. **Define the true objective**  
   - Treat “user satisfaction” as a *latent variable* \(U\).  
   - Your current loss \(L_{\text{val}}\) is a proxy for \(E[U|X_{\text{val}}]\), but the real expectation is \(E[U|X_{\text{prod}}]\).  

2. **Diagnose distribution shift**  
   - Compute KL‑divergence between validation and production feature distributions.  
   - Inspect per‑feature drift; a single feature (e.g., language model temperature) can drastically alter perceived quality.

3. **Re‑evaluate the test suite**  
   - Augment with *user‑centric* metrics: perplexity on live queries, error rate on edge cases, or A/B‑tested human ratings.  
   - Use *adversarial examples* to stress‑test robustness.

4. **Iterative fine‑tuning**  
   - Introduce a weighted loss \(L = \alpha L_{\text{val}} + (1-\alpha)L_{\text{user}}\).  
   - Continuously update \(\alpha\) via online bandit feedback from real users.

**Non‑obvious insight:** A green suite guarantees *internal consistency*, not *external validity*. The hidden assumption—validation data represent production—is rarely true. Restoring that link requires treating the evaluation set as a **probabilistic model of user intent**, not merely a checklist.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
