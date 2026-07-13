---
qid: q012
question: "What is the self-attention mechanism in transformers?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd explain self-attention as the mechanism that lets each token weigh the relevance of every other token in the sequence. Each token is projected into query, key, and value vectors; we score a token's query against all keys, softmax those scores into weights, and take a weighted sum of the values. The result is a context-aware representation where meaning depends on surrounding words, so "bank" near "river" differs from "bank" near "money." Multi-head attention runs this in parallel subspaces to capture different relationship types, and it's fully parallelizable, which is why transformers train faster than RNNs.

To show **Dive Deep** I'd tie it to a real cost decision. Attention is O(n^2) in sequence length, so on a document-processing pipeline, naively feeding 30K-token inputs was blowing up latency and Bedrock cost. Understanding that quadratic scaling, I chunked and retrieved only relevant passages instead of stuffing full documents, cutting token spend roughly 60% with no quality loss.

The trade-off I'd name explicitly: longer context captures more but costs quadratically, so context length is an engineering budget, not a free lever.

A bar-raiser listens for whether I grasp the mechanism precisely, query-key-value weighting, and translate the quadratic cost into a concrete design choice with measured savings, rather than reciting the formula.
