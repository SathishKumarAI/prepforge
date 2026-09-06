---
qid: ing_1367b018f1__think__local
question: 'Explain: 14.1.4. Exercises ¶ — 14.1. Image Augmentation \u2014 Dive into
  Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 548
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:00:28-05:00'
sources: []
---

**1️⃣ Clarify the request & set assumptions**  
- The user wants an explanation of *“Exercise ¶ — 14.1. Image Augmentation”* from the Dive into Deep Learning (DiDL) 1.0.3 docs.  
- Assume they have read the chapter but are stuck on what each exercise asks and how to solve it.  
- We’ll explain the goal, expected outputs, and give a concise strategy for tackling the code.

**2️⃣ Mental model / framework**  
Use the *“Goal → Tools → Action → Validate”* loop:  
1. **Goal** – What the exercise wants you to achieve (e.g., apply augmentations).  
2. **Tools** – Which DiDL functions/blocks are relevant (`Augmentation`, `RandomCrop`, etc.).  
3. **Action** – How to chain them in a Jupyter cell.  
4. **Validate** – Check the result with visual inspection or shape checks.

**3️⃣ Step‑by‑step reasoning toward an answer**  

| Step | What to say |
|------|-------------|
|1|Summarize the exercise: “Create an augmentation pipeline that randomly flips, rotates, and crops images.” |
|2|List the DiDL blocks needed (`RandomFlip`, `RandomRotation`, `RandomCrop`). |
|3|Show a minimal code snippet building the pipeline:  
```python
aug = nn.Sequential(
    nn.RandomFlip(),
    nn.RandomRotation(15),
    nn.RandomCrop((224,224))
)
```
|
|4|Explain how to apply it to a dataset (`train_ds.map(lambda x,y: (aug(x), y))`). |
|5|Describe verification: plot a few augmented samples or assert shape `(224,224,3)`. |

**4️⃣ Common traps & wrong turns**  
- Forgetting that DiDL’s `RandomCrop` needs image size arguments.  
- Mixing up the order of operations (e.g., cropping before flipping can lead to asymmetric results).  
- Not converting the dataset to batches before augmentation.  
- Assuming augmentations are applied during training only; they must be part of the data pipeline.

**5️⃣ Sanity‑check & communicate**  
- Double‑check that the code runs without import errors (`import deepxde as dde`).  
- Verify that output shapes match expectations.  
- If you can, run a quick visual preview: `plot(aug(sample))`.  

Wrap up with a short “next step” suggestion: try adding color jitter or Gaussian noise to deepen understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
