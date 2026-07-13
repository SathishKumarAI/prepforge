---
qid: q021
question: "Why are Convolutional Neural Networks (CNNs) well-suited for images?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd explain that CNNs exploit the structure of images through three properties. Local connectivity: filters look at small patches, matching how visual features are local. Parameter sharing: the same filter slides across the whole image, so a feature detector learned in one region works everywhere, drastically cutting parameters versus a dense net. And translation invariance with pooling: an object is recognized regardless of position. Stacked layers build a hierarchy, edges, then textures, then parts, then objects.

To show **Dive Deep** and **Frugality** I'd anchor it in a defect-detection model I owned. A fully connected net on raw pixels would have had orders of magnitude more parameters, overfit our limited labeled data, and been slow. A CNN with transfer learning from a pretrained backbone hit 95% detection accuracy on a few thousand images and ran cheaply on CPU inference, avoiding GPU endpoint cost.

The trade-off I'd name: CNNs assume spatial locality, which is great for images but is why vision transformers, needing more data, now compete; and deeper nets cost more inference latency, so I balanced depth against a real throughput target. On AWS I'd train with SageMaker and serve via a right-sized endpoint.

A bar-raiser listens for whether I explain the inductive biases precisely, parameter sharing and locality, and tie them to concrete wins in data efficiency, accuracy, and cost.
