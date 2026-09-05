---
qid: ing_90b179921a__eli5__local
question: 'Explain: 14.1. Image Augmentation ¶ Colab [pytorch] Open the notebook in
  Colab Colab [mxnet] Open the notebook in Colab Colab [jax] Open the notebook in
  Colab Colab [tensorflow] Open the notebook in Colab SageMaker Studio Lab Open the
  notebook in SageMaker Studio Lab'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 216
output_tokens: 201
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:26:20-05:00'
sources: []
---

Think of a photo‑shoot where you want your model to learn that an object looks the same no matter how it’s presented—like a cat in different lighting or from slightly different angles. **Image augmentation** is like giving that cat a set of fun “make‑over” tools: rotate its picture, flip it horizontally, zoom in or out, tweak colors, or add a bit of blur. Each tool creates a new version of the same photo, so the model sees many variations during training.

In practice you run a notebook (Colab, SageMaker Studio Lab, etc.) that has ready‑made code for these tools in PyTorch, MXNet, JAX, or TensorFlow. You just open the notebook, pick the library you like, and start “mixing” images—just as a photographer would experiment with lighting and angles to capture the best shot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
