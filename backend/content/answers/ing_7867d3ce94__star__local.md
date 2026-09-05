---
qid: ing_7867d3ce94__star__local
question: 'Explain: Anthropic ML and AI Safety — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 336
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:34:53-05:00'
sources: []
---

**Situation:**  
During my senior year I worked on a campus hackathon where we built a recommendation engine for a local charity’s donation platform. The dataset was highly imbalanced, with only 3% of users making repeat donations, and the model risked amplifying biases that could hurt under‑served communities.

**Task:**  
I needed to design an algorithm that not only maximized accuracy but also adhered to emerging AI safety guidelines—ensuring fairness, transparency, and minimal hallucination in generated recommendations. The deadline was 48 hours, so any solution had to be both rapid and robust.

**Action:**  
I applied Anthropic’s approach by integrating their “Constitutional AI” framework into our pipeline: first, I crafted a set of safety principles (e.g., “Avoid reinforcing socioeconomic disparities”) as a mini‑constitution. Then, I used the Anthropic API to generate policy‑guided feedback on each model prediction, filtering out outputs that violated the constitution. To handle bias, I implemented reweighting with focal loss and used SHAP explanations to audit feature importance across demographic slices. Finally, I wrapped everything in a lightweight Flask service for quick deployment.

**Result:**  
The final model achieved a 12% lift in repeat‑donation prediction accuracy while reducing bias metrics (equal opportunity difference) from 0.27 to 0.08. We won the hackathon’s “Best Ethical AI” award, and I learned that safety principles can be operationalized at scale without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
