---
qid: ing_a8129602cf__star__local
question: 'Explain: The question at hand is what parameters — But what is a neural
  network? | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 332
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:09:12-05:00'
sources: []
---

**Situation**  
During my internship at a fintech startup we were tasked with detecting fraudulent transactions in real‑time. The existing rule‑based system was flagging too many false positives and missing subtle fraud patterns.

**Task**  
I needed to design an automated model that could learn complex, non‑linear relationships between transaction features (amount, location, device ID, time of day) and fraud labels, reducing false positives by at least 30% while maintaining high recall.

**Action**  
I chose a feedforward neural network—a stack of fully connected layers—because it excels at capturing interactions among many continuous variables. Using Python and TensorFlow, I built a 4‑layer architecture: input → 128 ReLU units → 64 ReLU units → 32 sigmoid units → output (binary). I applied dropout (0.2) to prevent overfitting, batch normalization for stable gradients, and Adam optimizer with an initial learning rate of 1e-3. Training data were balanced via SMOTE, and I used early stopping on validation loss. After tuning hyperparameters, the model achieved a precision‑recall balance that surpassed our target.

**Result**  
Deploying the neural network cut false positives from 12% to 8%, a 33% reduction, while recall improved from 85% to 92%. The project taught me how the architecture and activation functions of a neural network translate raw features into powerful predictive patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
