---
qid: q012
question: "What is the self-attention mechanism in transformers?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** While building a document-classification model, my team was stuck on an LSTM that kept losing context in long legal contracts, misclassifying clauses that depended on wording 500 tokens earlier.

**Task** I was asked to move us to a transformer architecture and, in a design review, explain why self-attention would fix the long-range problem.

**Action** I explained self-attention as the mechanism that lets each token look at every other token in the sequence and weigh how relevant they are. Concretely, each token produces a query, key, and value vector; we score a token's query against all keys, softmax those scores into attention weights, and take a weighted sum of the values. That means a clause can directly attend to a defined term 500 tokens back in one step, unlike an LSTM's sequential passing. I also covered multi-head attention, which runs several of these in parallel to capture different relationships.

**Result** The transformer lifted clause-classification F1 from 0.79 to 0.92 and handled long contracts without degradation. The insight that landed: self-attention gives every token direct, weighted access to the whole sequence.
