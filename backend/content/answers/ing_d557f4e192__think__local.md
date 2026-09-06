---
qid: ing_d557f4e192__think__local
question: 'Explain: Transfer Learning in Keras with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 500
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:01:12-05:00'
sources: []
---

We should outline numbered steps, mention clarifications, mental model, reasoning, traps, sanity-check. Use 150-220 words.**1️⃣ Clarify the scope and assumptions**  
   - *Assume* the reader knows basic Keras/TensorFlow syntax and has a CV dataset (e.g., images).  
   - *Clarify* that we’re focusing on **pre‑trained image models** (ResNet, VGG, EfficientNet) and fine‑tuning for a new task.  
   - *Assume* the user is comfortable with `tf.keras.applications` and the Functional API.

**2️⃣ Adopt a mental model: “Freeze‑then‑Adapt”**  
   1. Load a pre‑trained backbone **without its top classifier** (`include_top=False`).  
   2. Freeze all convolutional layers (or a subset).  
   3. Attach new dense blocks matching the target classes.  
   4. Compile and train only the added layers first.  
   5. Optionally unfreeze deeper layers and continue fine‑tuning with a smaller learning rate.

**3️⃣ Step‑by‑step reasoning**  
   - *Why freeze?* Pre‑trained weights capture generic visual features; freezing prevents catastrophic forgetting.  
   - *How to choose layers to unfreeze?* Use domain similarity or a validation loss plateau as a cue.  
   - *Learning rate schedule:* Start with `1e-3` for new layers, then drop to `1e-4`/`1e-5` when fine‑tuning.

**4️⃣ Common pitfalls to avoid**  
   - Forgetting to set `model.trainable = False` before adding new layers.  
   - Using the wrong optimizer (e.g., Adam without weight decay) for fine‑tuning large models.  
   - Over‑fitting on small datasets; use data augmentation or early stopping.

**5️⃣ Sanity‑check & communicate**  
   - Print layer names and trainable flags to verify freezing.  
   - Plot training/validation loss curves after each phase.  
   - Summarize the workflow: “Load, freeze, attach, train, optionally unfreeze, fine‑tune.” This verbal loop helps solidify the process for future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
