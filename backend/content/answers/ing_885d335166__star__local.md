---
qid: ing_885d335166__star__local
question: Compare L1 and L2 regularization. Why does L1 produce sparse weights?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 373
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:05:21-05:00'
sources: []
---

**Situation** – While building a customer‑segmentation model for a retail client, the initial logistic regression produced dozens of non‑zero coefficients, making interpretation impossible and inflating inference cost on edge devices.

**Task** – I needed to reduce the feature set without sacrificing predictive accuracy, so I experimented with L1 (lasso) versus L2 (ridge) regularization to see which would yield a sparser, more deployable model.

**Action** – Using scikit‑learn’s `LogisticRegression` I trained three pipelines: no penalty, L2 with cross‑validated C=0.1, and L1 with the same C value. I plotted coefficient paths across λ values to observe shrinkage behavior. For L1, the loss function adds an ℓ₁ term ‖β‖₁, which is not differentiable at zero; as λ increases, many coefficients are driven exactly to zero because the penalty outweighs their marginal gain in likelihood. In contrast, L2’s ℓ₂ term ‖β‖² penalizes large weights smoothly, so coefficients shrink toward zero but rarely reach it.

**Result** – The L1‑regularized model dropped 68% of features (from 120 to 42) while maintaining AUC = 0.82 versus 0.81 for ridge and 0.79 without regularization. Deployment on the mobile app required only a fraction of the memory, cutting inference time by 35%. I learned that L1’s sparsity stems from its piecewise linear penalty that forces zero exactly, making it ideal when feature interpretability and model size are critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
