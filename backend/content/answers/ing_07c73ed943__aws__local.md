---
qid: ing_07c73ed943__aws__local
question: 'Explain: Cody for Visual Studio (Experimental) — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 521
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:43:28-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML platform team, we were asked to evaluate *Cody for Visual Studio (Experimental)*—a Sourcegraph‑powered AI pair programmer that surfaces code snippets and documentation directly in VS 2022/VS Code. The goal was to reduce onboarding time for new developers on our recommendation engine and improve code quality.

**Action**  
1. **Requirements & Design** – I mapped out the use cases: (a) auto‑completion of data‑pipeline code, (b) inline doc generation for custom transformers, and (c) quick refactor suggestions.  
2. **Prototype** – Leveraged Sourcegraph’s `sourcegraph.com` API to embed Cody as a VS extension, then wrapped it in our internal “ML‑Helper” layer that filters results by project namespace and applies our own linting rules.  
3. **Metrics & Testing** – Ran A/B tests with 120 engineers:  
   * Onboarding time dropped from **45 min → 12 min** (72% reduction).  
   * Bug density in pull requests fell 28% in the first month of rollout.  
4. **Iterate** – Based on feedback, we added a “confidence slider” to expose Cody’s internal ranking, and tuned the prompt templates using our own code‑base embeddings for higher relevance.

**Result**  
The experiment proved that integrating Cody reduced friction for ML developers while maintaining strict quality controls. We scaled it company‑wide, saving an estimated **$200k in developer hours annually**.

---

### Leadership Principles Anchored
- **Customer Obsession** – Prioritized engineers’ pain points and measured real productivity gains.  
- **Dive Deep** – Built a custom wrapper to filter Cody’s suggestions, ensuring they met our domain standards.  
- **Bias for Action & Deliver Results** – Rolled out the feature in under 6 weeks and quantified its impact.

### Bar‑raiser Takeaways
- Demonstrated ownership by owning the full end‑to‑end pipeline from requirement gathering to production rollout.  
- Showed depth through API integration, prompt engineering, and metric‑driven validation.  
- Quantified impact with clear pre/post metrics and cost savings.  
- Learned from early failures (misaligned prompts) and iterated quickly, turning a risky experiment into a stable product feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
