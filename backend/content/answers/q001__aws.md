---
qid: q001
question: "What is the difference between Artificial Intelligence, Machine Learning, and Deep Learning?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd open by nesting the concepts: AI is the broad goal of machines performing tasks that require intelligence; Machine Learning is the subset that learns patterns from data rather than hard-coded rules; Deep Learning is the ML subset using multi-layer neural networks that learn features automatically. I keep the definition crisp, then immediately ground it in a decision I owned to show **Dive Deep**.

For example, on a fraud-scoring project I chose classical gradient-boosted trees over a deep net because we had 200K tabular rows, needed sub-50ms inference on Lambda, and interpretability for auditors. Deep learning would have added latency and cost for no accuracy gain. That trade-off cut inference cost roughly 40% versus a GPU-backed SageMaker endpoint while holding AUC at 0.94.

I'd note when deep learning does win: high-dimensional unstructured data like images or text, where manual feature engineering breaks down. Naming AWS context, I'd mention SageMaker for training and Bedrock for foundation models.

The point I want the bar-raiser to hear is that I don't reach for the fanciest technique. **Insist on the Highest Standards** means matching the model class to the data, latency, and cost constraints, and being able to quantify why.
