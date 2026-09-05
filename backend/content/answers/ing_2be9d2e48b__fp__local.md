---
qid: ing_2be9d2e48b__fp__local
question: Why did SigLIP's sigmoid loss displace CLIP's softmax contrastive loss as
  the default vision encoder pretraining?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 427
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:38:04-05:00'
sources: []
---

**Why SigLIP’s sigmoid loss supplanted CLIP’s softmax contrastive loss**

The core problem is *matching two high‑dimensional manifolds* (image and text embeddings) so that correct pairs lie close while all others stay apart. In a cross‑entropy setting, each image must rank its true caption above every other caption in the batch. The gradient scales with the **softmax denominator**, which grows exponentially with batch size; as batches get larger, the loss saturates and gradients vanish for hard negatives. This is an *optimization bottleneck*: the encoder learns to pull a few easy negatives away but can’t efficiently push the vast majority of negatives toward the decision boundary.

The sigmoid contrastive objective treats each pair independently:  
\[
L = \sum_{i,j} \log(1+\exp(-y_{ij}\, s_{ij})) ,
\]
where \(y_{ij}\in\{-1,+1\}\). Each negative contributes a bounded penalty regardless of batch size. This aligns with the **Information‑Theoretic view** that we want to maximize mutual information between modalities; the sigmoid loss directly estimates pairwise mutual information, whereas softmax implicitly forces a *partition* over all negatives.

A non‑obvious insight: the sigmoid loss induces an implicit *margin* that grows with similarity. Hard positives receive large gradients because their similarity is low, encouraging the encoder to explore the embedding space rather than collapsing it into a single mode. The softmax, by contrast, tends to “over‑compress” embeddings early, making fine‑grained distinctions harder later.

Thus, SigLIP’s sigmoid loss solves the scalability and gradient‑vanishing issues of CLIP’s softmax while providing a principled information‑theoretic objective, leading it to become the de facto pretraining choice for vision encoders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
