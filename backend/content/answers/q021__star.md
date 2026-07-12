---
qid: q021
question: "Why are Convolutional Neural Networks (CNNs) well-suited for images?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** On a retail team I inherited a defect-detection model that used a plain fully connected network on 224x224 product photos. It had roughly 40 million parameters, overfit badly, and stalled at 71% accuracy on the validation set.

**Task** I needed to get us above 90% without collecting a huge new dataset, and explain to the team why the architecture, not the data, was the real bottleneck.

**Action** I rebuilt the model as a CNN and walked the team through exactly why it fits images. Convolutional filters share weights across the image, so we exploit spatial locality and get translation invariance instead of learning every pixel position separately. I stacked conv-plus-pooling blocks so early layers caught edges and later layers caught whole defect shapes, and used ReLU and batch norm. Parameters dropped to about 3 million.

**Result** Validation accuracy jumped to 93.4% and training time per epoch fell by half. The lesson that stuck with me: the inductive bias of weight sharing and locality is what makes CNNs data-efficient on images.
