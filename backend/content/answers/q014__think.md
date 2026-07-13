---
qid: q014
question: "What is Retrieval-Augmented Generation (RAG)?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Assume they want the pipeline and the *why*, not just an acronym expansion. Signal you'll walk the four stages then cover benefits and challenges.
2. **Mental model.** RAG = "open-book exam" for an LLM: instead of answering only from memorized weights, it first **retrieves** relevant documents and answers grounded in them.
3. **Reason step by step.** Walk the pipeline: (1) **Index** — chunk documents, embed into vectors, store in a **vector database**. (2) **Retrieve** — embed the query, fetch the most **semantically similar** chunks (cosine similarity / ANN search). (3) **Augment** — insert those chunks into the prompt as context. (4) **Generate** — the LLM answers from that context. Then state the payoff: reduces **hallucination**, enables source citations, keeps knowledge current without retraining, and unlocks private/domain data.
4. **Traps to avoid.** Don't confuse RAG with pruning, prompt compression, or a reward model — those are distractors. Don't oversell it: retrieval quality, chunking strategy, and context-window limits can all break it, and the model may ignore retrieved evidence.
5. **Sanity-check + delivery.** Confirm your description shows retrieval happening *before* generation and feeding the prompt. Deliver: "combining external document retrieval with LLM generation to produce grounded, up-to-date answers."
