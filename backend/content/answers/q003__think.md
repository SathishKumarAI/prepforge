---
qid: q003
question: "Explain the difference between supervised, unsupervised, and reinforcement learning."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Assume they want the defining distinction plus one example each, not a deep math treatment. Say so: "I'll separate them by *what signal the model learns from*."
2. **Mental model.** Anchor on the learning signal: **labels** (supervised), **no labels / find structure** (unsupervised), **reward feedback from interaction** (RL). That one axis organizes everything.
3. **Reason step by step.** Supervised = labeled input→output pairs; goal is to map to known targets (spam classification, price regression). Unsupervised = unlabeled data; goal is hidden structure (clustering, PCA dimensionality reduction). RL = an agent acts in an environment and gets rewards/penalties, optimizing *cumulative* reward over time (AlphaGo, robotics).
4. **Traps to avoid.** Don't conflate RL with supervised — RL has no fixed labeled dataset, it learns from delayed trial-and-error signals. Don't call clustering "supervised because you pick k." And avoid saying unsupervised needs a human to label examples.
5. **Sanity-check + delivery.** Verify each example maps cleanly to its signal type; if one is ambiguous, you mislabeled it. Deliver the crisp contrast: supervised needs labels, unsupervised finds patterns without them, RL learns from reward feedback rather than a static dataset.
