---
qid: q021
question: "Why are Convolutional Neural Networks (CNNs) well-suited for images?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume we mean 2D grid images and contrast CNNs with fully-connected nets. Confirm we care about *why* the inductive bias fits images, not just architecture recitation.

**Approach** — I'll tie three properties of images to three CNN mechanisms: locality, translation, and hierarchy.

**Depth** — Images have *local structure*: nearby pixels correlate. Convolution applies small learnable kernels over local receptive fields, so it models edges and textures cheaply. *Parameter sharing*: the same kernel slides across the image, giving translation equivariance — a cat is a cat wherever it appears — and cutting parameters from millions (dense) to thousands. *Hierarchy*: stacked conv + pooling layers compose low-level edges into parts into objects, matching the compositional nature of scenes. Pooling adds local translation invariance and shrinks spatial dimensions. A dense net on a 224x224x3 image needs ~150K weights per neuron and ignores spatial layout entirely.

**Edge cases** — Rotation/scale aren't handled natively (need augmentation); very small datasets overfit; global relationships favor attention/ViTs.

**Optimize & communicate** — Mention residual connections for depth, batch norm for stability, and that ViTs now rival CNNs with enough data. I'd narrate: property of data, mechanism that exploits it, benefit.
